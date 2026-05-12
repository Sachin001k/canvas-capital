import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import portrait from "@/assets/ayontika-portrait.png";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Ayontika Naha · My Canvas Dreams" },
      { name: "description", content: "Aspiring artist from Mumbai working at the intersection of painting, mathematics, and economics." },
      { property: "og:title", content: "About — Ayontika Naha" },
      { property: "og:description", content: "Artist, teacher, researcher. Mumbai-based." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <section className="pt-40 pb-12 mx-auto max-w-[1500px] px-6 md:px-10">
        <Reveal><p className="eyebrow mb-8">Volume 05 — About</p></Reveal>
        <Reveal delay={0.1}>
          <h1 className="display-xl">
            A girl with a<br />
            <span className="italic-serif" style={{ color: "var(--forest)" }}>brush</span> and a <span className="italic-serif" style={{ color: "var(--burgundy)" }}>question.</span>
          </h1>
        </Reveal>
      </section>

      <Section>
        <div className="grid md:grid-cols-12 gap-12">
          <Reveal className="md:col-span-5 zoom-wrap">
            <img src={portrait} alt="Portrait of Ayontika Naha" className="w-full h-[90vh] object-cover" loading="lazy" />
          </Reveal>
          <div className="md:col-span-7 md:pt-8 space-y-10">
            <Reveal>
              <p className="text-xl leading-relaxed text-foreground/90">
                I am an aspiring artist from Mumbai and have been passionate about
                art since I was ten years old. My forte lies in painting nature and
                streets — mainly in acrylic, sometimes charcoal.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-base text-muted-foreground leading-relaxed">
                Around 50–75% of all the proceeds from the art I sell are donated to
                Seva Sahayog, a local NGO supporting the education of young,
                underprivileged girls. I hope to create artworks that inspire and
                resonate — and to use that talent to support meaningful causes.
              </p>
            </Reveal>

            <div className="grid sm:grid-cols-2 gap-8 pt-10 border-t border-border/60">
              <div>
                <p className="eyebrow mb-3">Leadership</p>
                <ul className="space-y-1 italic-serif text-lg">
                  <li>Head Girl</li>
                  <li>Interact Club President</li>
                  <li>Math Club President</li>
                </ul>
              </div>
              <div>
                <p className="eyebrow mb-3">Interests</p>
                <ul className="space-y-1 italic-serif text-lg">
                  <li>Painting · Acrylic, Charcoal</li>
                  <li>Public finance & inequality</li>
                  <li>Education access</li>
                </ul>
              </div>
            </div>

            <Reveal delay={0.2}>
              <blockquote className="mt-10 pl-6 border-l-2 border-[var(--gold)] italic-serif text-2xl leading-snug">
                &ldquo;Art is the most generous form of accounting I know — every brushstroke
                is a vote for what should be valued.&rdquo;
              </blockquote>
            </Reveal>
          </div>
        </div>
      </Section>
    </>
  );
}
