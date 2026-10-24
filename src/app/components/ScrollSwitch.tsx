"use client";

import { useEffect, useRef } from "react";
import Switch from "./Switch";

// ---- Desktop feel ----
const SHRINK = 0.20; // final scale = 1 - SHRINK = 0.55
const SHIFT = 0.2; // how far it moves right, as a fraction of the section width
const TOP_GAP = 35; // px between the hero and the Switch before the animation starts

// ---- Mobile feel ----
const MOBILE_SHRINK = 0.3; // final scale = 0.7
const MOBILE_TOP = 24; // px from the top of the screen (keep in sync with pt-6 below)
const MOBILE_GAP = 16; // px between the Switch, the info panel, and the screen edges

// ---- Shared timing ----
const MOVE_DONE_AT = 0.6; // shrink/move finishes at 60% of the scroll distance
const INFO_START = 0.4; // info panel starts fading in at 40%
const INFO_END = 0.8; // and is fully visible at 80%

export default function ScrollSwitch() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const switchRef = useRef<HTMLDivElement>(null);
  const infoWrapRef = useRef<HTMLDivElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    let frame = 0;

    const update = () => {
      const section = sectionRef.current;
      const sw = switchRef.current;
      const wrap = infoWrapRef.current;
      const info = infoRef.current;
      if (!section || !sw || !wrap || !info) return;

      const rect = section.getBoundingClientRect();
      const distance = rect.height - window.innerHeight;
      const p = Math.min(Math.max(-rect.top / distance, 0), 1);

      const t = Math.min(p / MOVE_DONE_AT, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      const i = Math.min(Math.max((p - INFO_START) / (INFO_END - INFO_START), 0), 1);

      info.style.opacity = String(i);

      if (mq.matches) {
        // ---------- DESKTOP: shrink, move right + down to center, info on the left ----------
        const scale = 1 - SHRINK * eased;
        const x = section.clientWidth * SHIFT * eased;
        const startOffset = window.innerHeight / 2 - sw.offsetHeight / 2 - TOP_GAP;
        const y = -(1 - eased) * Math.max(startOffset, 0);

        sw.style.transformOrigin = "";
        sw.style.transform = `translate(${x}px, ${y}px) scale(${scale})`;

        wrap.style.top = "";
        wrap.style.bottom = "";
        info.style.transform = `translateX(${(1 - i) * -40}px)`;
      } else {
        // ---------- MOBILE: shrink toward the top, info slides up underneath ----------
        const scale = 1 - MOBILE_SHRINK * eased;

        sw.style.transformOrigin = "50% 0"; // shrink toward the top so it never drifts down
        sw.style.transform = `scale(${scale})`;

        // Info panel sits below the Switch's FINAL size and stops before the screen bottom,
        // so it can never run off-screen (it scrolls inside itself if the text is long).
        const finalSwitchHeight = sw.offsetHeight * (1 - MOBILE_SHRINK);
        wrap.style.top = `${MOBILE_TOP + finalSwitchHeight + MOBILE_GAP}px`;
        wrap.style.bottom = `${MOBILE_GAP}px`;
        info.style.transform = `translateY(${(1 - i) * 40}px)`;
      }
    };

    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    mq.addEventListener("change", update);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      mq.removeEventListener("change", update);
    };
  }, []);

  return (
    // Tall section = the scroll distance for the animation
    <div ref={sectionRef} className="relative h-[200vh] md:h-[250vh]">
      {/* Sticks to the screen while you scroll through the section */}
      <div className="sticky top-0 h-dvh">
        {/* Switch layer: top of the screen on mobile, vertically centered on desktop */}
        <div className="absolute inset-x-0 top-0 flex justify-center pt-6 md:inset-0 md:items-center md:pt-0">
          <div ref={switchRef} className="w-full will-change-transform">
            <Switch />
          </div>
        </div>

        {/* Info layer: below the Switch on mobile, left side on desktop */}
        <div
          ref={infoWrapRef}
          className="absolute inset-x-0 flex flex-col justify-start md:inset-x-auto md:inset-y-0 md:left-0 md:w-[42%] md:justify-center"
        >
          <div
            ref={infoRef}
            className="max-h-full overflow-y-auto rounded-lg bg-black/40 p-4 opacity-0 backdrop-blur md:max-h-none md:overflow-visible md:p-6"
          >
            <h2 className="text-2xl font-bold md:text-3xl">What we make</h2>
            <p className="py-3 md:py-4">
              Info about the group goes here. Describe the mods, the team, and
              what people can expect from each release.
            </p>
            <ul className="list-disc space-y-1 pl-5">
              <li>New levels and worlds</li>
              <li>Custom powerups and enemies</li>
              <li>Regular updates and bug fixes</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}