export default function Section({
  id,
  eyebrow,
  title,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="relative border-t border-white/10">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
        {/* Label sitzt auf der Trennlinie — technische Zeichnung statt Karten-Deko */}
        <span className="font-wide absolute -top-[0.65em] left-6 bg-[#07080a] pr-4 text-[11px] font-bold tracking-[0.25em] text-[#ff6a1a] sm:left-[max(1.5rem,calc((100%-72rem)/2+1.5rem))]">
          {eyebrow}
        </span>

        <h2 className="font-display max-w-4xl text-5xl font-bold uppercase leading-[0.95] tracking-tight sm:text-6xl md:text-7xl">
          {title}
        </h2>

        <div className="mt-12">{children}</div>
      </div>
    </section>
  );
}
