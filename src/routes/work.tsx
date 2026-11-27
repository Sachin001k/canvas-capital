import { createFileRoute, Link } from "@tanstack/react-router";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { artworks } from "@/data/artworks";
import { StudentWorks } from "@/components/StudentWorks";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Work — The Gallery · My Canvas Dreams" },
      {
        name: "description",
        content:
          "Original acrylic and charcoal paintings by Ayontika Naha — nature, streets, and the quiet economies of being seen.",
      },
      { property: "og:title", content: "Work — The Gallery" },
      {
        property: "og:description",
        content:
          "A complete catalogue of paintings, with notes on medium, price, and availability.",
      },
    ],
  }),
  component: WorkPage,
});

const featured = artworks.slice(0, 3);
const rest = artworks.slice(3);

function WorkPage() {
  return (
    <>
      <section className="pt-40 pb-20 mx-auto max-w-[1500px] px-6 md:px-10">
        <Reveal>
          <p className="eyebrow mb-8">Volume 02 — The Gallery</p>
        </Reveal>
        <Reveal delay={0.1}>
          <h1 className="display-xl">
            Painted from
            <br />
            <span className="italic-serif" style={{ color: "var(--burgundy)" }}>
              nature,
            </span>{" "}
            streets &amp;{" "}
            <span className="italic-serif" style={{ color: "var(--forest)" }}>
              memory.
            </span>
          </h1>
        </Reveal>
        <Reveal delay={0.3}>
          <p className="mt-12 max-w-xl text-muted-foreground text-lg leading-relaxed">
            A complete catalogue of original works in acrylic and charcoal. 60% of every sale
            supports the education of underprivileged girls through Seva Sahayog.
          </p>
        </Reveal>
      </section>

      {/* Editorial featured trio */}
      <Section
        eyebrow="In the studio, lately"
        title={
          <>
            New{" "}
            <span className="italic-serif" style={{ color: "var(--forest)" }}>
              arrivals.
            </span>
          </>
        }
      >
        <div className="space-y-32 md:space-y-48">
          {featured.map((w, i) => (
            <div
              key={w.title}
              className={`grid md:grid-cols-12 gap-10 items-center ${i % 2 ? "md:[&>*:first-child]:order-2" : ""}`}
            >
              <Reveal className="md:col-span-7 zoom-wrap">
                <Link to="/product/$slug" params={{ slug: w.slug }} className="block">
                  <img
                    src={w.file}
                    alt={w.title}
                    className="w-full h-[80vh] object-cover"
                    loading="lazy"
                  />
                </Link>
              </Reveal>
              <div className="md:col-span-5 md:px-8 space-y-6">
                <Reveal>
                  <p className="eyebrow">No. 0{i + 1}</p>
                  <Link to="/product/$slug" params={{ slug: w.slug }} className="block">
                    <h3 className="display-md mt-3 hover:opacity-80 transition">{w.title}</h3>
                  </Link>
                </Reveal>
                <Reveal delay={0.1}>
                  <p className="italic-serif text-muted-foreground">
                    Acrylic on canvas — original, signed by the artist.
                  </p>
                </Reveal>
                <Reveal delay={0.2}>
                  <dl className="grid grid-cols-2 gap-4 pt-6 border-t border-border/60 text-sm">
                    <div>
                      <dt className="eyebrow text-[10px]">Price</dt>
                      <dd className="mt-2">{w.price ? `₹${w.price}` : "On request"}</dd>
                    </div>
                    <div>
                      <dt className="eyebrow text-[10px]">Status</dt>
                      <dd className="mt-2">{w.sold ? "Sold out" : "Available"}</dd>
                    </div>
                  </dl>
                </Reveal>
                <Reveal delay={0.3}>
                  <Link
                    to="/product/$slug"
                    params={{ slug: w.slug }}
                    className="inline-block text-xs tracking-[0.2em] uppercase border-b border-foreground pb-1 hover:opacity-70 transition"
                  >
                    View &amp; enquire →
                  </Link>
                </Reveal>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Full catalogue */}
      <Section
        eyebrow="Full catalogue"
        title={
          <>
            The <span className="italic-serif">portfolio,</span> in full.
          </>
        }
      >
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-10">
          {rest.map((w, i) => (
            <Reveal key={w.title} delay={(i % 6) * 0.04}>
              <Link to="/product/$slug" params={{ slug: w.slug }} className="group block">
                <figure>
                  <div className="zoom-wrap relative aspect-[4/5] overflow-hidden bg-secondary/40">
                    <img
                      src={w.file}
                      alt={w.title}
                      className="absolute inset-0 w-full h-full object-cover"
                      loading="lazy"
                    />
                    {w.sold && (
                      <span
                        className="absolute top-4 left-4 px-3 py-1 text-[10px] tracking-[0.2em] uppercase bg-background/90 backdrop-blur-sm"
                        style={{ color: "var(--burgundy)" }}
                      >
                        Sold out
                      </span>
                    )}
                  </div>
                  <figcaption className="mt-4 flex items-baseline justify-between gap-4">
                    <span className="font-[family-name:var(--font-display)] italic text-lg leading-tight group-hover:opacity-70 transition">
                      {w.title}
                    </span>
                    {w.price && (
                      <span className="text-xs text-muted-foreground tabular-nums whitespace-nowrap">
                        ₹{w.price}
                      </span>
                    )}
                  </figcaption>
                </figure>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      <StudentWorks />
    </>
  );
}
