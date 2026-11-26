import { createFileRoute, Link } from "@tanstack/react-router";
import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { Reveal, StaggerWords } from "@/components/Reveal";
import { MetricGrid } from "@/components/Metric";
import { Marquee } from "@/components/Marquee";
import { artworks } from "@/data/artworks";
import { site } from "@/data/site";

const storyArt = artworks.find((a) => a.title === "Mumbai Meri Jaan")!;
const featured = artworks.find((a) => a.title === "Mother and Child – I")!;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "My Canvas Dreams — Original Paintings by Ayontika Naha" },
      {
        name: "description",
        content:
          "Original paintings by Mumbai artist Ayontika Naha. 60% of every sale funds the education of underprivileged girls through Seva Sahayog.",
      },
      { property: "og:title", content: "My Canvas Dreams — Original Paintings by Ayontika Naha" },
      {
        property: "og:description",
        content: "Art as a lens on inequality — and a way to fund girls' education.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />

      <Marquee items={["Painter", "Teacher", "Researcher", "Fundraiser", "Mumbai"]} />

      {/* Story */}
      <Section
        eyebrow="The story"
        title={<StaggerWords text="A lockdown habit that became a way to give back." />}
      >
        <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-start">
          <Reveal className="md:col-span-6 zoom-wrap">
            <img
              src={storyArt.file}
              alt={`${storyArt.title} — painting by ${site.artist}`}
              className="w-full h-[60vh] object-cover"
              loading="lazy"
            />
          </Reveal>
          <div className="md:col-span-6 md:pt-12 space-y-8">
            <Reveal>
              <p className="text-lg md:text-xl leading-relaxed text-foreground/90">
                I&rsquo;ve loved painting since I was ten. During the COVID-19 lockdown it became a
                daily ritual — hours at the easel, most days — and slowly turned into something
                bigger: a way of looking at inequality. Who gets seen. Who gets valued. Who gets a
                fair chance.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="text-base text-muted-foreground leading-relaxed">
                Today I paint, teach mathematics to underprivileged students, and research how
                economic policy reaches — or misses — the people at the bottom of the income ladder.
                Each of the three keeps the others honest.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <Link to="/about" className="story-link text-sm tracking-wide">
                Read my story →
              </Link>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* Metrics */}
      <Section
        eyebrow="Impact so far"
        title={
          <>
            Measured in{" "}
            <span className="italic-serif" style={{ color: "var(--forest)" }}>
              people,
            </span>{" "}
            not pieces.
          </>
        }
      >
        <MetricGrid
          items={[
            { value: "₹1.25L+", label: "Raised through art" },
            { value: "35+", label: "Paintings sold" },
            { value: site.donationShare, label: "Of every sale donated" },
            { value: "1,800+", label: "Students reached" },
          ]}
        />
        <Reveal>
          <Link to="/impact" className="mt-10 inline-block story-link text-sm tracking-wide">
            See where the money goes →
          </Link>
        </Reveal>
      </Section>

      {/* Featured work */}
      <section className="relative">
        <div className="mx-auto max-w-[1500px] px-6 md:px-10 py-24 md:py-36 grid md:grid-cols-12 gap-10">
          <div className="md:col-span-5 md:sticky md:top-32 self-start">
            <p className="eyebrow mb-6">Featured painting</p>
            <h2 className="display-lg">
              Mother and{" "}
              <span className="italic-serif" style={{ color: "var(--burgundy)" }}>
                Child
              </span>
            </h2>
            <p className="mt-8 text-muted-foreground max-w-md leading-relaxed">
              A mother cradles her sleeping child among wildflowers — a portrait of the quiet,
              everyday work of care that is everywhere and rarely seen. An original, signed by the
              artist.
            </p>
            <dl className="mt-8 grid grid-cols-2 gap-4 max-w-xs text-sm border-t border-border/60 pt-6">
              <div>
                <dt className="eyebrow text-[10px]">Status</dt>
                <dd className="mt-2">{featured.sold ? "Sold" : "Available"}</dd>
              </div>
              <div>
                <dt className="eyebrow text-[10px]">Price</dt>
                <dd className="mt-2">{featured.price ? `₹${featured.price}` : "On request"}</dd>
              </div>
            </dl>
            <div className="mt-10 flex flex-wrap gap-6">
              <Link
                to="/product/$slug"
                params={{ slug: featured.slug }}
                className="inline-flex items-center gap-3 story-link text-sm"
              >
                View this painting →
              </Link>
              <Link
                to="/work"
                className="inline-flex items-center gap-3 story-link text-sm text-muted-foreground"
              >
                Browse the gallery
              </Link>
            </div>
          </div>
          <Reveal className="md:col-span-7 zoom-wrap">
            <Link to="/product/$slug" params={{ slug: featured.slug }} className="block">
              <img
                src={featured.file}
                alt={`${featured.title} — painting by ${site.artist}`}
                className="w-full h-[80vh] object-cover"
                loading="lazy"
              />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Three threads */}
      <Section className="!py-40">
        <Reveal>
          <p className="display-xl leading-[0.95]">
            <span className="text-foreground/30">Paint.</span>{" "}
            <span className="italic-serif" style={{ color: "var(--forest)" }}>
              Teach.
            </span>
            <br />
            <span className="italic-serif" style={{ color: "var(--burgundy)" }}>
              Question.
            </span>
          </p>
        </Reveal>
        <div className="mt-16 grid md:grid-cols-3 gap-px bg-border/60 border border-border/60">
          {[
            {
              to: "/work",
              n: "01",
              t: "The Gallery",
              d: "Original paintings, available to buy.",
            },
            {
              to: "/impact",
              n: "02",
              t: "Impact",
              d: "Funding girls' education and teaching maths to those who need it most.",
            },
            {
              to: "/research",
              n: "03",
              t: "Research",
              d: "A working paper on whether GST has helped India's bottom 50%.",
            },
          ].map((c) => (
            <Link
              key={c.to}
              to={c.to}
              className="group bg-background p-10 hover:bg-secondary/60 transition-colors duration-700 flex flex-col gap-12"
            >
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
