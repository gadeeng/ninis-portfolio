"use client";

import { useEffect, useState } from "react";
import AeroShards from "@/components/AeroShards";
import { GridPulse } from "@/components/BG";

/**
 * Home background: AeroShards (WebGPU) themed to the site's blue palette.
 * Follows the `html.light` theme class and falls back to GridPulse
 * when WebGPU is unavailable.
 */
export default function HomeBackground() {
  const [light, setLight] = useState(false);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    const sync = () => setLight(root.classList.contains("light"));
    sync();
    const mo = new MutationObserver(sync);
    mo.observe(root, { attributes: true, attributeFilter: ["class"] });
    return () => mo.disconnect();
  }, []);

  if (failed) {
    return (
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0 opacity-40">
        <GridPulse />
      </div>
    );
  }

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0 opacity-40 transition-opacity duration-700">
      <AeroShards
        shardColor="#233B5D"
        accentColor="#52769B"
        backgroundColor="transparent"
        lightMode={light}
        placement="full"
        material="glass"
        glow={0.2}
        onError={() => setFailed(true)}
      />
    </div>
  );
}
