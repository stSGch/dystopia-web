"use client";

import Image from "next/image";
import { useState } from "react";

/**
 * Vollbreite Video-Sektion: der 56-Sekunden-Clip "Wil vs. DnB".
 * Click-to-play — die 70-MB-Datei wird erst auf Nutzer-Klick geladen.
 */
export default function WilVsDnb() {
  const [playing, setPlaying] = useState(false);

  return (
    <section className="relative border-t border-white/10 bg-black">
      {/* Dauerhafte Überschrift für Heading-Struktur & SEO — der sichtbare
          Titel lebt im Play-Button und verschwindet beim Abspielen */}
      <h2 className="sr-only">Wil vs. Drum and Bass — der Film zum Event</h2>
      <div className="relative aspect-video max-h-[80svh] w-full overflow-hidden">
        {playing ? (
          <video
            ref={(el) => el?.focus()}
            className="h-full w-full object-cover"
            src="/video/wil-vs-dnb.mp4"
            autoPlay
            controls
            playsInline
            preload="none"
          />
        ) : (
          <button
            type="button"
            onClick={() => setPlaying(true)}
            className="group relative block h-full w-full text-left"
            aria-label="Video abspielen: Wil vs. Drum and Bass (56 Sekunden)"
          >
            <Image
              src="/flyer-169.jpg"
              alt=""
              fill
              sizes="100vw"
              className="object-cover object-center opacity-40 transition duration-500 group-hover:opacity-55"
            />
            <span className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40" />

            <span className="absolute inset-x-0 bottom-0 flex flex-wrap items-end justify-between gap-6 p-6 sm:p-10">
              <span>
                <span className="font-wide block text-[11px] font-bold tracking-[0.25em] text-[#ff6a1a] uppercase">
                  Der Film zum Event
                </span>
                <span className="font-display mt-2 block text-5xl font-bold uppercase leading-[0.95] text-white sm:text-7xl">
                  Wil vs. Drum&nbsp;and&nbsp;Bass
                </span>
              </span>
              <span className="font-display inline-flex items-center gap-3 bg-[#cd4903] px-7 py-3.5 text-lg font-bold uppercase tracking-wide text-white transition group-hover:bg-[#ff6a1a] group-hover:text-black">
                ▶ Abspielen — 56 Sek.
              </span>
            </span>
          </button>
        )}
      </div>
    </section>
  );
}
