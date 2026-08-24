"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type HeroProps = {
  tagline?: string;
  dateText?: string;
  venueText?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
};

export default function Hero({
  tagline = "NEW DRUM 'N' BASS EXPERIENCE — WIL / SCHWEIZ",
  dateText = "Samstag, 19. September 2026 — ab 21 Uhr",
  venueText = "Stadtsaal Wil — Indoor • bis zu 1000 Raver",
  primaryCta = { label: "Tickets sichern", href: "https://dystopia.shop.bookinea.app" },
  secondaryCta = { label: "Line-Up", href: "#lineup" },
}: HeroProps) {
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

      <div className="relative mx-auto max-w-6xl px-6 pt-28 pb-20 sm:pt-32 sm:pb-28">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/40 backdrop-blur px-4 py-2 text-[11px] tracking-[0.25em] text-white/80"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-[#ff6a1a] pulse-dot" />
          {tagline}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="mt-8 sm:mt-10"
        >
          <Image
            src="/dystopia-logo-full.png"
            alt="DYSTOPIA — Drum & Bass Event, Stadtsaal Wil (SG), Ostschweiz"
            width={1400}
            height={454}
            className="w-full max-w-[640px] sm:max-w-[760px] h-auto drop-shadow-[0_0_40px_rgba(205,73,3,0.35)]"
          />
        </motion.div>

        <motion.div
          className="mt-6 h-px w-full max-w-2xl hairline-orange"
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.9, ease: "easeOut" }}
          style={{ transformOrigin: "left" }}
        />

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.7, ease: "easeOut" }}
          className="mt-6 max-w-2xl text-base sm:text-lg text-white/80 leading-relaxed"
        >
          Dystopia ist die neue Drum &amp; Bass Experience in der Ostschweiz.
          Premiere am 19. September 2026 im Stadtsaal Wil — mit drei
          internationalen Headlinern, drei weiteren Acts und einer Bühne, die
          ihr so noch nicht erlebt habt.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.7, ease: "easeOut" }}
          className="mt-8 flex flex-wrap gap-2"
        >
          <HeroPill highlight>{dateText}</HeroPill>
          <HeroPill>{venueText}</HeroPill>
          <HeroPill>Drum &amp; Bass — volles Spektrum</HeroPill>
          <HeroPill>LED · Laser · Strobes</HeroPill>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.7, ease: "easeOut" }}
          className="mt-10 flex flex-wrap items-center gap-3"
        >
          <a
            href={primaryCta.href}
            target="_blank"
            rel="noopener noreferrer"
            data-umami-event="Tickets Click"
            data-umami-event-source="hero"
            className="group relative overflow-hidden rounded-2xl bg-[#cd4903] px-6 py-3 text-sm font-semibold text-white shadow-[0_0_30px_rgba(205,73,3,0.35)] hover:shadow-[0_0_45px_rgba(205,73,3,0.55)] transition"
          >
            <span className="relative z-10 tracking-wider">{primaryCta.label}</span>
            <span
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
              style={{
                background:
                  "linear-gradient(90deg, rgba(255,106,26,0.95), rgba(205,73,3,0.95))",
              }}
            />
          </a>

          <a
            href={secondaryCta.href}
            className="rounded-2xl border border-white/25 bg-white/5 backdrop-blur px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition"
          >
            {secondaryCta.label}
          </a>

          <a
            href="#faq"
            className="rounded-2xl border border-white/15 bg-transparent px-6 py-3 text-sm font-semibold text-white/80 hover:text-white hover:border-white/25 transition"
          >
            Infos / FAQ
          </a>
        </motion.div>

        <div className="mt-12 overflow-hidden rounded-2xl border border-white/10 bg-black/40 backdrop-blur">
          <Ticker
            text={[
              "ARCANDO · FOX STEVENSON · TANTRON",
              "NPSTR · GINGERBELL · LUiFF",
              "DYSTOPIAN VISUAL EXPERIENCE",
              "WIL · SCHWEIZ · 19.09.2026",
            ].join("  •  ")}
          />
        </div>

        <motion.a
          href="#lineup"
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
