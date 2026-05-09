import { Reveal } from "./Reveal";

export type MetricItem = { value: string; label: string };

export function MetricGrid({ items }: { items: MetricItem[] }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border/60 border border-border/60">
      {items.map((m, i) => (
        <Reveal key={i} delay={i * 0.05} className="bg-background">
          <div className="group p-8 md:p-10 h-full flex flex-col justify-between gap-6 hover:bg-secondary/60 transition-colors duration-700">
            <p className="font-[family-name:var(--font-display)] text-4xl md:text-6xl leading-none tracking-tight">
              {m.value}
            </p>
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground group-hover:text-foreground transition-colors duration-500">
              {m.label}
            </p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
