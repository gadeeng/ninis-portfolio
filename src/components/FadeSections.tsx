"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Visual fade (opacity + blur + slight lift) for every section's content,
 * scrubbed to scroll. Content fades in as its section enters the viewport and
 * fades out as it leaves. Only the section's children are animated.
 *
 * Next.js uses its own router, so Swup is not applicable;
 * this reproduces the crossfade + blur look with ScrollTrigger instead.
 */
export default function FadeSections({ scopeId = "page-main" }: { scopeId?: string }) {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const scope = document.getElementById(scopeId);
    if (!scope) return;

    const ctx = gsap.context(() => {
      const sections = Array.from(
        scope.querySelectorAll<HTMLElement>(":scope > section, :scope > footer"),
      );

      sections.forEach((section, i) => {
        const targets = Array.from(section.children).filter(
          (el) =>
            !el.hasAttribute("data-st-overlay-el") &&
            !el.hasAttribute("data-fade-mask") &&
            el.getAttribute("data-slot") !== "grid-pulse",
        );
        if (targets.length === 0) return;

        const isFirst = i === 0;
        const isLast = i === sections.length - 1;
        const hidden = { opacity: 0, y: 24 };
        const shown = { opacity: 1, y: 0, ease: "power1.out" };

        // Fade in (skip the first section: it is visible on load; skip the
        // revealed footer: it already emerges from behind the previous section).
        if (!isFirst && !isLast) {
          gsap.fromTo(targets, hidden, {
            ...shown,
            scrollTrigger: {
              trigger: section,
              start: "top 85%",
              end: "top 28%",
              scrub: 0.5,
            },
          });
        }

        // Fade out (skip the last section: nothing follows it).
        if (!isLast) {
          gsap.fromTo(
            targets,
            { opacity: 1, y: 0 },
            {
              opacity: 0,
              y: -24,
              ease: "power1.in",
              immediateRender: false,
              scrollTrigger: {
                trigger: section,
                start: "bottom 85%",
                end: "bottom 20%",
                scrub: 0.5,
              },
            },
          );
        }
      });
    }, scope);

    document.fonts?.ready.then(() => ScrollTrigger.refresh()).catch(() => {});
    return () => ctx.revert();
  }, [scopeId]);

  return null;
}
