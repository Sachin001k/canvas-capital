import type { ReactNode } from "react";
import { PLACEHOLDER } from "@/data/site";

/**
 * Outbound link. Real URLs open in a new tab; PLACEHOLDER links stay clickable
 * but do nothing (and say "coming soon" on hover) until the real URL is added in src/data/site.ts.
 */
export function ExternalLink({
  href,
  className,
  children,
}: {
  href: string;
  className?: string;
  children: ReactNode;
}) {
  if (href === PLACEHOLDER) {
    return (
      <a
        href="#"
        onClick={(e) => e.preventDefault()}
        title="Link coming soon"
        className={className}
      >
        {children}
      </a>
    );
  }
  const isWeb = /^https?:/.test(href);
  return (
    <a
      href={href}
      className={className}
      {...(isWeb ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
    </a>
  );
}
