import { createFileRoute, Link } from "@tanstack/react-router";
import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { Reveal, StaggerWords } from "@/components/Reveal";
import { MetricGrid } from "@/components/Metric";
import { Marquee } from "@/components/Marquee";
import art1 from "@/assets/art-1.jpg";
import teaching from "@/assets/teaching.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "My Canvas Dreams — Art as a Lens on Inequality" },
      { name: "description", content: "Editorial portfolio by Ayontika Naha — painter, teacher, and researcher exploring value, access, and human potential." },
      { property: "og:title", content: "My Canvas Dreams — Ayontika Naha" },
      { property: "og:description", content: "A visual essay on art, inequality, and access." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />

      <Marquee items={["Painter", "Researcher", "Teacher", "Mumbai", "Since 2018"]} />

      {/* Intro story */}
      <Section eyebrow="Prologue" title={<StaggerWords text="A practice that began in lockdown — and never quite stopped." />}>
        <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-start">
          <Reveal className="md:col-span-6 zoom-wrap">
            <img src={art1} alt="Acrylic painting of a quiet Indian street" className="w-full h-[60vh] object-cover" loading="lazy" />
          </Reveal>
          <div className="md:col-span-6 md:pt-12 space-y-8">
            <Reveal>
              <p className="text-lg md:text-xl leading-relaxed text-foreground/90">
                What began as painting for hours each day during the COVID-19 lockdown
                gradually evolved into something larger — an exploration of how art
                reflects inequality. Who gets seen. Who gets valued. Who gets access
                to opportunity.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="text-base text-muted-foreground leading-relaxed">
                Through painting, teaching, and research, I move between the studio and
                the classroom — treating creativity, economics, and social impact as
                three voices in the same essay.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <Link to="/about" className="story-link text-sm tracking-wide">Read the full story →</Link>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* Metrics */}
      <Section eyebrow="By the numbers" title={<>A practice <span className="italic-serif" style={{ color: "var(--forest)" }}>measured</span> in people, not pieces.</>}>
        <MetricGrid
          items={[
            { value: "₹1.25L+", label: "Raised through art" },
            { value: "1,200+", label: "Students impacted" },
            { value: "07", label: "Years of practice" },
            { value: "05", label: "Years in community" },
            { value: "Head Girl", label: "Leadership" },
            { value: "Interact", label: "Club President" },
            { value: "Math Club", label: "President" },
            { value: "35+", label: "Paintings sold" },
          ]}
        />
      </Section>

      {/* Featured Work teaser */}
      <section className="relative">
        <div className="mx-auto max-w-[1500px] px-6 md:px-10 py-24 md:py-36 grid md:grid-cols-12 gap-10">
          <div className="md:col-span-5 md:sticky md:top-32 self-start">
            <p className="eyebrow mb-6">Featured Series</p>
            <h2 className="display-lg">Invisible <span className="italic-serif" style={{ color: "var(--burgundy)" }}>Artists</span></h2>
            <p className="mt-8 text-muted-foreground max-w-md leading-relaxed">
              A thematic series exploring creators who lack visibility, recognition, and
              fair compensation — and the quiet economies of creative labour.
            </p>
            <Link to="/work" className="mt-10 inline-flex items-center gap-3 story-link text-sm">
              Enter the gallery →
            </Link>
          </div>
          <Reveal className="md:col-span-7 zoom-wrap">
            <img src={teaching} alt="Children painting in a rural classroom" className="w-full h-[80vh] object-cover" loading="lazy" />
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <Section className="!py-40">
        <Reveal>
          <p className="display-xl leading-[0.95]">
            <span className="text-foreground/30">Three threads.</span><br />
            One <span className="italic-serif" style={{ color: "var(--forest)" }}>quiet</span> argument
            <br />about <span className="italic-serif" style={{ color: "var(--burgundy)" }}>value.</span>
          </p>
        </Reveal>
        <div className="mt-16 grid md:grid-cols-3 gap-px bg-border/60 border border-border/60">
          {[
            { to: "/work", n: "01", t: "Art & Inquiry", d: "A gallery of paintings, themes, and questions." },
            { to: "/research", n: "02", t: "Economic Inquiry", d: "Research at the seam of policy and people." },
            { to: "/impact", n: "03", t: "Expanding Access", d: "Teaching, fundraising, and quiet redistribution." },
          ].map((c) => (
            <Link key={c.to} to={c.to} className="group bg-background p-10 hover:bg-secondary/60 transition-colors duration-700 flex flex-col gap-12">
              <span className="eyebrow">{c.n}</span>
              <div>
                <p className="display-md">{c.t}</p>
                <p className="mt-4 text-sm text-muted-foreground max-w-xs">{c.d}</p>
                <span className="mt-10 inline-block text-sm story-link">Explore →</span>
              </div>
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
}
