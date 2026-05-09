import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { MetricGrid } from "@/components/Metric";
import teaching from "@/assets/teaching.jpg";
import math from "@/assets/math.jpg";

export const Route = createFileRoute("/impact")({
  head: () => ({
    meta: [
      { title: "Impact — Expanding Access · My Canvas Dreams" },
      { name: "description", content: "Art and mathematics as instruments of redistribution — six years of teaching, fundraising, and access." },
      { property: "og:title", content: "Impact — Expanding Access" },
      { property: "og:description", content: "₹1.25L+ raised through art; 400+ students taught annually; Zero To Infinity in tribal schools." },
    ],
  }),
  component: ImpactPage,
});

function ImpactPage() {
  return (
    <>
      <section className="pt-40 pb-12 mx-auto max-w-[1500px] px-6 md:px-10">
        <Reveal><p className="eyebrow mb-8">Volume 04 — Impact</p></Reveal>
        <Reveal delay={0.1}>
          <h1 className="display-xl">
            Expanding<br />
            <span className="italic-serif" style={{ color: "var(--burgundy)" }}>Access.</span>
          </h1>
        </Reveal>
        <Reveal delay={0.3}>
          <p className="mt-12 max-w-2xl text-muted-foreground text-lg leading-relaxed">
            Two practices, one quiet thesis — that creativity and numeracy, when
            placed in the right hands, can rewrite a life&rsquo;s arithmetic.
          </p>
        </Reveal>
      </section>

      {/* Art as Impact */}
      <section className="relative">
        <div className="mx-auto max-w-[1500px] px-6 md:px-10 py-24 md:py-32 grid md:grid-cols-12 gap-12">
          <Reveal className="md:col-span-7 zoom-wrap">
            <img src={teaching} alt="Children learning to paint" className="w-full h-[85vh] object-cover" loading="lazy" />
          </Reveal>
          <div className="md:col-span-5 md:pt-12 space-y-8">
            <Reveal><p className="eyebrow">Art as Impact</p></Reveal>
            <Reveal delay={0.1}>
              <h2 className="display-lg">Turning creativity into <span className="italic-serif" style={{ color: "var(--forest)" }}>opportunity.</span></h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-foreground/90 leading-relaxed">
                Over the past six years, I have created and sold over 35 acrylic
                paintings, directing 50–75% of proceeds toward the education of
                underprivileged girls through Seva Sahayog. What began as personal
                expression has evolved into a model of redistribution.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <ul className="space-y-3 pt-6 border-t border-border/60 text-sm">
                {[
                  "₹1.25 lakh+ raised through artwork",
                  "Educational kits funded for 500+ students",
                  "Initiative sustained beyond COVID-19",
                  "Teaching pricing & selling to young artists",
                ].map((t, i) => (
                  <li key={i} className="flex gap-4 items-baseline">
                    <span className="text-[var(--gold)]">✦</span>
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Math as Impact */}
      <section className="bg-secondary/50">
        <div className="mx-auto max-w-[1500px] px-6 md:px-10 py-24 md:py-32 grid md:grid-cols-12 gap-12">
          <div className="md:col-span-5 md:pt-12 space-y-8 md:order-1 order-2">
            <Reveal><p className="eyebrow">Math as Impact</p></Reveal>
            <Reveal delay={0.1}>
              <h2 className="display-lg">Zero to <span className="italic-serif" style={{ color: "var(--burgundy)" }}>Infinity.</span></h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-foreground/90 leading-relaxed">
                Over five years, I have taught mathematics to over 400 underprivileged
                students annually. In 2025, I launched <em>Zero to Infinity</em> — a
                mathematics club organising competitions for tribal schoolchildren in
                rural India, funding the winners&rsquo; education through crowdfunding.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <p className="italic-serif text-muted-foreground">
                The aim: to spread the love for maths, dissolve the fear of it, and
                turn confidence into a measurable form of access.
              </p>
            </Reveal>
          </div>
          <Reveal className="md:col-span-7 zoom-wrap md:order-2 order-1">
            <img src={math} alt="Students at a chalkboard solving equations" className="w-full h-[85vh] object-cover" loading="lazy" />
          </Reveal>
        </div>
      </section>

      <Section eyebrow="Combined reach" title={<>Numbers that <span className="italic-serif" style={{ color: "var(--forest)" }}>belong</span> to people.</>}>
        <MetricGrid
          items={[
            { value: "₹3.4L+", label: "Total raised" },
            { value: "1,200+", label: "Students reached" },
            { value: "04", label: "Tribal schools partnered" },
            { value: "300+", label: "Competition participants" },
          ]}
        />
      </Section>
    </>
  );
}
