"use client";

import { useEffect, useRef, useState } from "react";
import type { CSSProperties } from "react";
import Image from "next/image";
import { Mail } from "lucide-react";

const TAGLINE = "Exploring materials, one experiment at a time."; // TODO: ganti
const EMAIL = "nisrinazalfawork@gmail.com";

function GmailIcon({ size = 22, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="52 42 88 66"
      aria-hidden="true"
      className={className}
    >
      <path fill="#4285f4" d="M58 108h14V74L52 59v43c0 3.32 2.69 6 6 6" />
      <path fill="#34a853" d="M120 108h14c3.32 0 6-2.69 6-6V59l-20 15" />
      <path fill="#fbbc04" d="M120 48v26l20-15v-8c0-7.42-8.47-11.65-14.4-7.2" />
      <path fill="#ea4335" d="M72 74V48l24 18 24-18v26L96 92" />
      <path fill="#c5221f" d="M52 51v8l20 15V48l-5.6-4.2c-5.94-4.45-14.4-.22-14.4 7.2" />
    </svg>
  );
}

function LinkedInIcon({ size = 22, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 72 72"
      aria-hidden="true"
      className={className}
    >
      <rect width="72" height="72" rx="14" fill="#0A66C2" />
      <path
        d="M62 62H51.316V43.802c0-4.99-1.896-7.778-5.845-7.778-4.296 0-6.541 2.902-6.541 7.778V62H28.633V27.333h10.297V32s3.096-5.726 10.453-5.726C56.736 26.274 62 30.764 62 40.051V62zM16.349 22.794c-3.507 0-6.349-2.864-6.349-6.397 0-3.533 2.842-6.397 6.349-6.397 3.507 0 6.348 2.864 6.348 6.397 0 3.533-2.841 6.397-6.348 6.397zM11.033 62h10.736V27.333H11.033V62z"
        fill="#FFFFFF"
      />
    </svg>
  );
}

function InstagramIcon({ size = 22, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={className}
    >
      <defs>
        <radialGradient
          id="instagram-radial"
          cx="20%"
          cy="105%"
          r="130%"
        >
          <stop offset="0%" stopColor="#ffdd55" />
          <stop offset="20%" stopColor="#ff543e" />
          <stop offset="60%" stopColor="#c837ab" />
          <stop offset="100%" stopColor="#3771c8" />
        </radialGradient>
      </defs>
      <rect width="24" height="24" rx="6" fill="url(#instagram-radial)" />
      <rect
        x="5"
        y="5"
        width="14"
        height="14"
        rx="4"
        fill="none"
        stroke="#ffffff"
        strokeWidth="1.6"
      />
      <circle
        cx="12"
        cy="12"
        r="3.3"
        fill="none"
        stroke="#ffffff"
        strokeWidth="1.6"
      />
      <circle cx="15.8" cy="8.2" r="0.9" fill="#ffffff" />
    </svg>
  );
}

const SOCIALS = [
  {
    label: "Gmail",
    href: "mailto:nisrinazalfawork@gmail.com",
    Icon: GmailIcon,
    hoverClass:
      "hover:border-[#ea4335]/60 hover:bg-[#ea4335]/10 hover:shadow-[0_0_16px_rgba(234,67,53,0.25)]",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/nisrinazalfaq/",
    Icon: LinkedInIcon,
    hoverClass:
      "hover:border-[#0a66c2]/60 hover:bg-[#0a66c2]/10 hover:shadow-[0_0_16px_rgba(10,102,194,0.25)]",
  },
  {
    label: "Instagram",
    href: "https://instagram.com/nisrinazalfaq",
    Icon: InstagramIcon,
    hoverClass:
      "hover:border-[#e4405f]/60 hover:bg-[#e4405f]/10 hover:shadow-[0_0_16px_rgba(228,64,95,0.25)]",
  },
];

function NisrinaSymbolIcon({ size = 120, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      width={size}
      height={size}
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <title>Nisrina Zalfa Qarirah Symbol</title>
      {/* Monogram Letterform N (Potential Flux) */}
      <path d="M 68 38 L 102 38 L 162 164 C 174 124 174 80 154 38 L 188 38 C 222 90 222 166 188 218 L 154 218 L 94 92 C 82 132 82 176 102 218 L 68 218 C 34 166 34 90 68 38 Z" />
    </svg>
  );
}

const CURRENT_YEAR = 2026;

export default function Footer() {
  const contactRef = useRef<HTMLSpanElement>(null);
  const emailRef = useRef<HTMLSpanElement>(null);
  const [widths, setWidths] = useState<{ contact: number; email: number } | null>(null);

  useEffect(() => {
    const measure = () => {
      if (contactRef.current && emailRef.current) {
        setWidths({
          contact: contactRef.current.offsetWidth,
          email: emailRef.current.offsetWidth,
        });
      }
    };
    measure();
    document.fonts?.ready.then(measure);
  }, []);

  return (
    <footer
      id="footer"
      className="relative px-6 py-16 sm:py-20"
    >
      <div className="relative z-10 mx-auto w-full max-w-5xl">
        <div className="grid overflow-hidden rounded-2xl border border-sky-500/10 bg-foreground/[0.03] shadow-sm transition-all duration-300 hover:border-sky-500/20 hover:shadow-md md:grid-cols-5">
        {/* LEFT — Headline + CTA */}
        <div className="relative flex flex-col justify-between gap-10 overflow-hidden p-8 sm:p-10 md:col-span-3">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-10 -top-10 h-64 w-64 rounded-full bg-sky-500/10 blur-[80px]"
          />
          <div className="relative z-10">
            <h2 className="mb-4 text-3xl font-semibold leading-[1.15] tracking-tight text-foreground sm:text-4xl">
              Let&apos;s <span className="text-sky-500">Connect!</span>
            </h2>
            <p className="max-w-md text-sm leading-relaxed text-foreground/55 sm:text-base">
              {TAGLINE} I&apos;m always open to discussing research collaborations,
              creative ideas, or opportunities. Just reach out!
            </p>
          </div>

          <div className="relative z-10 flex flex-wrap items-center gap-4">
            <a
              href={`mailto:${EMAIL}`}
              id="connect-contact-btn"
              style={
                widths
                  ? ({
                      "--contact-w": `${widths.contact}px`,
                      "--email-w": `${widths.email}px`,
                    } as CSSProperties)
                  : undefined
              }
              className="group inline-flex max-w-full items-center gap-2 rounded-full bg-sky-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:bg-sky-700 hover:shadow-md active:scale-[0.97]"
            >
              <Mail className="h-3.5 w-3.5 shrink-0" />
              <span className="relative block w-[var(--contact-w,auto)] overflow-hidden whitespace-nowrap transition-[width] duration-500 ease-[cubic-bezier(0.65,0,0.35,1)] group-hover:w-[var(--email-w,auto)] group-focus-visible:w-[var(--email-w,auto)] motion-reduce:transition-none">
                <span
                  ref={contactRef}
                  className="inline-block transition-[transform,opacity] duration-500 ease-out group-hover:-translate-x-[120%] group-hover:opacity-0 group-focus-visible:-translate-x-[120%] group-focus-visible:opacity-0 motion-reduce:transition-none"
                >
                  Contact
                </span>
                <span
                  ref={emailRef}
                  className="absolute left-0 top-0 inline-block translate-x-[120%] opacity-0 transition-[transform,opacity] delay-75 duration-500 ease-out group-hover:translate-x-0 group-hover:opacity-100 group-focus-visible:translate-x-0 group-focus-visible:opacity-100 motion-reduce:transition-none"
                >
                  {EMAIL}
                </span>
              </span>
            </a>

            <a
              href="#research"
              id="connect-projects-btn"
              className="group inline-flex items-center gap-1.5 text-sm font-medium text-sky-500/70 transition-colors duration-200 hover:text-sky-500"
            >
              See projects
              <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>
        </div>

        {/* RIGHT — Brand Logo + socials + copyright */}
        <div className="flex flex-col items-center justify-center gap-7 border-t border-foreground/[0.08] bg-foreground/[0.02] p-8 sm:p-10 md:col-span-2 md:border-l md:border-t-0">
          <div className="flex items-center justify-center py-2 transition-transform duration-500 hover:scale-105">
            {/* Dark mode: White lockup */}
            <Image
              src="/logo/variants/horizontal/lockup-horizontal-white.svg"
              alt="Nisrina Zalfa Qarirah — Materials Physics"
              width={360}
              height={140}
              className="hidden dark:block h-20 sm:h-24 md:h-28 w-auto max-w-[300px] sm:max-w-[340px] md:max-w-[360px] object-contain select-none"
              priority
            />
            {/* Light mode: Black lockup */}
            <Image
              src="/logo/variants/horizontal/lockup-horizontal-black.svg"
              alt="Nisrina Zalfa Qarirah — Materials Physics"
              width={360}
              height={140}
              className="block dark:hidden h-20 sm:h-24 md:h-28 w-auto max-w-[300px] sm:max-w-[340px] md:max-w-[360px] object-contain select-none"
              priority
            />
          </div>

          <div className="flex items-center gap-5">
            {SOCIALS.map(({ label, href, Icon, hoverClass }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                title={label}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex h-11 w-11 items-center justify-center rounded-full border border-foreground/[0.12] bg-background/50 text-foreground/80 backdrop-blur-sm transition-all duration-300 hover:scale-110 active:scale-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground ${hoverClass}`}
              >
                <Icon size={20} />
              </a>
            ))}
          </div>

          <div className="text-center leading-snug">
            <p className="text-xs text-foreground/40">© {CURRENT_YEAR} Nisrina Zalfa Qarirah</p>
          </div>
        </div>
      </div>
      </div>
    </footer>
  );
}


