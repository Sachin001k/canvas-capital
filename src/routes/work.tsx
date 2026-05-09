import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import art1 from "@/assets/art-1.jpg";
import art2 from "@/assets/art-2.jpg";
import art3 from "@/assets/art-3.jpg";
import collage from "@/assets/hero-collage.jpg";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Work — Art & Inquiry · My Canvas Dreams" },
      { name: "description", content: "A gallery of paintings exploring invisibility, identity, and the quiet economies of creative labour." },
      { property: "og:title", content: "Work — Art & Inquiry" },
      { property: "og:description", content: "Featured series Invisible Artists, plus a curated portfolio of acrylic and charcoal works." },
    ],
  }),
  component: WorkPage,
});

const works = [
  { src: art1, title: "Quiet Hours, Bandra", medium: "Acrylic on canvas", size: "24 × 30 in", year: "2023", note: "On the slowness of streets that outlive their residents." },
  { src: art2, title: "Undergrowth", medium: "Acrylic on canvas", size: "36 × 48 in", year: "2024", note: "Burgundy paths cut through canopy — a study in being unseen." },
  { src: art3, title: "Hands That Carry Cities", medium: "Charcoal on paper", size: "18 × 24 in", year: "2024", note: "An invisible artisan, rendered in the medium of his own labour." },
];

function WorkPage() {
  return (
    <>
      <section className="pt-40 pb-20 mx-auto max-w-[1500px] px-6 md:px-10">
        <Reveal><p className="eyebrow mb-8">Volume 02 — Work</p></Reveal>
        <Reveal delay={0.1}>
          <h1 className="display-xl">
            Art &<br />
            <span className="italic-serif" style={{ color: "var(--burgundy)" }}>Inquiry.</span>
          </h1>
        </Reveal>
        <Reveal delay={0.3}>
          <p className="mt-12 max-w-xl text-muted-foreground text-lg leading-relaxed">
            A gallery of paintings, themes, and questions — where every brushstroke
            doubles as a footnote.
          </p>
        </Reveal>
      </section>

      {/* Featured Series */}
      <Section eyebrow="Featured Series" title={<>Invisible <span className="italic-serif" style={{ color: "var(--forest)" }}>Artists</span></>}>
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-5 space-y-8">
            <Reveal>
              <p className="text-lg leading-relaxed">
                A thematic series exploring creators who lack visibility, recognition,
                and fair compensation.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="text-muted-foreground leading-relaxed">
                This body of work examines how artistic labour often exists without
                market access or pricing power, particularly in underserved
                communities — the quiet presence of creative labour that goes
                unrecognized.
              </p>
            </Reveal>

            <div className="grid grid-cols-2 gap-8 pt-8 border-t border-border/60">
              <div>
                <p className="eyebrow mb-3">Themes</p>
                <p className="italic-serif text-xl">invisibility · labour · identity</p>
              </div>
              <div>
                <p className="eyebrow mb-3">Economic Lens</p>
                <p className="italic-serif text-xl">undervaluation · informal economies</p>
              </div>
            </div>
          </div>
          <Reveal className="md:col-span-7 zoom-wrap">
            <img src={collage} alt="Invisible Artists series collage" className="w-full h-[90vh] object-cover" loading="lazy" />
          </Reveal>
        </div>
      </Section>

      {/* Gallery */}
      <Section eyebrow="Selected Works" title={<>The <span className="italic-serif">portfolio,</span> in three movements.</>}>
        <div className="space-y-32 md:space-y-48">
          {works.map((w, i) => (
            <div key={i} className={`grid md:grid-cols-12 gap-10 items-center ${i % 2 ? "md:[&>*:first-child]:order-2" : ""}`}>
              <Reveal className="md:col-span-7 zoom-wrap">
                <img src={w.src} alt={w.title} className="w-full h-[80vh] object-cover" loading="lazy" />
              </Reveal>
              <div className="md:col-span-5 md:px-8 space-y-6">
                <Reveal>
                  <p className="eyebrow">No. 0{i + 1}</p>
                  <h3 className="display-md mt-3">{w.title}</h3>
                </Reveal>
                <Reveal delay={0.1}>
                  <p className="italic-serif text-muted-foreground">{w.note}</p>
                </Reveal>
                <Reveal delay={0.2}>
                  <dl className="grid grid-cols-3 gap-4 pt-6 border-t border-border/60 text-sm">
                    <div><dt className="eyebrow text-[10px]">Medium</dt><dd className="mt-2">{w.medium}</dd></div>
                    <div><dt className="eyebrow text-[10px]">Size</dt><dd className="mt-2">{w.size}</dd></div>
                    <div><dt className="eyebrow text-[10px]">Year</dt><dd className="mt-2">{w.year}</dd></div>
                  </dl>
                </Reveal>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Portfolio" title={<>Drawn from <span className="italic-serif" style={{ color: "var(--forest)" }}>nature,</span> streets, and lived environments.</>}>
        <p className="max-w-2xl text-muted-foreground text-lg leading-relaxed">
          A curated selection across themes of everyday life, identity, and human
          experience. Working primarily with acrylics and occasionally charcoal —
          capturing moments that are often overlooked.
        </p>
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5">
          {[art1, art2, art3, collage, art2, art1, collage, art3].map((s, i) => (
            <Reveal key={i} delay={(i % 4) * 0.06} className={`zoom-wrap ${i % 3 === 0 ? "row-span-2" : ""}`}>
              <img src={s} alt="" className={`w-full object-cover ${i % 3 === 0 ? "h-[70vh]" : "h-[34vh]"}`} loading="lazy" />
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}
