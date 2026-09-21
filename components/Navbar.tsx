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
    <div className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-6">
        <a
          href="#top"
          aria-label="DYSTOPIA — zur Startseite"
          className="flex items-center"
        >
          <Image
            src="/dystopia-logo-full.png"
            alt="DYSTOPIA — Drum & Bass Event Wil Logo"
            width={1400}
            height={454}
            className="h-8 w-auto sm:h-9"
          />
        </a>

        <nav className="font-wide hidden items-center gap-7 text-[13px] font-semibold tracking-[0.12em] text-white/75 uppercase md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="transition hover:text-[#ff6a1a]"
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
          className="font-display bg-[#cd4903] px-5 py-2 text-base font-bold uppercase tracking-wide text-white transition hover:bg-[#ff6a1a] hover:text-black"
        >
          Tickets
        </a>
      </div>
    </div>
  );
}
