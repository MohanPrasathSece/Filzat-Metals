import { Link, useRouter } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logoImg from "@/assets/logo/logo.png";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/products", label: "Products" },
  { to: "/sustainability", label: "Sustainability" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar({ darkHero = false }: { darkHero?: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const currentPath = router.state.location.pathname;

  const handleLinkClick = (to: string) => {
    if (currentPath === to) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isDarkHeader = darkHero && !scrolled;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "glass shadow-soft" : "bg-transparent"
        }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 lg:px-10">
          <Link to="/" className="flex items-center gap-2" onClick={() => handleLinkClick("/")}>
            <img src={logoImg} alt="Filizat Metals" className="h-20 w-auto" />
          </Link>

          <ul className="hidden items-center gap-9 lg:flex">
            {links.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  onClick={() => handleLinkClick(l.to)}
                  className={`relative text-sm font-medium transition-colors duration-300 py-1 ${
                    isDarkHeader
                      ? "text-white/80 hover:text-white"
                      : "text-foreground/80 hover:text-foreground"
                  }`}
                  activeProps={{
                    className: isDarkHeader
                      ? "text-white font-semibold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-white after:rounded-full"
                      : "text-foreground font-semibold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-primary after:rounded-full",
                  }}
                  activeOptions={{ exact: l.to === "/" }}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden lg:block">
            <Link
              to="/contact"
              className="inline-flex items-center rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-all hover:scale-105 hover:shadow-elevated"
            >
              Request Quote
            </Link>
          </div>

          {/* Hamburger button */}
          <button
            aria-label={open ? "Close menu" : "Open menu"}
            className={`relative z-[110] rounded-full p-2 lg:hidden transition-colors duration-300 ${
              open ? "text-foreground" : isDarkHeader ? "text-white" : "text-foreground"
            }`}
            onClick={() => setOpen((o) => !o)}
          >
            <AnimatePresence mode="wait" initial={false}>
              {open ? (
                <motion.span
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="block"
                >
                  <X className="h-6 w-6" />
                </motion.span>
              ) : (
                <motion.span
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="block"
                >
                  <Menu className="h-6 w-6" />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </nav>
      </header>

      {/* Full-screen Mobile Menu Modal */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-[100] bg-black/40 backdrop-blur-sm lg:hidden"
              onClick={() => setOpen(false)}
            />

            {/* Modal Panel */}
            <motion.div
              key="panel"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 260 }}
              className="fixed right-0 top-0 bottom-0 z-[105] w-[85vw] max-w-sm lg:hidden"
              style={{
                background: "rgba(255,255,255,0.97)",
                backdropFilter: "blur(24px)",
                WebkitBackdropFilter: "blur(24px)",
                boxShadow: "-4px 0 40px rgba(0,0,0,0.12)",
              }}
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between border-b border-border/50 px-6 py-4">
                <img src={logoImg} alt="Filizat Metals" className="h-16 w-auto" />
                <button
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-border/60 bg-white text-foreground shadow-sm transition-all hover:scale-105 hover:shadow-md"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              {/* Nav Links */}
              <nav className="flex flex-col gap-1 px-4 py-6">
                {links.map((l, i) => (
                  <motion.div
                    key={l.to}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.05 + i * 0.06 }}
                  >
                    <Link
                      to={l.to}
                      onClick={() => {
                        setOpen(false);
                        handleLinkClick(l.to);
                      }}
                      className="group flex w-full items-center justify-between rounded-2xl px-4 py-4 text-base font-medium text-foreground/75 transition-all hover:bg-secondary/70 hover:text-foreground"
                      activeProps={{
                        className:
                          "bg-primary/8 text-primary font-semibold group flex w-full items-center justify-between rounded-2xl px-4 py-4 text-base transition-all",
                      }}
                      activeOptions={{ exact: l.to === "/" }}
                    >
                      <span>{l.label}</span>
                      <ArrowRight className="h-4 w-4 opacity-0 -translate-x-2 transition-all group-hover:opacity-60 group-hover:translate-x-0" />
                    </Link>
                  </motion.div>
                ))}
              </nav>

              {/* CTA at bottom */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: 0.35 }}
                className="absolute bottom-0 left-0 right-0 border-t border-border/50 bg-white/80 px-6 py-6"
              >
                <Link
                  to="/contact"
                  onClick={() => setOpen(false)}
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-elevated transition-all hover:scale-[1.02] hover:shadow-lg"
                >
                  Request a Quote
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <p className="mt-3 text-center text-xs text-muted-foreground">
                  Premium metals. Global delivery. Trusted by 500+ manufacturers.
                </p>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
