"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ExternalLink, Sparkles } from "lucide-react";
import ProfileCard from "@/components/ProfileCard";

const INTRO = [
  "Materials Physics graduate with hands-on expertise in experimental testing, instrumentation, and quantitative data analysis. Proven track record in lab and field operations, including data acquisition, calibration, and technical reporting. Detail-oriented and eager to drive impact in QA, R&D, and industrial operations.",
];

const SKILLS: string[] = [
  "Material Synthesis",
  "XRD Analysis",
  "SEM / EDX",
  "Data Analysis",
  "Scientific Writing",
];

const EDUCATION = {
  university: "Universitas Airlangga",
  logo: "/Logo Unair.png",
  degree: "Bachelor of Science in Physics",
  degreeAbbr: "(S.Si.)",
  faculty: "Faculty of Science and Technology",
  department: "Department of Physics",
  location: "Surabaya, Indonesia",
  period: "Aug 2022 - May 2026",
  researchGroup: "Materials Physics",
  researchSub: "Functional Materials & Thin Film Coatings",
  researchTags: ["Synthesis", "XRD", "SEM / EDX", "Coating"],
  gpa: "3.33",
  gpaScale: "4.00",
  graduationDate: "19 May 2026",
  graduationStatus: "Graduated",
  achievements: [
    {
      icon: "🥇",
      medal: "Gold Medal",
      title: "Physics Olympiad",
      org: "Indonesia Student Science Competition",
      year: "2021",
    },
    {
      icon: "🎬",
      medal: "Winner",
      title: "Best Short Movie",
      org: "Progressif Bumi Shalawat",
      year: "2021",
    },
  ],
  thesis: {
    title:
      "Coating of ASTM A283 Low-Carbon Steel Using Zinc-Rich Epoxy-Calcium Carbonate Nanoparticles",
    description:
      "Investigated the corrosion mitigation and barrier protection mechanism of zinc-rich epoxy coatings modified with biogenic calcium carbonate (CaCO3) nanoparticles from waste eggshells on ASTM A283 low-carbon steel, evaluating corrosion rate, pull-off adhesion strength, and microstructure morphology.",
    publicationTitle:
      "Optimization of Eggshell-Derived CaCO3 Nanoparticles in Zinc-Rich Epoxy Coating for ASTM A283",
    publicationUrl:
      "https://journal.umy.ac.id/index.php/jmpm/article/view/32277",
    topics: [
      "Zinc-Rich Epoxy",
      "ASTM A283 Steel",
      "CaCO3 Nanoparticles",
      "Corrosion Protection",
      "Thin Film Coating",
      "Material Characterization",
      "Electrochemical Testing",
    ],
  },
};

const CERTIFICATIONS = [
  {
    title: "Data Analyst",
    issuer: "RevoU",
    logo: "/RevoU.png",
    date: "Aug 2022",
    badge: "Analytics",
    description:
      "Introductory program in Data Analytics covering data cleaning, data visualization, and basic SQL through hands-on projects and case studies.",
  },
  {
    title: "ELPT - Score 547",
    issuer: "Universitas Airlangga",
    logo: "/Logo Unair.png",
    date: "May 2025",
    badge: "Professional Working",
    description:
      "English Language Proficiency Test with total score of 547, certified by Universitas Airlangga Language Center.",
  },
  {
    title: "Microsoft Excel Course",
    issuer: "MySkill",
    logo: "/MySkill.jpeg",
    date: "Aug 2026",
    badge: "Spreadsheet & Modeling",
    description:
      "Intensive Excel course covering data management, formulas, VLOOKUP, HLOOKUP, INDEX-MATCH, data analysis, and dashboard visualization.",
  },
];

export default function AboutMe() {
  const [isLight, setIsLight] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const update = () => {
      setIsLight(document.documentElement.classList.contains("light"));
    };
    update();
    const observer = new MutationObserver(update);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class", "data-theme"],
    });
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="relative px-6 py-24 sm:py-28 overflow-hidden">
      {/* Physics & Materials Science background — Ultra-lightweight GPU-native vector neon */}
      <div
        data-fade-mask
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden select-none opacity-25 dark:opacity-30 transition-opacity duration-500"
        style={{
          contain: "strict",
          transform: "translate3d(0, 0, 0)",
        }}
      >
        {/* Ambient neon haze via pure CSS radial gradients (Zero CPU cost) */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at 82% 58%, rgba(2, 132, 199, 0.08) 0%, transparent 45%), " +
              "radial-gradient(circle at 14% 32%, rgba(99, 102, 241, 0.07) 0%, transparent 40%), " +
              "radial-gradient(circle at 50% 50%, rgba(14, 165, 233, 0.04) 0%, transparent 50%)",
          }}
        />

        <svg
          viewBox="0 0 1200 900"
          className="absolute inset-0 w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            {/* Super faint crystal lattice pattern */}
            <pattern id="ab-lattice" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
              <line x1="30" y1="0" x2="30" y2="60" stroke="#38bdf8" strokeWidth="0.3" opacity="0.035" />
              <line x1="0" y1="30" x2="60" y2="30" stroke="#38bdf8" strokeWidth="0.3" opacity="0.035" />
              <circle cx="0"  cy="0"  r="1.2" fill="#38bdf8" opacity="0.05" />
              <circle cx="60" cy="0"  r="1.2" fill="#38bdf8" opacity="0.05" />
              <circle cx="0"  cy="60" r="1.2" fill="#38bdf8" opacity="0.05" />
              <circle cx="60" cy="60" r="1.2" fill="#38bdf8" opacity="0.05" />
              <circle cx="30" cy="30" r="1.5" fill="#818cf8" opacity="0.06" />
            </pattern>
          </defs>

          {/* Subdued crystal lattice background */}
          <rect width="1200" height="900" fill="url(#ab-lattice)" />

          {/* Key crystal lattice nodes with dual-layer neon glow */}
          {([
            [120,120],[300,180],[540,60],[780,120],[960,60],
            [60,360],[240,300],[480,360],[720,300],[1020,360],
            [180,540],[420,480],[660,540],[900,480],
            [60,720],[300,660],[540,720],[780,660],[1020,720],
          ] as [number,number][]).map(([x,y],i) => {
            const isCyan = i % 2 === 0;
            const isHighlight = i % 3 === 0;
            return (
              <g key={i}>
                <circle
                  cx={x}
                  cy={y}
                  r={isHighlight ? 7 : 4}
                  fill={isCyan ? "#38bdf8" : "#818cf8"}
                  opacity={isHighlight ? 0.22 : 0.12}
                />
                <circle
                  cx={x}
                  cy={y}
                  r={isHighlight ? 2.2 : 1.4}
                  fill={isCyan ? "#e0f2fe" : "#e0e7ff"}
                  opacity={isHighlight ? 0.9 : 0.65}
                  stroke={isCyan ? "#0284c7" : "#6366f1"}
                  strokeWidth="0.5"
                />
              </g>
            );
          })}

          {/* Neon XRD Sine Wave 1 (Electric Cyan) — Layered vector beam */}
          <g>
            <path
              d="M0 480 C90 420 170 540 260 480 S420 420 510 480 S670 540 760 480 S920 420 1010 480 S1150 540 1200 480"
              fill="none"
              stroke="#0ea5e9"
              strokeWidth="7"
              opacity="0.18"
            />
            <path
              d="M0 480 C90 420 170 540 260 480 S420 420 510 480 S670 540 760 480 S920 420 1010 480 S1150 540 1200 480"
              fill="none"
              stroke="#38bdf8"
              strokeWidth="2.2"
              opacity="0.55"
            />
            <path
              d="M0 480 C90 420 170 540 260 480 S420 420 510 480 S670 540 760 480 S920 420 1010 480 S1150 540 1200 480"
              fill="none"
              stroke="#ffffff"
              strokeWidth="0.8"
              opacity="0.8"
            />
          </g>

          {/* Neon XRD Sine Wave 2 (Electric Violet) */}
          <g>
            <path
              d="M0 630 C80 575 170 685 250 630 S410 575 500 630 S660 685 750 630 S910 575 1000 630 S1140 685 1200 630"
              fill="none"
              stroke="#818cf8"
              strokeWidth="6"
              opacity="0.14"
            />
            <path
              d="M0 630 C80 575 170 685 250 630 S410 575 500 630 S660 685 750 630 S910 575 1000 630 S1140 685 1200 630"
              fill="none"
              stroke="#a5b4fc"
              strokeWidth="1.8"
              opacity="0.45"
            />
            <path
              d="M0 630 C80 575 170 685 250 630 S410 575 500 630 S660 685 750 630 S910 575 1000 630 S1140 685 1200 630"
              fill="none"
              stroke="#ffffff"
              strokeWidth="0.7"
              opacity="0.7"
            />
          </g>

          {/* Neon Atomic Orbital (Top Right) */}
          <g>
            {/* Soft halo ellipses */}
            <ellipse cx="800" cy="210" rx="105" ry="42" fill="none" stroke="#0ea5e9" strokeWidth="3" opacity="0.18" />
            <ellipse cx="800" cy="210" rx="105" ry="42" fill="none" stroke="#0ea5e9" strokeWidth="3" opacity="0.18" transform="rotate(60 800 210)" />
            <ellipse cx="800" cy="210" rx="105" ry="42" fill="none" stroke="#0ea5e9" strokeWidth="3" opacity="0.18" transform="rotate(120 800 210)" />

            {/* Fine orbital trajectories */}
            <ellipse cx="800" cy="210" rx="105" ry="42" fill="none" stroke="#7dd3fc" strokeWidth="0.9" opacity="0.45" />
            <ellipse cx="800" cy="210" rx="105" ry="42" fill="none" stroke="#7dd3fc" strokeWidth="0.9" opacity="0.45" transform="rotate(60 800 210)" />
            <ellipse cx="800" cy="210" rx="105" ry="42" fill="none" stroke="#7dd3fc" strokeWidth="0.9" opacity="0.45" transform="rotate(120 800 210)" />

            {/* Glowing electron points */}
            <circle cx="905" cy="210" r="6" fill="#38bdf8" opacity="0.25" />
            <circle cx="905" cy="210" r="2.8" fill="#ffffff" stroke="#38bdf8" strokeWidth="1" />
            
            <circle cx="747" cy="119" r="5.5" fill="#38bdf8" opacity="0.22" />
            <circle cx="747" cy="119" r="2.5" fill="#ffffff" stroke="#38bdf8" strokeWidth="1" />

            {/* Nucleus */}
            <circle cx="800" cy="210" r="12" fill="#0284c7" opacity="0.18" />
            <circle cx="800" cy="210" r="4" fill="#ffffff" stroke="#38bdf8" strokeWidth="1" />
          </g>
        </svg>

        {/* Lightweight Physics & Materials Science Formula Tokens */}
        <div className="absolute inset-0 font-mono pointer-events-none">
          {([
            { t: "ψ(r,θ,φ)",  top: "7%",  left: "5%",   op: 0.38, c: "#38bdf8" },
            { t: "d-spacing", top: "14%", right: "8%",  op: 0.32, c: "#818cf8" },
            { t: "XRD",       top: "34%", left: "3%",   op: 0.36, c: "#38bdf8" },
            { t: "SEM · EDX", top: "49%", right: "4%",  op: 0.30, c: "#7dd3fc" },
            { t: "CaCO₃",     top: "61%", left: "6%",   op: 0.28, c: "#a5b4fc" },
            { t: "σ(E)",      top: "71%", right: "9%",  op: 0.32, c: "#38bdf8" },
            { t: "Zn²⁺",      top: "87%", right: "18%", op: 0.28, c: "#7dd3fc" },
            { t: "λ = 2d·sinθ", top: "43%", left: "28%", op: 0.24, c: "#818cf8" },
          ] as { t: string; top: string; left?: string; right?: string; op: number; c: string }[])
            .map(({ t, top, left, right, op, c }) => (
              <span
                key={t}
                className="absolute text-[10px] tracking-wider select-none font-medium"
                style={{
                  top,
                  left,
                  right,
                  opacity: op,
                  color: c,
                  textShadow: `0 0 6px ${c}, 0 0 14px ${c}66`,
                }}
              >
                {t}
              </span>
            ))}
        </div>
      </div>

      {/* Seamless top fade from Home */}
      <div
        data-fade-mask
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-0 right-0 h-36 bg-gradient-to-b from-[var(--background)] to-transparent z-10"
      />

      <div className="relative z-10 mx-auto w-full max-w-5xl">
        {/* Top: Intro + Profile Card */}
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div className="order-1 flex justify-center md:order-2 md:justify-end">
            <ProfileCard
              avatarUrl="/profile.jpeg"
              name="Nisrina Zalfa Qarirah"
              title="Material Physics Graduate"
              showUserInfo={false}
              intro={false}
              avatarScale={1.8}
              avatarOrigin="center 26%"
              theme={mounted && isLight ? "light" : "dark"}
              radius={18}
              holo={0.8}
              glare={0.5}
              enableTilt={true}
              tiltStrength={12}
            />
          </div>

          <div className="order-2 md:order-1">
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              About Me
            </h2>
            <div className="mt-6 space-y-4 text-foreground/80 leading-relaxed">
              {INTRO.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>

            <h3 className="mt-8 text-xs font-semibold uppercase tracking-wider text-foreground/50">
              Core Competencies
            </h3>
            <ul className="mt-3 flex flex-wrap gap-2">
              {SKILLS.map((s) => (
                <li
                  key={s}
                  className="rounded-full border border-foreground/10 bg-foreground/[0.03] px-3 py-1 text-xs font-medium text-foreground/75 transition-colors hover:border-[#0a66c2]/50 hover:text-foreground"
                >
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Education */}
        <div className="mt-20 sm:mt-24">
          <p className="mb-10 text-[11px] font-semibold uppercase tracking-[0.18em] text-foreground/35">
            Education
          </p>

          <div className="border-t border-foreground/[0.08]">
            {/* University header */}
            <div className="flex flex-col sm:flex-row sm:items-start gap-6 py-10 sm:py-12">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-[18px] border border-foreground/[0.08] bg-foreground/[0.03] p-2.5">
                <Image
                  src={EDUCATION.logo}
                  alt="Logo Universitas Airlangga"
                  width={48}
                  height={48}
                  priority
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[11px] font-medium uppercase tracking-[0.15em] text-foreground/35">
                  {EDUCATION.location}
                </p>
                <h3 className="mt-2 text-2xl sm:text-[28px] font-semibold tracking-[-0.02em] text-foreground leading-tight">
                  {EDUCATION.university}
                </h3>
                <p className="mt-1.5 text-base text-foreground/60 font-normal leading-snug">
                  {EDUCATION.degree}{" "}
                  <span className="text-foreground/35">{EDUCATION.degreeAbbr}</span>
                </p>
                <p className="mt-1 text-[13px] text-foreground/35">
                  {EDUCATION.faculty} · {EDUCATION.department}
                </p>
              </div>
            </div>

            {/* Stats 4-up */}
            <div className="grid grid-cols-2 sm:grid-cols-4 border-t border-foreground/[0.08]">
              <div className="py-8 pr-6 border-r border-foreground/[0.08]">
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-foreground/35 mb-3">GPA</p>
                <div className="flex items-baseline gap-1.5">
                  <span className="text-4xl font-semibold tracking-[-0.03em] text-foreground tabular-nums">
                    {EDUCATION.gpa}
                  </span>
                  <span className="text-sm text-foreground/35">/ {EDUCATION.gpaScale}</span>
                </div>
                <div className="mt-3 h-px w-full bg-foreground/[0.06] overflow-hidden">
                  <div
                    className="h-full bg-[#0a66c2]/60"
                    style={{ width: `${(parseFloat(EDUCATION.gpa) / 4) * 100}%` }}
                  />
                </div>
              </div>

              <div className="py-8 px-6 border-r border-foreground/[0.08]">
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-foreground/35 mb-3">Period</p>
                <p className="text-sm font-medium text-foreground/80 leading-relaxed">{EDUCATION.period}</p>
              </div>

              <div className="py-8 px-6 border-r border-foreground/[0.08]">
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-foreground/35 mb-3">Graduated</p>
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#0a66c2] shrink-0" />
                  <p className="text-sm font-medium text-foreground/80">{EDUCATION.graduationDate}</p>
                </div>
              </div>

              <div className="py-8 pl-6">
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-foreground/35 mb-3">Research</p>
                <p className="text-sm font-medium text-foreground/80 leading-snug">{EDUCATION.researchGroup}</p>
                <p className="mt-0.5 text-[12px] text-foreground/40 leading-snug">{EDUCATION.researchSub}</p>
              </div>
            </div>

            {/* Achievements */}
            <div className="border-t border-foreground/[0.08] py-8">
              <div className="flex flex-col sm:flex-row sm:items-start gap-8 sm:gap-12">
                <div className="sm:w-48 shrink-0">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-foreground/35">
                    Achievements
                  </p>
                </div>
                <div className="flex-1 grid sm:grid-cols-2 gap-6">
                  {EDUCATION.achievements.map((item) => (
                    <div key={item.title}>
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className="text-base leading-none">{item.icon}</span>
                        <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#0a66c2]">
                          {item.medal}
                        </span>
                        <span className="ml-auto text-[11px] text-foreground/30 tabular-nums">{item.year}</span>
                      </div>
                      <p className="text-[15px] font-semibold tracking-[-0.01em] text-foreground leading-snug">
                        {item.title}
                      </p>
                      <p className="mt-0.5 text-[12px] text-foreground/45 leading-snug">{item.org}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Thesis */}
            <div className="border-t border-foreground/[0.08] py-8 sm:py-10">
              <div className="flex flex-col sm:flex-row sm:items-start gap-8 sm:gap-12">
                <div className="sm:w-48 shrink-0 flex flex-col gap-3">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-foreground/35">Thesis</p>
                  {EDUCATION.thesis.publicationUrl && (
                    <a
                      href={EDUCATION.thesis.publicationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex w-fit items-center gap-1.5 text-[12px] font-medium text-[#0a66c2] transition-opacity hover:opacity-70"
                    >
                      <Sparkles className="h-3 w-3 shrink-0" />
                      <span>Published</span>
                      <ExternalLink className="h-3 w-3 shrink-0 transition-transform group-hover:translate-x-0.5" />
                    </a>
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-lg sm:text-xl font-semibold tracking-[-0.02em] text-foreground leading-snug">
                    {EDUCATION.thesis.title}
                  </h4>
                  <p className="mt-3 text-[13px] sm:text-sm leading-relaxed text-foreground/55">
                    {EDUCATION.thesis.description}
                  </p>
                  <div className="mt-5 flex items-start gap-2">
                    <span className="mt-px text-[10px] font-semibold uppercase tracking-[0.15em] text-foreground/35 shrink-0 leading-relaxed">
                      Publication
                    </span>
                    <span className="text-foreground/20 text-[11px] mt-px">—</span>
                    <a
                      href={EDUCATION.thesis.publicationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[12px] text-[#0a66c2] hover:underline underline-offset-2 leading-relaxed"
                    >
                      {EDUCATION.thesis.publicationTitle}
                    </a>
                  </div>
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {EDUCATION.thesis.topics.map((topic) => (
                      <span
                        key={topic}
                        className="rounded-full border border-foreground/[0.08] bg-foreground/[0.03] px-3 py-1 text-[11px] text-foreground/45 tracking-wide"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="mt-16 sm:mt-20">
          <p className="mb-10 text-[11px] font-semibold uppercase tracking-[0.18em] text-foreground/35">
            Certifications
          </p>
          <div className="border-t border-foreground/[0.08]">
            {CERTIFICATIONS.map((cert, idx) => (
              <div
                key={cert.title}
                className="group flex flex-col sm:flex-row sm:items-center gap-5 py-7 border-b border-foreground/[0.08] transition-colors hover:bg-foreground/[0.015] -mx-4 px-4 rounded-xl"
              >
                <span className="hidden sm:block w-8 shrink-0 text-[11px] font-mono text-foreground/20 tabular-nums">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-[14px] border border-foreground/[0.08] bg-white shadow-sm">
                  <Image
                    src={cert.logo}
                    alt={`${cert.issuer} logo`}
                    fill
                    sizes="44px"
                    className="object-contain p-1"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-0.5">
                    <h4 className="text-[15px] font-semibold tracking-[-0.01em] text-foreground">
                      {cert.title}
                    </h4>
                    <span className="text-[12px] text-foreground/40">{cert.issuer}</span>
                  </div>
                  <p className="mt-1.5 text-[13px] leading-relaxed text-foreground/50 max-w-xl">
                    {cert.description}
                  </p>
                </div>
                <div className="flex sm:flex-col sm:items-end items-center gap-3 sm:gap-1.5 shrink-0">
                  <span className="rounded-full border border-foreground/[0.08] bg-foreground/[0.03] px-3 py-1 text-[10px] font-medium uppercase tracking-[0.12em] text-foreground/40 whitespace-nowrap">
                    {cert.badge}
                  </span>
                  <span className="text-[11px] text-foreground/30 tabular-nums">{cert.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
