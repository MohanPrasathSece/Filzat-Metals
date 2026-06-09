import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Outlet, Link, createRootRouteWithContext, useRouter } from "@tanstack/react-router";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
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
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

/* WhatsApp floating button — shown on every page */
function WhatsAppButton() {
  const phone = "917060181694";
  const message = encodeURIComponent("Hello, I'm interested in Filizat Metals products.");
  return (
    <a
      href={`https://wa.me/${phone}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-[200] group flex items-center gap-3"
    >
      {/* Tooltip */}
      <span className="pointer-events-none invisible translate-x-2 opacity-0 transition-all duration-300 group-hover:visible group-hover:translate-x-0 group-hover:opacity-100 whitespace-nowrap rounded-full bg-gray-900/90 px-3 py-1.5 text-xs font-medium text-white shadow-lg">
        Chat with us
      </span>

      {/* Button */}
      <div
        className="relative flex h-14 w-14 items-center justify-center rounded-full shadow-elevated transition-transform duration-300 hover:scale-110 active:scale-95"
        style={{ backgroundColor: "#25D366" }}
      >
        {/* Pulse ring */}
        <span
          className="absolute inset-0 rounded-full animate-ping opacity-30"
          style={{ backgroundColor: "#25D366" }}
        />
        {/* WhatsApp icon */}
        <svg viewBox="0 0 32 32" className="h-7 w-7 fill-white" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 2C8.268 2 2 8.268 2 16c0 2.49.648 4.823 1.778 6.852L2 30l7.338-1.922A13.93 13.93 0 0016 30c7.732 0 14-6.268 14-14S23.732 2 16 2zm0 25.6a11.56 11.56 0 01-5.896-1.61l-.422-.25-4.354 1.14 1.16-4.24-.275-.435A11.6 11.6 0 014.4 16C4.4 9.594 9.594 4.4 16 4.4S27.6 9.594 27.6 16 22.406 27.6 16 27.6zm6.37-8.618c-.35-.175-2.07-1.02-2.39-1.136-.32-.117-.553-.175-.786.175-.233.35-.902 1.136-1.107 1.37-.203.232-.407.262-.757.087-.35-.175-1.478-.544-2.815-1.737-1.04-.928-1.742-2.074-1.946-2.424-.204-.35-.022-.538.153-.712.158-.157.35-.408.525-.613.175-.204.233-.35.35-.583.116-.234.058-.438-.03-.613-.087-.175-.786-1.895-1.077-2.595-.284-.682-.572-.589-.786-.6l-.67-.01c-.233 0-.612.087-.932.438-.32.35-1.224 1.196-1.224 2.917 0 1.72 1.253 3.382 1.427 3.616.175.233 2.468 3.767 5.983 5.28.836.36 1.488.576 1.996.738.838.267 1.602.23 2.205.14.672-.1 2.07-.846 2.362-1.663.291-.816.291-1.516.204-1.662-.087-.146-.32-.233-.67-.408z" />
        </svg>
      </div>
    </a>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
      <WhatsAppButton />
    </QueryClientProvider>
  );
}
