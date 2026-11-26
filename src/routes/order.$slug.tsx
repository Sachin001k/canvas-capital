import { createFileRoute, Link, notFound, redirect } from "@tanstack/react-router";
import { MessageCircle } from "lucide-react";
import { ExternalLink } from "@/components/ExternalLink";
import { findArtwork, type Artwork } from "@/data/artworks";
import { site, whatsappLink } from "@/data/site";

export const Route = createFileRoute("/order/$slug")({
  loader: ({ params }): Artwork => {
    const a = findArtwork(params.slug);
    if (!a) throw notFound();
    // Only priced, unsold paintings can be ordered here — otherwise go back to the painting's page.
    if (a.sold || !a.price)
      throw redirect({ to: "/product/$slug", params: { slug: a.slug }, replace: true });
    return a;
  },
  head: ({ params }) => {
    const a = findArtwork(params.slug);
    return {
      meta: [
        { title: a ? `Buy “${a.title}” · My Canvas Dreams` : "Place an order · My Canvas Dreams" },
      ],
    };
  },
  component: OrderPage,
});

function OrderPage() {
  const a = Route.useLoaderData();
  const { bank } = site;
  const confirmLink = whatsappLink(
    `Hi Ayontika! I've paid ₹${a.price} for "${a.title}". My payment reference and delivery address are:`,
  );

  const rows: [string, string][] = [
    ["Amount", `₹${a.price}`],
    ["Account name", bank.accountName],
    ["Bank", bank.bankName],
    ["Account number", bank.accountNumber],
    ["Account type", bank.accountType],
    ["IFSC", bank.ifsc],
  ];

  return (
    <section className="pt-32 pb-24 mx-auto max-w-[1500px] px-6 md:px-10">
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
        <Link to="/product/$slug" params={{ slug: a.slug }} className="hover:text-foreground">
          {a.title}
        </Link>
        <span aria-hidden="true">/</span>
        <span className="text-foreground/80" aria-current="page">
          Buy
        </span>
      </nav>

      <header className="mt-10 md:mt-14 grid md:grid-cols-12 gap-8 items-end">
        <div className="md:col-span-8">
          <p className="eyebrow mb-4">Two quick steps</p>
          <h1 className="display-lg">
            Buy <span className="italic-serif">{a.title}</span>
          </h1>
        </div>
        <img
          src={a.file}
          alt=""
          className="hidden md:block md:col-span-2 md:col-start-11 w-full aspect-square object-cover"
        />
      </header>

      <div className="mt-10 border border-border/60 bg-secondary/20">
        <div className="grid md:grid-cols-2 gap-10 p-6 md:p-12">
          <div>
            <p className="eyebrow">Step 1</p>
            <h2 className="display-md mt-3">Pay by bank transfer</h2>
            <p className="mt-4 text-muted-foreground">
              Transfer the amount below using NEFT, IMPS or RTGS.
            </p>
            <dl className="mt-8 divide-y divide-border/60 border-y border-border/60">
              {rows.map(([k, v]) => (
                <div key={k} className="flex justify-between gap-6 py-3 text-sm">
                  <dt className="text-muted-foreground">{k}</dt>
                  <dd className="font-medium text-foreground text-right tabular-nums select-all">
                    {v}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="md:border-l md:border-border/60 md:pl-12">
            <p className="eyebrow">Step 2</p>
            <h2 className="display-md mt-3">Send your confirmation</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Message me on WhatsApp with your payment reference and delivery address. I&rsquo;ll
              confirm your order and arrange shipping within India.
            </p>
            <div className="mt-8">
              <ExternalLink
                href={confirmLink}
                className="w-full inline-flex items-center justify-center gap-3 px-8 py-5 bg-[#25D366] text-white hover:opacity-90 transition"
              >
                <MessageCircle className="h-6 w-6" aria-hidden="true" />
                WhatsApp {site.whatsapp.display}
              </ExternalLink>
            </div>
            <p className="mt-10 italic-serif text-xl">
              Thank you — {site.donationShare} of this purchase goes to girls&rsquo; education
              through {site.ngo}.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
