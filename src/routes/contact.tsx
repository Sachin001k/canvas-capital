import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { useState } from "react";
import { ExternalLink } from "@/components/ExternalLink";
import { site, whatsappLink } from "@/data/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — My Canvas Dreams" },
      {
        name: "description",
        content:
          "Contact Ayontika Naha about buying a painting, commissions, workshops or collaborations.",
      },
      { property: "og:title", content: "Contact — My Canvas Dreams" },
      {
        property: "og:description",
        content: "Buying a painting, commissions, workshops or collaborations — get in touch.",
      },
    ],
  }),
  component: ContactPage,
});

const interests = [
  "Buying a painting",
  "Commission",
  "Workshop",
  "Collaboration",
  "Research",
] as const;

const CONTACT_EMAIL = site.email;
// Free key from https://web3forms.com — set VITE_WEB3FORMS_KEY in .env (or the host's env settings).
// Without it, the form falls back to opening the visitor's email app with the message pre-filled.
const WEB3FORMS_KEY = import.meta.env.VITE_WEB3FORMS_KEY as string | undefined;

type Status = "idle" | "sending" | "sent" | "error";

function ContactPage() {
  const [picked, setPicked] = useState<string[]>([]);
  const [status, setStatus] = useState<Status>("idle");

  const toggle = (s: string) =>
    setPicked((p) => (p.includes(s) ? p.filter((x) => x !== s) : [...p, s]));

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const message = String(data.get("message") ?? "");
    const topics = picked.join(", ") || "—";

    if (!WEB3FORMS_KEY) {
      const subject = `Website enquiry from ${name}`;
      const body = `${message}\n\nTopics: ${topics}\nFrom: ${name} <${email}>`;
      window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      setStatus("sent");
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `Website enquiry from ${name}`,
          from_name: "My Canvas Dreams website",
          name,
          email,
          topics,
          message,
          botcheck: data.get("botcheck") ? "on" : "",
        }),
      });
      const json = (await res.json()) as { success?: boolean };
      if (!res.ok || !json.success) throw new Error("Submit failed");
      form.reset();
      setPicked([]);
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  return (
    <>
      <section className="pt-40 pb-12 mx-auto max-w-[1500px] px-6 md:px-10">
        <Reveal>
          <p className="eyebrow mb-8">Contact</p>
        </Reveal>
        <Reveal delay={0.1}>
          <h1 className="display-xl">
            Get in{" "}
            <span className="italic-serif" style={{ color: "var(--forest)" }}>
              touch.
            </span>
          </h1>
        </Reveal>
        <Reveal delay={0.3}>
          <p className="mt-12 max-w-xl text-muted-foreground text-lg leading-relaxed">
            Interested in a painting, a commission, a workshop or a collaboration? Send a message
            and I&rsquo;ll get back to you within a few days.
          </p>
        </Reveal>
      </section>

      <Section>
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4 space-y-10">
            <div>
              <p className="eyebrow mb-3">Email</p>
              <ExternalLink
                href={`mailto:${site.email}`}
                className="story-link text-xl italic-serif break-all"
              >
                {site.email}
              </ExternalLink>
            </div>
            <div>
              <p className="eyebrow mb-3">WhatsApp</p>
              <ExternalLink
                href={whatsappLink("Hi Ayontika! I found your website and wanted to get in touch.")}
                className="story-link text-xl italic-serif"
              >
                {site.whatsapp.display}
              </ExternalLink>
            </div>
            <div>
              <p className="eyebrow mb-3">Instagram</p>
              <ExternalLink href={site.links.instagram} className="story-link text-xl italic-serif">
                {site.links.instagramHandle}
              </ExternalLink>
            </div>
            <div>
              <p className="eyebrow mb-3">Based in</p>
              <p className="text-xl italic-serif">{site.city}</p>
            </div>
          </div>

          <form onSubmit={onSubmit} className="md:col-span-8 space-y-10">
            {/* Honeypot: hidden from people, filled by bots; Web3Forms rejects submissions that set it. */}
            <input
              type="checkbox"
              name="botcheck"
              className="hidden"
              tabIndex={-1}
              autoComplete="off"
            />
            <Field label="Name">
              <input
                required
                name="name"
                autoComplete="name"
                className="field"
                placeholder="Your full name"
              />
            </Field>
            <Field label="Email">
              <input
                required
                name="email"
                type="email"
                autoComplete="email"
                className="field"
                placeholder="you@example.com"
              />
            </Field>
            <Field label="Message">
              <textarea
                required
                name="message"
                rows={5}
                className="field resize-none"
                placeholder="Which painting, what size, or what you have in mind…"
              />
            </Field>

            <div>
              <p className="eyebrow mb-4">
                What is this about? <span className="normal-case tracking-normal">(optional)</span>
              </p>
              <div className="flex flex-wrap gap-3">
                {interests.map((i) => {
                  const on = picked.includes(i);
                  return (
                    <button
                      type="button"
                      key={i}
                      aria-pressed={on}
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

            <button
              type="submit"
              disabled={status === "sending"}
              className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-foreground text-background text-sm hover:bg-[var(--forest)] transition-colors duration-500 disabled:opacity-60"
            >
              {status === "sending"
                ? "Sending…"
                : status === "sent"
                  ? "Thank you — talk soon."
                  : "Send message"}
              <span className="transition-transform duration-500 group-hover:translate-x-1">→</span>
            </button>
            <p
              role="status"
              aria-live="polite"
              className="text-sm text-muted-foreground min-h-[1.25rem]"
            >
              {status === "error" && (
                <>
                  Sorry, the message couldn&rsquo;t be sent. Please email{" "}
                  <a href={`mailto:${CONTACT_EMAIL}`} className="story-link">
                    {CONTACT_EMAIL}
                  </a>{" "}
                  instead.
                </>
              )}
            </p>
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
