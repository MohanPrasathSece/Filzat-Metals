import { useEffect } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { 
  ArrowRight, 
  Shield, 
  Truck, 
  Scale, 
  Award, 
  Factory, 
  Layers, 
  Globe, 
  CheckCircle2 
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import facilityImg from "@/assets/about-facility.jpg";
import ctaBg from "@/assets/cta-metal-bg.png";

export const Route = createFileRoute("/about")({
  component: AboutPage,
});

function AboutPage() {
  useEffect(() => {
    document.title = "About Filizat Metals — Generations of Sourcing Excellence";
  }, []);

  const pillars = [
    {
      icon: Scale,
      title: "Absolute Honesty",
      desc: "Transparency is our signature trait. From market rates to material grades, we operate with complete alignment and clear disclosures."
    },
    {
      icon: Shield,
      title: "Unyielding Quality",
      desc: "Every batch of unbranded base metals and hardware alloys meets strict chemical and structural standards verified at sourcing."
    },
    {
      icon: Truck,
      title: "Clockwork timely delivery",
      desc: "Every shipment is meticulously packed and sent through optimized corridors to prevent assembly lines from stopping."
    }
  ];

  const portfolio = [
    {
      title: "High-Purity Copper & Zinc",
      items: ["Grade A copper cathodes", "Unalloyed copper scrap (Berry)", "Refined zinc ingots"]
    },
    {
      title: "Lead-Free \"Eco-Brass\"",
      items: ["Structural billets", "Unbranded wire coils", "Silicon brass architectural items"]
    },
    {
      title: "Sustainable Aluminum",
      items: ["Bulk primary ingots (P1020)", "Pre-consumer scrap briquettes", "European regulatory compliance"]
    },
    {
      title: "Industrial Minerals",
      items: ["Premium mica flakes", "Micronized powders", "RMI-compliant sourcing"]
    }
  ];

  return (
    <div className="overflow-x-hidden bg-background">
      <Navbar />
      
      {/* Hero Header */}
      <section className="relative overflow-hidden bg-secondary/40 pb-20 pt-40 sm:pt-44">
        <div className="pointer-events-none absolute -top-32 left-1/2 -z-10 h-96 w-[36rem] -translate-x-1/2 rounded-full bg-silver-light/50 blur-3xl" />
        <div className="mx-auto max-w-5xl px-6 text-center lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-sm font-medium uppercase tracking-widest text-muted-foreground"
          >
            Our Legacy
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.05 }}
            className="mt-5 font-display text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl text-foreground"
          >
            Generations Of Sourcing<br />
            <span className="text-metal">Excellence.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mx-auto mt-7 max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            Evolving from a traditional casting foundry into a modernized global logistics aggregator, bridging the gap between heavy industrial production and global manufacturing demands.
          </motion.p>
        </div>
      </section>

      {/* Main Legacy Content */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:px-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="overflow-hidden rounded-3xl shadow-elevated"
          >
            <img
              src={facilityImg}
              alt="Filizat Metals historical metallurgical hub"
              className="aspect-[4/3] w-full object-cover hover:scale-105 transition-transform duration-700"
              loading="lazy"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <span className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
              Ancestral Roots · Modern Operations
            </span>
            <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              Aligarh metallurgical expertise, globally scaled.
            </h2>
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground sm:text-base">
              Headquartered in the historic metalcraft hub of Aligarh, India, Filizat Metals stands as a premier multi-generational wholesale supplier and global sourcing aggregator. We have evolved from a local casting foundry into a modernized, worldwide logistics powerhouse. 
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              Our deep-seated industry connections allow us to seamlessly bridge the gap between heavy industrial production and global manufacturing demands, exporting unbranded base metals, secondary raw materials, and precision hardware alloys at competitive Indian market rates.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-foreground">
                <Globe className="h-4 w-4 text-silver-dark" /> Exports to US, EU, Canada, UK, Australia
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Three Pillars Section */}
      <section className="bg-secondary/40 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
              Three Pillars
            </span>
            <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              Built on absolute integrity.
            </h2>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-3">
            {pillars.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="hover-lift glass rounded-3xl p-8 shadow-soft"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl silver-gradient shadow-soft border border-border">
                  <p.icon className="h-5 w-5 text-graphite" />
                </div>
                <h3 className="mt-6 font-display text-2xl font-semibold text-foreground">{p.title}</h3>
                <p className="mt-3 text-base leading-relaxed text-muted-foreground">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sourcing Catalogue Portfolio */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
              What We Aggregate
            </span>
            <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              Core export portfolio.
            </h2>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {portfolio.map((cat, i) => (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="rounded-3xl border border-border bg-card p-6 shadow-soft"
              >
                <h4 className="font-display text-xl font-semibold text-foreground tracking-tight">{cat.title}</h4>
                <ul className="mt-4 space-y-2">
                  {cat.items.map((it) => (
                    <li key={it} className="flex items-start gap-2 text-base text-muted-foreground">
                      <CheckCircle2 className="mt-1 h-4 w-4 flex-shrink-0 text-silver-dark" />
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Third Party Inspections & Trust Callout */}
      <section className="px-6 pb-32 pt-12 lg:px-10">
        <div className="relative mx-auto max-w-5xl overflow-hidden rounded-[2.5rem] p-10 text-center shadow-elevated sm:p-16 border border-border">
          <img
            src={ctaBg}
            alt="Brushed metal texture background"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/80 to-white/95" />
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative z-10"
          >
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl silver-gradient shadow-soft border border-border mb-6">
              <Award className="h-6 w-6 text-graphite" />
            </div>
            <h3 className="font-display text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              Entirely Open To Independent Inspections
            </h3>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              To give our international client base total peace of mind, we are fully open to third-party quality audits (such as **SGS, Bureau Veritas, or Intertek**) at any stage of the sourcing or loading process. We don't just deliver metals; we deliver a legacy of trust.
            </p>
            <div className="mt-8 flex justify-center gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground transition-all hover:scale-105"
              >
                Start Sourcing Partnership
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
