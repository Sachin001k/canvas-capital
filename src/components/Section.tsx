import type { ReactNode } from "react";

export function Section({
  eyebrow,
  title,
  children,
  className = "",
}: {
  eyebrow?: string;
  title?: ReactNode;
  children?: ReactNode;
  className?: string;
}) {
  return (
    <section className={`mx-auto max-w-[1500px] px-6 md:px-10 py-24 md:py-36 ${className}`}>
      {(eyebrow || title) && (
        <header className="mb-16 md:mb-24 grid md:grid-cols-12 gap-6 items-end">
          {eyebrow && (
            <div className="md:col-span-3">
              <p className="eyebrow">{eyebrow}</p>
            </div>
          )}
          {title && <h2 className="md:col-span-9 display-lg">{title}</h2>}
        </header>
      )}
      {children}
    </section>
  );
}
