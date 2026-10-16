"use client";

import Image from "next/image";

type Experience = {
  organization: string;
  location: string;
  mode: string;
  role: string;
  period: string;
  logo: string;
  bullets: string[];
};

const EXPERIENCES: Experience[] = [
  {
    organization: "Badan Riset dan Inovasi Nasional (BRIN)",
    location: "Jakarta, Indonesia",
    mode: "On-Site",
    role: "Program Development Assistant, Research Organization for Aeronautics and Space (OR PA) Intern",
    period: "Sep 2026 – Present",
    logo: "/brin.webp",
    bullets: [
      "Review, synchronize, and revise Budget Plans (RAB) and Terms of Reference (KAK) for aerospace and satellite research outputs, ensuring compliance with MoF regulation (PMK), BRIN SBM 2026 decree, and the Standard Chart of Accounts to support accurate, audit-ready research budgeting.",
      "Built and maintained a real-time recap of daily logbooks and monthly progress for researchers across the Rocket Research Center, identifying and resolving data quality issues that affected the automated recap system.",
      "Prepared and documented quarterly Monitoring & Evaluation (Q3 Monev) minutes, including on site documentation at 3 Technology Research Center and the Thematic Research Review (SBK 2027), capturing progress and obstacles for each research output (RO).",
    ],
  },
  {
    organization: "Universitas Airlangga",
    location: "Surabaya, Indonesia",
    mode: "On-Site",
    role: "BBK Social Media Handler",
    period: "Jun 2025 – Jun 2026",
    logo: "/Logo Unair.png",
    bullets: [
      "Manage Instagram and TikTok accounts (@bbk6unairtulung), executing end-to-end content planning, production, and posting to support community engagement and digital visibility.",
      "Produce and publish 42 TikTok videos within 2 months, generating a total of 51.9K likes, demonstrating strong capability in short-form video strategy, content consistency, and audience engagement optimization.",
    ],
  },
  {
    organization: "PT. Pertamina Patra Niaga",
    location: "Surabaya, Indonesia",
    mode: "On-Site",
    role: "Reliability and Project Development Intern",
    period: "Jan 2025 – Mar 2025",
    logo: "/pertamina.png",
    bullets: [
      "Conducted on-site inspections and performance monitoring across 66 fuel stations (SPBU), supporting operational data collection and analysis for compliance and efficiency evaluation.",
      "Performed field measurement and sensor-based monitoring, including instrument calibration, parameter recording, and data logging to ensure measurement accuracy during operational activities.",
      "Conducted routine inspection and measurement of operational parameters, maintaining accurate manual records to support quality control and equipment reliability.",
      "Research Project with User: Focused on cost-saving strategies in tank coating, analyzing materials and methods to improve efficiency and reduce costs.",
    ],
  },
  {
    organization: "Universitas Airlangga",
    location: "Surabaya, Indonesia",
    mode: "On-Site",
    role: "Laboratory Assistant - Part-Time",
    period: "Feb 2024 – Jun 2024",
    logo: "/Logo Unair.png",
    bullets: [
      "Assisted 34 undergraduate students across 12 laboratory sessions, delivering hands-on demonstrations, coaching, and personalized explanations to strengthen understanding of experimental procedures and physics analysis.",
      "Guide students in data analysis, experimental troubleshooting, and scientific reasoning, while reviewing and grading individual pre-tests and laboratory reports after each session and providing educational feedback to improve analytical thinking and learning outcomes.",
    ],
  },
  {
    organization: "Pesenkuy (pesenkuy.id)",
    location: "Surabaya, Indonesia",
    mode: "Remote",
    role: "Product Manager Intern",
    period: "Mar 2023 – Apr 2023",
    logo: "/PesenKuy.png",
    bullets: [
      "Executed field-based FMCG price intelligence survey involving 13+ retail outlets and refill depots, capturing brand level price variations across 3 campus markets (A-C) and 7 student dense areas.",
      "Built and managed Excel-based pricing database with location tagging, documentation links, and average price calculation per area, enabling market comparison and distribution strategy evaluation.",
    ],
  },
  {
    organization: "Produktifkuy (@produktifkuy)",
    location: "Jakarta, Indonesia",
    mode: "Remote",
    role: "Editorial Intern",
    period: "Jan 2023 – Mar 2023",
    logo: "/ProduktifKuy.jpg",
    bullets: [
      "Developed 20+ social media design assets for Produktifkuy, translating content strategy into clear visual guidelines that support brand positioning and campaign consistency.",
      "Collaborated with the editorial team to ensure design consistency and effective communication through social media content.",
      "Provided guidance on using design tools like Figma for efficient and high-quality content production.",
      "Successfully completed the internship program with distinction, graduating with a final GPA of 3.85.",
    ],
  },
];

export default function WorkExperience() {
  return (
    <section id="work" className="relative px-6 py-24 sm:py-28">
      <div className="relative z-10 mx-auto w-full max-w-5xl">
        <h2 className="mb-10 text-3xl font-semibold tracking-tight md:text-4xl text-foreground">
          Work Experience
        </h2>

        <div className="border-t border-foreground/[0.08]">
          {EXPERIENCES.map((exp, idx) => (
            <div
              key={`${exp.organization}-${exp.role}`}
              className="border-b border-foreground/[0.08]"
            >
              <div className="flex flex-col sm:flex-row sm:items-start gap-6 py-10 sm:py-12 group -mx-4 px-4 transition-colors hover:bg-foreground/[0.015] rounded-xl">
                {/* Left: index + logo */}
                <div className="flex sm:flex-col items-center gap-4 sm:gap-3 sm:w-[72px] shrink-0">
                  <span className="hidden sm:block text-[11px] font-mono text-foreground/20 tabular-nums text-center w-full">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <div className="relative h-12 w-12 sm:h-14 sm:w-14 shrink-0 overflow-hidden rounded-[16px] border border-foreground/[0.08] bg-white shadow-sm">
                    <Image
                      src={exp.logo}
                      alt={`${exp.organization} logo`}
                      fill
                      sizes="56px"
                      className="object-contain p-1.5"
                    />
                  </div>
                </div>

                {/* Right: content */}
                <div className="flex-1 min-w-0">
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                    <div className="flex-1 min-w-0">
                      <p className="text-[11px] font-medium uppercase tracking-[0.15em] text-foreground/35 mb-1.5">
                        {exp.organization}
                      </p>
                      <h3 className="text-[17px] sm:text-lg font-semibold tracking-[-0.015em] text-foreground leading-snug">
                        {exp.role}
                      </h3>
                      <div className="mt-1.5 flex flex-wrap items-center gap-x-2 gap-y-0.5">
                        <span className="text-[12px] text-foreground/40">
                          {exp.location}
                        </span>
                        <span className="text-foreground/20 text-[10px]">·</span>
                        <span className="text-[12px] text-foreground/40">
                          {exp.mode}
                        </span>
                      </div>
                    </div>
                    <span className="self-start shrink-0 rounded-full border border-foreground/[0.08] bg-foreground/[0.03] px-3 py-1 text-[11px] font-medium tabular-nums text-foreground/45 whitespace-nowrap">
                      {exp.period}
                    </span>
                  </div>

                  {/* Bullets */}
                  <div className="mt-5 border-t border-foreground/[0.06] pt-5 space-y-3">
                    {exp.bullets.map((b, bi) => (
                      <div key={bi} className="flex gap-3">
                        <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-foreground/25" />
                        <p className="text-[13px] sm:text-sm leading-relaxed text-foreground/55">
                          {b}
                        </p>
                      </div>
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
