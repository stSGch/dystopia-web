import Image from "next/image";
import Navbar from "@/components/Navbar";
import Section from "@/components/Section";
import ArtistCard from "@/components/ArtistCard";
import Hero from "@/components/sections/Hero";
import Gallery from "@/components/sections/Gallery";

const INSTAGRAM_URL = "https://www.instagram.com/dystopia.dnb";
const FACEBOOK_URL = "https://www.facebook.com/profile.php?id=61590321570688";
const TIKTOK_URL = "https://www.tiktok.com/@dystopia.dnb";

const LINEUP = [
  { name: "Arcando",       tier: "Headliner",     image: "/artists/arcando.webp" },
  { name: "Fox Stevenson", tier: "Headliner",     image: "/artists/fox-stevenson.webp" },
  { name: "Tantron",       tier: "Headliner",     image: "/artists/tantron.webp" },
  { name: "NPSTR",         tier: "Swiss Support", image: "/artists/npstr.webp" },
  { name: "Gingerbell",    tier: "Support",       image: "/artists/gingerbell.webp" },
  { name: "LUiFF",         tier: "Support",       image: "/artists/luiff.webp" },
] as const;

// Schema.org MusicEvent — die Ausgabe 2026 als vergangenes Event (ohne Ticket-Offer).
// eventStatus bleibt laut Google-Richtlinie auch nach dem Event "EventScheduled".
const EVENT_JSONLD = {
  "@context": "https://schema.org",
  "@type": "MusicEvent",
  name: "DYSTOPIA — Drum & Bass Event 2026",
  url: "https://dystopia-dnb.ch/",
  description:
    "DYSTOPIA — das Drum & Bass Event in der Ostschweiz. Die erste Ausgabe fand am Samstag, 19. September 2026 im Stadtsaal Wil (Bahnhofplatz 6, 9500 Wil SG) statt. Line-up: Arcando, Fox Stevenson, Tantron, NPSTR (Swiss Support), Gingerbell und LUiFF — Drum & Bass von liquid bis neuro auf LED-Walls und High-End-Lightshow. DYSTOPIA 2027 ist in Planung.",
  startDate: "2026-09-19T21:00:00+02:00",
  endDate: "2026-09-20T03:00:00+02:00",
  eventStatus: "https://schema.org/EventScheduled",
  eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
  image: ["https://dystopia-dnb.ch/og-recap.jpg"],
  location: {
    "@type": "MusicVenue",
    name: "Stadtsaal Wil",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Bahnhofplatz 6",
      postalCode: "9500",
      addressLocality: "Wil",
      addressRegion: "SG",
      addressCountry: "CH",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 47.4626,
      longitude: 9.0413,
    },
  },
  performer: [
    { "@type": "MusicGroup", name: "Arcando" },
    { "@type": "MusicGroup", name: "Fox Stevenson" },
    { "@type": "MusicGroup", name: "Tantron" },
    { "@type": "MusicGroup", name: "NPSTR" },
    { "@type": "MusicGroup", name: "Gingerbell" },
    { "@type": "MusicGroup", name: "LUiFF" },
  ],
  organizer: {
    "@type": "Organization",
    name: "TBH Gastro & Event AG",
    url: "https://dystopia-dnb.ch",
  },
};

// Schema.org VideoObject — das Aftermovie für Googles Video-Ergebnisse.
// uploadDate beim Austausch des Videos anpassen.
const VIDEO_JSONLD = {
  "@context": "https://schema.org",
  "@type": "VideoObject",
  name: "DYSTOPIA 2026 — Aftermovie",
  description:
    "Das Aftermovie von DYSTOPIA, dem Drum & Bass Event vom 19. September 2026 im Stadtsaal Wil (SG) — mit Arcando, Fox Stevenson, Tantron, NPSTR, Gingerbell und LUiFF.",
  thumbnailUrl: ["https://dystopia-dnb.ch/video/aftermovie-2026-poster.jpg"],
  uploadDate: "2026-10-01T12:00:00+02:00",
  duration: "PT36S",
  contentUrl: "https://dystopia-dnb.ch/video/aftermovie-2026.mp4",
  inLanguage: "de-CH",
};

// Schema.org Organization — Brand-Entity DYSTOPIA (Logo + Social) für Brand-Suchen
const ORG_JSONLD = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "DYSTOPIA",
  url: "https://dystopia-dnb.ch/",
  logo: "https://dystopia-dnb.ch/dystopia-logo-full.png",
  email: "contact@dystopia-dnb.ch",
  telephone: "+41719320068",
  sameAs: [INSTAGRAM_URL, FACEBOOK_URL, TIKTOK_URL],
};

export default function Page() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-[#cd4903] selection:text-white">
      {/* JSON-LD: Event Schema (Ausgabe 2026) */}
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(EVENT_JSONLD) }}
      />
      {/* JSON-LD: Video Schema — Aftermovie */}
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(VIDEO_JSONLD) }}
      />
      {/* JSON-LD: Organization Schema — Brand-Entity DYSTOPIA */}
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ORG_JSONLD) }}
      />

      <Navbar />

      {/* HERO — Logo, «Thank you, Wil.» (H1) und Aftermovie */}
      <Hero />

      {/* RECAP */}
      <Section id="recap" eyebrow="RECAP 2026" title="Was für eine Nacht.">
        <p className="max-w-3xl text-lg sm:text-xl text-white/85 leading-relaxed">
          Eine Nacht, ein Raum, ein Bass, der durch alles ging. Am 19.
          September 2026 begann im Stadtsaal Wil das erste Kapitel von
          DYSTOPIA —{" "}
          <span className="text-[#ff6a1a] font-semibold">
            und das war erst der Anfang.
          </span>
        </p>
      </Section>

      {/* GALLERY */}
      <Section
        id="gallery"
        eyebrow="GALLERY"
        title="Die Nacht in Bildern"
        intro="Lights, Crowd, Artists — die stärksten Momente vom 19. September 2026. Antippen zum Vergrössern."
      >
        <Gallery />
      </Section>

      {/* LINE-UP 2026 — Rückblick */}
      <Section id="lineup" eyebrow="RÜCKBLICK" title="Line-up 2026">
        <p className="-mt-4 mb-8 max-w-2xl text-sm text-white/70 leading-relaxed">
          Danke an die Artists, die den Stadtsaal zum Beben gebracht haben:{" "}
          <span className="text-[#ff6a1a] font-semibold">Arcando</span>,{" "}
          <span className="text-[#ff6a1a] font-semibold">Fox Stevenson</span>,{" "}
          <span className="text-[#ff6a1a] font-semibold">Tantron</span>,{" "}
          <span className="text-[#ff6a1a] font-semibold">NPSTR</span>,{" "}
          <span className="text-[#ff6a1a] font-semibold">Gingerbell</span>{" "}
          und <span className="text-[#ff6a1a] font-semibold">LUiFF</span>.
        </p>

        <div className="grid grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-3">
          {LINEUP.map((a, i) => (
            <ArtistCard
              key={a.name}
              name={a.name}
              tier={a.tier}
              image={a.image}
              delay={i * 0.05}
              compact
            />
          ))}
        </div>
      </Section>

      {/* TEASER 2027 */}
      <section
        id="dystopia-2027"
        className="relative overflow-hidden border-y border-white/10 bg-black"
      >
        <div className="absolute inset-x-0 top-0 h-px hairline-orange" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_120%,rgba(205,73,3,0.22),transparent_60%)]" />
        <div className="absolute inset-0 pointer-events-none scanlines mix-blend-overlay opacity-[0.18]" />

        <div className="relative mx-auto max-w-6xl px-6 py-24 sm:py-32 text-center">
          <div className="flex items-center justify-center gap-3">
            <span className="h-2 w-2 rounded-full bg-[#cd4903] pulse-dot" />
            <p className="text-[11px] tracking-[0.3em] text-white/55">
              AUSBLICK
            </p>
          </div>
          <h2 className="mt-4 text-5xl sm:text-7xl font-black tracking-tight">
            DYSTOPIA <span className="text-[#ff6a1a]">2027</span>
          </h2>
          <div className="mx-auto mt-5 h-px w-24 hairline-orange" />
          <p className="mx-auto mt-6 max-w-md text-base sm:text-lg text-white/75 leading-relaxed">
            Die nächste Ausgabe ist in Planung. Grösser, lauter, dunkler. Datum
            und Line-up folgen.
          </p>
          <a
            className="mt-9 inline-flex items-center justify-center rounded-2xl bg-[#cd4903] text-white px-6 py-3 text-sm font-semibold tracking-wider hover:brightness-110 transition shadow-[0_0_30px_rgba(205,73,3,0.45)]"
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-umami-event="Instagram Click"
            data-umami-event-source="teaser-2027"
          >
            Folgen und nichts verpassen →
          </a>
        </div>
      </section>

      {/* INFO & FAQ */}
      <Section id="faq" eyebrow="INFO & FAQ" title="Alles was ihr wissen müsst">
        <div className="space-y-3">
          <Faq q="Was ist DYSTOPIA — das Drum-and-Bass-Event in Wil?">
            DYSTOPIA ist das Drum-and-Bass-Event in der Ostschweiz. Die erste
            Ausgabe fand im Stadtsaal Wil (SG) statt: Headliner waren Arcando,
            Fox Stevenson und Tantron, Support kam von NPSTR (Swiss),
            Gingerbell und LUiFF. Dazu gab es massive LED-Walls, eine
            kompromisslose Lightshow, grosse Bars und einen Foodcorner —
            Drum and Bass von liquid bis neuro.
          </Faq>

          <Faq q="Welche Musik läuft?">
            Drum &amp; Bass über das volle Spektrum — von liquid bis neuro, von
            jump-up bis dancefloor. Keine Subgenre-Mauern.
          </Faq>

          <Faq q="Gibt es einen Mindestaltersnachweis?">
            Eintritt ab 18 Jahren. Bitte einen gültigen Ausweis (ID / Pass /
            Führerschein) mitbringen.
          </Faq>
        </div>
      </Section>

      {/* CONTACT / FOOTER */}
      <footer
        id="contact"
        className="relative border-t border-white/10 bg-black"
      >
        <div className="absolute inset-x-0 top-0 h-px hairline-orange" />
        <div className="mx-auto max-w-6xl px-6 py-14">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <Image
                src="/dystopia-symbol.png"
                alt="DYSTOPIA Symbol"
                width={120}
                height={60}
                className="h-10 w-auto"
              />
              <p className="mt-4 text-sm text-white/60 leading-relaxed max-w-xs">
                Dystopia. Hottest DnB. Wil SG. See you in 2027.
              </p>
            </div>

            <div>
              <p className="text-[11px] tracking-[0.3em] text-white/55">
                KONTAKT
              </p>
              <p className="mt-3 text-sm text-white/75">
                Booking · Partner · Presse
              </p>
              <a
                className="mt-2 inline-block text-sm font-semibold text-[#ff6a1a] hover:brightness-125"
                href="mailto:contact@dystopia-dnb.ch"
              >
                contact@dystopia-dnb.ch
              </a>
              <a
                className="mt-1 block text-sm text-white/65 hover:text-white transition"
                href="tel:+41719320068"
              >
                +41 71 932 00 68
              </a>
            </div>

            <div>
              <p className="text-[11px] tracking-[0.3em] text-white/55">
                SOCIAL
              </p>
              <div className="mt-3 flex flex-col items-start gap-2">
                <a
                  className="inline-flex items-center gap-2 rounded-2xl border border-white/20 bg-white/5 px-4 py-2 text-sm hover:bg-white/10 transition"
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-umami-event="Instagram Click"
                  data-umami-event-source="footer"
                >
                  <InstagramIcon />
                  Instagram
                </a>
                <a
                  className="inline-flex items-center gap-2 rounded-2xl border border-white/20 bg-white/5 px-4 py-2 text-sm hover:bg-white/10 transition"
                  href={FACEBOOK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-umami-event="Facebook Click"
                  data-umami-event-source="footer"
                >
                  <FacebookIcon />
                  Facebook
                </a>
                <a
                  className="inline-flex items-center gap-2 rounded-2xl border border-white/20 bg-white/5 px-4 py-2 text-sm hover:bg-white/10 transition"
                  href={TIKTOK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-umami-event="TikTok Click"
                  data-umami-event-source="footer"
                >
                  <TikTokIcon />
                  TikTok
                </a>
              </div>
              <p className="mt-3 text-[11px] text-white/40">
                Stay Connected
              </p>
            </div>
          </div>

          <div className="mt-12 flex flex-wrap items-center justify-between gap-3 text-xs text-white/45">
            <p>© {new Date().getFullYear()} DYSTOPIA. Alle Rechte vorbehalten.</p>
            <div className="flex gap-5">
              <a className="hover:text-white/80 transition" href="/imprint/">
                Impressum
              </a>
              <a className="hover:text-white/80 transition" href="/privacy/">
                Datenschutz
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}

// Social-Icons im Akzent-Orange (inline, kein Icon-Paket nötig)
const ICON_CLASS = "h-4 w-4 shrink-0 text-[#ff6a1a]";

function InstagramIcon() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 24 24"
      className={ICON_CLASS}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><path d="M17.5 6.5h.01" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg aria-hidden viewBox="0 0 24 24" className={ICON_CLASS} fill="currentColor">
      <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z" />
    </svg>
  );
}

function TikTokIcon() {
  return (
    <svg aria-hidden viewBox="0 0 24 24" className={ICON_CLASS} fill="currentColor">
      <path d="M16.6 5.82s.51.5 0 0A4.278 4.278 0 0 1 15.54 3h-3.09v12.4a2.592 2.592 0 0 1-2.59 2.5c-1.42 0-2.6-1.16-2.6-2.6 0-1.72 1.66-3.01 3.37-2.48V9.66c-3.45-.46-6.47 2.22-6.47 5.64 0 3.33 2.76 5.7 5.69 5.7 3.14 0 5.69-2.55 5.69-5.7V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3s-1.88.09-3.24-1.48z" />
    </svg>
  );
}

function Faq({ q, children }: { q: string; children: React.ReactNode }) {
  return (
    <details className="group rounded-2xl border border-white/10 bg-white/[0.03] p-5 hover:border-[#cd4903]/30 transition">
      <summary className="cursor-pointer list-none font-semibold flex items-center justify-between gap-4">
        <h3 className="tracking-wide text-base font-semibold">{q}</h3>
        <span className="text-[#ff6a1a] group-open:rotate-45 transition">+</span>
      </summary>
      <div className="mt-3 text-sm text-white/75 leading-relaxed">
        {children}
      </div>
    </details>
  );
}
