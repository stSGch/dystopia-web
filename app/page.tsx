import Image from "next/image";
import Navbar from "@/components/Navbar";
import Section from "@/components/Section";
import ArtistCard from "@/components/ArtistCard";
import Pill from "@/components/Pill";
import Hero from "@/components/sections/Hero";

const TICKET_URL = "https://dystopia.shop.bookinea.app";
const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Stadtsaal+Wil+Schweiz";

const LINEUP = [
  { name: "Arcando",       tier: "Headliner",     image: "/artists/arcando.webp",       blurred: false },
  { name: "Fox Stevenson", tier: "Headliner",     image: "/artists/fox-stevenson.webp", blurred: false },
  { name: "Tantron",       tier: "Headliner",     image: "/artists/tantron.webp",       blurred: false },
  { name: "NPSTR",         tier: "Swiss Support", image: "/artists/npstr.webp",         blurred: false },
  { name: "Gingerbell",    tier: "Support",       image: "/artists/gingerbell.webp",    blurred: false },
  { name: "LUiFF",         tier: "Support",       image: "/artists/luiff.webp",         blurred: false },
] as const;

// Schema.org MusicEvent — füttert Google's Event-Rich-Results
const EVENT_JSONLD = {
  "@context": "https://schema.org",
  "@type": "MusicEvent",
  name: "DYSTOPIA — Drum & Bass Event",
  url: "https://dystopia-dnb.ch/",
  description:
    "DYSTOPIA — das Drum & Bass Event in der Ostschweiz: Samstag, 19. September 2026 im Stadtsaal Wil (Bahnhofplatz 6, 9500 Wil SG). Line-Up: Arcando, Fox Stevenson, Tantron, NPSTR (Swiss Support), Gingerbell und LUiFF. Türöffnung 21:00 Uhr — Drum & Bass von liquid bis neuro auf LED-Walls und High-End-Lightshow.",
  startDate: "2026-09-19T21:00:00+02:00",
  endDate: "2026-09-20T03:00:00+02:00",
  eventStatus: "https://schema.org/EventScheduled",
  eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
  image: ["https://dystopia-dnb.ch/og-image.jpg"],
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
  offers: {
    "@type": "Offer",
    name: "Regular Ticket",
    url: "https://dystopia.shop.bookinea.app",
    price: "28.90",
    priceCurrency: "CHF",
    availability: "https://schema.org/InStock",
    validFrom: "2026-01-01T00:00:00+01:00",
    category: "Ticket",
  },
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
  sameAs: ["https://www.instagram.com/dystopia.dnb"],
};

export default function Page() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-[#cd4903] selection:text-white">
      {/* JSON-LD: Event Schema für Google Rich Results */}
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(EVENT_JSONLD) }}
      />
      {/* JSON-LD: Organization Schema — Brand-Entity DYSTOPIA */}
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ORG_JSONLD) }}
      />

      {/* Screenreader-/SEO-H1 — visuell unsichtbar, semantisch tragend */}
      <h1 className="sr-only">
        DYSTOPIA — Drum &amp; Bass Event am 19. September 2026 im Stadtsaal Wil
        (SG), Ostschweiz
      </h1>

      <Navbar />

      <Hero
        tagline="NEW DRUM 'N' BASS EXPERIENCE — WIL SG / CH"
        dateText="Samstag, 19. September 2026 — ab 21 Uhr"
        venueText="Stadtsaal Wil — Indoor • direkt am Bhf"
        primaryCta={{ label: "Tickets sichern", href: TICKET_URL }}
        secondaryCta={{ label: "Line-Up", href: "#lineup" }}
      />

      {/* LINEUP */}
      <Section id="lineup" eyebrow="LINE-UP" title="Line-Up komplett — sechs Acts, eine Nacht.">
        <p className="-mt-4 mb-10 max-w-2xl text-sm text-white/70 leading-relaxed">
          Headliner:{" "}
          <span className="text-[#ff6a1a] font-semibold">Arcando</span>,{" "}
          <span className="text-[#ff6a1a] font-semibold">Fox Stevenson</span>{" "}
          und{" "}
          <span className="text-[#ff6a1a] font-semibold">Tantron</span>. Swiss
          Support:{" "}
          <span className="text-[#ff6a1a] font-semibold">NPSTR</span>. Weiterer
          Support:{" "}
          <span className="text-[#ff6a1a] font-semibold">Gingerbell</span>{" "}
          und{" "}
          <span className="text-[#ff6a1a] font-semibold">LUiFF</span>. Set-Times
          folgen kurz vor dem Event auf Instagram.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {LINEUP.map((a, i) => (
            <ArtistCard
              key={a.name}
              name={a.name}
              tier={a.tier}
              image={a.image}
              blurred={a.blurred}
              delay={i * 0.05}
            />
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-[#cd4903]/30 bg-[#cd4903]/5 p-5 text-sm text-white/80">
          <span className="font-semibold text-[#ff6a1a]">Line-Up komplett.</span>{" "}
          Set-Times und weitere Updates folgen auf Instagram.
        </div>
      </Section>

      {/* TICKETS */}
      <Section id="tickets" eyebrow="TICKETS" title="Jetzt Tickets sichern">
        <div className="grid md:grid-cols-3 gap-4">
          <div className="relative overflow-hidden rounded-2xl border border-[#cd4903]/40 bg-gradient-to-b from-[#cd4903]/15 to-black/40 p-6">
            <div className="absolute -top-12 -right-12 h-32 w-32 rounded-full bg-[#cd4903]/30 blur-3xl" />
            <p className="relative text-[11px] tracking-[0.3em] text-white/60">
              OFFIZIELLER TICKETSHOP
            </p>
            <p className="relative mt-3 text-2xl font-black leading-tight">
              Bookinea
            </p>
            <p className="relative mt-2 text-sm text-white/75">
              Sichere Bezahlung, E-Ticket per Mail, Wiederverkauf abgesichert.
            </p>
            <a
              className="relative mt-6 inline-flex w-full items-center justify-center rounded-2xl bg-[#cd4903] text-white px-5 py-3 text-sm font-semibold tracking-wider hover:brightness-110 transition shadow-[0_0_25px_rgba(205,73,3,0.45)]"
              href={TICKET_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-umami-event="Tickets Click"
              data-umami-event-source="tickets-section"
            >
              Zum Ticketshop →
            </a>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:col-span-2">
            <p className="text-sm text-white/80 leading-relaxed">
              Indoor-Venue. Heftige Visuals. Kompromissloser Sound. Ein Auftrag:
              die Tanzfläche vereinen. Türöffnung um 21:00 Uhr.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              <Pill>Drinks & Food</Pill>
              <Pill>Cash and Cashless Payment</Pill>
              <Pill>High-End Lightshow</Pill>
              <Pill>LED Walls</Pill>
              <Pill>Garderobe</Pill>
              <Pill>Ab 18 Jahren</Pill>
            </div>

            <div className="mt-6 grid sm:grid-cols-3 gap-3 text-sm">
              <InfoBlock label="Datum" value="Sa, 19.09.2026" />
              <InfoBlock label="Türöffnung" value="21:00 Uhr" />
              <InfoBlock label="Venue" value="Stadtsaal Wil" />
            </div>
          </div>
        </div>
      </Section>

      {/* INFO & FAQ */}
      <Section id="faq" eyebrow="INFO & FAQ" title="Alles was ihr wissen müsst">
        <div className="space-y-3">
          <Faq q="Was ist DYSTOPIA — das Drum-and-Bass-Event in Wil?">
            DYSTOPIA ist das neue Drum-and-Bass-Event in der Ostschweiz —
            am 19. September 2026 im Stadtsaal Wil (SG). Headliner sind
            Arcando, Fox Stevenson und Tantron, Support kommt von NPSTR
            (Swiss), Gingerbell und LUiFF. Dazu: massive LED-Walls,
            kompromisslose Lightshow, grosse Bars und Foodcorner —
            kompromissloser Drum and Bass von liquid bis neuro.
          </Faq>

          <Faq q="Wann findet DYSTOPIA statt? Datum & Türöffnung">
            Samstag, 19. September 2026. Türöffnung ist um 21:00 Uhr — danach
            geht&apos;s durch bis 3 Uhr.
          </Faq>

          <Faq q="Welche Musik läuft? Drum and Bass in der Ostschweiz">
            Drum &amp; Bass über das volle Spektrum — von liquid bis neuro, von
            jump-up bis dancefloor. Keine Subgenre-Mauern.
          </Faq>

          <Faq q="Wann gibt es die Set-Times?">
            Die Spielzeiten kommunizieren wir kurz vor dem Event über
            Instagram und hier auf der Website.
          </Faq>

          <Faq q="Wie komme ich zum Stadtsaal Wil? (Anreise ÖV & Auto)">
            Wil ist mit der SBB hervorragend angebunden — Bahnhof Wil und ca.
            10 Gehminuten zum Stadtsaal. Parkplätze in den umliegenden
            Parkhäusern. Der genaue Anreise-Guide folgt.
          </Faq>

          <Faq q="Gibt es einen Mindestaltersnachweis?">
            Eintritt ab 18 Jahren. Bitte einen gültigen Ausweis (ID / Pass /
            Führerschein) mitbringen.
          </Faq>
        </div>
      </Section>

      {/* LOCATION */}
      <Section id="location" eyebrow="LOCATION" title="Stadtsaal Wil">
        <div className="grid lg:grid-cols-2 gap-4">
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <h3 className="text-lg font-bold tracking-wide">Die Venue</h3>
            <p className="mt-3 text-sm text-white/75 leading-relaxed">
              Indoor-Venue mit viel Platz direkt am Bahnhof Wil — verwandelt in eine
              dystopische Arena aus Licht, LEDs und Bass. Eine Bühne, ein
              Raum, eine Mission.
            </p>
            <p className="mt-3 text-sm text-white/75 leading-relaxed">
              DYSTOPIA bringt kompromisslosen Drum and Bass in die Ostschweiz —
              mitten nach Wil (SG). Der Stadtsaal Wil liegt direkt am Bahnhof und
              ist aus St. Gallen, Winterthur, Frauenfeld, dem ganzen Thurgau und
              aus Zürich in Minuten erreichbar. Wer ein Drum-and-Bass-Event in der
              Ostschweiz oder ein DnB-Event in der Schweiz im September 2026 sucht,
              ist am 19. September 2026 im Stadtsaal Wil genau richtig.
            </p>

            <div className="mt-5 text-sm text-white/75 space-y-1">
              <div>
                <span className="text-white/45">Stadt:</span> Wil, Schweiz
              </div>
              <div>
                <span className="text-white/45">Venue:</span> Stadtsaal Wil
              </div>
              <div>
                <span className="text-white/45">Adresse:</span> Bahnhofplatz 6, 9500 Wil
              </div>
              <div>
                <span className="text-white/45">Datum:</span> Sa, 19.09.2026 ·
                ab 21:00 Uhr
              </div>
            </div>

            <a
              className="mt-6 inline-flex items-center gap-2 rounded-2xl border border-white/20 bg-white/5 px-5 py-3 text-sm font-semibold hover:bg-white/10 transition"
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              Auf Google Maps öffnen →
            </a>
          </div>

          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <div className="absolute -top-20 -right-20 h-60 w-60 rounded-full bg-[#cd4903]/10 blur-3xl" />
            <h3 className="relative text-lg font-bold tracking-wide">
              Anreise
            </h3>

            <div className="relative mt-4 space-y-5 text-sm text-white/75">
              <div>
                <p className="text-[11px] tracking-[0.3em] text-[#ff6a1a]">
                  PER BAHN — EMPFOHLEN
                </p>
                <p className="mt-1 leading-relaxed">
                  Der Stadtsaal liegt direkt am Bahnhof Wil
                  (Bahnhofplatz 6) — 1 Minute zu Fuss. SBB-Verbindungen
                  aus Zürich, Winterthur und St. Gallen im Halb-/Stunden-
                  takt.
                </p>
              </div>

              <div>
                <p className="text-[11px] tracking-[0.3em] text-[#ff6a1a]">
                  MIT DEM AUTO
                </p>
                <p className="mt-1 leading-relaxed">
                  Das Parkhaus Bahnhof liegt direkt unter dem Stadtsaal —
                  bequemer geht&apos;s nicht. Bitte rechtzeitig anreisen,
                  am Wochenende kann es voll werden.
                </p>
              </div>
            </div>

            <p className="relative mt-6 text-[11px] tracking-[0.25em] text-white/45">
              TIPP · FRÜH KOMMEN · LETZTER ZUG CHECKEN
            </p>
          </div>
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
                Dystopia. Hottest DnB. Stadtsaal Wil. 19.09.2026.
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
              <div className="mt-3 flex flex-wrap gap-2">
                <a
                  className="rounded-2xl border border-white/20 bg-white/5 px-4 py-2 text-sm hover:bg-white/10 transition"
                  href="https://www.instagram.com/dystopia.dnb"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-umami-event="Instagram Click"
                >
                  Instagram →
                </a>
              </div>
              <p className="mt-3 text-[11px] text-white/40">
                Folgt für Set-Times und Updates.
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

function InfoBlock({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-white/10 bg-black/30 p-3">
      <p className="text-[10px] tracking-[0.3em] text-white/45">{label}</p>
      <p className="mt-1 text-sm font-semibold text-white">{value}</p>
    </div>
  );
}
