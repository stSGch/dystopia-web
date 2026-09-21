import Image from "next/image";
import Navbar from "@/components/Navbar";
import Section from "@/components/Section";
import ArtistCard from "@/components/ArtistCard";
import Pill from "@/components/Pill";
import Hero from "@/components/sections/Hero";
import WilVsDnb from "@/components/sections/WilVsDnb";

const TICKET_URL = "https://dystopia.shop.bookinea.app";
const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Stadtsaal+Wil+Schweiz";

// Reihenfolge wie auf dem offiziellen Flyer
const HEADLINERS = [
  { name: "Tantron",       image: "/artists/tantron.webp",       video: "/video/tantron.mp4" },
  { name: "Fox Stevenson", image: "/artists/fox-stevenson.webp", video: "/video/fox-stevenson.mp4" },
  { name: "Arcando",       image: "/artists/arcando.webp",       video: "/video/arcando.mp4" },
] as const;

const SUPPORTS = [
  { name: "NPSTR",      tier: "Swiss Support", image: "/artists/npstr.webp" },
  { name: "Gingerbell", tier: "Support",       image: "/artists/gingerbell.webp" },
  { name: "LUiFF",      tier: "Support",       image: "/artists/luiff.webp" },
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
    <>
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

      {/* Inhalt: Navbar und Footer stehen als Landmarks NEBEN main */}
      <main className="min-h-screen bg-[#07080a] text-white">
      <Hero />

      {/* LINEUP */}
      <Section id="lineup" eyebrow="LINE-UP" title="Das komplette Line-Up">
        <p className="-mt-6 mb-12 max-w-2xl text-[15px] leading-relaxed text-white/70">
          Headliner:{" "}
          <span className="font-semibold text-[#ff6a1a]">Tantron</span>,{" "}
          <span className="font-semibold text-[#ff6a1a]">Fox Stevenson</span>{" "}
          und <span className="font-semibold text-[#ff6a1a]">Arcando</span>.
          Swiss Support:{" "}
          <span className="font-semibold text-[#ff6a1a]">NPSTR</span>. Weiterer
          Support:{" "}
          <span className="font-semibold text-[#ff6a1a]">Gingerbell</span> und{" "}
          <span className="font-semibold text-[#ff6a1a]">LUiFF</span>. Set-Times
          folgen kurz vor dem Event auf Instagram.
        </p>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {HEADLINERS.map((a, i) => (
            <ArtistCard
              key={a.name}
              name={a.name}
              tier="Headliner"
              image={a.image}
              video={a.video}
              delay={i * 0.05}
            />
          ))}
        </div>

        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SUPPORTS.map((a, i) => (
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

      {/* WIL VS. DNB — Video-Band */}
      <WilVsDnb />

      {/* TICKETS */}
      <Section id="tickets" eyebrow="TICKETS" title="Tickets">
        <div className="grid gap-4 lg:grid-cols-12">
          {/* Preisblock */}
          <div className="border border-[#cd4903]/50 bg-[#cd4903]/[0.07] p-7 lg:col-span-5">
            <p className="font-wide text-[11px] font-bold tracking-[0.25em] text-white/60 uppercase">
              Regular Ticket
            </p>
            <p className="font-display mt-3 text-7xl font-bold uppercase leading-none text-white">
              CHF <span className="text-[#ff6a1a]">28.90</span>
            </p>
            <p className="mt-4 text-sm leading-relaxed text-white/75">
              Offizieller Vorverkauf über Bookinea — sichere Bezahlung,
              E-Ticket per Mail, Wiederverkauf abgesichert.
            </p>
            <a
              className="font-display mt-7 inline-flex w-full items-center justify-center bg-[#cd4903] px-6 py-4 text-xl font-bold uppercase tracking-wide text-white transition hover:bg-[#ff6a1a] hover:text-black"
              href={TICKET_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-umami-event="Tickets Click"
              data-umami-event-source="tickets-section"
            >
              Zum Ticketshop →
            </a>
          </div>

          {/* Fakten */}
          <div className="border border-white/10 bg-white/[0.03] p-7 lg:col-span-7">
            <p className="text-[15px] leading-relaxed text-white/80">
              Türöffnung um 21 Uhr, der letzte Drop kurz vor 3. Dazwischen:
              sechs Acts, LED-Walls, zwei Bars und ein Soundsystem, das man im
              Brustkorb spürt.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              <Pill>Drinks &amp; Food</Pill>
              <Pill>Cash &amp; Cashless</Pill>
              <Pill>High-End Lightshow</Pill>
              <Pill>LED Walls</Pill>
              <Pill>Garderobe</Pill>
              <Pill>Ab 18 Jahren</Pill>
            </div>

            <div className="mt-8 grid gap-px border border-white/10 bg-white/10 sm:grid-cols-3">
              <InfoBlock label="Datum" value="Sa, 19.09.2026" />
              <InfoBlock label="Türöffnung" value="21:00 Uhr" />
              <InfoBlock label="Venue" value="Stadtsaal Wil" />
            </div>
          </div>
        </div>
      </Section>

      {/* INFO & FAQ */}
      <Section id="faq" eyebrow="INFO & FAQ" title="Alles, was ihr wissen müsst">
        <div className="space-y-3">
          <Faq q="Was ist DYSTOPIA — das Drum-and-Bass-Event in Wil?">
            DYSTOPIA ist ein neues Drum-and-Bass-Event in der Ostschweiz: eine
            Nacht im Stadtsaal Wil (SG) mit Tantron, Fox Stevenson und Arcando, dazu
            NPSTR, Gingerbell und LUiFF. LED-Walls, Lightshow, zwei Bars,
            Foodcorner — und Drum and Bass von liquid bis neuro.
          </Faq>

          <Faq q="Wann findet DYSTOPIA statt? Datum & Türöffnung">
            Samstag, 19. September 2026. Türöffnung ist um 21:00 Uhr — danach
            geht&apos;s durch bis 3 Uhr.
          </Faq>

          <Faq q="Welche Musik läuft? Drum and Bass in der Ostschweiz">
            Drum &amp; Bass durchs volle Spektrum: liquid, neuro, jump-up,
            dancefloor. Was drückt, wird gespielt.
          </Faq>

          <Faq q="Wann gibt es die Set-Times?">
            Die Spielzeiten kommunizieren wir kurz vor dem Event über Instagram
            und hier auf der Website.
          </Faq>

          <Faq q="Wie komme ich zum Stadtsaal Wil? (Anreise ÖV & Auto)">
            Wil ist mit der SBB hervorragend angebunden — der Stadtsaal liegt
            direkt am Bahnhof Wil. Parkplätze gibt es im Parkhaus Bahnhof
            direkt unter dem Saal und in den umliegenden Parkhäusern.
          </Faq>

          <Faq q="Gibt es ein Mindestalter?">
            Eintritt ab 18 Jahren. Bitte einen gültigen Ausweis (ID / Pass /
            Führerschein) mitbringen.
          </Faq>
        </div>
      </Section>

      {/* LOCATION */}
      <Section id="location" eyebrow="LOCATION" title="Stadtsaal Wil">
        <div className="grid gap-4 lg:grid-cols-12">
          <div className="border border-white/10 bg-white/[0.03] p-7 lg:col-span-7">
            <h3 className="font-display text-2xl font-bold uppercase tracking-wide">
              Die Venue
            </h3>
            <p className="mt-3 text-[15px] leading-relaxed text-white/75">
              Der Stadtsaal Wil, umgebaut für eine Nacht: LED-Walls, Licht und
              ein Soundsystem, das den Saal füllt — direkt am Bahnhof.
            </p>
            <p className="mt-3 text-[15px] leading-relaxed text-white/75">
              Drum and Bass hatte in der Ostschweiz bisher kein Zuhause — das
              ändern wir: ein DnB-Event in der Schweiz, mitten in Wil (SG).
              Der Saal liegt direkt am Gleis — aus St. Gallen, Winterthur und
              Zürich seid ihr in unter einer Stunde da, aus Frauenfeld und dem
              ganzen Thurgau noch schneller. Und nach Mitternacht fahren die
              Züge zurück.
            </p>

            <div className="mt-6 grid gap-px border border-white/10 bg-white/10 sm:grid-cols-2">
              <InfoBlock label="Adresse" value="Bahnhofplatz 6, 9500 Wil" />
              <InfoBlock label="Datum" value="Sa, 19.09.2026 · ab 21:00 Uhr" />
            </div>

            <a
              className="font-display mt-7 inline-flex items-center gap-2 border border-white/25 px-6 py-3 text-lg font-bold uppercase tracking-wide transition hover:border-[#ff6a1a] hover:text-[#ff6a1a]"
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              Auf Google Maps öffnen →
            </a>
          </div>

          <div className="border border-white/10 bg-white/[0.03] p-7 lg:col-span-5">
            <h3 className="font-display text-2xl font-bold uppercase tracking-wide">
              Anreise
            </h3>

            <div className="mt-5 space-y-6 text-[15px] text-white/75">
              <div>
                <p className="font-wide text-[11px] font-bold tracking-[0.25em] text-[#ff6a1a] uppercase">
                  Per Bahn — empfohlen
                </p>
                <p className="mt-2 leading-relaxed">
                  Der Stadtsaal liegt direkt am Bahnhof Wil (Bahnhofplatz 6) —
                  1 Minute zu Fuss. SBB-Verbindungen aus Zürich, Winterthur und
                  St. Gallen im Halb-/Stundentakt.
                </p>
              </div>

              <div>
                <p className="font-wide text-[11px] font-bold tracking-[0.25em] text-[#ff6a1a] uppercase">
                  Mit dem Auto
                </p>
                <p className="mt-2 leading-relaxed">
                  Das Parkhaus Bahnhof liegt direkt unter dem Stadtsaal —
                  bequemer geht&apos;s nicht. Bitte rechtzeitig anreisen, am
                  Wochenende kann es voll werden.
                </p>
              </div>
            </div>

            <p className="font-wide mt-8 text-[11px] font-bold tracking-[0.22em] text-white/55 uppercase">
              Tipp · Früh kommen · Letzter Zug checken
            </p>
          </div>
        </div>
      </Section>
      </main>

      {/* CONTACT / FOOTER */}
      <footer id="contact" className="relative border-t border-white/10 bg-[#07080a] text-white">
        <div className="absolute inset-x-0 top-0 h-px hairline-orange" />
        <div className="mx-auto max-w-6xl px-6 py-14">
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <Image
                src="/dystopia-symbol.png"
                alt="DYSTOPIA Symbol"
                width={120}
                height={60}
                className="h-10 w-auto"
              />
              <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/60">
                Drum and Bass im Stadtsaal Wil — 19. September 2026.
              </p>
            </div>

            <div>
              <p className="font-wide text-[11px] font-bold tracking-[0.25em] text-white/55 uppercase">
                Kontakt
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
                className="mt-1 block text-sm text-white/65 transition hover:text-white"
                href="tel:+41719320068"
              >
                +41 71 932 00 68
              </a>
            </div>

            <div>
              <p className="font-wide text-[11px] font-bold tracking-[0.25em] text-white/55 uppercase">
                Social
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                <a
                  className="font-wide border border-white/20 bg-white/5 px-4 py-2 text-[13px] font-semibold tracking-[0.1em] uppercase transition hover:border-[#ff6a1a] hover:text-[#ff6a1a]"
                  href="https://www.instagram.com/dystopia.dnb"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-umami-event="Instagram Click"
                >
                  Instagram →
                </a>
              </div>
              <p className="mt-3 text-[11px] text-white/60">
                Folgt für Set-Times und Updates.
              </p>
            </div>
          </div>

          <div className="mt-12 flex flex-wrap items-center justify-between gap-3 text-xs text-white/55">
            <p>© {new Date().getFullYear()} DYSTOPIA. Alle Rechte vorbehalten.</p>
            <div className="flex gap-5">
              <a className="transition hover:text-white/80" href="/imprint/">
                Impressum
              </a>
              <a className="transition hover:text-white/80" href="/privacy/">
                Datenschutz
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

function Faq({ q, children }: { q: string; children: React.ReactNode }) {
  return (
    <details className="group border border-white/10 bg-white/[0.03] p-5 transition hover:border-[#cd4903]/40">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
        <h3 className="font-display text-xl font-semibold uppercase tracking-wide">
          {q}
        </h3>
        <span
          aria-hidden="true"
          className="font-display text-2xl leading-none text-[#ff6a1a] transition group-open:rotate-45"
        >
          +
        </span>
      </summary>
      <div className="mt-3 max-w-3xl text-[15px] leading-relaxed text-white/75">
        {children}
      </div>
    </details>
  );
}

function InfoBlock({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-[#0a0b0d] p-4">
      <p className="font-wide text-[10px] font-bold tracking-[0.25em] text-white/55 uppercase">
        {label}
      </p>
      <p className="font-display mt-1.5 text-lg font-semibold uppercase text-white">
        {value}
      </p>
    </div>
  );
}
