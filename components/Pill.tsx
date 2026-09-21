export default function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="font-wide border border-white/15 bg-white/[0.04] px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-white/80">
      {children}
    </span>
  );
}
