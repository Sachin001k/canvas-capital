import { createFileRoute, Link } from "@tanstack/react-router";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { MetricGrid } from "@/components/Metric";
import { ExternalLink } from "@/components/ExternalLink";
import { artworks } from "@/data/artworks";
import { site } from "@/data/site";

const findArt = (slug: string) => artworks.find((a) => a.slug === slug)!;
const artImage = findArt("mother-and-child-ii");
const mathImage = findArt("humanity");

export const Route = createFileRoute("/impact")({
  head: () => ({
    meta: [
      { title: "Impact · My Canvas Dreams" },
      {
        name: "description",
        content:
          "How Ayontika Naha's paintings fund girls' education through Seva Sahayog, and how Zero to Infinity brings maths to tribal schools.",
      },
      { property: "og:title", content: "Impact — Expanding Access" },
      {
        property: "og:description",
        content:
          "₹1.25 lakh+ raised through art; 400+ students taught every year; Zero to Infinity in tribal schools.",
      },
    ],
  }),
  component: ImpactPage,
});

function ImpactPage() {
  return (
    <>
      <section className="pt-40 pb-12 mx-auto max-w-[1500px] px-6 md:px-10">
        <Reveal>
          <p className="eyebrow mb-8">Impact</p>
        </Reveal>
        <Reveal delay={0.1}>
          <h1 className="display-xl">
            Expanding
            <br />
            <span className="italic-serif" style={{ color: "var(--burgundy)" }}>
              access.
            </span>
          </h1>
        </Reveal>
        <Reveal delay={0.3}>
          <p className="mt-12 max-w-2xl text-muted-foreground text-lg leading-relaxed">
            Two ways I try to widen the circle of opportunity: selling my paintings to fund
            girls&rsquo; education, and teaching mathematics to students who rarely get the chance
            to enjoy it.
          </p>
        </Reveal>
      </section>

      {/* Art */}
      <section className="relative">
        <div className="mx-auto max-w-[1500px] px-6 md:px-10 py-24 md:py-32 grid md:grid-cols-12 gap-12">
          <Reveal className="md:col-span-7 zoom-wrap">
            <img
              src={artImage.file}
              alt={`${artImage.title} — painting by ${site.artist}`}
              className="w-full h-[70vh] md:h-[85vh] object-cover"
              loading="lazy"
            />
          </Reveal>
          <div className="md:col-span-5 md:pt-12 space-y-8">
            <Reveal>
              <p className="eyebrow">01 · Art that funds education</p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="display-lg">
                Turning paintings into{" "}
                <span className="italic-serif" style={{ color: "var(--forest)" }}>
                  school fees.
                </span>
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-foreground/90 leading-relaxed">
                I have sold more than 35 original paintings and give {site.donationShare} of the
                proceeds to{" "}
                <ExternalLink href={site.links.sevaSahayog} className="story-link">
                  {site.ngo}
                </ExternalLink>
                , a local NGO that supports the education of underprivileged girls. What started as
                a personal outlet during lockdown is now a steady source of funding.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <ul className="space-y-3 pt-6 border-t border-border/60 text-sm">
                {[
                  "₹1.25 lakh+ raised through painting sales",
                  "Educational kits funded for 500+ students",
                  "Sustained well beyond the COVID-19 lockdown",
                  "Workshops for young artists on pricing and selling their work",
                ].map((t) => (
                  <li key={t} className="flex gap-4 items-baseline">
                    <span className="text-[var(--gold)]" aria-hidden="true">
                      ✦
                    </span>
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Maths */}
      <section className="bg-secondary/50">
        <div className="mx-auto max-w-[1500px] px-6 md:px-10 py-24 md:py-32 grid md:grid-cols-12 gap-12">
          <div className="md:col-span-5 md:pt-12 space-y-8 md:order-1 order-2">
            <Reveal>
              <p className="eyebrow">02 · Maths for everyone</p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="display-lg">
                Zero to{" "}
                <span className="italic-serif" style={{ color: "var(--burgundy)" }}>
                  Infinity.
                </span>
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-foreground/90 leading-relaxed">
                For five years I have taught mathematics to more than 400 underprivileged students
                every year. In 2025 I started <em>Zero to Infinity</em> — a maths club that runs
                competitions for tribal schoolchildren in rural India and crowdfunds the
                winners&rsquo; education.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <p className="italic-serif text-lg text-muted-foreground">
                The goal: replace the fear of maths with confidence — and turn that confidence into
                opportunity.
              </p>
            </Reveal>
          </div>
          <Reveal className="md:col-span-7 zoom-wrap md:order-2 order-1">
            <img
              src={mathImage.file}
              alt={`${mathImage.title} — painting by ${site.artist}`}
              className="w-full h-[70vh] md:h-[85vh] object-cover"
              loading="lazy"
            />
          </Reveal>
        </div>
      </section>

      <Section
        eyebrow="Together"
        title={
          <>
            Numbers that{" "}
            <span className="italic-serif" style={{ color: "var(--forest)" }}>
              belong
            </span>{" "}
            to people.
          </>
        }
      >
        <MetricGrid
          items={[
            { value: "₹3.4L+", label: "Raised across all initiatives" },
            { value: "1,200+", label: "Students reached" },
            { value: "04", label: "Tribal schools partnered" },
            { value: "300+", label: "Competition participants" },
          ]}
        />
        <Reveal>
          <div className="mt-16 flex flex-col md:flex-row md:items-center justify-between gap-6 p-8 md:p-12 border border-border/60">
            <p className="display-md max-w-2xl">
              Every painting sold puts a girl one step closer to school.
            </p>
            <Link
              to="/work"
              className="shrink-0 inline-flex items-center gap-3 px-7 py-4 rounded-full bg-foreground text-background text-sm hover:bg-[var(--forest)] transition-colors duration-500"
            >
              Shop the gallery <span aria-hidden="true">→</span>
            </Link>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
