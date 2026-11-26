import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";

const links = [
  { to: "/work", label: "Gallery" },
  { to: "/impact", label: "Impact" },
  { to: "/research", label: "Research" },
  { to: "/about", label: "About" },
] as const;

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu on navigation.
  useEffect(() => setOpen(false), [pathname]);

  // While the mobile menu is open: lock page scroll and close on Escape.
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const solid = scrolled || open;

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-700 ${
        solid ? "backdrop-blur-md bg-background/85 border-b border-border/60" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-[1500px] px-6 md:px-10 h-20 flex items-center justify-between">
        <Link
          to="/"
          className="font-[family-name:var(--font-display)] italic text-2xl leading-none"
          aria-label="My Canvas Dreams — home"
        >
          My Canvas Dreams
        </Link>

        <nav aria-label="Main" className="hidden md:flex items-center gap-9">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-[13px] tracking-wide story-link text-foreground/70 hover:text-foreground transition-colors"
              activeProps={{ className: "!text-foreground", "aria-current": "page" }}
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="text-[13px] tracking-wide px-5 py-2.5 rounded-full border border-foreground/30 hover:bg-foreground hover:text-background hover:border-foreground transition-colors duration-500"
            activeProps={{ className: "bg-foreground text-background border-foreground" }}
          >
            Get in touch
          </Link>
        </nav>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          className="md:hidden -mr-2 p-2 flex flex-col gap-1.5"
          onClick={() => setOpen((o) => !o)}
        >
          <span
            className={`block w-7 h-px bg-foreground transition-transform ${open ? "translate-y-[7px] rotate-45" : ""}`}
          />
          <span
            className={`block w-7 h-px bg-foreground transition-opacity ${open ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-7 h-px bg-foreground transition-transform ${open ? "-translate-y-[7px] -rotate-45" : ""}`}
          />
        </button>
      </div>

      {open && (
        <div
          id="mobile-menu"
          className="md:hidden h-[calc(100svh-5rem)] bg-background border-t border-border/60"
        >
          <nav aria-label="Main" className="flex flex-col px-6 py-10 gap-6">
            {[
              { to: "/", label: "Home" } as const,
              ...links,
              { to: "/contact", label: "Get in touch" } as const,
            ].map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="text-4xl font-[family-name:var(--font-display)] text-foreground/60"
                activeProps={{ className: "!text-foreground italic", "aria-current": "page" }}
                activeOptions={{ exact: l.to === "/" }}
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
