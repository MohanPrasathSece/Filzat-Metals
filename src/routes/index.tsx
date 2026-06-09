import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  ChevronDown,
  Shield,
  Recycle,
  Globe,
  Truck,
  Star,
  Sparkles,
  Award,
  Factory,
  Layers,
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { categories } from "@/lib/products-data";
import heroImg from "@/assets/minimal-hero.png";
import facilityImg from "@/assets/about-facility.jpg";
import sustainImg from "@/assets/sustainability.jpg";
import ctaBg from "@/assets/cta-metal-bg.png";
import whyChooseUsImg from "@/assets/why-choose-us.png";
export const Route = createFileRoute("/")({
  component: HomePage,
});

function HomePage() {
  useEffect(() => {
    document.title = "Filizat Metals — Generations of Sourcing Excellence";
  }, []);
  return (
    <div className="overflow-x-hidden bg-background">
      <Navbar />
      <Hero />
      <Trust />
      <AboutPreview />
      <ProductShowcase />
      <WhyChooseUs />
      <SustainabilityPreview />
      <Process />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
}

/* ---------------- Hero ---------------- */
function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative flex h-screen items-center justify-center overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-0">
        <img
          src={heroImg}
          alt="Molten metal in modern manufacturing facility"
          className="h-full w-full object-cover"
          width={1920}
          height={1280}
        />
        <div className="absolute inset-0 bg-white/20" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/20 to-white" />
      </motion.div>

      <motion.div style={{ opacity }} className="relative z-10 mx-auto max-w-5xl px-6 pt-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="glass mx-auto inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium text-foreground/70"
        >
          <Sparkles className="h-3.5 w-3.5" />
          A premium metal solutions company
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="mt-6 font-display text-5xl font-semibold leading-[1.1] tracking-tight text-foreground sm:text-6xl lg:text-7xl"
        >
          Shaping Sustainable<br />
          Metal Solutions <span className="text-metal">For Tomorrow</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mx-auto mt-7 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg"
        >
          Delivering high-quality metal products with precision, innovation and
          environmental responsibility — for the industries that build tomorrow.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          <Link
            to="/products"
            className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground shadow-elevated transition-all hover:scale-[1.03]"
          >
            Explore Products
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            to="/contact"
            className="glass inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium text-foreground transition-all hover:scale-[1.03]"
          >
            Contact Us
          </Link>
        </motion.div>

      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center text-xs text-muted-foreground"
      >
        <ChevronDown className="h-5 w-5 animate-bounce" />
      </motion.div>
    </section>
  );
}

/* ---------------- Trust ---------------- */
function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    const dur = 1600;
    let raf = 0;
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / dur);
      setVal(Math.round(to * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to]);
  return (
    <span ref={ref}>
      {val}
      {suffix}
    </span>
  );
}

function Trust() {
  const stats = [
    { n: 15, s: "+", l: "Years Experience" },
    { n: 500, s: "+", l: "Clients Served" },
    { n: 20, s: "+", l: "Metal Products" },
    { n: 100, s: "%", l: "Commitment" },
  ];
  return (
    <section className="border-y border-border/60 bg-secondary/40">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-4 px-6 py-20 sm:grid-cols-4 lg:px-10">
        {stats.map((s, i) => (
          <motion.div
            key={s.l}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: i * 0.08 }}
            className="text-center"
          >
            <div className="font-display text-5xl font-semibold tracking-tight text-foreground sm:text-6xl">
              <Counter to={s.n} suffix={s.s} />
            </div>
            <div className="mt-2 text-sm uppercase tracking-widest text-muted-foreground">{s.l}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

/* ---------------- About preview ---------------- */
function AboutPreview() {
  return (
    <section className="relative py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2 lg:px-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="overflow-hidden rounded-3xl shadow-elevated"
        >
          <img
            src={facilityImg}
            alt="Filizat Metals sourcing aggregation facility"
            className="aspect-[4/5] w-full object-cover transition-transform duration-700 hover:scale-105"
            loading="lazy"
            width={1280}
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
            Who We Are
          </div>
          <h2 className="mt-4 font-display text-4xl font-semibold leading-tight tracking-tight text-foreground sm:text-5xl">
            A premium partner for industrial metal supply.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
            For over fifteen years, Filizat Metals has been a trusted source of
            high-purity metals, refined alloys and unbranded raw materials for
            manufacturers across the globe. We combine precision, ancestral integrity and
            logistical fluidness in every shipment.
          </p>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {[
              "Quality-first manufacturing",
              "Global logistics network",
              "Responsible sourcing",
              "On-time, every time",
            ].map((f) => (
              <li key={f} className="flex items-start gap-2 text-base text-foreground/80">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full silver-gradient" />
                {f}
              </li>
            ))}
          </ul>
          <Link
            to="/about"
            className="mt-10 inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-medium text-foreground transition-all hover:shadow-soft"
          >
            Learn More
            <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

/* ---------------- Product showcase ---------------- */
function ProductShowcase() {
  return (
    <section className="bg-secondary/40 py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <div className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
            Our Products
          </div>
          <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            Engineered for industries that demand precision.
          </h2>
          <p className="mt-5 text-muted-foreground">
            Seven categories. Twenty-plus refined materials and components — all
            held to a single uncompromising standard.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((c, i) => (
            <motion.div
              key={c.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.1 }}
            >
              <Link
                to="/products"
                className="hover-lift group block overflow-hidden rounded-3xl border border-border bg-card shadow-soft"
              >
                <div className="aspect-[4/3] overflow-hidden bg-secondary">
                  <img
                    src={c.image}
                    alt={c.name}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                    width={1024}
                    height={768}
                  />
                </div>
                <div className="flex items-center justify-between p-6">
                  <div>
                    <div className="font-display text-xl font-semibold tracking-tight">{c.name}</div>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {c.products.length} product{c.products.length > 1 ? "s" : ""}
                    </p>
                  </div>
                  <ArrowRight className="h-5 w-5 -translate-x-2 text-muted-foreground opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Why choose us ---------------- */
function WhyChooseUs() {
  const items = [
    { icon: Shield, title: "Quality Assurance", desc: "Every batch verified against international standards before it ships." },
    { icon: Recycle, title: "Sustainable Sourcing", desc: "Recycled inputs and low-impact processes across our facilities." },
    { icon: Globe, title: "Global Supply Network", desc: "Reliable logistics across 30+ countries with full traceability." },
    { icon: Truck, title: "Reliable Delivery", desc: "On-time shipments backed by transparent communication." },
  ];
  return (
    <section className="py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7"
          >
            <div className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
              Why Choose Us
            </div>
            <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight text-foreground sm:text-5xl leading-tight">
              The standard that the world's leading manufacturers rely on.
            </h2>
            <p className="mt-5 text-base text-muted-foreground leading-relaxed">
              We operate with complete transparency, unyielding quality control, and an optimized global logistics network to support your supply chain without interruption.
            </p>
            
            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {items.map((it) => (
                <div
                  key={it.title}
                  className="hover-lift glass rounded-3xl p-6 shadow-soft border border-border/60"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl silver-gradient shadow-soft border border-border">
                    <it.icon className="h-4.5 w-4.5 text-graphite" />
                  </div>
                  <h3 className="mt-4 font-display text-lg font-semibold text-foreground">{it.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{it.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative overflow-hidden rounded-[2.5rem] shadow-elevated border border-border/40 group">
              <img
                src={whyChooseUsImg}
                alt="Metallurgical testing laboratory"
                className="w-full object-cover aspect-[4/5] hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
                width={800}
                height={1000}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 pointer-events-none" />
              
              {/* Floating badge */}
              <div className="absolute bottom-6 left-6 right-6 glass p-4 rounded-2xl border border-white/20 backdrop-blur-md shadow-elevated flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground shadow-soft">
                  <Shield className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-foreground">Verified Standards</div>
                  <div className="text-[11px] text-muted-foreground">ISO 9001 & SGS inspection ready</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Sustainability preview ---------------- */
function SustainabilityPreview() {
  return (
    <section className="relative overflow-hidden py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="relative overflow-hidden rounded-[2.5rem] shadow-elevated">
          <img
            src={sustainImg}
            alt="A greener industrial future"
            className="absolute inset-0 h-full w-full object-cover"
            loading="lazy"
            width={1600}
            height={1000}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
          <div className="relative grid grid-cols-1 gap-10 p-10 sm:p-16 lg:grid-cols-2 lg:p-24">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-white"
            >
              <div className="text-sm font-medium uppercase tracking-widest text-white/70">
                Sustainability
              </div>
              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                Building A Greener Industrial Future.
              </h2>
              <p className="mt-6 max-w-md text-base leading-relaxed text-white/85">
                Recycling, responsible sourcing and sustainable manufacturing
                aren't side initiatives — they're how we build every product.
              </p>
              <Link
                to="/sustainability"
                className="mt-10 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-foreground transition-all hover:scale-105"
              >
                Explore Sustainability
                <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Process ---------------- */
function Process() {
  const steps = [
    { n: "01", t: "Raw Material Sourcing", icon: Globe },
    { n: "02", t: "Quality Testing", icon: Shield },
    { n: "03", t: "Processing & Manufacturing", icon: Factory },
    { n: "04", t: "Packaging", icon: Layers },
    { n: "05", t: "Global Delivery", icon: Truck },
  ];
  return (
    <section className="border-y border-border/60 bg-secondary/40 py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <div className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
            Our Process
          </div>
          <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            From raw material to your facility.
          </h2>
        </div>

        <div className="relative mt-20">
          <div className="absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-transparent via-silver to-transparent lg:block" />
          <ol className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6">
            {steps.map((s, i) => (
              <motion.li
                key={s.n}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative flex flex-col items-center text-center"
              >
                <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full border border-border bg-card shadow-soft">
                  <s.icon className="h-5 w-5 text-foreground/70" />
                </div>
                <div className="mt-4 font-display text-sm font-medium uppercase tracking-widest text-silver-dark">
                  Step {s.n}
                </div>
                <div className="mt-1 font-display text-base font-semibold">{s.t}</div>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Testimonials ---------------- */
function Testimonials() {
  const reviews = [
    { q: "Filizat Metals' consistency in purity and delivery has transformed our supply chain.", a: "Procurement Director, Tier-1 Automotive" },
    { q: "Their team treats sustainability with the same seriousness as quality. Rare and impressive.", a: "Head of Operations, Global Hardware Co." },
    { q: "Premium-grade product, transparent pricing, and on-time every single shipment.", a: "Plant Manager, Specialty Alloys" },
  ];
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % reviews.length), 5500);
    return () => clearInterval(t);
  }, [reviews.length]);

  return (
    <section className="py-32">
      <div className="mx-auto max-w-4xl px-6 text-center lg:px-10">
        <div className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
          Trusted by leading manufacturers
        </div>
        <div className="relative mt-10 min-h-[280px]">
          {reviews.map((r, i) => (
            <motion.div
              key={i}
              animate={{ opacity: i === idx ? 1 : 0, y: i === idx ? 0 : 20 }}
              transition={{ duration: 0.6 }}
              className={`glass absolute inset-0 rounded-3xl p-10 shadow-soft sm:p-14 ${
                i === idx ? "pointer-events-auto" : "pointer-events-none"
              }`}
            >
              <div className="mb-6 flex justify-center gap-1">
                {Array.from({ length: 5 }).map((_, k) => (
                  <Star key={k} className="h-4 w-4 fill-foreground text-foreground" />
                ))}
              </div>
              <blockquote className="font-display text-2xl font-medium leading-snug tracking-tight text-foreground sm:text-3xl">
                "{r.q}"
              </blockquote>
              <div className="mt-6 text-sm text-muted-foreground">— {r.a}</div>
            </motion.div>
          ))}
        </div>
        <div className="mt-8 flex justify-center gap-2">
          {reviews.map((_, i) => (
            <button
              key={i}
              onClick={() => setIdx(i)}
              aria-label={`Review ${i + 1}`}
              className={`h-1.5 rounded-full transition-all ${
                i === idx ? "w-8 bg-foreground" : "w-1.5 bg-foreground/30"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- CTA ---------------- */
function CTA() {
  return (
    <section className="px-6 pb-32 lg:px-10">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] p-12 text-center shadow-elevated sm:p-20">
        <img
          src={ctaBg}
          alt="Brushed metal texture background"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/80 to-white/95" />
        <div className="absolute -top-32 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-white/40 blur-3xl" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="relative z-10"
        >
          <Award className="mx-auto h-10 w-10 text-graphite" />
          <h2 className="mt-6 font-display text-4xl font-semibold leading-tight tracking-tight text-graphite sm:text-5xl lg:text-6xl">
            Looking for reliable<br />metal solutions?
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-base text-graphite/80">
            Our team will help you specify, source and deliver the right material
            for your project.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground transition-all hover:scale-105"
            >
              Get a Quote
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-graphite/20 bg-white/60 px-7 py-3.5 text-sm font-medium text-graphite backdrop-blur transition-all hover:scale-105"
            >
              Contact Us
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
