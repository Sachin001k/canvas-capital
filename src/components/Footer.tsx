import { Link } from "@tanstack/react-router";
import { ExternalLink } from "@/components/ExternalLink";
import { site, whatsappLink } from "@/data/site";

const explore = [
  { to: "/work", label: "Gallery" },
  { to: "/impact", label: "Impact" },
  { to: "/research", label: "Research" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function Footer() {
  return (
    <footer className="border-t border-border/60">
      <div className="mx-auto max-w-[1500px] px-6 md:px-10 py-16 md:py-24">
        <div className="flex flex-col gap-12">
          <div className="grid md:grid-cols-12 gap-8 items-end">
            <p className="md:col-span-8 display-lg max-w-4xl">
              Every painting has a{" "}
              <span className="italic-serif" style={{ color: "var(--forest)" }}>
                second life.
              </span>
            </p>
            <div className="md:col-span-4 md:justify-self-end flex flex-wrap gap-3">
              <Link
                to="/work"
                className="inline-flex items-center gap-3 px-6 py-3.5 rounded-full bg-foreground text-background text-sm hover:bg-[var(--forest)] transition-colors duration-500"
              >
                Shop the gallery <span aria-hidden="true">→</span>
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-6 py-3.5 rounded-full border border-foreground/30 text-sm hover:border-foreground transition-colors"
              >
                Commission a piece
              </Link>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-10 pt-12 border-t border-border/60">
            <div className="md:col-span-2 max-w-sm">
              <p className="font-[family-name:var(--font-display)] italic text-2xl">{site.name}</p>
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                Original paintings by {site.artist}. {site.donationShare} of every sale funds the
                education of underprivileged girls through {site.ngo}.
              </p>
            </div>
            <div className="flex flex-col gap-2 text-sm">
              <span className="eyebrow mb-2">Explore</span>
              {explore.map((l) => (
                <Link key={l.to} to={l.to} className="story-link w-fit">
                  {l.label}
                </Link>
              ))}
            </div>
            <div className="flex flex-col gap-2 text-sm">
              <span className="eyebrow mb-2">Connect</span>
              <ExternalLink href={site.links.instagram} className="story-link w-fit">
                Instagram
              </ExternalLink>
              <ExternalLink
                href={whatsappLink("Hi Ayontika! I found your website and wanted to say hello.")}
                className="story-link w-fit"
              >
                WhatsApp
              </ExternalLink>
              <ExternalLink href={`mailto:${site.email}`} className="story-link w-fit">
                Email
              </ExternalLink>
              <ExternalLink href={site.links.sevaSahayog} className="story-link w-fit">
                {site.ngo}
              </ExternalLink>
            </div>
          </div>

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 pt-8 border-t border-border/60 text-xs text-muted-foreground">
            <p>
              © {new Date().getFullYear()} {site.artist}. All artwork and images are the
              artist&rsquo;s own.
            </p>
            <p>{site.city} · Paintings ship within India</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
