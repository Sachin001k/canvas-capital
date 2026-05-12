import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { artworks, findArtwork } from "@/data/artworks";
import { ShoppingCart } from "lucide-react";

export const Route = createFileRoute("/product/$slug")({
  head: ({ params }) => {
    const a = findArtwork(params.slug);
    const title = a ? `${a.title} — My Canvas Dreams` : "Artwork — My Canvas Dreams";
    return {
      meta: [
        { title },
        { name: "description", content: a ? `${a.title} — original ${a.sold ? "(sold out)" : "acrylic on canvas"} by Ayontika Naha.` : "Original artwork." },
        { property: "og:title", content: title },
        ...(a ? [{ property: "og:image", content: a.file }] : []),
      ],
    };
  },
  loader: ({ params }) => {
    const a = findArtwork(params.slug);
    if (!a) throw notFound();
    return a;
  },
  notFoundComponent: () => (
    <Section eyebrow="404" title={<>Painting not <span className="italic-serif">found.</span></>}>
      <Link to="/work" className="story-link">Back to gallery</Link>
    </Section>
  ),
  errorComponent: ({ error }) => (
    <Section eyebrow="Error" title={<>Something went <span className="italic-serif">wrong.</span></>}>
      <p className="text-muted-foreground">{error.message}</p>
    </Section>
  ),
  component: ProductPage,
});

const WHATSAPP = "919987931564"; // +91 9987931564

function ProductPage() {
  const a = Route.useLoaderData();
  const related = artworks.filter((x) => x.slug !== a.slug).slice(0, 4);
  const waMsg = encodeURIComponent(
    `Hi Ayontika! I'm interested in "${a.title}"${a.price ? ` (₹${a.price})` : ""}. Is it available?`,
  );
  const waLink = `https://wa.me/${WHATSAPP}?text=${waMsg}`;

  return (
    <>
      <section className="pt-32 pb-8 mx-auto max-w-[1500px] px-6 md:px-10">
        <nav className="text-xs tracking-[0.18em] uppercase text-muted-foreground flex gap-2">
          <Link to="/" className="hover:text-foreground">Home</Link>
          <span>/</span>
          <Link to="/work" className="hover:text-foreground">Shop</Link>
          <span>/</span>
          <span className="text-foreground/80">{a.title}</span>
        </nav>
      </section>

      <section className="mx-auto max-w-[1500px] px-6 md:px-10 pb-24">
        <div className="grid md:grid-cols-12 gap-12 md:gap-16">
          <Reveal className="md:col-span-7">
            <div className="relative bg-secondary/40">
              <img src={a.file} alt={a.title} className="w-full h-auto object-contain" />
              {a.sold && (
                <span
                  className="absolute top-5 left-5 px-3 py-1 text-[10px] tracking-[0.2em] uppercase bg-background/90"
                  style={{ color: "var(--burgundy)" }}
                >
                  Sold out
                </span>
              )}
            </div>
          </Reveal>

          <div className="md:col-span-5 md:pt-6 space-y-8">
            <Reveal>
              <p className="eyebrow">Original · Acrylic on canvas</p>
              <h1 className="display-lg mt-3">{a.title}</h1>
            </Reveal>
            {a.price && (
              <Reveal delay={0.05}>
                <p className="text-3xl italic-serif" style={{ color: "var(--burgundy)" }}>
                  ₹{a.price}
                </p>
              </Reveal>
            )}
            <Reveal delay={0.1}>
              <p className="text-foreground/85 leading-relaxed">
                A signed original by Ayontika Naha. Around 50–75% of every sale supports the
                education of underprivileged girls through Seva Sahayog. Paintings ship within
                India only.
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <dl className="grid grid-cols-3 gap-4 pt-6 border-t border-border/60 text-sm">
                <div>
                  <dt className="eyebrow text-[10px]">Status</dt>
                  <dd className="mt-2">{a.sold ? "Sold out" : "Available"}</dd>
                </div>
                <div>
                  <dt className="eyebrow text-[10px]">Medium</dt>
                  <dd className="mt-2">Acrylic</dd>
                </div>
                <div>
                  <dt className="eyebrow text-[10px]">Ships</dt>
                  <dd className="mt-2">India only</dd>
                </div>
              </dl>
            </Reveal>

            <Reveal delay={0.2}>
              {!a.sold ? (
                <div className="pt-4">
                  <Link
                    to="/order/$slug"
                    params={{ slug: a.slug }}
                    className="w-full inline-flex items-center justify-center gap-3 px-6 py-4 text-xs tracking-[0.2em] uppercase border border-foreground/80 hover:bg-foreground hover:text-background transition"
                  >
                    <ShoppingCart className="h-4 w-4" aria-hidden="true" />
                    Place order
                  </Link>
                </div>
              ) : (
                <p className="pt-4 text-sm text-muted-foreground">This artwork is sold out.</p>
              )}
            </Reveal>

            <Reveal delay={0.25}>
              <div className="pt-8 border-t border-border/60 text-sm text-muted-foreground space-y-2">
                <p><span className="eyebrow text-[10px] mr-2">Categories</span> Acrylic · Canvas</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <Section eyebrow="Related works" title={<>You may also <span className="italic-serif">love.</span></>}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
          {related.map((w) => (
            <Link key={w.slug} to="/product/$slug" params={{ slug: w.slug }} className="group block">
              <div className="zoom-wrap relative aspect-[4/5] overflow-hidden bg-secondary/40">
                <img src={w.file} alt={w.title} className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
                {w.sold && (
                  <span className="absolute top-4 left-4 px-3 py-1 text-[10px] tracking-[0.2em] uppercase bg-background/90" style={{ color: "var(--burgundy)" }}>
                    Sold out
                  </span>
                )}
              </div>
              <p className="mt-3 italic-serif text-lg">{w.title}</p>
              {w.price && <p className="text-xs text-muted-foreground">₹{w.price}</p>}
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
}
