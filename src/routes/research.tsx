import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import research from "@/assets/research.jpg";

export const Route = createFileRoute("/research")({
  head: () => ({
    meta: [
      { title: "Research — Economic Inquiry · My Canvas Dreams" },
      { name: "description", content: "GST and the bottom 50%: a research paper on tax progressivity in India, 2017–2025." },
      { property: "og:title", content: "Research — Economic Inquiry" },
      { property: "og:description", content: "Annotated insights on the GST and the lived experience of low-income earners." },
    ],
  }),
  component: ResearchPage,
});

function ResearchPage() {
  return (
    <>
      <section className="pt-40 pb-12 mx-auto max-w-[1500px] px-6 md:px-10">
        <Reveal><p className="eyebrow mb-8">Volume 03 — Research</p></Reveal>
        <Reveal delay={0.1}>
          <h1 className="display-xl">
            Economic<br />
            <span className="italic-serif" style={{ color: "var(--forest)" }}>Inquiry.</span>
          </h1>
        </Reveal>
      </section>

      <Section>
        <article className="grid md:grid-cols-12 gap-12">
          <aside className="md:col-span-4 md:sticky md:top-32 self-start space-y-8">
            <div>
              <p className="eyebrow mb-2">Paper</p>
              <p className="font-[family-name:var(--font-display)] text-2xl leading-snug">
                To what extent has GST benefited the bottom 50% of income earners in India (2017–2025)?
              </p>
            </div>
            <dl className="space-y-4 text-sm border-t border-border/60 pt-6">
              <div className="flex justify-between"><dt className="eyebrow text-[10px]">Field</dt><dd>Public Finance</dd></div>
              <div className="flex justify-between"><dt className="eyebrow text-[10px]">Period</dt><dd>2017 — 2025</dd></div>
              <div className="flex justify-between"><dt className="eyebrow text-[10px]">Format</dt><dd>Working Paper</dd></div>
              <div className="flex justify-between"><dt className="eyebrow text-[10px]">Status</dt><dd>In review</dd></div>
            </dl>
          </aside>

          <div className="md:col-span-8 space-y-16">
            <Reveal className="zoom-wrap">
              <img src={research} alt="Handwritten economic equations" className="w-full h-[55vh] object-cover bg-secondary" loading="lazy" />
            </Reveal>

            <Reveal>
              <h3 className="display-md">The Question</h3>
              <p className="mt-6 text-lg leading-relaxed text-foreground/90">
                Does India&rsquo;s Goods and Services Tax — a structural reform sold as
                simplification and equity — actually reach the people it was meant
                to lift? The paper investigates the distance between policy
                intention and lived consumption.
              </p>
            </Reveal>

            <Reveal>
              <h3 className="display-md">Key Findings</h3>
              <ol className="mt-8 space-y-8">
                {[
                  "The GST is moderately progressive, with several areas open to design improvements.",
                  "The real benefit felt by lower-income groups is often inconsistent and weak.",
                  "Compliance costs and informality continue to absorb gains intended for the bottom decile.",
                ].map((t, i) => (
                  <li key={i} className="grid grid-cols-[auto,1fr] gap-6 items-start border-t border-border/60 pt-8">
                    <span className="font-[family-name:var(--font-display)] text-3xl text-[var(--burgundy)]">0{i + 1}</span>
                    <p className="text-lg leading-relaxed">{t}</p>
                  </li>
                ))}
              </ol>
            </Reveal>

            {/* Mock data viz */}
            <Reveal>
              <h3 className="display-md">A snapshot</h3>
              <div className="mt-8 p-8 md:p-12 border border-border/60 bg-secondary/40">
                <p className="eyebrow mb-6">Effective tax burden by income decile (illustrative)</p>
                <div className="flex items-end gap-3 h-56">
                  {[65, 58, 52, 48, 44, 40, 36, 30, 24, 18].map((h, i) => (
                    <div key={i} className="flex-1 flex flex-col items-center gap-2">
                      <div
                        className="w-full transition-all duration-700 hover:opacity-80"
                        style={{
                          height: `${h}%`,
                          background: i < 5 ? "var(--burgundy)" : "var(--forest)",
                        }}
                      />
                      <span className="text-[10px] tracking-wide text-muted-foreground">D{i + 1}</span>
                    </div>
                  ))}
                </div>
                <p className="mt-6 text-sm text-muted-foreground italic-serif">
                  Lower deciles bear a disproportionately higher effective burden relative to income.
                </p>
              </div>
            </Reveal>

            <Reveal>
              <h3 className="display-md">Conclusion</h3>
              <p className="mt-6 text-lg leading-relaxed text-foreground/90">
                The findings highlight the need for stronger reforms in the design
                of the GST — particularly on rate structure, exemptions for
                essential consumption, and the cost of compliance for the smallest
                economic actors.
              </p>
            </Reveal>
          </div>
        </article>
      </Section>
    </>
  );
}
