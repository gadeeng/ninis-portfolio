"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import Dock from "@/components/Dock";
import { SECTIONS, type SectionId } from "@/lib/sections";

const BOTTOM_EDGE = 42; // Dinaikkan lebih tinggi dari tepi bawah layar (sebelumnya 24)
const TOP_EDGE = 24;

/** Material Icons paths (24x24 viewBox, filled) per section. */
const MATERIAL_ICON_PATHS: Record<SectionId, string> = {
  // Material Icon: home
  home: '<path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>',
  // Material Icon: person
  about:
    '<path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>',
  // Material Icon: work
  work:
    '<path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"/>',
  // Material Icon: science (research & experimentation)
  research:
    '<path d="M19.8 18.4L14 9.2V5h1c.55 0 1-.45 1-1s-.45-1-1-1H9c-.55 0-1 .45-1 1s.45 1 1 1h1v4.2l-5.8 9.2c-.77 1.23-.74 2.8.08 4 .82 1.2 2.18 1.8 3.72 1.8h10c1.54 0 2.9-.6 3.72-1.8.82-1.2.85-2.77.08-4z"/>',
  // Material Icon: groups
  organization:
    '<path d="M16.5 13c-1.2 0-3.07.34-4.5 1-1.43-.66-3.3-1-4.5-1C5.33 13 1 14.08 1 16.25V19h22v-2.75c0-2.17-4.33-3.25-6.5-3.25zm-9-1.5c1.38 0 2.5-1.12 2.5-2.5s-1.12-2.5-2.5-2.5S5 7.62 5 9s1.12 2.5 2.5 2.5zm9 0c1.38 0 2.5-1.12 2.5-2.5s-1.12-2.5-2.5-2.5-2.5 1.12-2.5 2.5 1.12 2.5 2.5 2.5z"/>',
  // Material Icon: email / mail
  footer:
    '<path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>',
};

function makeIcon(id: SectionId, active: boolean, isLight: boolean) {
  let tile: string;
  let iconColor: string;

  if (active) {
    // Active dock item: logo Cobalt Flux blue (#0A47B8) with white icon glyph
    tile = `<rect width="64" height="64" rx="16" fill="#0A47B8"/><rect x="0.75" y="0.75" width="62.5" height="62.5" rx="15.25" fill="none" stroke="rgba(255, 255, 255, 0.45)" stroke-width="1.5"/>`;
    iconColor = "#ffffff";
  } else if (isLight) {
    // Light theme: clean white background icon with subtle logo blue stroke
    tile = '<rect x="0.75" y="0.75" width="62.5" height="62.5" rx="15.25" fill="#ffffff" stroke="rgba(10, 71, 184, 0.16)" stroke-width="1.5"/>';
    iconColor = "#1e293b";
  } else {
    // Dark theme: deep obsidian blue background with subtle logo blue stroke
    tile = '<rect x="0.75" y="0.75" width="62.5" height="62.5" rx="15.25" fill="#0a1020" stroke="rgba(10, 71, 184, 0.3)" stroke-width="1.5"/>';
    iconColor = "#cbd5e1";
  }

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">${tile}<g transform="translate(17 17) scale(1.25)" fill="${iconColor}">${MATERIAL_ICON_PATHS[id]}</g></svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

export default function PortfolioDock() {
  const [active, setActive] = useState<SectionId>("home");
  const [isLight, setIsLight] = useState(false);
  const [offset, setOffset] = useState(0);
  const reduce = useReducedMotion();
  const wrapRef = useRef<HTMLDivElement>(null);

  // Sync theme changes with dock icons
  useEffect(() => {
    const updateTheme = () => {
      setIsLight(document.documentElement.classList.contains("light"));
    };
    updateTheme();

    const observer = new MutationObserver(() => updateTheme());
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class", "data-theme"],
    });

    return () => observer.disconnect();
  }, []);

  const apps = useMemo(
    () =>
      SECTIONS.map(({ id, label }) => ({
        id,
        name: label,
        icon: makeIcon(id, id === active, isLight),
      })),
    [active, isLight],
  );

  // The section crossing the viewport's vertical middle is the active one.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id as SectionId);
        });
      },
      { rootMargin: "-50% 0px -50% 0px", threshold: 0 },
    );
    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  // Vertical distance between the bottom slot and the top slot.
  const measure = useCallback(() => {
    const h = wrapRef.current?.offsetHeight ?? 0;
    setOffset(Math.max(0, window.innerHeight - h - (BOTTOM_EDGE + TOP_EDGE)));
  }, []);

  useEffect(() => {
    measure();
    window.addEventListener("resize", measure);
    const ro = new ResizeObserver(measure);
    if (wrapRef.current) ro.observe(wrapRef.current);
    return () => {
      window.removeEventListener("resize", measure);
      ro.disconnect();
    };
  }, [measure]);

  const atBottom = active === "home";

  const goTo = (id: string) =>
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: reduce ? "auto" : "smooth" });

  return (
    <motion.nav
      aria-label="Section navigation"
      // useReducedMotion() returns null on server, true/false on client.
      // animate.y also depends on offset which is 0 on both — but transition
      // shape can differ if reduce flips. Suppress to avoid noisy warnings.
      suppressHydrationWarning
      className="fixed left-1/2 z-50 max-w-[calc(100vw-16px)] -translate-x-1/2"
      style={{ bottom: BOTTOM_EDGE }}
      initial={false}
      animate={{ y: atBottom ? 0 : -offset }}
      transition={
        reduce ? { duration: 0 } : { type: "spring", stiffness: 140, damping: 22 }
      }
    >
      <div ref={wrapRef}>
        <Dock
          apps={apps}
          onAppClick={goTo}
          openApps={[active]}
          tooltipPosition={atBottom ? "top" : "bottom"}
        />
      </div>
    </motion.nav>
  );
}
