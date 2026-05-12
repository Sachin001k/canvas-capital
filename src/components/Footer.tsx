import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="border-t border-border/60 mt-32">
      <div className="mx-auto max-w-[1500px] px-6 md:px-10 py-16 md:py-24">
        <div className="flex flex-col gap-12">
          <p className="display-lg max-w-4xl">
            Let&rsquo;s make <span className="italic-serif" style={{ color: "var(--forest)" }}>something</span> that matters.
          </p>

          <div className="grid md:grid-cols-4 gap-10 pt-12 border-t border-border/60">
            <div className="md:col-span-2">
              <p className="font-[family-name:var(--font-display)] italic text-2xl">My Canvas Dreams</p>
              <p className="eyebrow mt-2">Ayontika Naha · Mumbai</p>
            </div>
            <div className="flex flex-col gap-2 text-sm">
              <span className="eyebrow mb-2">Index</span>
              <Link to="/work" className="story-link w-fit">Work</Link>
              <Link to="/research" className="story-link w-fit">Research</Link>
              <Link to="/impact" className="story-link w-fit">Impact</Link>
              <Link to="/about" className="story-link w-fit">About</Link>
            </div>
            <div className="flex flex-col gap-2 text-sm">
              <span className="eyebrow mb-2">Elsewhere</span>
              <a href="https://www.instagram.com/mycanvasdreams/" target="_blank" rel="noreferrer" className="story-link w-fit">Instagram @mycanvasdreams</a>
              <a href="mailto:hello@mycanvasdreams.com" className="story-link w-fit">Email</a>
              <a href="https://sevasahayog.org/" target="_blank" rel="noreferrer" className="story-link w-fit">Seva Sahayog</a>
            </div>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pt-10 border-t border-border/60">
            <p className="display-md leading-none">Mumbai, IN</p>
            <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} Ayontika Naha. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
