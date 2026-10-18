"use client";

import TextType from "@/components/TextType";
import GradientText from "@/components/GradientText";
import HomeBackground from "@/components/HomeBackground";
import HomeWidgets from "@/components/HomeWidgets";

const SUBTEXT =
  "Materials Physics Graduate | Experienced in Lab Testing, Instrumentation & Data Analysis for R&D and QA.";

const GREETINGS = [
  "Welcome",          // Inggris
  "Selamat Datang",   // Indonesia
  "أهلاً وسهلاً",     // Arab
  "ようこそ",         // Jepang
  "환영합니다",       // Korea
  "欢迎",             // Mandarin
  "Bienvenido",       // Spanyol
  "Benvenuto",        // Italia
  "Bienvenue",        // Prancis
  "Willkommen",       // Jerman
];

export default function Home() {
  return (
    <section
      id="home"
      className="relative flex flex-col items-center justify-center gap-8 px-6 pt-20 pb-36 xl:flex-row xl:gap-0 xl:py-0"
    >
      <HomeBackground />

      {/* Konten text tanpa box / container terpisah */}
      <div className="relative z-10 flex max-w-4xl flex-col items-center gap-5 text-center">
        <TextType
          text={GREETINGS}
          loop
          showCursor
          cursorCharacter="|"
          typingSpeed={60}
          pauseDuration={1600}
          className="text-lg font-medium tracking-wide text-foreground/80 md:text-xl drop-shadow-[0_1px_6px_rgba(255,255,255,0.8)] dark:drop-shadow-none"
        />

        <h1 className="flex flex-wrap items-center justify-center gap-x-3 text-4xl font-semibold md:text-6xl drop-shadow-[0_1px_8px_rgba(255,255,255,0.7)] dark:drop-shadow-none">
          <span>Hi! I&apos;m</span>
          <GradientText
            className="!m-0 !cursor-default px-1 py-1 font-[family-name:var(--font-uncial)] font-normal"
            colors={["#52769B", "#C49A76", "#89A8C9"]}
            animationSpeed={3}
            direction="horizontal"
            yoyo={true}
            pauseOnHover={false}
            showBorder={false}
          >
            Nisrina
          </GradientText>
          <span className="-ml-2">.</span>
        </h1>

        <p className="max-w-xl text-sm leading-relaxed text-foreground/75 md:text-base drop-shadow-[0_1px_6px_rgba(255,255,255,0.8)] dark:drop-shadow-none">
          {SUBTEXT}
        </p>
      </div>

      {/* Widgets: samping kiri & kanan (draggable) */}
      <HomeWidgets />

      {/* Seamless bottom fade transitioning into About Me */}
      <div
        data-fade-mask
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-36 bg-gradient-to-t from-[var(--background)] to-transparent z-10"
      />
    </section>
  );
}
