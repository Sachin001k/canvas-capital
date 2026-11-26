import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { MessageCircle, ShoppingCart } from "lucide-react";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { ExternalLink } from "@/components/ExternalLink";
import { artworks, findArtwork, type Artwork } from "@/data/artworks";
import { site, whatsappLink } from "@/data/site";

const absolute = (path: string) =>
  typeof window === "undefined" ? path : new URL(path, window.location.origin).href;

export const Route = createFileRoute("/product/$slug")({
  loader: ({ params }): Artwork => {
    const a = findArtwork(params.slug);
    if (!a) throw notFound();
    return a;
  },
  head: ({ params }) => {
    const a = findArtwork(params.slug);
    const title = a
      ? `${a.title} — Original Painting · My Canvas Dreams`
      : "Painting · My Canvas Dreams";
    const description = a
      ? a.sold
        ? `${a.title} — an original painting by ${site.artist}. Now in a private collection.`
        : `${a.title} — an original painting by ${site.artist}${a.price ? `, ₹${a.price}` : ""}. ${site.donationShare} of the sale funds girls' education.`
      : "Original painting by Ayontika Naha.";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        ...(a ? [{ property: "og:image", content: absolute(a.file) }] : []),
      ],
    };
  },
  notFoundComponent: () => (
    <Section
      eyebrow="Not found"
      title={
        <>
          We couldn&rsquo;t find that <span className="italic-serif">painting.</span>
        </>
      }
    >
      <Link to="/work" className="story-link">
        Back to the gallery →
      </Link>
    </Section>
  ),
  errorComponent: () => (
    <Section
      eyebrow="Error"
      title={
        <>
          Something went <span className="italic-serif">wrong.</span>
        </>
      }
    >
      <Link to="/work" className="story-link">
        Back to the gallery →
      </Link>
    </Section>
  ),
  component: ProductPage,
});

/** Up to 4 other works, starting after this one in the catalogue, available pieces first. */
function relatedTo(a: Artwork): Artwork[] {
  const i = artworks.findIndex((x) => x.slug === a.slug);
  const rotated = [...artworks.slice(i + 1), ...artworks.slice(0, i)];
  return [...rotated.filter((x) => !x.sold), ...rotated.filter((x) => x.sold)].slice(0, 4);
}

function ProductPage() {
  const a = Route.useLoaderData();
  const related = relatedTo(a);
  const askLink = whatsappLink(
    a.price
      ? `Hi Ayontika! I have a question about "${a.title}" (₹${a.price}).`
      : `Hi Ayontika! I'm interested in "${a.title}". Could you share the price?`,
  );
  const commissionLink = whatsappLink(
    `Hi Ayontika! I loved "${a.title}" and would like to ask about a commission in a similar style.`,
  );

  return (
    <>
      <section className="pt-32 pb-8 mx-auto max-w-[1500px] px-6 md:px-10">
        <nav
          aria-label="Breadcrumb"
          className="text-xs tracking-[0.18em] uppercase text-muted-foreground flex flex-wrap gap-2"
        >
          <Link to="/" className="hover:text-foreground">
            Home
          </Link>
          <span aria-hidden="true">/</span>
          <Link to="/work" className="hover:text-foreground">
            Gallery
          </Link>
          <span aria-hidden="true">/</span>
          <span className="text-foreground/80" aria-current="page">
            {a.title}
          </span>
        </nav>
      </section>

      <section className="mx-auto max-w-[1500px] px-6 md:px-10 pb-24">
        <div className="grid md:grid-cols-12 gap-12 md:gap-16">
          <Reveal className="md:col-span-7">
            <div className="relative bg-secondary/40">
              <img
                src={a.file}
                alt={`${a.title} — painting by ${site.artist}`}
                className="w-full h-auto object-contain"
              />
              {a.sold && (
                <span
                  className="absolute top-5 left-5 px-3 py-1 text-[10px] tracking-[0.2em] uppercase bg-background/90"
                  style={{ color: "var(--burgundy)" }}
                >
                  Sold
                </span>
              )}
            </div>
          </Reveal>

          <div className="md:col-span-5 md:pt-6 space-y-8">
            <Reveal>
              <p className="eyebrow">Original painting</p>
              <h1 className="display-lg mt-3">{a.title}</h1>
            </Reveal>

            {!a.sold && (
              <Reveal delay={0.05}>
                <p className="text-3xl italic-serif" style={{ color: "var(--burgundy)" }}>
                  {a.price ? `₹${a.price}` : "Price on request"}
                </p>
              </Reveal>
            )}

            <Reveal delay={0.1}>
              <p className="text-foreground/85 leading-relaxed">
                {a.sold
                  ? `This painting now lives in a private collection. If it speaks to you, I'd be glad to paint something in a similar spirit.`
                  : `A signed original by ${site.artist}. ${site.donationShare} of the sale goes to ${site.ngo} to fund the education of underprivileged girls.`}
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <dl className="grid grid-cols-2 gap-4 pt-6 border-t border-border/60 text-sm">
                <div>
                  <dt className="eyebrow text-[10px]">Status</dt>
                  <dd className="mt-2">{a.sold ? "Sold" : "Available"}</dd>
                </div>
                <div>
                  <dt className="eyebrow text-[10px]">Edition</dt>
                  <dd className="mt-2">Original, signed</dd>
                </div>
              </dl>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="pt-4 space-y-3">
                {a.sold ? (
                  <ExternalLink
                    href={commissionLink}
                    className="w-full inline-flex items-center justify-center gap-3 px-6 py-4 text-xs tracking-[0.2em] uppercase border border-foreground/80 hover:bg-foreground hover:text-background transition"
                  >
                    <MessageCircle className="h-4 w-4" aria-hidden="true" />
                    Ask about a commission
                  </ExternalLink>
                ) : a.price ? (
                  <>
                    <Link
                      to="/order/$slug"
                      params={{ slug: a.slug }}
                      className="w-full inline-flex items-center justify-center gap-3 px-6 py-4 text-xs tracking-[0.2em] uppercase bg-foreground text-background hover:bg-[var(--forest)] transition-colors duration-500"
                    >
                      <ShoppingCart className="h-4 w-4" aria-hidden="true" />
                      Buy this painting
                    </Link>
                    <ExternalLink
                      href={askLink}
                      className="w-full inline-flex items-center justify-center gap-3 px-6 py-4 text-xs tracking-[0.2em] uppercase border border-foreground/30 hover:border-foreground transition"
                    >
                      <MessageCircle className="h-4 w-4" aria-hidden="true" />
                      Ask a question on WhatsApp
                    </ExternalLink>
                  </>
                ) : (
                  <ExternalLink
                    href={askLink}
                    className="w-full inline-flex items-center justify-center gap-3 px-6 py-4 text-xs tracking-[0.2em] uppercase bg-foreground text-background hover:bg-[var(--forest)] transition-colors duration-500"
                  >
                    <MessageCircle className="h-4 w-4" aria-hidden="true" />
                    Ask for the price on WhatsApp
                  </ExternalLink>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <Section
        eyebrow="More from the studio"
        title={
          <>
            You may also <span className="italic-serif">love.</span>
          </>
        }
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
          {related.map((w) => (
            <Link
              key={w.slug}
              to="/product/$slug"
              params={{ slug: w.slug }}
              className="group block"
            >
              <div className="zoom-wrap relative aspect-[4/5] overflow-hidden bg-secondary/40">
                <img
                  src={w.file}
                  alt={w.title}
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                />
                {w.sold && (
                  <span
                    className="absolute top-4 left-4 px-3 py-1 text-[10px] tracking-[0.2em] uppercase bg-background/90"
                    style={{ color: "var(--burgundy)" }}
                  >
                    Sold
                  </span>
                )}
              </div>
              <p className="mt-3 italic-serif text-lg">{w.title}</p>
              {!w.sold && (
                <p className="text-xs text-muted-foreground">
                  {w.price ? `₹${w.price}` : "Price on request"}
                </p>
              )}
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
}
