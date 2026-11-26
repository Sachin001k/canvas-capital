import { createFileRoute, Link } from "@tanstack/react-router";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { site } from "@/data/site";
import portrait from "@/assets/ayontika-portrait.png";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Ayontika Naha · My Canvas Dreams" },
      {
        name: "description",
        content:
          "Ayontika Naha is a Mumbai artist who paints nature and city streets, teaches mathematics, and researches public finance.",
      },
      { property: "og:title", content: "About Ayontika Naha" },
      {
        property: "og:description",
        content: "Painter, maths teacher and student researcher from Mumbai.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <section className="pt-40 pb-12 mx-auto max-w-[1500px] px-6 md:px-10">
        <Reveal>
          <p className="eyebrow mb-8">About the artist</p>
        </Reveal>
        <Reveal delay={0.1}>
          <h1 className="display-xl">
            A girl with a<br />
            <span className="italic-serif" style={{ color: "var(--forest)" }}>
              brush
            </span>{" "}
            and a{" "}
            <span className="italic-serif" style={{ color: "var(--burgundy)" }}>
              question.
            </span>
          </h1>
        </Reveal>
      </section>

      <Section>
        <div className="grid md:grid-cols-12 gap-12 md:gap-16">
          <Reveal className="md:col-span-5">
            {/* Source photo is 400×400 — keep it small so it stays sharp. */}
            <figure className="max-w-[400px]">
              <img
                src={portrait}
                alt="Portrait of Ayontika Naha"
                className="w-full aspect-square object-cover"
                loading="lazy"
              />
              <figcaption className="mt-4 eyebrow">
                {site.artist} · {site.city}
              </figcaption>
            </figure>
          </Reveal>
          <div className="md:col-span-7 space-y-10">
            <Reveal>
              <p className="text-xl md:text-2xl leading-relaxed text-foreground/90">
                Hi, I&rsquo;m Ayontika. I&rsquo;ve been painting since I was ten — mostly nature and
                city streets, usually in acrylic, sometimes in charcoal.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Between 50% and 75% of everything I earn from my art goes to {site.ngo}, a local NGO
                that supports the education of young, underprivileged girls. I want my paintings to
                move the people who see them — and to do some good along the way.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Away from the easel, I teach mathematics to underprivileged students and research
                public finance — most recently, whether India&rsquo;s GST has helped the people it
                was meant to help.
              </p>
            </Reveal>

            <div className="grid sm:grid-cols-2 gap-8 pt-10 border-t border-border/60">
              <div>
                <p className="eyebrow mb-3">Leadership</p>
                <ul className="space-y-1 italic-serif text-lg">
                  <li>Head Girl</li>
                  <li>President, Interact Club</li>
                  <li>President, Math Club</li>
                  <li>Founder, Zero to Infinity</li>
                </ul>
              </div>
              <div>
                <p className="eyebrow mb-3">Interests</p>
                <ul className="space-y-1 italic-serif text-lg">
                  <li>Painting in acrylic &amp; charcoal</li>
                  <li>Public finance &amp; inequality</li>
                  <li>Access to education</li>
                </ul>
              </div>
            </div>

            <Reveal delay={0.2}>
              <blockquote className="pl-6 border-l-2 border-[var(--gold)] italic-serif text-2xl leading-snug">
                &ldquo;Art is the most generous form of accounting I know — every brushstroke is a
                vote for what should be valued.&rdquo;
              </blockquote>
            </Reveal>

            <Reveal delay={0.25}>
              <div className="flex flex-wrap gap-6 pt-4">
                <Link to="/work" className="story-link text-sm tracking-wide">
                  See the paintings →
                </Link>
                <Link
                  to="/contact"
                  className="story-link text-sm tracking-wide text-muted-foreground"
                >
                  Get in touch
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </Section>
    </>
  );
}
