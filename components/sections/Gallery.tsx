"use client";

import { useCallback, useEffect, useRef, useState } from "react";

type Photo = {
  /** Dateiname ohne Präfix und Grössen-Suffix, liegt in /public/gallery/ */
  id: string;
  /** Bildunterschrift auf der Kachel — nur bei Artist-Fotos */
  caption?: string;
  alt: string;
};

// Die ersten PREVIEW_COUNT Bilder sind die Vorschau: pro Artist ein Bild, auf dem
// man sie gut erkennt, dazu 4× Crowd. Der Rest erscheint erst nach «Mehr anzeigen» —
// und wird auch erst dann geladen. Reihenfolge (Mobile First, 2 Spalten):
// beschriftete Artist-Fotos und Crowd-Fotos sind durchmischt und wechseln die Spalte.
const PREVIEW_COUNT = 10;

const PHOTOS: Photo[] = [
  // — Vorschau —
  { id: "fox-stevenson-3", caption: "Fox Stevenson", alt: "Fox Stevenson an den Decks vor der LED-Wall — DYSTOPIA 2026" },
  { id: "crowd-6", alt: "Raverin im blauen Licht an der Front Row — DYSTOPIA 2026 in Wil" },
  { id: "crowd-12", alt: "Besucher an der Absperrung, Schwarz-Weiss-Aufnahme — DYSTOPIA 2026" },
  { id: "tantron-1", caption: "Tantron", alt: "Tantron zeigt in die Kamera — Drum & Bass Headliner bei DYSTOPIA 2026" },
  { id: "arcando-6", caption: "Arcando", alt: "Arcando mit erhobenem Arm hinter den Decks — DYSTOPIA 2026" },
  { id: "crowd-1", alt: "Lachende Besucherin in der ersten Reihe — DYSTOPIA 2026" },
  { id: "crowd-13", alt: "Hochgestreckte Hände an der Absperrung — DYSTOPIA 2026" },
  { id: "luiff-4", caption: "LUiFF", alt: "LUiFF hinter den Decks — Support bei DYSTOPIA 2026" },
  { id: "gingerbell-3", caption: "Gingerbell", alt: "Gingerbell vor roter LED-Wall — DYSTOPIA 2026 im Stadtsaal Wil" },
  { id: "npstr-1", caption: "NPSTR", alt: "NPSTR an den Decks vor den LED-Walls — Swiss Support bei DYSTOPIA 2026" },
  // — nach «Mehr anzeigen» —
  { id: "arcando-2", caption: "Arcando", alt: "Konfettiregen und Lichtshow beim Set von Arcando — DYSTOPIA 2026 im Stadtsaal Wil" },
  { id: "crowd-10", alt: "Tanzender Raver im roten Licht — DYSTOPIA 2026, Stadtsaal Wil" },
  { id: "npstr-2", caption: "NPSTR", alt: "NPSTR an den Decks, Schwarz-Weiss-Aufnahme — DYSTOPIA 2026" },
  { id: "fox-stevenson-6", caption: "Fox Stevenson", alt: "Fox Stevenson vor der Crowd im Konfettiregen — DYSTOPIA 2026" },
  { id: "crowd-8", alt: "Hände in der Luft an der Absperrung — Crowd bei DYSTOPIA 2026" },
  { id: "tantron-2", caption: "Tantron", alt: "Tantron mit ausgebreiteten Armen auf der Bühne — DYSTOPIA 2026" },
  { id: "arcando-7", caption: "Arcando", alt: "Arcando vor dem vollen Stadtsaal Wil, Schwarz-Weiss-Aufnahme — DYSTOPIA 2026" },
  { id: "crowd-15", alt: "Raver mit hochgerissenen Armen — Drum & Bass im Stadtsaal Wil, DYSTOPIA 2026" },
  { id: "gingerbell-2", caption: "Gingerbell", alt: "Gingerbell an den Decks zwischen den LED-Walls — DYSTOPIA 2026" },
  { id: "luiff-1", caption: "LUiFF", alt: "Bühne im blauen Licht mit LUiFF-Schriftzug auf den LED-Walls — DYSTOPIA 2026" },
  { id: "crowd-5", alt: "Zwei strahlende Besucher in der Crowd — DYSTOPIA 2026" },
  { id: "fox-stevenson-7", caption: "Fox Stevenson", alt: "Fox Stevenson von hinten vor der Crowd, Schwarz-Weiss-Aufnahme — DYSTOPIA 2026" },
  { id: "npstr-3", caption: "NPSTR", alt: "NPSTR von hinten mit Blick auf die Crowd im violetten Licht — DYSTOPIA 2026" },
  { id: "crowd-2", alt: "Klatschende Raver an der Absperrung — DYSTOPIA 2026 in Wil" },
  { id: "tantron-5", caption: "Tantron", alt: "Blaue Lichtstrahlen über der Bühne beim Set von Tantron — DYSTOPIA 2026" },
  { id: "luiff-2", caption: "LUiFF", alt: "LUiFF an den Decks, Schwarz-Weiss-Aufnahme — DYSTOPIA 2026" },
  { id: "crowd-3", alt: "Zwei Besucher an der Front Row im violetten Licht — DYSTOPIA 2026" },
  { id: "fox-stevenson-5", caption: "Fox Stevenson", alt: "Bühne mit LED-Walls und Lightshow beim Set von Fox Stevenson — DYSTOPIA 2026" },
  { id: "arcando-1", caption: "Arcando", alt: "Bühne im grünen Laserlicht beim Set von Arcando — DYSTOPIA 2026" },
  { id: "crowd-4", alt: "Lachende Besucherin an der Absperrung — DYSTOPIA 2026 im Stadtsaal Wil" },
  { id: "tantron-3", caption: "Tantron", alt: "Tantron mit Mikrofon im Bühnennebel, Schwarz-Weiss-Aufnahme — DYSTOPIA 2026" },
  { id: "gingerbell-1", caption: "Gingerbell", alt: "Gingerbell im Profil hinter den Decks — DYSTOPIA 2026" },
  { id: "crowd-7", alt: "Besucher an der Absperrung im orangen Licht — DYSTOPIA 2026" },
  { id: "luiff-3", caption: "LUiFF", alt: "LUiFF an den Decks zwischen den LED-Walls — DYSTOPIA 2026" },
  { id: "arcando-3", caption: "Arcando", alt: "Arcando-Schriftzug auf den LED-Walls, Schwarz-Weiss-Aufnahme — DYSTOPIA 2026" },
  { id: "crowd-9", alt: "Tanzende Besucher in der Crowd — DYSTOPIA 2026" },
  { id: "tantron-4", caption: "Tantron", alt: "Tantron streckt den Arm zur Crowd im roten Licht — DYSTOPIA 2026" },
  { id: "fox-stevenson-1", caption: "Fox Stevenson", alt: "Konfetti über der Bühne beim Set von Fox Stevenson — DYSTOPIA 2026" },
  { id: "crowd-11", alt: "Tanzende Besucherinnen im grünen Licht — DYSTOPIA 2026" },
  { id: "npstr-4", caption: "NPSTR", alt: "Bühne mit NPSTR-Schriftzug auf den LED-Walls, Schwarz-Weiss-Aufnahme — DYSTOPIA 2026" },
  { id: "arcando-4", caption: "Arcando", alt: "Arcando von hinten mit Blick auf die Crowd im grünen Licht — DYSTOPIA 2026" },
  { id: "crowd-14", alt: "Crowd an der Absperrung im blauen Licht — DYSTOPIA 2026 in Wil" },
  { id: "gingerbell-4", caption: "Gingerbell", alt: "Bühne im rot-blauen Licht beim Set von Gingerbell — DYSTOPIA 2026" },
  { id: "fox-stevenson-2", caption: "Fox Stevenson", alt: "Fox Stevenson zwischen den LED-Walls, Schwarz-Weiss-Aufnahme — DYSTOPIA 2026" },
  { id: "tantron-6", caption: "Tantron", alt: "Tantron vor der Crowd im Stadtsaal Wil — DYSTOPIA 2026" },
  { id: "fox-stevenson-4", caption: "Fox Stevenson", alt: "Fox Stevenson von hinten mit Blick auf den vollen Stadtsaal Wil — DYSTOPIA 2026" },
  { id: "arcando-5", caption: "Arcando", alt: "Blick über das DJ-Pult auf die Crowd beim Set von Arcando — DYSTOPIA 2026" },
  { id: "tantron-7", caption: "Tantron", alt: "Tantron von hinten mit erhobenen Händen vor der Crowd — DYSTOPIA 2026" },
];

const src = (p: Photo, size: number | "full") =>
  `/gallery/dystopia-2026-${p.id}-${size}.webp`;

export default function Gallery() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [showAll, setShowAll] = useState(false);
  const [index, setIndex] = useState<number | null>(null);
  const touchX = useRef<number | null>(null);

  const visible = showAll ? PHOTOS : PHOTOS.slice(0, PREVIEW_COUNT);
  const count = visible.length;

  const open = (i: number) => {
    setIndex(i);
    dialogRef.current?.showModal();
  };
  const close = () => dialogRef.current?.close();
  const step = useCallback(
    (dir: 1 | -1) => {
      setIndex((i) => (i === null ? i : (i + dir + count) % count));
    },
    [count],
  );

  // Pfeiltasten blättern, solange die Lightbox offen ist (Esc schliesst nativ).
  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    document.documentElement.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.documentElement.style.overflow = "";
    };
  }, [index, step]);

  const current = index === null ? null : visible[index];

  return (
    <>
      {/* Gleichmässiges Raster aus 4:5-Kacheln; Artist-Fotos tragen den Namen */}
      <ul className="grid grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-4">
        {visible.map((p, i) => (
          <li key={p.id} className="aspect-[4/5]">
            <button
              type="button"
              onClick={() => open(i)}
              aria-label={`Bild vergrössern: ${p.alt}`}
              className="group relative block h-full w-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] text-left lift hover:border-[#cd4903]/50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff6a1a]"
            >
              {/* Natives <img> mit srcset: next/image liefert beim Static Export
                  (images.unoptimized) keine responsiven Varianten. */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={src(p, 480)}
                srcSet={`${src(p, 480)} 480w, ${src(p, 800)} 800w`}
                sizes="(min-width: 1152px) 363px, (min-width: 1024px) 33vw, 50vw"
                alt={p.alt}
                loading="lazy"
                decoding="async"
                className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-[1.04]"
              />
              <span className="absolute inset-0 bg-[#cd4903]/0 mix-blend-multiply transition duration-500 group-hover:bg-[#cd4903]/15" />
              {p.caption && (
                <>
                  {/* Verlauf für die Lesbarkeit der Bildunterschrift */}
                  <span className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />
                  <span className="absolute inset-x-0 bottom-0 p-3 sm:p-4 text-[11px] sm:text-xs tracking-[0.12em] text-white/85">
                    {p.caption}
                  </span>
                </>
              )}
            </button>
          </li>
        ))}
      </ul>

      {!showAll && (
        <div className="mt-8 flex flex-col items-center gap-3">
          <button
            type="button"
            onClick={() => setShowAll(true)}
            data-umami-event="Gallery Mehr anzeigen"
            className="rounded-2xl border border-white/25 bg-white/5 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 hover:border-[#cd4903]/60 transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff6a1a]"
          >
            Mehr anzeigen
          </button>
          <p className="text-[11px] tracking-[0.25em] text-white/45">
            {PHOTOS.length - PREVIEW_COUNT} WEITERE BILDER
          </p>
        </div>
      )}

      <dialog
        ref={dialogRef}
        onClose={() => setIndex(null)}
        onClick={(e) => {
          if (e.target === e.currentTarget) close();
        }}
        onTouchStart={(e) => {
          touchX.current = e.touches[0].clientX;
        }}
        onTouchEnd={(e) => {
          if (touchX.current === null) return;
          const dx = e.changedTouches[0].clientX - touchX.current;
          touchX.current = null;
          if (Math.abs(dx) > 50) step(dx < 0 ? 1 : -1);
        }}
        aria-label="Bildansicht"
        className="fixed inset-0 m-0 h-dvh max-h-none w-screen max-w-none items-center justify-center bg-black/95 p-0 text-white backdrop:bg-black open:flex"
      >
        {current && index !== null && (
          <>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              key={current.id}
              src={src(current, "full")}
              alt={current.alt}
              className="max-h-[calc(100dvh-7rem)] max-w-[calc(100vw-1.5rem)] rounded-xl object-contain"
            />

            <p className="absolute left-5 top-5 text-[11px] tracking-[0.3em] text-white/60">
              {index + 1} / {count}
            </p>

            <button
              type="button"
              onClick={close}
              aria-label="Bildansicht schliessen"
              className="absolute right-3 top-3 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-black/60 text-xl hover:border-[#ff6a1a] hover:text-[#ff6a1a] transition"
            >
              ×
            </button>

            <div className="absolute inset-x-0 bottom-4 flex items-center justify-center gap-3">
              <button
                type="button"
                onClick={() => step(-1)}
                aria-label="Vorheriges Bild"
                className="flex h-11 w-16 items-center justify-center rounded-2xl border border-white/20 bg-black/60 hover:border-[#ff6a1a] hover:text-[#ff6a1a] transition"
              >
                ←
              </button>
              <button
                type="button"
                onClick={() => step(1)}
                aria-label="Nächstes Bild"
                className="flex h-11 w-16 items-center justify-center rounded-2xl border border-white/20 bg-black/60 hover:border-[#ff6a1a] hover:text-[#ff6a1a] transition"
              >
                →
              </button>
            </div>
          </>
        )}
      </dialog>
    </>
  );
}
