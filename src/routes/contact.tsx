import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — My Canvas Dreams" },
      { name: "description", content: "Get in touch about collaborations, art inquiries, workshops, or research conversations." },
      { property: "og:title", content: "Contact — My Canvas Dreams" },
      { property: "og:description", content: "Write to Ayontika about painting, teaching, or research." },
    ],
  }),
  component: ContactPage,
});

const interests = ["Collaborate", "Art inquiries", "Workshops", "Research discussions"] as const;

function ContactPage() {
  const [picked, setPicked] = useState<string[]>([]);
  const [sent, setSent] = useState(false);

  const toggle = (s: string) =>
    setPicked((p) => (p.includes(s) ? p.filter((x) => x !== s) : [...p, s]));

  return (
    <>
      <section className="pt-40 pb-12 mx-auto max-w-[1500px] px-6 md:px-10">
        <Reveal><p className="eyebrow mb-8">Volume 06 — Contact</p></Reveal>
        <Reveal delay={0.1}>
          <h1 className="display-xl">
            Get in <span className="italic-serif" style={{ color: "var(--forest)" }}>touch.</span>
          </h1>
        </Reveal>
        <Reveal delay={0.3}>
          <p className="mt-12 max-w-xl text-muted-foreground text-lg leading-relaxed">
            For collaborations, commissions, workshop invitations, or simply to
            share an idea — the inbox is always quietly open.
          </p>
        </Reveal>
      </section>

      <Section>
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4 space-y-10">
            <div>
              <p className="eyebrow mb-3">Email</p>
              <a href="mailto:hello@mycanvasdreams.com" className="story-link text-xl italic-serif">hello@mycanvasdreams.com</a>
            </div>
            <div>
              <p className="eyebrow mb-3">Instagram</p>
              <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" className="story-link text-xl italic-serif">@mycanvasdreams</a>
            </div>
            <div>
              <p className="eyebrow mb-3">Based in</p>
              <p className="text-xl italic-serif">Mumbai, India</p>
            </div>
          </div>

          <form
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            className="md:col-span-8 space-y-10"
          >
            <Field label="Name"><input required className="field" placeholder="Your full name" /></Field>
            <Field label="Email"><input required type="email" className="field" placeholder="you@studio.com" /></Field>
            <Field label="Message"><textarea required rows={5} className="field resize-none" placeholder="Tell me a little about why you're writing…" /></Field>

            <div>
              <p className="eyebrow mb-4">I&rsquo;m writing about</p>
              <div className="flex flex-wrap gap-3">
                {interests.map((i) => {
                  const on = picked.includes(i);
                  return (
                    <button
                      type="button"
                      key={i}
                      onClick={() => toggle(i)}
                      className={`px-5 py-2.5 rounded-full border text-sm transition-all duration-500 ${
                        on
                          ? "bg-foreground text-background border-foreground"
                          : "border-border hover:border-foreground"
                      }`}
                    >
                      {i}
                    </button>
                  );
                })}
              </div>
            </div>

            <button className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-foreground text-background text-sm hover:bg-[var(--forest)] transition-colors duration-500">
              {sent ? "Thank you — talk soon." : "Send message"}
              <span className="transition-transform duration-500 group-hover:translate-x-1">→</span>
            </button>
          </form>
        </div>
      </Section>

      <style>{`
        .field {
          width: 100%;
          background: transparent;
          border: 0;
          border-bottom: 1px solid var(--border);
          padding: 1rem 0;
          font-family: var(--font-serif);
          font-size: 1.25rem;
          color: var(--foreground);
          outline: none;
          transition: border-color .4s ease;
        }
        .field::placeholder { color: var(--muted-foreground); font-style: italic; }
        .field:focus { border-color: var(--foreground); }
      `}</style>
    </>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="eyebrow">{label}</span>
      {children}
    </label>
  );
}
