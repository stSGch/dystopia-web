export default function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs text-white/80 tracking-wide">
      {children}
    </span>
  );
}
