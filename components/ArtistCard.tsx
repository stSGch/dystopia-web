"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export type Tier = "Headliner" | "Swiss Support" | "Support" | string;

export default function ArtistCard({
  name,
  tier,
  image,
  delay = 0,
  blurred = false,
}: {
  name: string;
  tier: Tier;
  image: string;
  delay?: number;
  blurred?: boolean;
}) {
  const isHeadliner = tier === "Headliner";

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={
        "group relative overflow-hidden rounded-2xl border bg-black lift " +
        (isHeadliner
          ? "border-[#cd4903]/50 hover:border-[#ff6a1a]/80"
          : "border-white/10 hover:border-[#cd4903]/40")
      }
    >
      {/* Portrait */}
      <div className="relative aspect-square w-full overflow-hidden">
        <Image
          src={image}
          alt={
            blurred
              ? "Mystery Act — Reveal soon bei DYSTOPIA"
              : `${name} — Drum & Bass ${tier} bei DYSTOPIA, Stadtsaal Wil 19.09.2026`
          }
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className={
            "object-cover transition duration-700 group-hover:scale-[1.04] " +
            (blurred ? "blur-2xl scale-110 brightness-50 saturate-50" : "")
          }
        />

        {/* Bottom gradient for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />

        {/* Subtle orange duotone wash on hover (so all photos feel like one set) */}
        {!blurred && (
          <div className="absolute inset-0 bg-[#cd4903]/0 mix-blend-multiply transition duration-500 group-hover:bg-[#cd4903]/15" />
        )}

        {/* Extra dark overlay when blurred */}
        {blurred && (
          <div className="absolute inset-0 bg-black/40" />
        )}

        {/* Brushed-metal sheen */}
        <div className="absolute inset-0 metal-texture opacity-20 pointer-events-none" />

        {/* Tier badge */}
        <span
          className={
            "absolute top-3 left-3 text-[10px] tracking-[0.3em] rounded-full px-3 py-1 backdrop-blur " +
            (isHeadliner
              ? "border border-[#cd4903]/60 bg-[#cd4903]/25 text-white"
              : "border border-white/20 bg-black/50 text-white/80")
          }
        >
          {tier.toUpperCase()}
        </span>

        {/* Pulsing dot for revealed Headliners */}
        {isHeadliner && !blurred && (
          <span className="absolute top-3 right-3 h-2 w-2 rounded-full bg-[#ff6a1a] pulse-dot" />
        )}

        {/* Center "REVEAL SOON" stamp when blurred */}
        {blurred && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="rounded-full border border-[#cd4903]/50 bg-black/60 backdrop-blur px-5 py-2">
              <span className="text-[11px] tracking-[0.35em] text-[#ff6a1a]">
                REVEAL SOON
              </span>
            </div>
          </div>
        )}

        {/* Name */}
        <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
          <p
            className="text-2xl sm:text-[26px] font-black tracking-tight text-white"
            style={{ textShadow: "0 2px 18px rgba(0,0,0,0.7)" }}
          >
            {blurred ? "?? ??? ??" : name}
          </p>
        </div>
      </div>

      {/* Bottom hairline + meta strip */}
      <div className="relative px-4 sm:px-5 py-3 border-t border-white/10 bg-gradient-to-b from-black to-[#0a0a0c]">
        <div className="flex items-center justify-between">
          <p className="text-[11px] tracking-[0.25em] text-white/55">
            {blurred
              ? "SIGNAL VERSCHLÜSSELT"
              : isHeadliner
              ? "MAIN STAGE · DYSTOPIA"
              : "DYSTOPIA · 19.09.2026"}
          </p>
          <span className="text-[11px] tracking-[0.3em] text-white/35 group-hover:text-[#ff6a1a] transition">
            →
          </span>
        </div>
      </div>
    </motion.div>
  );
}
