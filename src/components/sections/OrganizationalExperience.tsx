"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ExternalLink, X, Maximize2 } from "lucide-react";

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

function TikTokIcon({ className = "h-3 w-3" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.298-.002.595.042.88.13V9.4a6.33 6.33 0 0 0-1-.08A6.34 6.34 0 0 0 3 15.66a6.34 6.34 0 0 0 10.82 4.49 6.27 6.27 0 0 0 1.96-4.49V8.62a8.28 8.28 0 0 0 5.25 1.86v-3.48a4.83 4.83 0 0 1-1.44-.31z" />
    </svg>
  );
}

interface OrgPhoto {
  src: string;
  caption: string;
  tag: string;
}

interface OrgChannel {
  platform: "instagram" | "youtube" | "tiktok";
  label: string;
  url?: string;
}

interface OrganizationEntry {
  id: string;
  organization: string;
  role: string;
  period: string;
  location: string;
  logo?: string;
  badge?: string;
  channel?: OrgChannel;
  channels?: OrgChannel[];
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
    channels: [
      {
        platform: "instagram",
        label: "@himafiunair",
        url: "https://instagram.com/himafiunair",
      },
      {
        platform: "tiktok",
        label: "TikTok: @himafiunair",
        url: "https://www.tiktok.com/@himafiunair?is_from_webapp=1&sender_device=pc",
      },
    ],
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
    logo: "/kompres.jpg",
    badge: "Audiovisual & Medinfo",
    channel: {
      platform: "youtube",
      label: "YouTube: Komunitas Prestasi",
      url: "https://www.youtube.com/@komunitasprestasi905",
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

export default function OrganizationalExperience() {
  const [selectedPhoto, setSelectedPhoto] = useState<OrgPhoto | null>(null);

  return (
    <section id="organization" className="relative px-6 py-24 sm:py-28">
      <div className="relative z-10 mx-auto w-full max-w-5xl">
        <h2 className="mb-10 text-3xl font-semibold tracking-tight md:text-4xl text-foreground">
          Organizational Experience
        </h2>

        <div className="border-t border-foreground/[0.08]">
          {ORGANIZATIONS.map((org, idx) => (
            <div key={org.id} className="border-b border-foreground/[0.08]">
              <div className="flex flex-col sm:flex-row sm:items-start gap-6 py-10 sm:py-12 group -mx-4 px-4 transition-colors hover:bg-foreground/[0.015] rounded-xl">
                {/* Left: index + logo */}
                <div className="flex sm:flex-col items-center gap-4 sm:gap-3 sm:w-[72px] shrink-0">
                  <span className="hidden sm:block text-[11px] font-mono text-foreground/20 tabular-nums text-center w-full">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <div className="relative h-12 w-12 sm:h-14 sm:w-14 shrink-0 overflow-hidden rounded-[16px] border border-foreground/[0.08] bg-white shadow-sm">
                    {org.logo ? (
                      <Image
                        src={org.logo}
                        alt={`${org.organization} logo`}
                        fill
                        sizes="56px"
                        className="object-contain p-1.5"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center bg-gradient-to-tr from-indigo-500 to-sky-400 text-sm font-bold text-white">
                        KP
                      </div>
                    )}
                  </div>
                </div>

                {/* Right: content */}
                <div className="flex-1 min-w-0">
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                    <div className="flex-1 min-w-0">
                      <p className="text-[11px] font-medium uppercase tracking-[0.15em] text-foreground/35 mb-1.5">
                        {org.organization}
                      </p>
                      <h3 className="text-[17px] sm:text-lg font-semibold tracking-[-0.015em] text-foreground leading-snug">
                        {org.role}
                      </h3>
                      <div className="mt-1.5 flex flex-wrap items-center gap-x-2 gap-y-0.5">
                        <span className="text-[12px] text-foreground/40">
                          {org.location}
                        </span>
                        {org.badge && (
                          <>
                            <span className="text-foreground/20 text-[10px]">·</span>
                            <span className="text-[12px] text-foreground/40">
                              {org.badge}
                            </span>
                          </>
                        )}
                        {(() => {
                          const channelsList =
                            org.channels ?? (org.channel ? [org.channel] : []);
                          return channelsList.map((ch, ci) => (
                            <React.Fragment key={ci}>
                              <span className="text-foreground/20 text-[10px]">·</span>
                              <a
                                href={ch.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1 text-[12px] text-foreground/40 transition-colors hover:text-foreground/70"
                              >
                                {ch.platform === "youtube" ? (
                                  <YouTubeIcon className="h-3 w-3" />
                                ) : ch.platform === "tiktok" ? (
                                  <TikTokIcon className="h-3 w-3" />
                                ) : (
                                  <InstagramIcon className="h-3 w-3" />
                                )}
                                {ch.label}
                                <ExternalLink className="h-2.5 w-2.5 opacity-60" />
                              </a>
                            </React.Fragment>
                          ));
                        })()}
                      </div>
                    </div>
                    <span className="self-start shrink-0 rounded-full border border-foreground/[0.08] bg-foreground/[0.03] px-3 py-1 text-[11px] font-medium tabular-nums text-foreground/45 whitespace-nowrap">
                      {org.period}
                    </span>
                  </div>

                  {/* Bullets */}
                  <div className="mt-5 border-t border-foreground/[0.06] pt-5 space-y-3">
                    {org.metrics && (
                      <div className="flex gap-3">
                        <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-foreground/25" />
                        <p className="text-[13px] sm:text-sm leading-relaxed text-foreground/55">
                          <span className="font-semibold text-foreground/80">
                            {org.metrics.value}
                          </span>{" "}
                          {org.metrics.label}
                        </p>
                      </div>
                    )}
                    {org.bullets.map((b, bi) => (
                      <div key={bi} className="flex gap-3">
                        <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-foreground/25" />
                        <p className="text-[13px] sm:text-sm leading-relaxed text-foreground/55">
                          {b}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Photos */}
                  {org.photos && org.photos.length > 0 && (
                    <div className="mt-5 grid grid-cols-2 sm:grid-cols-4 gap-3">
                      {org.photos.map((photo, pi) => (
                        <button
                          key={pi}
                          type="button"
                          onClick={() => setSelectedPhoto(photo)}
                          className="group/photo relative aspect-[4/3] overflow-hidden rounded-xl border border-foreground/[0.08] bg-foreground/5 focus:outline-none focus:ring-2 focus:ring-foreground/30"
                        >
                          <Image
                            src={encodeURI(photo.src)}
                            alt={photo.caption}
                            fill
                            sizes="(max-width: 640px) 50vw, 25vw"
                            className="object-cover transition-transform duration-300 group-hover/photo:scale-105"
                          />
                          <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/70 via-black/20 to-transparent p-2.5 opacity-0 transition-opacity group-hover/photo:opacity-100">
                            <span className="flex items-center gap-1 text-left text-[10px] font-medium text-white line-clamp-1">
                              <Maximize2 className="h-3 w-3 shrink-0" />
                              {photo.tag}
                            </span>
                          </div>
                        </button>
                      ))}
                    </div>
                  )}

                  {/* Tags */}
                  <div className="mt-5 flex flex-wrap items-center gap-1.5">
                    {org.tags.map((tag) => (
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

      {/* Lightbox */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setSelectedPhoto(null)}
        >
          <div
            className="relative max-w-4xl w-full rounded-2xl overflow-hidden border border-white/20 bg-[#0e1219] shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-5 py-3.5 border-b border-white/10 bg-white/[0.03]">
              <div className="flex items-center gap-2">
                <span className="rounded-full bg-white/10 text-white/80 text-[11px] font-semibold px-2.5 py-0.5">
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
