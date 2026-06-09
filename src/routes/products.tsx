import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowRight, X, CheckCircle2, ChevronDown, Sparkles } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { categories, type Product } from "@/lib/products-data";
import heroImg from "@/assets/minimal-hero.png";
import ctaBg from "@/assets/cta-metal-bg.png";
import industrialMetalsImg from "@/assets/industrial-metals.png";

export const Route = createFileRoute("/products")({
  component: ProductsPage,
});

function ProductsPage() {
  const [active, setActive] = useState<Product | null>(null);
  useEffect(() => {
    document.title = "Products - Premium Metal Solutions | Filizat Metals";
  }, []);
  return (
    <div className="overflow-x-hidden bg-background">
      <Navbar />
      <Hero />
      <CategoryNav />
      {categories.map((cat, i) => (
        <CategorySection key={cat.id} cat={cat} reverse={i % 2 === 1} onOpen={setActive} />
      ))}
      <Industries />
      <Quality />
      <InquiryCTA />
      <Footer />

      <AnimatePresence>
        {active && <ProductModal product={active} onClose={() => setActive(null)} />}
      </AnimatePresence>
    </div>
  );
}

/* ---------------- Hero ---------------- */
function Hero() {
  return (
    <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden">
      <img
        src={heroImg}
        alt="Industrial metal production"
        className="absolute inset-0 h-full w-full object-cover"
        width={1920}
        height={1280}
      />
      <div className="absolute inset-0 bg-white/20" />
      <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/30 to-white" />
      <div className="relative z-10 mx-auto max-w-5xl px-6 pt-32 text-center lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="glass mx-auto inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium text-foreground/70"
        >
          <Sparkles className="h-3.5 w-3.5" />
          Our Catalogue
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.05 }}
          className="mt-6 font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-7xl"
        >
          Premium Metal Products
          <br />
          <span className="text-metal">For Global Industries.</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mx-auto mt-7 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg"
        >
          High-quality metals, alloys, raw materials and industrial components - delivered with
          precision, reliability and sustainability.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <a
            href="#categories"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground transition-all hover:scale-105 sm:w-auto"
          >
            Explore Categories <ArrowRight className="h-4 w-4" />
          </a>
          <Link
            to="/contact"
            className="glass inline-flex w-full items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium text-foreground transition-all hover:scale-105 sm:w-auto"
          >
            Request Quote
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

function CategoryNav() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState(categories[0].id);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 400);
      // detect active
      let current = categories[0].id;
      for (const c of categories) {
        const el = document.getElementById(c.id);
        if (el && el.getBoundingClientRect().top < 200) current = c.id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      id="categories"
      className={`sticky top-[68px] z-40 transition-all duration-500 ${
        scrolled ? "glass shadow-soft" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl gap-2 overflow-x-auto px-6 py-3 lg:px-10 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {categories.map((c) => (
          <a
            key={c.id}
            href={`#${c.id}`}
            className={`whitespace-nowrap rounded-full px-5 py-2 text-sm font-medium transition-all ${
              active === c.id
                ? "bg-primary text-primary-foreground shadow-soft"
                : "text-foreground/70 hover:bg-secondary"
            }`}
          >
            {c.name}
          </a>
        ))}
      </div>
    </div>
  );
}

function CategorySection({
  cat,
  reverse,
  onOpen,
}: {
  cat: (typeof categories)[number];
  reverse: boolean;
  onOpen: (p: Product) => void;
}) {
  return (
    <section
      id={cat.id}
      className={`scroll-mt-32 py-24 sm:py-32 ${reverse ? "bg-secondary/40" : ""}`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div
          className={`grid items-center gap-12 lg:grid-cols-2 lg:gap-20 ${
            reverse ? "lg:[&>*:first-child]:order-2" : ""
          }`}
        >
          <motion.div
            initial={{ opacity: 0, x: reverse ? 30 : -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="overflow-hidden rounded-3xl shadow-elevated"
          >
            <img
              src={cat.image}
              alt={cat.name}
              className="aspect-[4/5] w-full object-cover transition-transform duration-700 hover:scale-105"
              loading="lazy"
              width={1024}
              height={1280}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <div className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
              Category
            </div>
            <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
              {cat.name}
            </h2>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg">
              {cat.tagline}
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {cat.products.slice(0, cat.products.length > 4 ? 4 : cat.products.length).map((p) => (
                <ProductCard key={p.id} product={p} onOpen={onOpen} />
              ))}
            </div>

            {cat.products.length > 4 && (
              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                {cat.products.slice(4).map((p) => (
                  <ProductCard key={p.id} product={p} onOpen={onOpen} compact />
                ))}
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ProductCard({
  product,
  onOpen,
  compact = false,
}: {
  product: Product;
  onOpen: (p: Product) => void;
  compact?: boolean;
}) {
  return (
    <button
      onClick={() => onOpen(product)}
      className="hover-lift group flex flex-col overflow-hidden rounded-3xl border border-silver-light/80 bg-card text-left shadow-soft"
    >
      <div
        className={`overflow-hidden bg-secondary/60 ${compact ? "aspect-square" : "aspect-[5/4]"}`}
      >
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
          width={600}
          height={500}
        />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <div className="font-display text-base font-semibold leading-snug text-foreground">
          {product.name}
        </div>
        {!compact && (
          <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-muted-foreground">
            {product.description}
          </p>
        )}
        <div className="mt-4 inline-flex items-center gap-1.5 text-xs font-medium text-foreground">
          View details
          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
        </div>
      </div>
    </button>
  );
}

function ProductModal({ product, onClose }: { product: Product; onClose: () => void }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 backdrop-blur-md p-4 sm:p-6"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 10 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        onClick={(e) => e.stopPropagation()}
        className="relative flex max-h-[90vh] w-full max-w-5xl flex-col overflow-hidden rounded-[1.5rem] bg-card shadow-elevated sm:rounded-[2rem] lg:grid lg:grid-cols-2"
      >
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 shadow-soft backdrop-blur transition-all hover:scale-110"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="h-48 overflow-hidden bg-secondary/60 sm:h-64 lg:h-full">
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover"
            width={1024}
            height={1024}
          />
        </div>

        <div className="overflow-y-auto p-8 sm:p-10">
          <div className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
            {product.category}
          </div>
          <h3 className="mt-3 font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
            {product.name}
          </h3>
          <p className="mt-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
            {product.description}
          </p>

          <div className="mt-8">
            <div className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
              Specifications
            </div>
            <dl className="mt-3 divide-y divide-border rounded-2xl border border-border bg-secondary/40">
              {product.specs.map((s) => (
                <div key={s.label} className="flex items-center justify-between px-5 py-3 text-sm">
                  <dt className="text-muted-foreground">{s.label}</dt>
                  <dd className="font-medium text-foreground">{s.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="mt-8">
            <div className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
              Applications
            </div>
            <ul className="mt-3 grid gap-2 sm:grid-cols-2">
              {product.applications.map((a) => (
                <li key={a} className="flex items-start gap-2 text-sm text-foreground/85">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-silver-dark" />
                  {a}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-all hover:scale-105"
            >
              Request Quote <ArrowRight className="h-4 w-4" />
            </Link>
            <button
              onClick={onClose}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-medium text-foreground transition-all hover:bg-secondary"
            >
              Close
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function Industries() {
  const items = [
    "Construction",
    "Automotive",
    "Electronics",
    "Manufacturing",
    "Hardware",
    "Metal Processing",
    "Infrastructure",
    "Energy",
  ];
  return (
    <section className="bg-secondary/40 py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <div className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
            Industries We Serve
          </div>
          <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            Trusted across global sectors.
          </h2>
        </div>
        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it, i) => (
            <motion.div
              key={it}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.08 }}
              className="hover-lift glass rounded-2xl p-6 text-center shadow-soft"
            >
              <div className="font-display text-base font-semibold">{it}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Quality() {
  const items = [
    "Premium Raw Materials",
    "Strict Quality Checks",
    "Global Standards",
    "Reliable Supply Chain",
  ];
  return (
    <section className="px-6 py-20 lg:px-10">
      <div className="mx-auto max-w-7xl rounded-[2.5rem] silver-gradient p-10 shadow-elevated sm:p-16">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16 items-center">
          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative"
          >
            <div className="overflow-hidden rounded-3xl shadow-soft border border-white/20 group">
              <img
                src={industrialMetalsImg}
                alt="Stacks of premium metal raw materials"
                className="w-full object-cover aspect-[4/3] hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
                width={800}
                height={600}
              />
            </div>
          </motion.div>

          {/* Copy Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="lg:col-span-7"
          >
            <div className="text-sm font-medium uppercase tracking-widest text-graphite/70">
              Quality Assurance
            </div>
            <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight text-graphite sm:text-5xl">
              Verified at every stage.
            </h2>
            <p className="mt-5 text-base text-graphite/80 leading-relaxed">
              Every batch of unbranded base metals, secondary raw materials, and precision hardware
              alloys undergoes strict chemical and structural inspection to meet global engineering
              standards.
            </p>
            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {items.map((it, i) => (
                <motion.li
                  key={it}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="flex items-center gap-3 rounded-2xl bg-white/70 px-5 py-4 text-sm font-medium text-graphite backdrop-blur border border-white/30"
                >
                  <CheckCircle2 className="h-4.5 w-4.5 flex-shrink-0 text-graphite" />
                  {it}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function InquiryCTA() {
  return (
    <section className="px-6 pb-32 pt-12 lg:px-10">
      <div className="relative mx-auto max-w-5xl overflow-hidden rounded-[2.5rem] p-12 text-center shadow-soft sm:p-20">
        <img
          src={ctaBg}
          alt="Brushed metal texture background"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/80 to-white/95" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="relative z-10"
        >
          <h2 className="font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            Need custom metal solutions?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-muted-foreground">
            Our team is ready to help with your product requirements, custom specifications and
            large-scale supply.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground transition-all hover:scale-105"
            >
              Request Quote <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/contact"
              className="glass inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium text-foreground transition-all hover:scale-105"
            >
              Contact Us
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Suppress unused warning if ChevronDown isn't used directly
void ChevronDown;
