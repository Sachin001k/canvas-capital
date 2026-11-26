import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useMemo } from "react";
import { MessageCircle } from "lucide-react";
import { findArtwork, type Artwork } from "@/data/artworks";

const WHATSAPP = "919987931564"; // +91 9987931564

export const Route = createFileRoute("/order/$slug")({
  loader: ({ params }): Artwork => {
    const a = findArtwork(params.slug);
    if (!a) throw notFound();
    return a;
  },
  head: ({ params }) => {
    const a = findArtwork(params.slug);
    const title = a ? `Place order — ${a.title}` : "Place order";
    return { meta: [{ title }] };
  },
  component: OrderPage,
});

function OrderPage() {
  const a = Route.useLoaderData();
  const waLink = useMemo(() => {
    const waMsg = encodeURIComponent(
      `Hi Ayontika! I’ve made the payment for "${a.title}"${a.price ? ` (₹${a.price})` : ""}. Here are my payment confirmation details:`,
    );
    return `https://wa.me/${WHATSAPP}?text=${waMsg}`;
  }, [a.price, a.title]);

  return (
    <section className="pt-32 pb-24 mx-auto max-w-[1500px] px-6 md:px-10">
      <nav className="text-xs tracking-[0.18em] uppercase text-muted-foreground flex gap-2">
        <Link to="/" className="hover:text-foreground">
          Home
        </Link>
        <span>/</span>
        <Link to="/work" className="hover:text-foreground">
          Shop
        </Link>
        <span>/</span>
        <Link to="/product/$slug" params={{ slug: a.slug }} className="hover:text-foreground">
          {a.title}
        </Link>
        <span>/</span>
        <span className="text-foreground/80">Place order</span>
      </nav>

      <div className="mt-10 md:mt-14 border border-border/60 bg-secondary/20">
        <div className="grid md:grid-cols-2 gap-8 p-6 md:p-12">
          <div>
            <h1 className="display-md">1. Please make payment to the following bank account:</h1>
            <ul className="mt-8 space-y-4 text-base text-muted-foreground">
              <li>
                <span className="font-medium text-foreground/90">Name:</span> Ayontika Naha U/G
                Purabi Naha
              </li>
              <li>
                <span className="font-medium text-foreground/90">Bank:</span> HDFC Bank
              </li>
              <li>
                <span className="font-medium text-foreground/90">A/c no:</span> 50100419070192
              </li>
              <li>
                <span className="font-medium text-foreground/90">Type:</span> Savings Account
              </li>
              <li>
                <span className="font-medium text-foreground/90">IFSC:</span> HDFC0000543
              </li>
            </ul>
          </div>

          <div className="md:border-l md:border-border/60 md:pl-12">
            <h2 className="display-md">2. WhatsApp your payment confirmation details:</h2>
            <div className="mt-8">
              <a
                href={waLink}
                target="_blank"
                rel="noreferrer"
                className="w-full inline-flex items-center justify-center gap-3 px-8 py-5 bg-[#25D366] text-white hover:opacity-90 transition"
              >
                <MessageCircle className="h-6 w-6" aria-hidden="true" />
                +91-9987931564
              </a>
            </div>
            <p className="mt-10 display-sm">That’s it, thank you for your order!</p>
          </div>
        </div>
      </div>
    </section>
  );
}
