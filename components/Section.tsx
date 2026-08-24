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
    <section id={id} className="relative mx-auto max-w-6xl px-6 py-20">
      <div className="flex items-center gap-3">
        <span className="h-2 w-2 rounded-full bg-[#cd4903] pulse-dot" />
        <p className="text-[11px] tracking-[0.3em] text-white/55">
          {eyebrow}
        </p>
      </div>
      <h2 className="mt-3 text-3xl sm:text-4xl font-black tracking-tight">
        {title}
      </h2>
      <div className="mt-3 h-px w-24 hairline-orange" />
      <div className="mt-10">{children}</div>
    </section>
  );
}
