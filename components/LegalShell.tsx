import Image from "next/image";
import Link from "next/link";

export default function LegalShell({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen bg-black text-white">
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur">
        <div className="mx-auto max-w-4xl px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/dystopia-symbol.png"
              alt="Dystopia"
              width={56}
              height={28}
              className="h-7 w-auto"
            />
            <span className="font-black tracking-[0.3em] text-sm hidden sm:inline">
              DYSTOPIA
            </span>
          </Link>
          <Link
            href="/"
            className="text-sm text-white/70 hover:text-white transition"
          >
            ← Zurück zur Startseite
          </Link>
        </div>
      </header>

      <article className="mx-auto max-w-3xl px-6 pt-32 pb-24">
        <div className="flex items-center gap-3">
          <span className="h-2 w-2 rounded-full bg-[#cd4903] pulse-dot" />
          <p className="text-[11px] tracking-[0.3em] text-white/55">LEGAL</p>
        </div>
        <h1 className="mt-3 text-3xl sm:text-4xl font-black tracking-tight">
          {title}
        </h1>
        <div className="mt-3 h-px w-24 hairline-orange" />

        <div className="prose prose-invert mt-10 max-w-none text-white/80 leading-relaxed [&_h2]:mt-10 [&_h2]:mb-3 [&_h2]:text-xl [&_h2]:font-bold [&_h2]:tracking-wide [&_h2]:text-white [&_h3]:mt-6 [&_h3]:mb-2 [&_h3]:text-base [&_h3]:font-semibold [&_h3]:tracking-wide [&_h3]:text-white/90 [&_p]:mt-3 [&_p]:text-sm [&_a]:text-[#ff6a1a] [&_a]:underline-offset-4 hover:[&_a]:underline">
          {children}
        </div>
      </article>
    </main>
  );
}
