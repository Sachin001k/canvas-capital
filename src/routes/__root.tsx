import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { MotionConfig } from "framer-motion";
import {
  HeadContent,
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
} from "@tanstack/react-router";

import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <p className="eyebrow mb-6">404 — Page not found</p>
        <h1 className="display-lg">This page is unframed.</h1>
        <p className="mt-4 text-sm text-muted-foreground">
          The page you&rsquo;re looking for has moved or doesn&rsquo;t exist.
        </p>
        <div className="mt-10">
          <Link to="/" className="px-6 py-3 rounded-full bg-foreground text-background text-sm">
            Back to home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="display-md">Something quietly broke.</h1>
        <p className="mt-4 text-sm text-muted-foreground">Please try again.</p>
        <button
          onClick={() => {
            router.invalidate();
            reset();
          }}
          className="mt-8 px-6 py-3 rounded-full bg-foreground text-background text-sm"
        >
          Try again
        </button>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  // Site-wide defaults; child routes override these via their own head().
  head: () => ({
    meta: [
      { title: "My Canvas Dreams — Ayontika Naha" },
      {
        name: "description",
        content:
          "Original paintings by Mumbai artist Ayontika Naha. 50–75% of every sale funds the education of underprivileged girls through Seva Sahayog.",
      },
      { property: "og:title", content: "My Canvas Dreams — Ayontika Naha" },
      {
        property: "og:description",
        content: "Art as a lens on inequality — original paintings that fund girls' education.",
      },
    ],
  }),
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <HeadContent />
      {/* Honour the OS "reduce motion" setting for all framer-motion animations. */}
      <MotionConfig reducedMotion="user">
        <Nav />
        <main className="pt-0">
          <Outlet />
        </main>
        <Footer />
      </MotionConfig>
    </QueryClientProvider>
  );
}
