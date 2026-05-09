import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

const links = [
  { to: "/", label: "Home" },
  { to: "/work", label: "Work" },
  { to: "/research", label: "Research" },
  { to: "/impact", label: "Impact" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-700 ${
        scrolled ? "backdrop-blur-md bg-background/70 border-b border-border/60" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-[1500px] px-6 md:px-10 h-20 flex items-center justify-between">
        <Link to="/" className="group flex items-baseline gap-3">
          <span className="font-[family-name:var(--font-display)] italic text-xl md:text-2xl leading-none">
            My Canvas Dreams
          </span>
          <span className="hidden sm:inline eyebrow">— Ayontika Naha</span>
        </Link>

        <nav className="hidden md:flex items-center gap-9">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-[13px] tracking-wide story-link text-foreground/80 hover:text-foreground"
              activeProps={{ className: "text-foreground" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <button
          aria-label="Menu"
          className="md:hidden flex flex-col gap-1.5"
          onClick={() => setOpen((o) => !o)}
        >
          <span className={`block w-7 h-px bg-foreground transition-transform ${open ? "translate-y-[6px] rotate-45" : ""}`} />
          <span className={`block w-7 h-px bg-foreground transition-opacity ${open ? "opacity-0" : ""}`} />
          <span className={`block w-7 h-px bg-foreground transition-transform ${open ? "-translate-y-[6px] -rotate-45" : ""}`} />
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-t border-border/60">
          <nav className="flex flex-col px-8 py-6 gap-4">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="text-2xl font-[family-name:var(--font-display)]"
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
