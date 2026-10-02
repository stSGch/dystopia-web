"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import AftermoviePlayer from "@/components/AftermoviePlayer";

export default function Hero() {
  return (
    <header
      id="top"
      className="relative overflow-hidden bg-black"
    >
      {/* Background image (dystopian portal) */}
      <div className="absolute inset-0">
        <Image
          src="/dystopia-bg.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-70"
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(0,0,0,0.7)_85%)]" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-b from-transparent to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(205,73,3,0.18),transparent_60%)] mix-blend-screen" />
      </div>

      <motion.div
        aria-hidden
        className="absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
        animate={{ backgroundPosition: ["0px 0px", "56px 56px"] }}
        transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
      />

      <div className="absolute inset-0 pointer-events-none scanlines mix-blend-overlay opacity-[0.22]" />

      <motion.div
        aria-hidden
        className="absolute -inset-x-40 top-0 h-[420px] rotate-[-10deg] opacity-50 blur-3xl"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(205,73,3,0.35), rgba(255,106,26,0.40), transparent)",
        }}
        animate={{ x: ["-20%", "20%", "-20%"] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative mx-auto max-w-6xl px-6 pt-24 pb-16 sm:pt-32 sm:pb-24">
        {/* Logo + «Thank you, Wil.» */}
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/40 backdrop-blur px-4 py-2 text-[11px] tracking-[0.25em] text-white/80"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[#ff6a1a] pulse-dot" />
            WIL SG — 19.09.2026
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="mt-6 sm:mt-8"
          >
            <Image
              src="/dystopia-logo-full.png"
              alt="DYSTOPIA — Drum & Bass Event, Stadtsaal Wil (SG), Ostschweiz"
              width={1400}
              height={454}
              className="w-full max-w-[300px] sm:max-w-[520px] h-auto drop-shadow-[0_0_40px_rgba(205,73,3,0.35)]"
            />
          </motion.div>

          <motion.div
            className="mt-5 h-px w-full max-w-md hairline-orange"
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.9, ease: "easeOut" }}
          />

          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.7, ease: "easeOut" }}
            className="mt-5 text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight"
            style={{
              textShadow:
                "0 0 14px rgba(0,0,0,0.85), 0 0 36px rgba(0,0,0,0.7), 0 0 70px rgba(0,0,0,0.5)",
            }}
          >
            Thank you, <span className="text-[#ff6a1a]">Wil.</span>
            {/* SEO-/Screenreader-Ergänzung — visuell unsichtbar, semantisch tragend */}
            <span className="sr-only">
              {" "}
              — Aftermovie und Recap von DYSTOPIA, dem Drum &amp; Bass Event
              vom 19. September 2026 im Stadtsaal Wil (SG), Ostschweiz
            </span>
          </motion.h1>
        </div>

        {/* Aftermovie-Karte: Titel + Kurztext, darunter (Desktop: daneben) der Player */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.7, ease: "easeOut" }}
          className="relative mx-auto mt-10 grid max-w-4xl gap-6 overflow-hidden rounded-2xl border border-white/10 bg-black/50 p-5 backdrop-blur sm:p-8 lg:grid-cols-[320px_1fr] lg:gap-x-10"
        >
          <div className="absolute -top-20 -right-20 h-60 w-60 rounded-full bg-[#cd4903]/10 blur-3xl" />

          <div className="relative lg:col-start-2 lg:self-end">
            <div className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-[#cd4903] pulse-dot" />
              <p className="text-[11px] tracking-[0.3em] text-white/55">
                AFTERMOVIE
              </p>
            </div>
            <h2 className="mt-3 text-2xl sm:text-3xl font-black tracking-tight">
              DYSTOPIA 2026 — Aftermovie
            </h2>
            <p className="mt-3 max-w-md text-sm sm:text-base text-white/75 leading-relaxed">
              Der Rückblick auf die erste Ausgabe von DYSTOPIA.
            </p>
          </div>

          <div className="relative lg:col-start-1 lg:row-span-2 lg:row-start-1">
            <AftermoviePlayer />
          </div>

          <div className="relative lg:col-start-2 lg:self-start">
            <div className="flex flex-wrap gap-2">
              <HeroPill highlight>Samstag, 19. September 2026</HeroPill>
              <HeroPill>Stadtsaal Wil</HeroPill>
              <HeroPill>Sechs Acts · eine Nacht</HeroPill>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href="#gallery"
                className="rounded-2xl border border-white/25 bg-white/5 backdrop-blur px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition"
              >
                Zur Gallery
              </a>

              <a
                href="#dystopia-2027"
                className="rounded-2xl border border-white/15 bg-transparent px-6 py-3 text-sm font-semibold text-white/80 hover:text-white hover:border-white/25 transition"
              >
                DYSTOPIA 2027
              </a>
            </div>
          </div>
        </motion.div>

        <div className="mt-12 overflow-hidden rounded-2xl border border-white/10 bg-black/40 backdrop-blur">
          <Ticker
            text={[
              "THANK YOU, WIL",
              "ARCANDO · FOX STEVENSON · TANTRON",
              "NPSTR · GINGERBELL · LUiFF",
              "SEE U NEXT YEAR · DYSTOPIA 2027",
            ].join("  •  ")}
          />
        </div>

        <motion.a
          href="#recap"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="mt-10 inline-flex items-center gap-3 text-[11px] tracking-[0.3em] text-white/55 hover:text-white/80 transition"
        >
          <span>SCROLL</span>
          <motion.span
            className="inline-block h-6 w-4 rounded-full border border-white/25 relative"
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 1.8, repeat: Infinity }}
          >
            <motion.span
              className="absolute left-1/2 top-1 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-[#ff6a1a]"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.span>
        </motion.a>
      </div>
    </header>
  );
}

function HeroPill({
  children,
  highlight = false,
}: {
  children: React.ReactNode;
  highlight?: boolean;
}) {
  return (
    <span
      className={
        highlight
          ? "rounded-full border border-[#cd4903]/60 bg-[#cd4903]/15 px-4 py-2 text-xs text-white tracking-wide"
          : "rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs text-white/80 tracking-wide"
      }
    >
      {children}
    </span>
  );
}

function Ticker({ text }: { text: string }) {
  return (
    <div className="relative">
      <div className="absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-black to-transparent pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-black to-transparent pointer-events-none" />
      <motion.div
        className="flex whitespace-nowrap gap-12 py-3 text-[11px] tracking-[0.3em] text-white/65"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
      >
        <span>{text}</span>
        <span aria-hidden>{text}</span>
      </motion.div>
    </div>
  );
}
