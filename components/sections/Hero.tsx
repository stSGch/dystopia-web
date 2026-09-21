import Image from "next/image";
import HeroVideo from "./HeroVideo";

const TICKET_URL = "https://dystopia.shop.bookinea.app";

/**
 * Hero nach Flyer-Vorbild: Video-Loop als Bühne, darüber der Typoblock
 * (Namen gesperrt · Datum kondensiert · Infozeile mit Trennstrichen).
 * Das Video kommt aus der HeroVideo-Client-Insel (Pause-Knopf,
 * kein Laden bei prefers-reduced-motion) — das Standbild hier ist
 * Poster und Fallback zugleich.
 */
export default function Hero() {
  return (
    <header id="top" className="relative flex min-h-[94svh] flex-col justify-center overflow-hidden bg-black">
      {/* Bühne: Standbild als Fallback/Poster, Video-Loop darüber */}
      <div className="absolute inset-0">
        <Image
          src="/dystopia-bg.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-60"
        />
        <HeroVideo />
        {/* Vignette + Bodennebel für Lesbarkeit */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_25%,rgba(0,0,0,0.75)_88%)]" />
        <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-b from-transparent to-black" />
      </div>

      <div className="relative mx-auto w-full max-w-6xl px-6 pt-28 pb-16 text-center sm:pt-32">
        {/* Logo — bleibt Bild, wie auf dem Flyer */}
        <div className="rise-in">
          <Image
            src="/dystopia-logo-full.png"
            alt="DYSTOPIA — Drum & Bass Event, Stadtsaal Wil (SG), Ostschweiz"
            width={1400}
            height={454}
            priority
            className="mx-auto h-auto w-full max-w-[520px] drop-shadow-[0_4px_28px_rgba(0,0,0,0.85)] sm:max-w-[640px]"
          />
        </div>

        {/* Typoblock — exakt die Flyer-Grammatik */}
        <div className="rise-in-late mt-10">
          {/* Originalschreibweisen im Markup (LUiFF!) — Versalien nur per CSS */}
          <p className="font-wide text-base font-bold uppercase tracking-[0.14em] text-white sm:text-2xl">
            Tantron<span className="sep-dot px-2.5">·</span>Fox Stevenson
            <span className="sep-dot px-2.5">·</span>Arcando
          </p>
          <p className="font-wide mt-2 text-sm font-bold uppercase tracking-[0.14em] text-white/90 sm:text-xl">
            NPSTR<span className="sep-dot px-2.5">·</span>Gingerbell
            <span className="sep-dot px-2.5">·</span>LUiFF
          </p>

          <p className="font-display mt-7 text-[12vw] font-bold uppercase leading-[0.95] text-white sm:text-7xl md:text-8xl">
            Samstag 19. September 2026
          </p>

          <p className="font-display mt-4 text-xl font-semibold uppercase tracking-wide text-white sm:text-3xl">
            Stadtsaal Wil<span className="sep-pipe px-3 font-normal">|</span>
            ab 18 Jahren<span className="sep-pipe px-3 font-normal">|</span>
            Türöffnung: 21:00
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <a
              href={TICKET_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-umami-event="Tickets Click"
              data-umami-event-source="hero"
              className="font-display bg-[#cd4903] px-8 py-3.5 text-lg font-bold uppercase tracking-wide text-white transition hover:bg-[#ff6a1a] hover:text-black"
            >
              Tickets sichern
            </a>
            <a
              href="#lineup"
              className="font-display border border-white/30 px-8 py-3.5 text-lg font-bold uppercase tracking-wide text-white transition hover:border-[#ff6a1a] hover:text-[#ff6a1a]"
            >
              Line-Up
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
