"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

/* ───────── Draggable wrapper ───────── */
function Draggable({
  id,
  children,
  onMovedChange,
}: {
  id: string;
  children: ReactNode;
  onMovedChange?: (id: string, moved: boolean) => void;
}) {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  const [z, setZ] = useState(1);
  const start = useRef({ px: 0, py: 0, x: 0, y: 0 });
  const isDraggingRef = useRef(false);
  const [canDrag, setCanDrag] = useState(false);
  const key = `widget-pos-v3-${id}`;

  // Dragging is desktop-only; on mobile the widgets sit in a swipeable row.
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1280px)");
    const update = () => setCanDrag(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    try {
      // Discard previous saved positions to restore clean default layout
      localStorage.removeItem(`widget-pos-${id}`);
      localStorage.removeItem(`widget-pos-v2-${id}`);
      const saved = localStorage.getItem(key);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed && typeof parsed.x === "number" && typeof parsed.y === "number") {
          setPos(parsed);
          if (parsed.x !== 0 || parsed.y !== 0) {
            onMovedChange?.(id, true);
          }
        }
      }
    } catch {}
  }, [key, id]);

  useEffect(() => {
    const handleReset = () => {
      setPos({ x: 0, y: 0 });
      onMovedChange?.(id, false);
      try {
        localStorage.removeItem(key);
        localStorage.removeItem(`widget-pos-v2-${id}`);
        localStorage.removeItem(`widget-pos-${id}`);
      } catch {}
    };

    window.addEventListener("reset-home-widgets", handleReset);
    return () => window.removeEventListener("reset-home-widgets", handleReset);
  }, [key, id, onMovedChange]);

  const onDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.button !== 0) return;
    e.currentTarget.setPointerCapture(e.pointerId);
    start.current = { px: e.clientX, py: e.clientY, x: pos.x, y: pos.y };
    isDraggingRef.current = false;
    (window as unknown as { __wz?: number }).__wz = ((window as unknown as { __wz?: number }).__wz ?? 10) + 1;
    setZ((window as unknown as { __wz: number }).__wz);
  };

  const onMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!e.currentTarget.hasPointerCapture(e.pointerId)) return;
    const dx = e.clientX - start.current.px;
    const dy = e.clientY - start.current.py;
    if (!isDraggingRef.current && Math.hypot(dx, dy) > 3) {
      isDraggingRef.current = true;
      setDragging(true);
    }
    if (isDraggingRef.current) {
      const newX = start.current.x + dx;
      const newY = start.current.y + dy;
      setPos({ x: newX, y: newY });
      onMovedChange?.(id, newX !== 0 || newY !== 0);
    }
  };

  const onUp = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.currentTarget.hasPointerCapture(e.pointerId)) {
      try {
        e.currentTarget.releasePointerCapture(e.pointerId);
      } catch {}
    }
    if (isDraggingRef.current) {
      isDraggingRef.current = false;
      setDragging(false);
      try {
        localStorage.setItem(key, JSON.stringify(pos));
      } catch {}
    }
  };

  return (
    <div
      onPointerDown={canDrag ? onDown : undefined}
      onPointerMove={canDrag ? onMove : undefined}
      onPointerUp={canDrag ? onUp : undefined}
      onPointerCancel={canDrag ? onUp : undefined}
      onDoubleClick={(e) => {
        e.stopPropagation();
        setPos({ x: 0, y: 0 });
        onMovedChange?.(id, false);
        try {
          localStorage.removeItem(key);
          localStorage.removeItem(`widget-pos-v2-${id}`);
          localStorage.removeItem(`widget-pos-${id}`);
        } catch {}
      }}
      title={canDrag ? "Drag to move · Double-click to reset position" : undefined}
      style={
        canDrag
          ? {
              transform: `translate(${pos.x}px, ${pos.y}px) scale(${dragging ? 1.04 : 1})`,
              zIndex: z,
              touchAction: "none",
              cursor: dragging ? "grabbing" : "grab",
              transition: dragging ? "none" : "transform 0.2s ease",
              userSelect: "none",
            }
          : undefined
      }
      className="pointer-events-auto relative flex shrink-0 snap-center"
    >
      {children}
    </div>
  );
}

const solidCard =
  "relative w-[220px] overflow-hidden rounded-3xl border border-[var(--card-border)] bg-[var(--card)] p-5 text-foreground shadow-[0_16px_40px_-10px_rgba(0,0,0,0.5),0_0_24px_-4px_rgba(10,102,194,0.25)] transition-colors duration-300";
const label = "text-[10px] font-semibold uppercase tracking-[0.2em] text-foreground/50";

/* ───────── Clock ───────── */
function ClockWidget() {
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    setNow(new Date());
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  const h = now?.getHours() ?? 0;
  const m = now?.getMinutes() ?? 0;
  const s = now?.getSeconds() ?? 0;
  const hourDeg = ((h % 12) + m / 60) * 30;
  const minDeg = (m + s / 60) * 6;
  const secDeg = s * 6;

  const digital = now?.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit" }) ?? "--:--";
  const tz = now
    ? new Intl.DateTimeFormat("en-US", { timeZoneName: "short" }).formatToParts(now).find((p) => p.type === "timeZoneName")?.value
    : "";

  return (
    <div className={`${solidCard} flex flex-col items-center`}>
      <div className="mb-3 flex w-full items-center justify-between">
        <span className={label}>Clock</span>
        <span className="rounded-full bg-[#0a66c2]/20 px-2 py-0.5 text-[10px] font-medium text-[#60a5fa]">{tz}</span>
      </div>
      <svg viewBox="0 0 100 100" className="h-28 w-28" aria-label="Analog clock">
        <circle cx="50" cy="50" r="47" className="fill-foreground/[0.03] stroke-[var(--card-border)]" strokeWidth="1" />
        {Array.from({ length: 12 }).map((_, i) => (
          <line
            key={i}
            x1="50" y1="7" x2="50" y2={i % 3 === 0 ? 14 : 11}
            transform={`rotate(${i * 30} 50 50)`}
            className="stroke-foreground/60"
            strokeWidth={i % 3 === 0 ? 2 : 1}
            strokeLinecap="round"
          />
        ))}
        <line x1="50" y1="50" x2="50" y2="28" transform={`rotate(${hourDeg} 50 50)`} className="stroke-foreground" strokeWidth="3" strokeLinecap="round" />
        <line x1="50" y1="50" x2="50" y2="17" transform={`rotate(${minDeg} 50 50)`} className="stroke-foreground" strokeWidth="2" strokeLinecap="round" />
        <line x1="50" y1="56" x2="50" y2="14" transform={`rotate(${secDeg} 50 50)`} stroke="#60a5fa" strokeWidth="1" strokeLinecap="round" />
        <circle cx="50" cy="50" r="2.5" fill="#60a5fa" />
      </svg>
      <span className="mt-3 text-2xl font-semibold tabular-nums tracking-tight">{digital}</span>
      <span className="text-xs text-foreground/60">
        {now?.toLocaleDateString("en-US", { weekday: "long", month: "short", day: "numeric" })}
      </span>
    </div>
  );
}

/* ───────── Calendar ───────── */
const DAYS = ["M", "T", "W", "T", "F", "S", "S"];

function CalendarWidget() {
  const [today, setToday] = useState<Date | null>(null);
  useEffect(() => setToday(new Date()), []);

  if (!today) return <div className={`${solidCard} h-[250px]`} />;

  const y = today.getFullYear();
  const mo = today.getMonth();
  const offset = (new Date(y, mo, 1).getDay() + 6) % 7; // week starts Monday
  const total = new Date(y, mo + 1, 0).getDate();
  const cells = [...Array(offset).fill(null), ...Array.from({ length: total }, (_, i) => i + 1)];

  return (
    <div className={solidCard}>
      <div className="mb-3 flex items-end justify-between">
        <div>
          <div className={label}>{today.toLocaleDateString("en-US", { weekday: "long" })}</div>
          <div className="text-lg font-semibold leading-tight">
            {today.toLocaleDateString("en-US", { month: "long" })}
          </div>
        </div>
        <span className="bg-gradient-to-br from-[#60a5fa] to-[#0a66c2] bg-clip-text text-4xl font-bold leading-none text-transparent">
          {today.getDate()}
        </span>
      </div>
      <div className="grid grid-cols-7 gap-y-1 text-center text-[11px]">
        {DAYS.map((d, i) => (
          <span key={i} className="pb-1 font-medium text-foreground/40">{d}</span>
        ))}
        {cells.map((d, i) => (
          <span
            key={i}
            className={
              d === today.getDate()
                ? "mx-auto flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-[#60a5fa] to-[#0a66c2] font-semibold text-white shadow-[0_0_12px_rgba(96,165,250,0.6)]"
                : "mx-auto flex h-6 w-6 items-center justify-center text-foreground/75"
            }
          >
            {d ?? ""}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ───────── Weather (Open-Meteo, no API key) ───────── */
const DEFAULT_LOC = { lat: -6.2, lon: 106.8, name: "Jakarta" };

// [description, emoji, gradient classes]
const WMO: Record<number, [string, string, string]> = {
  0: ["Clear sky", "☀️", "from-[#0284c7] via-[#2563eb] to-[#f59e0b]"],
  1: ["Mostly clear", "🌤️", "from-[#0284c7] via-[#1d4ed8] to-[#38bdf8]"],
  2: ["Partly cloudy", "⛅", "from-[#0369a1] via-[#1e40af] to-[#475569]"],
  3: ["Overcast", "☁️", "from-[#1e3a8a] via-[#1e293b] to-[#0284c7]"],
  45: ["Foggy", "🌫️", "from-[#334155] via-[#1e293b] to-[#475569]"],
  48: ["Foggy", "🌫️", "from-[#334155] via-[#1e293b] to-[#475569]"],
  51: ["Light drizzle", "🌦️", "from-[#0284c7] via-[#1e40af] to-[#4338ca]"],
  53: ["Drizzle", "🌦️", "from-[#0369a1] via-[#1e3a8a] to-[#2563eb]"],
  55: ["Heavy drizzle", "🌦️", "from-[#0284c7] via-[#1d4ed8] to-[#1e1b4b]"],
  61: ["Light rain", "🌧️", "from-[#0284c7] via-[#1e40af] to-[#0f172a]"],
  63: ["Rain", "🌧️", "from-[#0369a1] via-[#1e3a8a] to-[#0f172a]"],
  65: ["Heavy rain", "🌧️", "from-[#1d4ed8] via-[#1e1b4b] to-[#0284c7]"],
  80: ["Rain showers", "🌦️", "from-[#0284c7] via-[#2563eb] to-[#1e3a8a]"],
  81: ["Rain showers", "🌧️", "from-[#0369a1] via-[#1d4ed8] to-[#0f172a]"],
  82: ["Violent showers", "⛈️", "from-[#4338ca] via-[#1e1b4b] to-[#0369a1]"],
  95: ["Thunderstorm", "⛈️", "from-[#4338ca] via-[#312e81] to-[#0f172a]"],
  96: ["Thunderstorm", "⛈️", "from-[#4c1d95] via-[#1e1b4b] to-[#0284c7]"],
  99: ["Thunderstorm", "⛈️", "from-[#4c1d95] via-[#1e1b4b] to-[#0369a1]"],
};

type Weather = { temp: number; feels: number; code: number; wind: number; humidity: number };

function WeatherWidget() {
  const [loc, setLoc] = useState(DEFAULT_LOC);
  const [w, setW] = useState<Weather | null>(null);
  const [err, setErr] = useState(false);

  useEffect(() => {
    navigator.geolocation?.getCurrentPosition(
      (p) => setLoc({ lat: p.coords.latitude, lon: p.coords.longitude, name: "Your location" }),
      () => {},
      { timeout: 5000 }
    );
  }, []);

  useEffect(() => {
    const ctrl = new AbortController();
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${loc.lat}&longitude=${loc.lon}&current=temperature_2m,apparent_temperature,relative_humidity_2m,weather_code,wind_speed_10m&timezone=auto`;
    fetch(url, { signal: ctrl.signal })
      .then((r) => r.json())
      .then((d) =>
        setW({
          temp: Math.round(d.current.temperature_2m),
          feels: Math.round(d.current.apparent_temperature),
          code: d.current.weather_code,
          wind: Math.round(d.current.wind_speed_10m),
          humidity: d.current.relative_humidity_2m,
        })
      )
      .catch((e) => e.name !== "AbortError" && setErr(true));
    return () => ctrl.abort();
  }, [loc]);

  const [desc, icon, grad] = w
    ? WMO[w.code] ?? ["Unknown", "🌡️", "from-[#0284c7] via-[#1d4ed8] to-[#0f172a]"]
    : ["", "", "from-[#0284c7] via-[#1d4ed8] to-[#0f172a]"];

  return (
    <div
      className={`relative w-[220px] overflow-hidden rounded-3xl border border-white/20 bg-gradient-to-br ${grad} p-5 text-white shadow-[0_16px_40px_-10px_rgba(2,132,199,0.5),0_0_28px_-4px_rgba(56,189,248,0.35)] transition-all duration-500`}
    >
      {/* Ambient specular luminous glows */}
      <div className="pointer-events-none absolute -top-10 -right-10 h-28 w-28 rounded-full bg-white/20 blur-2xl" />
      <div className="pointer-events-none absolute -bottom-10 -left-10 h-24 w-24 rounded-full bg-sky-300/20 blur-xl" />

      <div className="relative z-10">
        <div className="mb-2 flex items-center justify-between">
          <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/80">Weather</span>
          <span className="truncate text-[10px] text-white/80">📍 {loc.name}</span>
        </div>
        {err ? (
          <p className="py-6 text-center text-xs text-white/80">Couldn&apos;t load weather</p>
        ) : !w ? (
          <p className="py-6 text-center text-xs text-white/80">Loading…</p>
        ) : (
          <>
            <div className="flex items-center justify-between">
              <span className="text-5xl font-light tracking-tight text-white drop-shadow-sm">{w.temp}°</span>
              <span className="text-5xl drop-shadow-md">{icon}</span>
            </div>
            <p className="mt-1 text-sm font-medium text-white drop-shadow-sm">{desc}</p>
            <p className="text-[11px] text-white/80">Feels like {w.feels}°C</p>
            <div className="mt-3 grid grid-cols-2 gap-2 text-[11px]">
              <div className="rounded-xl border border-white/20 bg-black/20 px-2 py-1.5 backdrop-blur-md shadow-inner">
                <div className="text-white/70">Humidity</div>
                <div className="font-semibold text-white">💧 {w.humidity}%</div>
              </div>
              <div className="rounded-xl border border-white/20 bg-black/20 px-2 py-1.5 backdrop-blur-md shadow-inner">
                <div className="text-white/70">Wind</div>
                <div className="font-semibold text-white">💨 {w.wind} km/h</div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default function HomeWidgets() {
  const [movedWidgets, setMovedWidgets] = useState<Record<string, boolean>>({});
  const hasAnyMoved = Object.values(movedWidgets).some(Boolean);

  const handleMovedChange = (id: string, moved: boolean) => {
    setMovedWidgets((prev) => (prev[id] === moved ? prev : { ...prev, [id]: moved }));
  };

  const handleResetAll = () => {
    window.dispatchEvent(new CustomEvent("reset-home-widgets"));
    setMovedWidgets({});
    try {
      ["clock", "calendar", "weather"].forEach((id) => {
        localStorage.removeItem(`widget-pos-${id}`);
        localStorage.removeItem(`widget-pos-v2-${id}`);
        localStorage.removeItem(`widget-pos-v3-${id}`);
      });
    } catch {}
  };

  return (
    <>
      <div className="pointer-events-auto relative z-20 -mx-6 -my-5 flex w-[calc(100%+3rem)] snap-x snap-mandatory items-center justify-start gap-4 overflow-x-auto px-6 py-8 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden xl:pointer-events-none xl:absolute xl:inset-0 xl:mx-0 xl:my-0 xl:w-auto xl:snap-none xl:justify-between xl:overflow-visible xl:px-10 xl:py-0">
        <div className="contents xl:flex xl:flex-col xl:gap-4 xl:translate-y-12">
          <Draggable id="clock" onMovedChange={handleMovedChange}>
            <ClockWidget />
          </Draggable>
          <Draggable id="calendar" onMovedChange={handleMovedChange}>
            <CalendarWidget />
          </Draggable>
        </div>
        <div className="contents xl:flex xl:flex-col xl:gap-4">
          <Draggable id="weather" onMovedChange={handleMovedChange}>
            <WeatherWidget />
          </Draggable>
        </div>
      </div>

      {hasAnyMoved && (
        <button
          type="button"
          onClick={handleResetAll}
          className="pointer-events-auto fixed bottom-24 right-6 z-30 flex items-center gap-2 rounded-full border border-[var(--card-border)] bg-[var(--card)]/90 px-3.5 py-2 text-xs font-medium text-foreground shadow-lg backdrop-blur-md transition-all hover:bg-[var(--card)] hover:scale-105 active:scale-95 animate-in fade-in zoom-in-95 duration-200"
          title="Reset all widgets to default positions"
        >
          <svg
            className="h-3.5 w-3.5 text-[#60a5fa]"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
            <path d="M3 3v5h5" />
          </svg>
          <span>Reset Position</span>
        </button>
      )}
    </>
  );
}

