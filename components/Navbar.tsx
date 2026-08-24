import Image from "next/image";

export default function Navbar() {
  const links = [
    { href: "#lineup", label: "Line-Up" },
    { href: "#tickets", label: "Tickets" },
    { href: "#faq", label: "FAQ" },
    { href: "#location", label: "Location" },
    { href: "#contact", label: "Kontakt" },
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur">
      <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between gap-4">
        <a
          href="#top"
          aria-label="DYSTOPIA — zur Startseite"
          className="flex items-center"
        >
          {/* Full metallic logo (Symbol + Schriftzug) */}
          <Image
            src="/dystopia-logo-full.png"
            alt="DYSTOPIA — Drum & Bass Event Wil Logo"
            width={1400}
            height={454}
            className="h-9 sm:h-10 w-auto drop-shadow-[0_0_18px_rgba(205,73,3,0.25)]"
          />
        </a>

        <nav className="hidden md:flex items-center gap-7 text-sm text-white/75">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="hover:text-white transition tracking-wide"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="https://dystopia.shop.bookinea.app"
          target="_blank"
          rel="noopener noreferrer"
          data-umami-event="Tickets Click"
          data-umami-event-source="navbar"
          className="rounded-xl bg-[#cd4903] px-4 py-2 text-sm font-semibold text-white hover:brightness-110 transition shadow-[0_0_20px_rgba(205,73,3,0.35)]"
        >
          Tickets
        </a>
      </div>
    </div>
  );
}
