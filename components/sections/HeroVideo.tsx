"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Hintergrund-Video des Heros als Client-Insel.
 * - Rendert das <video> erst nach Mount und nur, wenn prefers-reduced-motion
 *   NICHT aktiv ist — so wird die grosse Datei fuer diese Nutzer nie geladen
 *   (display:none allein wuerde den Download nicht verhindern).
 * - Pause/Play-Umschalter unten rechts (WCAG 2.2.2: bewegte Inhalte > 5 s
 *   brauchen einen Stopp-Mechanismus).
 * Das Poster-Standbild liegt als <Image> in der Server-Komponente darunter.
 */
export default function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [showVideo, setShowVideo] = useState(false);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setShowVideo(true);
    }
  }, []);

  if (!showVideo) return null;

  const toggle = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      v.play().catch(() => {});
      setPaused(false);
    } else {
      v.pause();
      setPaused(true);
    }
  };

  return (
    <>
      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-cover opacity-75"
        src="/video/hero.mp4"
        autoPlay
        muted
        loop
        playsInline
        aria-hidden
      />
      <button
        type="button"
        onClick={toggle}
        aria-label={
          paused ? "Hintergrundvideo abspielen" : "Hintergrundvideo pausieren"
        }
        aria-pressed={paused}
        className="font-wide absolute right-4 bottom-4 z-10 border border-white/30 bg-black/60 px-3 py-2 text-[11px] font-bold tracking-[0.2em] text-white/90 uppercase backdrop-blur transition hover:border-[#ff6a1a] hover:text-[#ff6a1a] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff6a1a]"
      >
        {paused ? "▶ Video" : "❚❚ Video"}
      </button>
    </>
  );
}
