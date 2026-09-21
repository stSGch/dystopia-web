"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";

export type Tier = "Headliner" | "Swiss Support" | "Support" | string;

/**
 * Harte, flyer-treue Karte: eckig, 1px-Kante, Name in Barlow Condensed.
 * Headliner mit `video`: Hover/Fokus spielt den Präsentations-Clip
 * (preload="none" — geladen wird erst bei der ersten Interaktion).
 */
export default function ArtistCard({
  name,
  tier,
  image,
  video,
  delay = 0,
  compact = false,
}: {
  name: string;
  tier: Tier;
  image: string;
  video?: string;
  delay?: number;
  /** Flachere Karte (4:3) für die Support-Reihe — bricht das Einheitsraster */
  compact?: boolean;
}) {
  const isHeadliner = tier === "Headliner";
  const videoRef = useRef<HTMLVideoElement>(null);
  const reducedMotion = useReducedMotion();

  const play = () => {
    if (reducedMotion) return;
    videoRef.current?.play().catch(() => {});
  };
  const stop = () => {
    const v = videoRef.current;
    if (!v) return;
    v.pause();
    v.currentTime = 0;
  };

  return (
    <motion.div
      initial={reducedMotion ? false : { opacity: 0, y: 10 }}
      whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, delay, ease: "easeOut" }}
      className={
        "group relative overflow-hidden border bg-black " +
        (isHeadliner
          ? "border-[#cd4903]/60 hover:border-[#ff6a1a]"
          : "border-white/12 hover:border-[#cd4903]/60")
      }
      onMouseEnter={video ? play : undefined}
      onMouseLeave={video ? stop : undefined}
    >
      {/* Portrait / Video */}
      <div
        className={
          "relative w-full overflow-hidden " +
          (compact ? "aspect-[4/3]" : "aspect-square")
        }
      >
        <Image
          src={image}
          alt={`${name} — Drum & Bass ${tier} bei DYSTOPIA, Stadtsaal Wil 19.09.2026`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition duration-500 group-hover:scale-[1.03]"
        />

        {video && (
          <video
            ref={videoRef}
            className="motion-video absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-within:opacity-100"
            src={video}
            muted
            loop
            playsInline
            preload="none"
            aria-hidden
          />
        )}

        {/* Lesbarkeits-Verlauf unten */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-black/45 to-transparent" />

        {/* Tier-Marke: hartes Rechteck, Flyer-Sprache */}
        <span
          className={
            "font-wide absolute top-0 left-0 px-3 py-1.5 text-[10px] font-bold tracking-[0.22em] uppercase " +
            (isHeadliner
              ? "bg-[#cd4903] text-white"
              : "border-r border-b border-white/15 bg-black/70 text-white/80")
          }
        >
          {tier}
        </span>

        {video && (
          <span className="font-wide absolute top-0 right-0 border-b border-l border-white/15 bg-black/70 px-2.5 py-1.5 text-[9px] font-bold tracking-[0.2em] text-white/70 uppercase">
            ▶ Clip
          </span>
        )}

        {/* Name */}
        <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
          <p
            className={
              "font-display font-bold uppercase leading-none tracking-tight text-white " +
              (compact ? "text-3xl sm:text-4xl" : "text-4xl sm:text-[42px]")
            }
            style={{ textShadow: "0 2px 18px rgba(0,0,0,0.7)" }}
          >
            {name}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
