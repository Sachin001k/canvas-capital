import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { artworks } from "@/data/artworks";
import { StudentWorks } from "@/components/StudentWorks";
import { site } from "@/data/site";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Gallery — Original Paintings for Sale · My Canvas Dreams" },
      {
        name: "description",
        content:
          "Browse and buy original paintings by Ayontika Naha. 60% of every sale funds girls' education through Seva Sahayog.",
      },
      { property: "og:title", content: "The Gallery — My Canvas Dreams" },
      {
        property: "og:description",
        content: "Original paintings of nature, streets and everyday life.",
      },
    ],
  }),
  component: WorkPage,
});

const featured = artworks.slice(0, 3);
const rest = artworks.slice(3);
const availableCount = artworks.filter((a) => !a.sold).length;
const soldCount = artworks.length - availableCount;

const filters = [
  { key: "all", label: `All (${rest.length})` },
  { key: "available", label: "Available" },
  { key: "sold", label: "Sold" },
] as const;
type Filter = (typeof filters)[number]["key"];

function WorkPage() {
  const [filter, setFilter] = useState<Filter>("all");
  const shown = rest.filter((w) =>
    filter === "all" ? true : filter === "sold" ? w.sold : !w.sold,
  );

  return (
    <>
      <section className="pt-40 pb-20 mx-auto max-w-[1500px] px-6 md:px-10">
        <Reveal>
          <p className="eyebrow mb-8">The gallery</p>
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
            Every painting here is a signed original. {site.donationShare} of each sale goes to{" "}
            {site.ngo} to fund the education of underprivileged girls.
          </p>
          <p className="mt-6 text-sm text-muted-foreground">
            {artworks.length} works · {availableCount} available · {soldCount} in private homes
          </p>
        </Reveal>
      </section>

      {/* Featured trio */}
      <Section
        eyebrow="Latest from the studio"
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
              key={w.slug}
              className={`grid md:grid-cols-12 gap-10 items-center ${i % 2 ? "md:[&>*:first-child]:order-2" : ""}`}
            >
              <Reveal className="md:col-span-7 zoom-wrap">
                <Link to="/product/$slug" params={{ slug: w.slug }} className="block">
                  <img
                    src={w.file}
                    alt={w.title}
                    className="w-full h-[60vh] md:h-[80vh] object-cover"
                    loading="lazy"
                  />
                </Link>
              </Reveal>
              <div className="md:col-span-5 md:px-8 space-y-6">
                <Reveal>
                  <p className="eyebrow">No. 0{i + 1}</p>
                  <Link to="/product/$slug" params={{ slug: w.slug }} className="block">
                    <h2 className="display-md mt-3 hover:opacity-80 transition">{w.title}</h2>
                  </Link>
                </Reveal>
                <Reveal delay={0.1}>
                  <p className="italic-serif text-muted-foreground">
                    Original painting, signed by the artist.
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
                      <dd className="mt-2">{w.sold ? "Sold" : "Available"}</dd>
                    </div>
                  </dl>
                </Reveal>
                <Reveal delay={0.3}>
                  <Link
                    to="/product/$slug"
                    params={{ slug: w.slug }}
                    className="inline-block text-xs tracking-[0.2em] uppercase border-b border-foreground pb-1 hover:opacity-70 transition"
                  >
                    {w.sold ? "View painting →" : "View & buy →"}
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
            Every <span className="italic-serif">painting,</span> in one place.
          </>
        }
      >
        <div role="group" aria-label="Filter paintings" className="mb-12 flex flex-wrap gap-3">
          {filters.map((f) => (
            <button
              key={f.key}
              type="button"
              aria-pressed={filter === f.key}
              onClick={() => setFilter(f.key)}
              className={`px-5 py-2.5 rounded-full border text-sm transition-colors duration-500 ${
                filter === f.key
                  ? "bg-foreground text-background border-foreground"
                  : "border-border hover:border-foreground"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-10">
          {shown.map((w) => (
            <Link
              key={w.slug}
              to="/product/$slug"
              params={{ slug: w.slug }}
              className="group block"
            >
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
                      Sold
                    </span>
                  )}
                </div>
                <figcaption className="mt-4 flex items-baseline justify-between gap-4">
                  <span className="font-[family-name:var(--font-display)] italic text-lg leading-tight group-hover:opacity-70 transition">
                    {w.title}
                  </span>
                  {!w.sold && (
                    <span className="text-xs text-muted-foreground tabular-nums whitespace-nowrap">
                      {w.price ? `₹${w.price}` : "On request"}
                    </span>
                  )}
                </figcaption>
              </figure>
            </Link>
          ))}
        </div>

        <div className="mt-20 flex flex-col md:flex-row md:items-center justify-between gap-6 border-t border-border/60 pt-10">
          <p className="text-muted-foreground max-w-xl">
            Missed a painting you loved, or want something made for your space? Commissions are
            open.
          </p>
          <Link to="/contact" className="story-link text-sm tracking-wide w-fit">
            Ask about a commission →
          </Link>
        </div>
      </Section>

      <StudentWorks />
    </>
  );
}
