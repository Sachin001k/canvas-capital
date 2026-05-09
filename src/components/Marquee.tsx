type Props = { items: string[] };

export function Marquee({ items }: Props) {
  const doubled = [...items, ...items];
  return (
    <div className="overflow-hidden border-y border-border/60 py-6 bg-background">
      <div className="marquee-track flex gap-16 whitespace-nowrap will-change-transform">
        {doubled.map((s, i) => (
          <span key={i} className="font-[family-name:var(--font-display)] italic text-3xl md:text-5xl text-foreground/80">
            {s} <span className="mx-6 text-[var(--gold)]">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
