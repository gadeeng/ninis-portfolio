"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Users,
  Calendar,
  MapPin,
  Sparkles,
  TrendingUp,
  Palette,
  Camera,
  Layers,
  ExternalLink,
  X,
  Maximize2,
  Video,
} from "lucide-react";

function InstagramIcon({ className = "h-3 w-3" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function YouTubeIcon({ className = "h-3 w-3" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

interface OrgPhoto {
  src: string;
  caption: string;
  tag: string;
}

interface OrganizationEntry {
  id: string;
  organization: string;
  role: string;
  period: string;
  location: string;
  logo?: string;
  badge?: string;
  channel?: {
    platform: "instagram" | "youtube" | "tiktok";
    label: string;
    url?: string;
  };
  metrics?: {
    value: string;
    label: string;
  };
  bullets: string[];
  tags: string[];
  photos?: OrgPhoto[];
}

const ORGANIZATIONS: OrganizationEntry[] = [
  {
    id: "himafi-2024",
    organization: "HIMAFI UNAIR 2024",
    role: "Directorate General of Media",
    period: "Mar 2024 – Feb 2025",
    location: "Surabaya, Indonesia",
    logo: "/Logo Unair.png",
    badge: "Leadership & Media Strategy",
    channel: {
      platform: "instagram",
      label: "@himafiunair",
      url: "https://instagram.com/himafiunair",
    },
    metrics: {
      value: "+45%",
      label: "Instagram Engagement Growth within 6 Months",
    },
    bullets: [
      "Manage organizational social media platforms Instagram and TikTok (@himafiunair), leading content planning and scheduling, collaborating with multiple internal divisions, and overseeing the production of 50+ branded design assets to maximize reach and engagement.",
      "Lead and mentor a 4 member media sub-division, providing structured training and hands-on editing guidance, particularly in Figma-based graphic design, to ensure visual consistency and content quality.",
      "Increased Instagram engagement rate by 45% within 6 months through consistent visual branding, interactive stories, and student-focused content strategies.",
    ],
    tags: [
      "Figma",
      "Media Directorate",
      "Team Mentorship (4 Staff)",
      "Digital Strategy",
      "50+ Design Assets",
    ],
    photos: [
      {
        src: "/org/WhatsApp Image 2026-10-23 at 7.17.06 PM.jpeg",
        caption: "HIMAFI UNAIR Department Assembly & Graduation Flag Ceremony",
        tag: "Campus Celebration",
      },
    ],
  },
  {
    id: "pendekar-fst-2024",
    organization: "PENDEKAR FST 2024",
    role: "Expert Staff of Publication, Design, and Documentation",
    period: "Mar 2024 – Aug 2024",
    location: "Surabaya, Indonesia",
    logo: "/Logo Unair.png",
    badge: "Creative Team Direction",
    channel: {
      platform: "instagram",
      label: "@pendekarfst_unair",
      url: "https://instagram.com/pendekarfst_unair",
    },
    metrics: {
      value: "5 Members",
      label: "Design & Creative Team Supervised and Mentored",
    },
    bullets: [
      "Supervised and led a design team of 5 members in producing comprehensive visual materials for the event, including Instagram feed content (@pendekarfst_unair), banners merch, and various branding assets up to 20+ design.",
      "Collaborated with other divisions to translate event concepts into compelling visual content that resonated with the target audience.",
    ],
    tags: [
      "PDD Team Lead",
      "Event Visual Identity",
      "Merch & Banners",
      "20+ Designs",
      "Cross-Divisional Synergy",
    ],
    photos: [
      {
        src: "/org/WhatsApp Image 2026-10-23 at 7.17.07 PM (1).jpeg",
        caption: "PENDEKAR FST 2024 PDD Design & Documentation Crew",
        tag: "PDD Team",
      },
      {
        src: "/org/WhatsApp Image 2026-10-23 at 7.17.07 PM.jpeg",
        caption: "Live On-Site Documentation in Front of UNAIR Tower",
        tag: "Field Production",
      },
    ],
  },
  {
    id: "komunitas-prestasi-2023",
    organization: "KOMUNITAS PRESTASI 2023",
    role: "Staff of Media and Information",
    period: "Feb 2023 – Jan 2024",
    location: "Surabaya, Indonesia",
    badge: "Audiovisual & Medinfo",
    channel: {
      platform: "youtube",
      label: "YouTube: Komunitas Prestasi",
      url: "https://www.youtube.com/@komunitasprestasiunair",
    },
    metrics: {
      value: "20+ Works",
      label: "Designs, Video Profiles & Event Branding Collaterals",
    },
    bullets: [
      "Acted as the coordinator of video profile (YouTube: Komunitas Prestasi), created and managed visual content up to 20+ design and project such as Instagram feed designs, banners, and event materials to support the organization’s communication strategy.",
      "Ensured visual consistency and effective information delivery across platforms through close collaboration with internal teams.",
    ],
    tags: [
      "Video Profile Coordinator",
      "Medinfo Staff",
      "YouTube Production",
      "Brand Guidelines",
      "Digital Engagement",
    ],
    photos: [
      {
        src: "/org/WhatsApp Image 2026-10-23 at 7.17.08 PM (1).jpeg",
        caption: "Mentoring Class Batch 4: Business Plan (Medinfo Coordinator)",
        tag: "Stage Program",
      },
      {
        src: "/org/WhatsApp Image 2026-10-23 at 7.17.08 PM.jpeg",
        caption: "Komunitas Prestasi 2023 Member & Team Assembly",
        tag: "Community",
      },
      {
        src: "/org/WhatsApp Image 2026-10-23 at 7.17.08 PM (2).jpeg",
        caption: "Camera Operator & Live Talkshow Recording",
        tag: "Audiovisual",
      },
      {
        src: "/org/WhatsApp Image 2026-10-23 at 7.17.06 PM (1).jpeg",
        caption: "Komunitas Prestasi Inauguration & Welcoming Gathering",
        tag: "Organization",
      },
    ],
  },
  {
    id: "airlangga-youth-forum-2023",
    organization: "AIRLANGGA YOUTH ENVIRONMENTAL ACTION FORUM 2023",
    role: "Staff of Publication, Design, and Documentation",
    period: "Aug 2023 – Feb 2024",
    location: "Surabaya, Indonesia",
    logo: "/Logo Unair.png",
    badge: "Design & Campaign",
    bullets: [
      "Designed key visual assets for the event, including virtual backgrounds, guidebook layouts, and promotional content for social media.",
      "Contributed to maintaining a cohesive visual identity to support the forum’s environmental advocacy and engagement goals.",
    ],
    tags: [
      "Guidebook Layout",
      "Virtual Backgrounds",
      "Environmental Advocacy",
      "Social Campaign",
    ],
  },
  {
    id: "webinar-bmc-2023",
    organization: "Webinar BMC UNAIR X UPNVJT 2023",
    role: "Staff of Publication, Design, and Documentation",
    period: "Jun 2023 – Oct 2023",
    location: "Surabaya, Indonesia",
    logo: "/Logo Unair.png",
    badge: "Documentation & Archival",
    bullets: [
      "Designed official event certificates and supported the production of visual materials.",
      "Managed event documentation and archival to ensure organized and accessible records.",
    ],
    tags: [
      "Certificate Design",
      "Digital Archival",
      "Inter-University Forum",
      "Visual Documentation",
    ],
  },
];

const OVERALL_STATS = [
  { value: "50+", label: "Brand Assets Produced", icon: Palette },
  { value: "+45%", label: "IG Engagement Growth", icon: TrendingUp },
  { value: "5 Members", label: "Design Team Supervised", icon: Users },
  { value: "20+ Sets", label: "Merch & Event Branding", icon: Layers },
];

export default function OrganizationalExperience() {
  const [selectedPhoto, setSelectedPhoto] = useState<OrgPhoto | null>(null);

  return (
    <section id="organization" className="relative px-6 py-24 sm:py-32 overflow-hidden">
      {/* Apple-style background radial glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-1/2 top-1/3 translate-x-1/2 -translate-y-1/2 w-[650px] h-[450px] bg-gradient-to-bl from-indigo-500/10 via-sky-500/5 to-transparent blur-[140px] rounded-full"
      />

      <div className="relative z-10 mx-auto w-full max-w-5xl">
        {/* Apple HIG Header Block */}
        <div className="flex flex-col items-center text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-500/10 dark:bg-indigo-400/10 px-3.5 py-1 text-[11px] font-medium tracking-wider uppercase text-indigo-700 dark:text-indigo-300 backdrop-blur-md mb-4">
            <Sparkles className="h-3 w-3 text-indigo-500" />
            <span>Leadership & Creative Direction</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-semibold tracking-[-0.03em] text-foreground">
            Organizational Experience
          </h2>
          <p className="mt-4 max-w-2xl text-sm sm:text-base leading-relaxed text-foreground/60 dark:text-foreground/50">
            Leading creative media teams, driving digital growth strategies, and directing visual
            identities across student government, university forums, and academic organizations.
          </p>

          {/* Apple HIG Stats Metric Strip */}
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-3 w-full max-w-4xl">
            {OVERALL_STATS.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div
                  key={i}
                  className="rounded-2xl border border-black/[0.06] dark:border-white/[0.08] bg-white/60 dark:bg-[#121620]/60 backdrop-blur-xl p-4 text-center shadow-[0_4px_20px_rgba(0,0,0,0.03)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.4)]"
                >
                  <div className="flex items-center justify-center mb-1.5 text-indigo-600 dark:text-indigo-400">
                    <Icon className="h-4 w-4" />
                  </div>
                  <div className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">
                    {stat.value}
                  </div>
                  <div className="text-[11px] font-medium text-foreground/50 mt-0.5">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Organizations List */}
        <div className="space-y-8">
          {ORGANIZATIONS.map((org) => (
            <div
              key={org.id}
              className="group relative rounded-[28px] border border-black/[0.08] dark:border-white/[0.1] bg-white/70 dark:bg-[#0e1219]/75 backdrop-blur-2xl p-6 sm:p-9 shadow-[0_15px_45px_rgba(0,0,0,0.04)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.55)] transition-all duration-300 hover:border-indigo-500/30 hover:shadow-[0_25px_60px_rgba(99,102,241,0.08)] overflow-hidden"
            >
              {/* Apple Specular Top Rim */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/70 dark:via-white/25 to-transparent"
              />

              {/* Card Header */}
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-5 border-b border-black/[0.05] dark:border-white/[0.06] pb-6">
                <div className="flex items-start gap-4">
                  {/* Logo or Apple Monogram Emblem */}
                  <div className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-black/[0.08] dark:border-white/[0.1] bg-white dark:bg-[#161a24] shadow-sm overflow-hidden p-2">
                    {org.logo ? (
                      <Image
                        src={org.logo}
                        alt={org.organization}
                        width={48}
                        height={48}
                        className="object-contain"
                      />
                    ) : (
                      <div className="h-full w-full rounded-xl bg-gradient-to-tr from-indigo-500 to-sky-400 flex items-center justify-center text-white font-bold text-sm shadow-inner">
                        KP
                      </div>
                    )}
                  </div>

                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-1.5">
                      <span className="rounded-full border border-indigo-500/20 bg-indigo-500/10 px-2.5 py-0.5 text-[11px] font-semibold text-indigo-700 dark:text-indigo-300">
                        {org.badge || "Organization"}
                      </span>
                      {org.channel && (
                        <a
                          href={org.channel.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 rounded-full border border-black/[0.06] dark:border-white/[0.08] bg-black/[0.02] dark:bg-white/[0.04] px-2.5 py-0.5 text-[11px] font-medium text-foreground/70 hover:text-foreground hover:bg-black/[0.05] transition-colors"
                        >
                          {org.channel.platform === "youtube" ? (
                            <YouTubeIcon className="h-3 w-3 text-red-500" />
                          ) : (
                            <InstagramIcon className="h-3 w-3 text-pink-500" />
                          )}
                          <span>{org.channel.label}</span>
                          <ExternalLink className="h-2.5 w-2.5 opacity-60" />
                        </a>
                      )}
                    </div>

                    <h3 className="text-xl sm:text-2xl font-semibold tracking-[-0.02em] text-foreground">
                      {org.organization}
                    </h3>
                    <p className="text-sm font-medium text-foreground/60 dark:text-foreground/55 mt-0.5">
                      {org.role}
                    </p>
                  </div>
                </div>

                {/* Right metadata badge */}
                <div className="flex flex-col sm:items-end gap-1.5 shrink-0 self-start">
                  <div className="inline-flex items-center gap-1.5 rounded-full border border-black/[0.06] dark:border-white/[0.08] bg-black/[0.02] dark:bg-white/[0.03] px-3 py-1 text-xs font-medium text-foreground/60 tabular-nums">
                    <Calendar className="h-3 w-3 text-foreground/40" />
                    {org.period}
                  </div>
                  <div className="inline-flex items-center gap-1 text-[11px] font-medium text-foreground/45 px-1">
                    <MapPin className="h-3 w-3 text-foreground/40" />
                    {org.location}
                  </div>
                </div>
              </div>

              {/* Optional Highlight Metric */}
              {org.metrics && (
                <div className="mt-5 inline-flex items-center gap-3 rounded-xl border border-indigo-500/20 bg-indigo-500/5 dark:bg-indigo-500/10 px-4 py-2 text-xs">
                  <span className="font-bold text-indigo-700 dark:text-indigo-400 text-sm">
                    {org.metrics.value}
                  </span>
                  <span className="text-foreground/70">
                    {org.metrics.label}
                  </span>
                </div>
              )}

              {/* Bullets */}
              <div className="mt-5 space-y-3">
                {org.bullets.map((bullet, bi) => (
                  <div key={bi} className="flex items-start gap-3">
                    <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-indigo-500 dark:bg-indigo-400 shrink-0" />
                    <p className="text-xs sm:text-sm leading-relaxed text-foreground/75 dark:text-foreground/70">
                      {bullet}
                    </p>
                  </div>
                ))}
              </div>

              {/* Event Photos Gallery Strip (Apple-style preview thumbnails) */}
              {org.photos && org.photos.length > 0 && (
                <div className="mt-6 pt-5 border-t border-black/[0.05] dark:border-white/[0.06]">
                  <div className="flex items-center gap-2 mb-3">
                    <Camera className="h-3.5 w-3.5 text-foreground/40" />
                    <span className="text-xs font-semibold tracking-tight text-foreground/60 uppercase">
                      Documentation & Visual Materials ({org.photos.length})
                    </span>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {org.photos.map((photo, pi) => (
                      <button
                        key={pi}
                        type="button"
                        onClick={() => setSelectedPhoto(photo)}
                        className="group/photo relative aspect-[4/3] rounded-xl overflow-hidden border border-black/[0.08] dark:border-white/[0.1] bg-black/5 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      >
                        <Image
                          src={encodeURI(photo.src)}
                          alt={photo.caption}
                          fill
                          sizes="(max-width: 640px) 50vw, 25vw"
                          className="object-cover transition-transform duration-300 group-hover/photo:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover/photo:opacity-100 transition-opacity flex items-end p-2.5">
                          <span className="text-[10px] font-medium text-white line-clamp-1 text-left flex items-center gap-1">
                            <Maximize2 className="h-3 w-3 shrink-0" />
                            {photo.tag}
                          </span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Tags */}
              <div className="mt-6 pt-4 border-t border-black/[0.04] dark:border-white/[0.05] flex flex-wrap items-center gap-1.5">
                {org.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-black/[0.06] dark:border-white/[0.08] bg-black/[0.02] dark:bg-white/[0.03] px-3 py-0.5 text-xs font-medium text-foreground/65"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Apple-style Lightbox Modal for Event Documentation Photos */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setSelectedPhoto(null)}
        >
          <div
            className="relative max-w-4xl w-full rounded-2xl overflow-hidden border border-white/20 bg-[#0e1219] shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-5 py-3.5 border-b border-white/10 bg-white/[0.03]">
              <div className="flex items-center gap-2">
                <span className="rounded-full bg-indigo-500/20 text-indigo-300 text-[11px] font-semibold px-2.5 py-0.5">
                  {selectedPhoto.tag}
                </span>
                <span className="text-xs text-white/80 font-medium">
                  {selectedPhoto.caption}
                </span>
              </div>
              <button
                type="button"
                onClick={() => setSelectedPhoto(null)}
                className="rounded-full p-1.5 text-white/70 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Close"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Modal Image Display */}
            <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full bg-black/50">
              <Image
                src={encodeURI(selectedPhoto.src)}
                alt={selectedPhoto.caption}
                fill
                sizes="100vw"
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
