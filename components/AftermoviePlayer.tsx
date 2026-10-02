"use client";

import { useRef, useState } from "react";

/**
 * Aftermovie als selbst gehostetes HTML5-Video (kein Drittanbieter, kein Consent).
 * - preload="none": beim Seitenaufruf lädt nur das Poster (~20 KB). Videodaten
 *   fliessen erst nach dem Tap auf Play.
 * - WebM (VP9) zuerst, MP4 (H.264) als Fallback für ältere Safari-Versionen.
 * - Native Controls erscheinen erst nach dem Start, davor liegt der Play-Button
 *   im Brand-Look über dem Poster.
 */
export default function AftermoviePlayer() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [started, setStarted] = useState(false);

  const start = () => {
    setStarted(true);
    videoRef.current?.play().catch(() => {});
  };

  return (
    <div
      id="aftermovie"
      className="relative mx-auto aspect-[9/16] w-full max-w-[calc(72svh*9/16)] scroll-mt-24 overflow-hidden rounded-2xl border border-[#cd4903]/40 bg-black shadow-[0_0_60px_rgba(205,73,3,0.25)]"
    >
      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-cover"
        poster="/video/aftermovie-2026-poster.webp"
        preload="none"
        playsInline
        controls={started}
        aria-label="DYSTOPIA 2026 — Aftermovie aus dem Stadtsaal Wil"
      >
        <source src="/video/aftermovie-2026.webm" type='video/webm; codecs="vp9, opus"' />
        <source src="/video/aftermovie-2026.mp4" type="video/mp4" />
      </video>

      {!started && (
        <button
          type="button"
          onClick={start}
          data-umami-event="Aftermovie Play"
          aria-label="Aftermovie abspielen (mit Ton)"
          className="group absolute inset-0 flex flex-col items-center justify-end gap-4 bg-gradient-to-t from-black/80 via-black/10 to-transparent pb-10 focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-[#ff6a1a]"
        >
          <span className="flex h-20 w-20 items-center justify-center rounded-full bg-[#cd4903] shadow-[0_0_40px_rgba(205,73,3,0.6)] transition group-hover:scale-105 group-hover:brightness-110">
            <svg
              aria-hidden
              viewBox="0 0 24 24"
              className="ml-1 h-8 w-8 fill-white"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </span>
          <span className="text-[11px] tracking-[0.3em] text-white/85">
            AFTERMOVIE ANSEHEN · 0:35
          </span>
        </button>
      )}
    </div>
  );
}
