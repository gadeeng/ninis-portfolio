"use client";

import {
  Presentation,
  Microscope,
  Atom,
  Cpu,
  ExternalLink,
  Calendar,
  Sparkles,
  TrendingDown,
  Layers,
} from "lucide-react";

export type ResearchProject = {
  id: string;
  category: string;
  title: string;
  subtitle?: string;
  role?: string;
  period: string;
  metricHighlight?: {
    value: string;
    label: string;
  };
  bullets: string[];
  tags: string[];
  icon: "conference" | "thesis" | "lab" | "iot";
  link?: {
    label: string;
    url: string;
  };
};

const RESEARCH_PROJECTS: ResearchProject[] = [
  {
    id: "icpiam-2025",
    category: "International Conference",
    title:
      "6th International Conference on Physical Instrumentations and Advanced Materials (ICPIAM 2025)",
    role: "Presenter & Researcher",
    period: "Nov 2025",
    icon: "conference",
    bullets: [
      "Conducted experimental data collection and structural analysis using FTIR and XRD.",
      "Delivered a research-based technical presentation to an international academic audience, communicating experimental methods, data findings, and material performance insights.",
    ],
    tags: ["FTIR", "XRD", "Structural Analysis", "Advanced Materials", "Oral Presentation"],
  },
  {
    id: "undergraduate-thesis",
    category: "Undergraduate Thesis Research",
    title:
      "Zinc-Rich Epoxy Coating Development for Corrosion Protection on ASTM A283 Steel",
    role: "Principal Researcher · Materials Physics",
    period: "March 2025 – March 2026",
    icon: "thesis",
    metricHighlight: {
      value: "73% Reduction",
      label: "Corrosion rate to 0.031 mm/year",
    },
    bullets: [
      "Developed and optimized zinc-rich epoxy coating with 5 formulation variations (0–6 wt%), achieving 73% reduction in corrosion rate to 0.031 mm/year, enhancing material durability for corrosive industrial environments.",
      "Conducted comprehensive material characterization and quality evaluation using XRD, PSA, SEM-EDX, Tafel Polarization, Pull-off, and Vickers testing, ensuring coating performance consistency and reliability.",
    ],
    tags: [
      "ASTM A283 Steel",
      "Corrosion Protection",
      "XRD",
      "PSA",
      "SEM-EDX",
      "Tafel Polarization",
      "Pull-off Testing",
      "Vickers Hardness",
    ],
    link: {
      label: "View Published Article",
      url: "https://journal.umy.ac.id/index.php/jmpm/article/view/32277",
    },
  },
  {
    id: "experimental-physics-lab",
    category: "Laboratory Projects",
    title:
      "Experimental Physics (Laboratory Projects) — Material & Physical Testing",
    role: "Experimental Researcher",
    period: "2024 – 2025",
    icon: "lab",
    bullets: [
      "Performed mechanical and electrical testing, including Rockwell hardness, tensile strength, and Hall Effect measurements, collecting and analyzing experimental data to evaluate material properties.",
      "Assessed corrosion and molecular weight experiments, interpreting quantitative results to assess material durability and composition characteristics.",
      "Presented experimental findings through technical presentations, demonstrating data interpretation and scientific communication skills.",
    ],
    tags: [
      "Rockwell Hardness",
      "Tensile Strength",
      "Hall Effect",
      "Corrosion Testing",
      "Molecular Weight Analysis",
    ],
  },
  {
    id: "iot-monitoring-system",
    category: "Instrumentation & IoT",
    title:
      "Instrumentation Project Developer — IoT-Based Temperature & Humidity Monitoring System",
    role: "Hardware & Systems Developer",
    period: "May 2025",
    icon: "iot",
    bullets: [
      "Designed and assembled an IoT-based environmental monitoring system using ESP32 and DHT22 sensors, enabling real-time temperature and humidity tracking via mobile platform (Blynk 2.0).",
      "Developed circuit configuration and implemented sensor-based data acquisition, supporting continuous environmental parameter monitoring without manual recording.",
      "Built a prototype system to improve monitoring efficiency and reduce manual inspection risks in controlled environments requiring stable temperature and humidity conditions, demonstrating data interpretation and scientific communication skills.",
    ],
    tags: [
      "ESP32",
      "DHT22",
      "Blynk 2.0",
      "IoT Data Acquisition",
      "Sensor Calibration",
      "Hardware Prototyping",
    ],
  },
];

function ProjectIcon({ type }: { type: ResearchProject["icon"] }) {
  switch (type) {
    case "conference":
      return <Presentation className="h-6 w-6 text-[#0A47B8] dark:text-[#89A8C9]" />;
    case "thesis":
      return <Microscope className="h-6 w-6 text-[#0A47B8] dark:text-[#89A8C9]" />;
    case "lab":
      return <Atom className="h-6 w-6 text-[#0A47B8] dark:text-[#89A8C9]" />;
    case "iot":
      return <Cpu className="h-6 w-6 text-[#0A47B8] dark:text-[#89A8C9]" />;
  }
}

export default function ResearchProjects() {
  return (
    <section id="research" className="relative px-6 py-24 sm:py-28">
      <div className="relative z-10 mx-auto w-full max-w-5xl">
        {/* Section Header */}
        <div className="mb-12 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#0A47B8] dark:bg-[#89A8C9]" />
              <p className="text-xs font-mono font-medium uppercase tracking-[0.2em] text-[#0A47B8] dark:text-[#89A8C9]">
                Scientific Research & Development
              </p>
            </div>
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl text-foreground">
              Research & Project
            </h2>
          </div>
          <p className="text-sm leading-relaxed text-foreground/50 max-w-md">
            Experimental materials physics, international conference presentations, structural characterization, and hardware instrumentation prototypes.
          </p>
        </div>

        {/* Project Cards List */}
        <div className="space-y-6">
          {RESEARCH_PROJECTS.map((proj, idx) => (
            <div
              key={proj.id}
              className="group relative rounded-2xl border border-foreground/[0.08] bg-foreground/[0.015] p-6 sm:p-8 transition-all duration-300 hover:border-[#0A47B8]/30 hover:bg-foreground/[0.025] hover:shadow-[0_8px_30px_rgba(10,71,184,0.08)] dark:hover:border-[#52769B]/40 dark:hover:shadow-[0_8px_30px_rgba(82,118,155,0.12)]"
            >
              {/* Subtle accent border glow on top */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -top-px left-8 right-8 h-px bg-gradient-to-r from-transparent via-[#0A47B8]/20 dark:via-[#89A8C9]/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              />

              <div className="flex flex-col sm:flex-row sm:items-start gap-6">
                {/* Left: Index + Themed Icon */}
                <div className="flex items-center sm:flex-col gap-4 sm:gap-3 sm:w-[72px] shrink-0">
                  <span className="hidden sm:block text-[11px] font-mono text-foreground/25 tabular-nums text-center w-full">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <div className="relative flex h-12 w-12 sm:h-14 sm:w-14 shrink-0 items-center justify-center rounded-[16px] border border-foreground/[0.08] bg-white dark:bg-[#0c121e] shadow-sm transition-transform duration-300 group-hover:scale-105">
                    <ProjectIcon type={proj.icon} />
                  </div>
                </div>

                {/* Right: Content */}
                <div className="flex-1 min-w-0">
                  {/* Top Bar: Category, Role & Period */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <span className="inline-flex items-center rounded-md border border-[#0A47B8]/20 dark:border-[#52769B]/30 bg-[#0A47B8]/5 dark:bg-[#52769B]/10 px-2.5 py-0.5 text-[11px] font-medium tracking-wide text-[#0A47B8] dark:text-[#89A8C9]">
                          {proj.category}
                        </span>
                        {proj.role && (
                          <span className="text-[12px] font-medium text-foreground/50">
                            {proj.role}
                          </span>
                        )}
                      </div>

                      {/* Main Title */}
                      <h3 className="text-[17px] sm:text-xl font-semibold tracking-[-0.015em] text-foreground leading-snug">
                        {proj.title}
                      </h3>
                    </div>

                    {/* Period Badge */}
                    <div className="self-start shrink-0 inline-flex items-center gap-1.5 rounded-full border border-foreground/[0.08] bg-foreground/[0.03] px-3 py-1 text-[11px] font-medium tabular-nums text-foreground/50 whitespace-nowrap">
                      <Calendar className="h-3 w-3 text-foreground/40" />
                      {proj.period}
                    </div>
                  </div>

                  {/* Optional Key Metric Highlight */}
                  {proj.metricHighlight && (
                    <div className="mt-4 inline-flex items-center gap-3 rounded-xl border border-emerald-500/25 bg-emerald-500/10 dark:bg-emerald-500/15 px-3.5 py-2 text-xs">
                      <div className="flex items-center gap-1 font-semibold text-emerald-700 dark:text-emerald-400">
                        <TrendingDown className="h-4 w-4" />
                        <span>{proj.metricHighlight.value}</span>
                      </div>
                      <span className="text-emerald-900/80 dark:text-emerald-200/80">
                        {proj.metricHighlight.label}
                      </span>
                    </div>
                  )}

                  {/* Bullet Points */}
                  <div className="mt-5 space-y-2.5 border-t border-foreground/[0.06] pt-5">
                    {proj.bullets.map((bullet, bi) => (
                      <div key={bi} className="flex gap-3">
                        <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#0A47B8] dark:bg-[#89A8C9]" />
                        <p className="text-[13px] sm:text-sm leading-relaxed text-foreground/60">
                          {bullet}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Tags and Optional Link */}
                  <div className="mt-6 flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-foreground/[0.04]">
                    <div className="flex flex-wrap items-center gap-1.5">
                      <Layers className="h-3.5 w-3.5 text-foreground/30 mr-1" />
                      {proj.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-md border border-foreground/[0.06] bg-foreground/[0.02] px-2 py-0.5 text-[11px] font-mono text-foreground/50"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {proj.link && (
                      <a
                        href={proj.link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-medium text-[#0A47B8] dark:text-[#89A8C9] hover:underline transition-all"
                      >
                        <span>{proj.link.label}</span>
                        <ExternalLink className="h-3.5 w-3.5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
