"use client";

import React, { useState } from "react";
import {
  Presentation,
  Microscope,
  Atom,
  Cpu,
  ArrowUpRight,
  TrendingDown,
  Layers,
  Sparkles,
  Calendar,
  CheckCircle2,
  ShieldCheck,
  Activity,
  SlidersHorizontal,
} from "lucide-react";

type ProjectCategory = "all" | "materials" | "iot" | "lab";

interface ProjectItem {
  id: string;
  categoryTag: string;
  categoryType: ProjectCategory;
  title: string;
  role: string;
  period: string;
  isFlagship?: boolean;
  metric?: {
    value: string;
    label: string;
    sublabel?: string;
  };
  highlights?: {
    stat: string;
    caption: string;
  }[];
  bullets: string[];
  tags: string[];
  icon: "thesis" | "conference" | "iot" | "lab";
  link?: {
    label: string;
    url: string;
  };
}

const PROJECTS: ProjectItem[] = [
  {
    id: "undergraduate-thesis",
    categoryTag: "Undergraduate Thesis · Flagship Research",
    categoryType: "materials",
    isFlagship: true,
    title:
      "Zinc-Rich Epoxy Coating Development for Corrosion Protection on ASTM A283 Steel",
    role: "Principal Researcher · Materials Physics",
    period: "March 2025 – March 2026",
    metric: {
      value: "73%",
      label: "Corrosion Rate Reduction",
      sublabel: "Reduced to 0.031 mm/year across corrosive industrial conditions",
    },
    highlights: [
      { stat: "5 Variations", caption: "Formulation variations (0–6 wt% biogenic CaCO₃)" },
      { stat: "8 Protocols", caption: "XRD, PSA, SEM-EDX, Tafel, Pull-off & Vickers" },
    ],
    bullets: [
      "Developed and optimized zinc-rich epoxy coating with 5 formulation variations (0–6 wt%), achieving a 73% reduction in corrosion rate down to 0.031 mm/year, substantially enhancing material durability for corrosive industrial environments.",
      "Conducted comprehensive material characterization and quality evaluation using XRD, PSA, SEM-EDX, Tafel Polarization, Pull-off adhesion, and Vickers microhardness testing, ensuring coating performance consistency and reliability.",
    ],
    tags: [
      "ASTM A283 Steel",
      "Corrosion Protection",
      "Biogenic CaCO₃",
      "XRD",
      "PSA",
      "SEM-EDX",
      "Tafel Polarization",
      "Pull-off Testing",
      "Vickers Hardness",
    ],
    icon: "thesis",
    link: {
      label: "View Published Article",
      url: "https://journal.umy.ac.id/index.php/jmpm/article/view/32277",
    },
  },
  {
    id: "icpiam-2025",
    categoryTag: "International Conference",
    categoryType: "materials",
    title:
      "6th International Conference on Physical Instrumentations and Advanced Materials (ICPIAM 2025)",
    role: "Presenter & Researcher",
    period: "Nov 2025",
    bullets: [
      "Conducted experimental data collection and structural analysis using FTIR and XRD spectroscopy.",
      "Delivered a research-based technical oral presentation to an international academic audience, effectively communicating experimental methods, data findings, and material performance insights.",
    ],
    tags: [
      "FTIR Spectroscopy",
      "XRD Analysis",
      "Structural Analysis",
      "Advanced Materials",
      "Oral Presentation",
    ],
    icon: "conference",
  },
  {
    id: "iot-monitoring-system",
    categoryTag: "Hardware & Telemetry Prototype",
    categoryType: "iot",
    title:
      "IoT-Based Temperature & Humidity Monitoring System",
    role: "Hardware & Systems Developer",
    period: "May 2025",
    bullets: [
      "Designed and assembled an IoT-based environmental monitoring system using ESP32 microcontroller and DHT22 digital sensors, enabling real-time temperature and humidity tracking via the Blynk 2.0 mobile platform.",
      "Developed circuit configuration and implemented sensor-based data acquisition, supporting continuous environmental parameter monitoring without manual recording.",
      "Built a prototype system to improve monitoring efficiency and reduce manual inspection risks in controlled environments requiring stable temperature and humidity conditions.",
    ],
    tags: [
      "ESP32",
      "DHT22 Sensor",
      "Blynk 2.0",
      "IoT Telemetry",
      "Sensor Calibration",
      "Hardware Prototyping",
    ],
    icon: "iot",
  },
  {
    id: "experimental-physics-lab",
    categoryTag: "Laboratory & Physical Testing",
    categoryType: "lab",
    title:
      "Experimental Physics — Materials & Physical Testing Research",
    role: "Experimental Researcher",
    period: "2024 – 2025",
    bullets: [
      "Performed mechanical and electrical testing, including Rockwell hardness, tensile strength, and Hall Effect measurements, collecting and analyzing experimental data to evaluate material properties.",
      "Assessed corrosion and molecular weight experiments, interpreting quantitative results to assess material durability and composition characteristics.",
      "Presented experimental findings through technical presentations, demonstrating rigorous data interpretation and scientific communication skills.",
    ],
    tags: [
      "Rockwell Hardness",
      "Tensile Strength",
      "Hall Effect",
      "Corrosion Testing",
      "Molecular Weight Analysis",
    ],
    icon: "lab",
  },
];

const CATEGORIES: { id: ProjectCategory; label: string }[] = [
  { id: "all", label: "All Works" },
  { id: "materials", label: "Materials & Coatings" },
  { id: "iot", label: "IoT & Systems" },
  { id: "lab", label: "Lab & Testing" },
];

function CategoryIcon({ type }: { type: ProjectItem["icon"] }) {
  switch (type) {
    case "thesis":
      return <Microscope className="h-5 w-5 text-sky-600 dark:text-sky-400" />;
    case "conference":
      return <Presentation className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />;
    case "iot":
      return <Cpu className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />;
    case "lab":
      return <Atom className="h-5 w-5 text-amber-600 dark:text-amber-400" />;
  }
}

export default function ResearchProjects() {
  const [activeTab, setActiveTab] = useState<ProjectCategory>("all");

  const filteredProjects =
    activeTab === "all"
      ? PROJECTS
      : PROJECTS.filter((p) => p.categoryType === activeTab);

  return (
    <section id="research" className="relative px-6 py-24 sm:py-32 overflow-hidden">
      {/* Apple-style background radial radiance */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/4 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-tr from-sky-500/10 via-indigo-500/5 to-transparent blur-[120px] rounded-full"
      />

      <div className="relative z-10 mx-auto w-full max-w-5xl">
        {/* Apple HIG Header Block */}
        <div className="flex flex-col items-center text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-sky-500/20 bg-sky-500/10 dark:bg-sky-400/10 px-3.5 py-1 text-[11px] font-medium tracking-wider uppercase text-sky-700 dark:text-sky-300 backdrop-blur-md mb-4">
            <Sparkles className="h-3 w-3 text-sky-500" />
            <span>Scientific Research & Engineering</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-semibold tracking-[-0.03em] text-foreground">
            Research & Projects
          </h2>
          <p className="mt-4 max-w-2xl text-sm sm:text-base leading-relaxed text-foreground/60 dark:text-foreground/50">
            Experimental materials physics, corrosion barrier coatings, structural characterization,
            and IoT telemetry prototypes developed through rigorous empirical methodology.
          </p>

          {/* Apple Segmented Control */}
          <div className="mt-8 p-1.5 rounded-full border border-black/[0.08] dark:border-white/[0.12] bg-black/[0.04] dark:bg-white/[0.06] backdrop-blur-xl flex flex-wrap items-center justify-center gap-1.5 shadow-[inset_0_1px_2px_rgba(0,0,0,0.06)]">
            {CATEGORIES.map((cat) => {
              const isActive = activeTab === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveTab(cat.id)}
                  className={`relative rounded-full px-4 py-1.5 text-xs font-semibold tracking-tight transition-all duration-200 ${
                    isActive
                      ? "bg-white text-slate-900 shadow-md border border-black/10 dark:bg-[#1e2430] dark:text-white dark:border-white/15 dark:shadow-[0_2px_12px_rgba(0,0,0,0.5)]"
                      : "text-foreground/60 hover:text-foreground hover:bg-black/[0.03] dark:hover:bg-white/[0.04]"
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Projects Stream */}
        <div className="space-y-8">
          {filteredProjects.map((project) => {
            const isFlagship = project.isFlagship;

            if (isFlagship) {
              return (
                <div
                  key={project.id}
                  className="group relative rounded-[28px] border border-black/[0.08] dark:border-white/[0.12] bg-white/70 dark:bg-[#0e1219]/75 backdrop-blur-2xl p-7 sm:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.05)] dark:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.6)] transition-all duration-300 hover:shadow-[0_25px_60px_rgba(14,165,233,0.12)] hover:border-sky-500/30 overflow-hidden"
                >
                  {/* Apple Specular Top Rim */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-x-0 top-0 h-[1.5px] bg-gradient-to-r from-transparent via-white/80 dark:via-white/30 to-transparent"
                  />

                  {/* Header Row: Window Titlebar Aesthetic */}
                  <div className="flex flex-wrap items-center justify-between gap-4 border-b border-black/[0.05] dark:border-white/[0.06] pb-5">
                    <div className="flex items-center gap-3">
                      {/* Apple Window Traffic Dots */}
                      <div className="hidden sm:flex items-center gap-1.5 mr-1 opacity-70">
                        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                        <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                        <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
                      </div>
                      <div className="flex items-center gap-2 rounded-full border border-sky-500/20 bg-sky-500/10 px-3 py-1 text-xs font-semibold text-sky-700 dark:text-sky-300">
                        <CategoryIcon type={project.icon} />
                        <span>{project.categoryTag}</span>
                      </div>
                      <span className="text-xs font-medium text-foreground/50">
                        {project.role}
                      </span>
                    </div>

                    <div className="inline-flex items-center gap-1.5 rounded-full border border-black/[0.06] dark:border-white/[0.08] bg-black/[0.02] dark:bg-white/[0.03] px-3.5 py-1 text-xs font-medium text-foreground/60 tabular-nums">
                      <Calendar className="h-3.5 w-3.5 text-foreground/40" />
                      {project.period}
                    </div>
                  </div>

                  {/* Title & Core Apple Metric Banner */}
                  <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    <div className="lg:col-span-7">
                      <h3 className="text-2xl sm:text-3xl font-semibold tracking-[-0.025em] text-foreground leading-snug">
                        {project.title}
                      </h3>

                      <p className="mt-3 text-sm leading-relaxed text-foreground/65 dark:text-foreground/60">
                        A novel corrosion-resistant protective coating engineered for low-carbon steel
                        in marine and industrial settings, verified through advanced electrochemical,
                        mechanical, and morphological characterization.
                      </p>

                      {/* Bullet Highlights */}
                      <div className="mt-6 space-y-3">
                        {project.bullets.map((bullet, idx) => (
                          <div key={idx} className="flex items-start gap-3">
                            <CheckCircle2 className="h-4 w-4 shrink-0 text-sky-600 dark:text-sky-400 mt-0.5" />
                            <p className="text-xs sm:text-sm leading-relaxed text-foreground/75 dark:text-foreground/70">
                              {bullet}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Apple Metric Card */}
                    <div className="lg:col-span-5 rounded-[22px] border border-emerald-500/20 bg-gradient-to-br from-emerald-500/[0.08] via-emerald-500/[0.03] to-transparent p-6 dark:from-emerald-500/[0.12] dark:via-emerald-500/[0.04]">
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] font-semibold uppercase tracking-wider text-emerald-800 dark:text-emerald-300">
                          Primary Research Metric
                        </span>
                        <div className="flex items-center gap-1 text-xs font-medium text-emerald-700 dark:text-emerald-400">
                          <TrendingDown className="h-4 w-4" />
                          <span>Tested & Verified</span>
                        </div>
                      </div>

                      <div className="mt-3 flex items-baseline gap-2">
                        <span className="text-4xl sm:text-5xl font-bold tracking-tight text-emerald-700 dark:text-emerald-400">
                          {project.metric?.value}
                        </span>
                        <span className="text-sm font-semibold text-foreground/80">
                          {project.metric?.label}
                        </span>
                      </div>
                      <p className="mt-2 text-xs text-foreground/65 dark:text-foreground/60 leading-relaxed">
                        {project.metric?.sublabel}
                      </p>

                      {/* Micro stats */}
                      {project.highlights && (
                        <div className="mt-5 grid grid-cols-2 gap-3 border-t border-emerald-500/15 pt-4">
                          {project.highlights.map((h, i) => (
                            <div key={i}>
                              <div className="text-xs font-semibold text-foreground">
                                {h.stat}
                              </div>
                              <div className="text-[11px] text-foreground/50 leading-tight mt-0.5">
                                {h.caption}
                              </div>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Direct CTA Link */}
                      {project.link && (
                        <div className="mt-6 pt-4 border-t border-emerald-500/15">
                          <a
                            href={project.link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-sky-500/30 bg-sky-600 dark:bg-sky-500 px-4 py-2 text-xs font-semibold text-white shadow-sm hover:bg-sky-700 dark:hover:bg-sky-400 hover:shadow-md transition-all active:scale-[0.98]"
                          >
                            <span>{project.link.label}</span>
                            <ArrowUpRight className="h-3.5 w-3.5" />
                          </a>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Characterization Tags */}
                  <div className="mt-8 pt-5 border-t border-black/[0.05] dark:border-white/[0.06] flex flex-wrap items-center gap-2">
                    <span className="text-xs font-medium text-foreground/40 mr-1 flex items-center gap-1.5">
                      <Layers className="h-3.5 w-3.5" />
                      Testing Protocols:
                    </span>
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-black/[0.06] dark:border-white/[0.08] bg-black/[0.02] dark:bg-white/[0.03] px-3 py-1 text-xs font-medium text-foreground/70"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              );
            }

            // Secondary Bento Cards
            return (
              <div
                key={project.id}
                className="group relative rounded-[24px] border border-black/[0.08] dark:border-white/[0.1] bg-white/60 dark:bg-[#0e1219]/60 backdrop-blur-xl p-6 sm:p-8 shadow-[0_12px_40px_rgba(0,0,0,0.04)] dark:shadow-[0_15px_40px_rgba(0,0,0,0.5)] transition-all duration-300 hover:border-foreground/20 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] overflow-hidden"
              >
                {/* Specular Rim */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/50 dark:via-white/20 to-transparent"
                />

                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <div className="inline-flex items-center gap-1.5 rounded-full border border-black/[0.06] dark:border-white/[0.08] bg-black/[0.02] dark:bg-white/[0.04] px-3 py-0.5 text-xs font-medium text-foreground/75">
                        <CategoryIcon type={project.icon} />
                        <span>{project.categoryTag}</span>
                      </div>
                      <span className="text-xs font-medium text-foreground/50">
                        {project.role}
                      </span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-semibold tracking-[-0.015em] text-foreground">
                      {project.title}
                    </h3>
                  </div>

                  <div className="self-start shrink-0 inline-flex items-center gap-1.5 rounded-full border border-black/[0.06] dark:border-white/[0.08] bg-black/[0.02] dark:bg-white/[0.03] px-3 py-1 text-xs font-medium text-foreground/60 tabular-nums">
                    <Calendar className="h-3 w-3 text-foreground/40" />
                    {project.period}
                  </div>
                </div>

                {/* Bullets */}
                <div className="mt-5 space-y-2.5">
                  {project.bullets.map((bullet, bi) => (
                    <div key={bi} className="flex items-start gap-3">
                      <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-foreground/40 shrink-0" />
                      <p className="text-xs sm:text-sm leading-relaxed text-foreground/70 dark:text-foreground/65">
                        {bullet}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <div className="mt-6 pt-4 border-t border-black/[0.04] dark:border-white/[0.05] flex flex-wrap items-center gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-black/[0.06] dark:border-white/[0.07] bg-black/[0.02] dark:bg-white/[0.02] px-2.5 py-0.5 text-[11px] font-medium text-foreground/60"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
