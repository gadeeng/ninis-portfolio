'use client';

import React, { useState, useRef, useCallback, useEffect } from 'react';

// Types for the component
interface DockApp {
    id: string;
    name: string;
    icon: string;
}

interface MacOSDockProps {
    apps: DockApp[];
    onAppClick: (appId: string) => void;
    openApps?: string[];
    className?: string;
    tooltipPosition?: 'top' | 'bottom';
}

const DEFAULT_CONFIG = {
    baseIconSize: 48,
    maxScale: 1.45,
    effectWidth: 220
};

const getInitialPositions = (count: number, baseIconSize: number, baseSpacing: number): number[] => {
    let currentX = 0;
    const positions: number[] = [];
    for (let i = 0; i < count; i++) {
        const centerX = currentX + (baseIconSize / 2);
        currentX += baseIconSize + baseSpacing;
        positions.push(centerX);
    }
    return positions;
};

const MacOSDock: React.FC<MacOSDockProps> = ({
    apps,
    onAppClick,
    openApps = [],
    className = '',
    tooltipPosition = 'top'
}) => {
    // Always start with DEFAULT_CONFIG so SSR and initial client hydration match 100%
    const [config, setConfig] = useState(DEFAULT_CONFIG);
    const { baseIconSize, maxScale, effectWidth } = config;
    const minScale = 1.0;
    const baseSpacing = Math.max(4, baseIconSize * 0.08);

    const [mouseX, setMouseX] = useState<number | null>(null);
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const [currentScales, setCurrentScales] = useState<number[]>(() => apps.map(() => 1));
    const [currentPositions, setCurrentPositions] = useState<number[]>(() =>
        getInitialPositions(apps.length, DEFAULT_CONFIG.baseIconSize, Math.max(4, DEFAULT_CONFIG.baseIconSize * 0.08))
    );
    const dockRef = useRef<HTMLDivElement>(null);
    const iconRefs = useRef<(HTMLDivElement | null)[]>([]);
    const animationFrameRef = useRef<number | undefined>(undefined);
    const lastMouseMoveTime = useRef<number>(0);

    // Responsive size calculations based on viewport
    const getResponsiveConfig = useCallback(() => {
        if (typeof window === 'undefined') {
            return DEFAULT_CONFIG;
        }

        const smallerDimension = Math.min(window.innerWidth, window.innerHeight);

        if (smallerDimension < 480) {
            return {
                baseIconSize: Math.max(34, smallerDimension * 0.075),
                maxScale: 1.3,
                effectWidth: smallerDimension * 0.35
            };
        } else if (smallerDimension < 768) {
            return {
                baseIconSize: Math.max(38, smallerDimension * 0.06),
                maxScale: 1.35,
                effectWidth: smallerDimension * 0.3
            };
        } else if (smallerDimension < 1024) {
            return {
                baseIconSize: Math.max(42, smallerDimension * 0.05),
                maxScale: 1.4,
                effectWidth: smallerDimension * 0.25
            };
        } else {
            return DEFAULT_CONFIG;
        }
    }, []);

    // Sync responsive config on client mount and window resize
    useEffect(() => {
        setConfig(getResponsiveConfig());

        const handleResize = () => {
            setConfig(getResponsiveConfig());
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [getResponsiveConfig]);

    // Authentic macOS cosine-based magnification algorithm
    const calculateTargetMagnification = useCallback((mousePosition: number | null) => {
        if (mousePosition === null) {
            return apps.map(() => minScale);
        }

        return apps.map((_, index) => {
            const normalIconCenter = (index * (baseIconSize + baseSpacing)) + (baseIconSize / 2);
            const minX = mousePosition - (effectWidth / 2);
            const maxX = mousePosition + (effectWidth / 2);

            if (normalIconCenter < minX || normalIconCenter > maxX) {
                return minScale;
            }

            const theta = ((normalIconCenter - minX) / effectWidth) * 2 * Math.PI;
            const cappedTheta = Math.min(Math.max(theta, 0), 2 * Math.PI);
            const scaleFactor = (1 - Math.cos(cappedTheta)) / 2;

            return minScale + (scaleFactor * (maxScale - minScale));
        });
    }, [apps, baseIconSize, baseSpacing, effectWidth, maxScale, minScale]);

    // Calculate positions based on current scales
    const calculatePositions = useCallback((scales: number[]) => {
        let currentX = 0;

        return scales.map((scale) => {
            const scaledWidth = baseIconSize * scale;
            const centerX = currentX + (scaledWidth / 2);
            currentX += scaledWidth + baseSpacing;
            return centerX;
        });
    }, [baseIconSize, baseSpacing]);

    // Initialize positions
    useEffect(() => {
        const initialScales = apps.map(() => minScale);
        const initialPositions = calculatePositions(initialScales);
        setCurrentScales(initialScales);
        setCurrentPositions(initialPositions);
    }, [apps, calculatePositions, minScale, config]);

    // Animation loop
    const animateToTarget = useCallback(() => {
        const targetScales = calculateTargetMagnification(mouseX);
        const targetPositions = calculatePositions(targetScales);
        const lerpFactor = mouseX !== null ? 0.2 : 0.12;

        setCurrentScales(prevScales => {
            return prevScales.map((currentScale, index) => {
                const diff = targetScales[index] - currentScale;
                return currentScale + (diff * lerpFactor);
            });
        });

        setCurrentPositions(prevPositions => {
            return prevPositions.map((currentPos, index) => {
                const diff = targetPositions[index] - currentPos;
                return currentPos + (diff * lerpFactor);
            });
        });

        const scalesNeedUpdate = currentScales.some((scale, index) =>
            Math.abs(scale - targetScales[index]) > 0.002
        );
        const positionsNeedUpdate = currentPositions.some((pos, index) =>
            Math.abs(pos - targetPositions[index]) > 0.1
        );

        if (scalesNeedUpdate || positionsNeedUpdate || mouseX !== null) {
            animationFrameRef.current = requestAnimationFrame(animateToTarget);
        }
    }, [mouseX, calculateTargetMagnification, calculatePositions, currentScales, currentPositions]);

    // Start/stop animation loop
    useEffect(() => {
        if (animationFrameRef.current) {
            cancelAnimationFrame(animationFrameRef.current);
        }
        animationFrameRef.current = requestAnimationFrame(animateToTarget);

        return () => {
            if (animationFrameRef.current) {
                cancelAnimationFrame(animationFrameRef.current);
            }
        };
    }, [animateToTarget]);

    // Throttled mouse movement handler
    const handleMouseMove = useCallback((e: React.MouseEvent) => {
        const now = performance.now();

        if (now - lastMouseMoveTime.current < 16) {
            return;
        }

        lastMouseMoveTime.current = now;

        if (dockRef.current) {
            const rect = dockRef.current.getBoundingClientRect();
            const padding = Math.max(8, baseIconSize * 0.12);
            const relativeX = e.clientX - rect.left - padding;
            setMouseX(relativeX);

            // Determine closest icon based on mouse position
            let bestIndex: number | null = null;
            let minDiff = Infinity;
            currentPositions.forEach((pos, idx) => {
                const diff = Math.abs(relativeX - pos);
                const halfW = (baseIconSize * (currentScales[idx] || 1)) / 2;
                if (diff <= halfW + baseSpacing && diff < minDiff) {
                    minDiff = diff;
                    bestIndex = idx;
                }
            });
            setHoveredIndex(bestIndex);
        }
    }, [baseIconSize, baseSpacing, currentPositions, currentScales]);

    const handleMouseLeave = useCallback(() => {
        setMouseX(null);
        setHoveredIndex(null);
    }, []);

    const createBounceAnimation = (element: HTMLElement) => {
        const bounceHeight = Math.max(-8, -baseIconSize * 0.15);
        element.style.transition = 'transform 0.2s ease-out';
        element.style.transform = `translateY(${bounceHeight}px)`;

        setTimeout(() => {
            element.style.transform = 'translateY(0px)';
        }, 200);
    };

    const handleAppClick = (appId: string, index: number) => {
        if (iconRefs.current[index]) {
            if (typeof window !== 'undefined' && (window as any).gsap) {
                const gsap = (window as any).gsap;
                const bounceHeight = currentScales[index] > 1.3 ? -baseIconSize * 0.2 : -baseIconSize * 0.15;

                gsap.to(iconRefs.current[index], {
                    y: bounceHeight,
                    duration: 0.2,
                    ease: 'power2.out',
                    yoyo: true,
                    repeat: 1,
                    transformOrigin: 'bottom center'
                });
            } else {
                createBounceAnimation(iconRefs.current[index]!);
            }
        }

        onAppClick(appId);
    };

    // Calculate content width
    const contentWidth = currentPositions.length > 0
        ? Math.max(...currentPositions.map((pos, index) =>
            pos + (baseIconSize * currentScales[index]) / 2
        ))
        : (apps.length * (baseIconSize + baseSpacing)) - baseSpacing;

    const padding = Math.max(8, baseIconSize * 0.12);

    return (
        <div
            ref={dockRef}
            suppressHydrationWarning
            className={`backdrop-blur-md ${className}`}
            style={{
                width: `${contentWidth + padding * 2}px`,
                background: 'var(--dock-bg, linear-gradient(180deg, rgba(20, 22, 32, 0.72), rgba(8, 9, 14, 0.82)))',
                borderRadius: `${Math.max(12, baseIconSize * 0.4)}px`,
                border: '1px solid var(--dock-border, rgba(255, 255, 255, 0.14))',
                boxShadow: `
          0 ${Math.max(4, baseIconSize * 0.1)}px ${Math.max(16, baseIconSize * 0.4)}px rgba(0, 0, 0, 0.3),
          0 ${Math.max(2, baseIconSize * 0.05)}px ${Math.max(8, baseIconSize * 0.2)}px rgba(0, 0, 0, 0.2),
          0 0 ${Math.max(18, baseIconSize * 0.6)}px rgba(10, 102, 194, 0.22),
          inset 0 1px 0 rgba(255, 255, 255, 0.15),
          inset 0 -1px 0 rgba(0, 0, 0, 0.2)
        `,
                padding: `${padding}px`
            }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            <div
                className="relative"
                style={{
                    height: `${baseIconSize}px`,
                    width: '100%'
                }}
            >
                {apps.map((app, index) => {
                    const scale = currentScales[index];
                    const position = currentPositions[index] || 0;
                    const scaledSize = baseIconSize * scale;

                    return (
                        <div
                            key={app.id}
                            suppressHydrationWarning
                            ref={(el) => { iconRefs.current[index] = el; }}
                            className="absolute cursor-pointer flex flex-col items-center justify-end"
                            aria-label={app.name}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex((prev) => (prev === index ? null : prev))}
                            onClick={() => handleAppClick(app.id, index)}
                            style={{
                                left: `${position - scaledSize / 2}px`,
                                bottom: '0px',
                                width: `${scaledSize}px`,
                                height: `${scaledSize}px`,
                                transformOrigin: 'bottom center',
                                zIndex: Math.round(scale * 10)
                            }}
                        >
                            {/* Hover Title Tooltip */}
                            <div
                                role="tooltip"
                                className={`pointer-events-none absolute left-1/2 -translate-x-1/2 whitespace-nowrap rounded-lg border border-[var(--card-border)] bg-[var(--card)] px-2.5 py-1 text-xs font-medium tracking-wide text-foreground shadow-xl shadow-black/50 backdrop-blur-md transition-all duration-150 z-50 ${
                                    tooltipPosition === 'bottom'
                                        ? 'top-[calc(100%+12px)]'
                                        : 'bottom-[calc(100%+12px)]'
                                } ${
                                    hoveredIndex === index && mouseX !== null
                                        ? 'opacity-100 scale-100'
                                        : 'opacity-0 scale-95 pointer-events-none'
                                }`}
                            >
                                {app.name}
                            </div>

                            <img
                                src={app.icon}
                                alt={app.name}
                                width={scaledSize}
                                height={scaledSize}
                                className="object-contain"
                                style={{
                                    filter: `drop-shadow(0 ${scale > 1.2 ? Math.max(2, baseIconSize * 0.05) : Math.max(1, baseIconSize * 0.03)}px ${scale > 1.2 ? Math.max(4, baseIconSize * 0.1) : Math.max(2, baseIconSize * 0.06)}px rgba(0,0,0,${0.2 + (scale - 1) * 0.15}))`
                                }}
                            />

                            {/* App Indicator Dot */}
                            {openApps.includes(app.id) && (
                                <div
                                    className="absolute"
                                    style={{
                                        bottom: `${Math.max(-2, -baseIconSize * 0.05)}px`,
                                        left: '50%',
                                        transform: 'translateX(-50%)',
                                        width: `${Math.max(3, baseIconSize * 0.06)}px`,
                                        height: `${Math.max(3, baseIconSize * 0.06)}px`,
                                        borderRadius: '50%',
                                        backgroundColor: '#52769B',
                                        boxShadow: '0 0 8px 1.5px rgba(82, 118, 155, 0.9)',
                                    }}
                                />
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default MacOSDock;   