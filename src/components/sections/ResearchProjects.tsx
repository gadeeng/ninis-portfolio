"use client";

import React, { useState } from "react";
import { Presentation, Microscope, Atom, Cpu, ArrowUpRight } from "lucide-react";

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
  const cls = "h-5 w-5 text-foreground/60";
  switch (type) {
    case "thesis":
      return <Microscope className={cls} />;
    case "conference":
      return <Presentation className={cls} />;
    case "iot":
      return <Cpu className={cls} />;
    case "lab":
      return <Atom className={cls} />;
  }
}

export default function ResearchProjects() {
  const [activeTab, setActiveTab] = useState<ProjectCategory>("all");

  const filteredProjects =
    activeTab === "all"
      ? PROJECTS
      : PROJECTS.filter((p) => p.categoryType === activeTab);

  return (
    <section id="research" className="relative px-6 py-24 sm:py-28">
      <div className="relative z-10 mx-auto w-full max-w-5xl">
        <div className="mb-10 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl text-foreground">
            Research &amp; Projects
          </h2>
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => {
              const isActive = activeTab === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setActiveTab(cat.id)}
                  className={`rounded-full border px-3 py-1 text-[11px] font-medium transition-colors ${
                    isActive
                      ? "border-foreground/20 bg-foreground/[0.08] text-foreground"
                      : "border-foreground/[0.08] bg-foreground/[0.03] text-foreground/45 hover:text-foreground/70"
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        <div className="border-t border-foreground/[0.08]">
          {filteredProjects.map((project, idx) => (
            <div key={project.id} className="border-b border-foreground/[0.08]">
              <div className="flex flex-col sm:flex-row sm:items-start gap-6 py-10 sm:py-12 group -mx-4 px-4 transition-colors hover:bg-foreground/[0.015] rounded-xl">
                {/* Left: index + icon */}
                <div className="flex sm:flex-col items-center gap-4 sm:gap-3 sm:w-[72px] shrink-0">
                  <span className="hidden sm:block text-[11px] font-mono text-foreground/20 tabular-nums text-center w-full">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <div className="flex h-12 w-12 sm:h-14 sm:w-14 shrink-0 items-center justify-center rounded-[16px] border border-foreground/[0.08] bg-foreground/[0.03] shadow-sm">
                    <CategoryIcon type={project.icon} />
                  </div>
                </div>

                {/* Right: content */}
                <div className="flex-1 min-w-0">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                    <div className="flex-1 min-w-0">
                      <p className="text-[11px] font-medium uppercase tracking-[0.15em] text-foreground/35 mb-1.5">
                        {project.categoryTag}
                      </p>
                      <h3 className="text-[17px] sm:text-lg font-semibold tracking-[-0.015em] text-foreground leading-snug">
                        {project.title}
                      </h3>
                      <div className="mt-1.5 flex flex-wrap items-center gap-x-2 gap-y-0.5">
                        <span className="text-[12px] text-foreground/40">
                          {project.role}
                        </span>
                        {project.link && (
                          <>
                            <span className="text-foreground/20 text-[10px]">·</span>
                            <a
                              href={project.link.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-0.5 text-[12px] text-foreground/40 transition-colors hover:text-foreground/70"
                            >
                              {project.link.label}
                              <ArrowUpRight className="h-3 w-3" />
                            </a>
                          </>
                        )}
                      </div>
                    </div>
                    <span className="self-start shrink-0 rounded-full border border-foreground/[0.08] bg-foreground/[0.03] px-3 py-1 text-[11px] font-medium tabular-nums text-foreground/45 whitespace-nowrap">
                      {project.period}
                    </span>
                  </div>

                  {/* Bullets */}
                  <div className="mt-5 border-t border-foreground/[0.06] pt-5 space-y-3">
                    {project.metric && (
                      <div className="flex gap-3">
                        <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-foreground/25" />
                        <p className="text-[13px] sm:text-sm leading-relaxed text-foreground/55">
                          <span className="font-semibold text-foreground/80">
                            {project.metric.value}
                          </span>{" "}
                          {project.metric.label}
                          {project.metric.sublabel ? ` — ${project.metric.sublabel}` : ""}
                        </p>
                      </div>
                    )}
                    {project.highlights?.map((h, i) => (
                      <div key={i} className="flex gap-3">
                        <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-foreground/25" />
                        <p className="text-[13px] sm:text-sm leading-relaxed text-foreground/55">
                          <span className="font-semibold text-foreground/80">{h.stat}</span>{" "}
                          {h.caption}
                        </p>
                      </div>
                    ))}
                    {project.bullets.map((b, bi) => (
                      <div key={bi} className="flex gap-3">
                        <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-foreground/25" />
                        <p className="text-[13px] sm:text-sm leading-relaxed text-foreground/55">
                          {b}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="mt-5 flex flex-wrap items-center gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-foreground/[0.08] bg-foreground/[0.03] px-2.5 py-0.5 text-[11px] font-medium text-foreground/45"
                      >
                        {tag}
                      </span>
                    ))}
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
