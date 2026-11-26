import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { ExternalLink } from "@/components/ExternalLink";
import { artworks } from "@/data/artworks";
import { site } from "@/data/site";

const image = artworks.find((a) => a.slug === "rhythm-of-the-mind")!;

export const Route = createFileRoute("/research")({
  head: () => ({
    meta: [
      { title: "Research: GST and India's Bottom 50% · My Canvas Dreams" },
      {
        name: "description",
        content:
          "A working paper by Ayontika Naha on whether India's Goods and Services Tax has benefited the bottom 50% of income earners (2017–2025).",
      },
      { property: "og:title", content: "Research — GST and India's Bottom 50%" },
      {
        property: "og:description",
        content: "Has GST helped the people it was meant to help? A working paper, 2017–2025.",
      },
    ],
  }),
  component: ResearchPage,
});

const findings = [
  "Overall, the GST is moderately progressive — but several parts of its design leave room for improvement.",
  "The real benefit felt by lower-income households is often weak and inconsistent.",
  "Compliance costs and the size of the informal economy absorb part of the gains meant for those at the bottom.",
];

function ResearchPage() {
  return (
    <>
      <section className="pt-40 pb-12 mx-auto max-w-[1500px] px-6 md:px-10">
        <Reveal>
          <p className="eyebrow mb-8">Research</p>
        </Reveal>
        <Reveal delay={0.1}>
          <h1 className="display-xl">
            Economic
            <br />
            <span className="italic-serif" style={{ color: "var(--forest)" }}>
              inquiry.
            </span>
          </h1>
        </Reveal>
        <Reveal delay={0.3}>
          <p className="mt-12 max-w-2xl text-muted-foreground text-lg leading-relaxed">
            Painting taught me to notice who is left out of the picture. Economics gives me the
            tools to measure it. My current paper asks whether one of India&rsquo;s biggest tax
            reforms has reached the people it promised to help.
          </p>
        </Reveal>
      </section>

      <Section>
        <article className="grid md:grid-cols-12 gap-12">
          <aside className="md:col-span-4 md:sticky md:top-32 self-start space-y-8">
            <div>
              <p className="eyebrow mb-2">Working paper</p>
              <p className="font-[family-name:var(--font-display)] text-2xl leading-snug">
                To what extent has GST benefited the bottom 50% of income earners in India
                (2017–2025)?
              </p>
            </div>
            <dl className="space-y-4 text-sm border-t border-border/60 pt-6">
              {[
                ["Author", site.artist],
                ["Field", "Public finance"],
                ["Period", "2017 – 2025"],
                ["Status", "In review"],
              ].map(([k, v]) => (
                <div key={k} className="flex justify-between gap-4">
                  <dt className="eyebrow text-[10px]">{k}</dt>
                  <dd>{v}</dd>
                </div>
              ))}
            </dl>
            <ExternalLink
              href={site.links.researchPaper}
              className="inline-flex items-center gap-3 px-6 py-3.5 rounded-full border border-foreground/30 text-sm hover:bg-foreground hover:text-background transition-colors duration-500"
            >
              Read the paper <span aria-hidden="true">→</span>
            </ExternalLink>
          </aside>

          <div className="md:col-span-8 space-y-16">
            <Reveal className="zoom-wrap">
              <img
                src={image.file}
                alt={`${image.title} — painting by ${site.artist}`}
                className="w-full h-[55vh] object-cover bg-secondary"
                loading="lazy"
              />
            </Reveal>

            <Reveal>
              <h2 className="display-md">The question</h2>
              <p className="mt-6 text-lg leading-relaxed text-foreground/90">
                India&rsquo;s Goods and Services Tax, introduced in 2017, was promised as a simpler
                and fairer system. This paper asks whether that promise has reached the bottom half
                of earners — and looks at the gap between what the policy intended and how it shows
                up in everyday spending.
              </p>
            </Reveal>

            <Reveal>
              <h2 className="display-md">Key findings</h2>
              <ol className="mt-8 space-y-8">
                {findings.map((t, i) => (
                  <li
                    key={i}
                    className="grid grid-cols-[auto_1fr] gap-6 items-start border-t border-border/60 pt-8"
                  >
                    <span className="font-[family-name:var(--font-display)] text-3xl text-[var(--burgundy)]">
                      0{i + 1}
                    </span>
                    <p className="text-lg leading-relaxed">{t}</p>
                  </li>
                ))}
              </ol>
            </Reveal>

            <Reveal>
              <h2 className="display-md">What should change</h2>
              <p className="mt-6 text-lg leading-relaxed text-foreground/90">
                The findings point to targeted reforms in how GST is designed — especially its rate
                structure, exemptions on essential goods, and the cost of compliance for the
                smallest businesses.
              </p>
            </Reveal>
          </div>
        </article>
      </Section>
    </>
  );
}
