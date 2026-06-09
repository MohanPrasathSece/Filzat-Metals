import { useEffect } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Recycle,
  Leaf,
  ShieldCheck,
  Globe,
  Award,
  FileText,
  Sun,
  Flame,
  CheckCircle2,
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import blueprintImg from "@/assets/WhatsApp Image 2026-06-09 at 16.12.45.jpeg";
import aluminumImg from "@/assets/product-aluminium.jpg";
import brassImg from "@/assets/product-brass.jpg";
import manganeseImg from "@/assets/product-manganese.jpg";
import siliconImg from "@/assets/product-silicon.jpg";
import ctaBg from "@/assets/cta-metal-bg.png";

export const Route = createFileRoute("/sustainability")({
  component: SustainabilityPage,
});

function SustainabilityPage() {
  useEffect(() => {
    document.title = "Sustainability Blueprint — Filizat Metals — Circular & Ethical Metallurgy";
  }, []);

  const offerings = [
    {
      icon: Leaf,
      title: "Aluminum",
      subtitle: "Hydropower & Energy Efficiency",
      desc: "Celebrated for its lightweight strength and infinite recyclability, aluminum stands at the center of our green transition. We focus heavily on secondary aluminum production, which requires up to 95% less energy than primary smelting, drastically cutting greenhouse gas emissions. For primary needs, we partner exclusively with clean, renewable hydropower suppliers.",
      image: aluminumImg,
      badge: "95% Energy Saved",
      badgeColor: "bg-emerald-500/10 text-emerald-600 border-emerald-500/20",
    },
    {
      icon: Recycle,
      title: "Brass Alloy",
      subtitle: "Closed-Loop Circular Economy",
      desc: "Our approach to brass—a crucial copper-zinc alloy—centers on a closed-loop circular economy. By utilizing high ratios of recycled scrap metal, we minimize the necessity of destructive mining, preserving vital terrestrial habitats and ecosystems.",
      image: brassImg,
      badge: "100% Closed-Loop",
      badgeColor: "bg-amber-500/10 text-amber-600 border-amber-500/20",
    },
    {
      icon: ShieldCheck,
      title: "Manganese",
      subtitle: "Reinforcing Steel Ethically",
      desc: "Manganese, essential for reinforcing structural steel, is managed under strict safeguards. We source only through audited mines enforcing fair labor practices, safe working conditions, and robust land-reclamation initiatives.",
      image: manganeseImg,
      badge: "Audited & Certified",
      badgeColor: "bg-blue-500/10 text-blue-600 border-blue-500/20",
    },
    {
      icon: Sun,
      title: "Silicon Products",
      subtitle: "Bedrock of Clean Solar Energy",
      desc: "Silicon, the bedrock of clean energy solar panels, is managed with rigorous environmental audits. We ensure ethical extraction with strict safeguards for labor rights, occupational safety, and land recovery.",
      image: siliconImg,
      badge: "Solar Grade Sourcing",
      badgeColor: "bg-sky-500/10 text-sky-600 border-sky-500/20",
    },
  ];

  return (
    <div className="overflow-x-hidden bg-background animate-fade-in">
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
            Sustainable Metallurgy
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.05 }}
            className="mt-5 font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-7xl text-foreground"
          >
            Shaping Tomorrow.
            <br />
            <span className="text-metal">Our Green Blueprint.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mx-auto mt-7 max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            In the modern industrial landscape, the demand for foundational materials must coexist
            with an unyielding commitment to environmental stewardship. At Filizat Metals, we
            recognize that the future of manufacturing lies in responsible sourcing and low-impact
            production.
          </motion.p>
        </div>
      </section>

      {/* Sustainability Story / Blueprint Section */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:px-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="overflow-hidden rounded-3xl shadow-elevated border border-border/50"
          >
            <img
              src={blueprintImg}
              alt="Filizat Metals blueprint for sustainable metallurgy"
              className="aspect-[4/3] w-full object-contain hover:scale-[1.02] transition-transform duration-700 bg-secondary/10 p-6"
              loading="lazy"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex flex-col gap-6"
          >
            <div>
              <span className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
                Our Philosophy · Resource Optimization
              </span>
              <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
                Reimagining our supply chains.
              </h2>
            </div>

            <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
              At Filizat Metals, we recognize that the future of manufacturing lies in the
              responsible sourcing and low-impact production of our core offerings: aluminum, brass,
              manganese, and silicon products. By reimagining our supply chains and optimizing our
              operational footprints, we are transforming how the world builds.
            </p>

            <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
              Across all facilities, Filizat Metals minimizes waste through advanced water-recycling
              loops and energy-efficient furnaces. We believe that sustainable metallurgy is not
              just about reducing our footprint; it is about providing our clients with the
              transparent, low-carbon materials required to build a cleaner infrastructure.
            </p>

            <p className="text-sm leading-relaxed text-muted-foreground sm:text-base font-medium border-l-2 border-silver pl-4 italic">
              "Through technological innovation and uncompromised ethics, Filizat Metals is paving a
              resilient, green highway for global industry."
            </p>
          </motion.div>
        </div>
      </section>

      {/* Core Offerings Showcase */}
      <section className="py-24 sm:py-32 bg-secondary/10">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="mx-auto max-w-3xl text-center mb-20">
            <span className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
              Core Offerings
            </span>
            <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              Ethical Sourcing & Safeguards.
            </h2>
            <p className="mt-4 text-muted-foreground text-sm sm:text-base">
              Explore how our foundational metals are managed with strict adherence to environmental
              ethics, circular economy principles, and audited mine safety.
            </p>
          </div>

          <div className="space-y-20 lg:space-y-32">
            {offerings.map((offering, i) => {
              const isEven = i % 2 === 0;
              return (
                <div
                  key={offering.title}
                  className="grid gap-8 lg:grid-cols-12 lg:gap-16 items-center"
                >
                  {/* Image Column */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, cubicBezier: [0.16, 1, 0.3, 1] }}
                    className={`lg:col-span-6 ${!isEven ? "lg:order-2" : ""}`}
                  >
                    <div className="relative group overflow-hidden rounded-[2rem] shadow-elevated border border-border bg-card">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                      <img
                        src={offering.image}
                        alt={`Filizat Metals sustainable ${offering.title} production`}
                        className="aspect-[16/10] w-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                        loading="lazy"
                      />
                      <div
                        className={`absolute top-6 left-6 z-20 px-4 py-1.5 rounded-full border text-[10px] sm:text-xs font-semibold backdrop-blur-md ${offering.badgeColor}`}
                      >
                        {offering.badge}
                      </div>
                    </div>
                  </motion.div>

                  {/* Text Column */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    className={`lg:col-span-6 flex flex-col items-start gap-4 ${!isEven ? "lg:order-1" : ""}`}
                  >
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl silver-gradient shadow-soft border border-border text-graphite">
                      <offering.icon className="h-5 w-5" />
                    </div>

                    <div>
                      <h3 className="font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                        {offering.title}
                      </h3>
                      <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground/80 mt-1">
                        {offering.subtitle}
                      </div>
                    </div>

                    <p className="text-sm sm:text-base leading-relaxed text-muted-foreground mt-2">
                      {offering.desc}
                    </p>

                    <div className="mt-4 pt-4 border-t border-border/60 w-full flex items-center gap-2 text-xs font-medium text-foreground">
                      <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                      <span>Strict compliance with global ESG standards</span>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Traceability Stats Section */}
      <section className="bg-secondary/30 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 text-center">
          <span className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
            Measurable Accountability
          </span>
          <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            Traceable environmental impacts.
          </h2>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {/* Stat 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="group hover-lift glass rounded-3xl p-8 shadow-soft hover:shadow-elevated hover:bg-white/80 transition-all duration-300 flex flex-col justify-between items-start text-left"
            >
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white border border-border/80 mb-6 shadow-soft transition-transform group-hover:scale-105">
                  <Leaf className="h-5 w-5 text-graphite" />
                </div>
                <div className="font-display text-5xl font-bold tracking-tight text-metal sm:text-6xl">
                  Up to 95%
                </div>
                <div className="h-0.5 w-12 bg-silver/40 mt-4 mb-4 transition-all group-hover:w-20 duration-500" />
                <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Energy Saved
                </div>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Secondary aluminum production requires up to 95% less energy than primary smelting,
                drastically cutting greenhouse gas emissions.
              </p>
            </motion.div>

            {/* Stat 2 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="group hover-lift glass rounded-3xl p-8 shadow-soft hover:shadow-elevated hover:bg-white/80 transition-all duration-300 flex flex-col justify-between items-start text-left"
            >
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white border border-border/80 mb-6 shadow-soft transition-transform group-hover:scale-105">
                  <Recycle className="h-5 w-5 text-graphite" />
                </div>
                <div className="font-display text-5xl font-bold tracking-tight text-metal sm:text-6xl">
                  Closed-Loop
                </div>
                <div className="h-0.5 w-12 bg-silver/40 mt-4 mb-4 transition-all group-hover:w-20 duration-500" />
                <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Circular Economy
                </div>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                High ratios of recycled scrap metal are used for our brass products to minimize
                mining dependency and preserve terrestrial habitats.
              </p>
            </motion.div>

            {/* Stat 3 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="group hover-lift glass rounded-3xl p-8 shadow-soft hover:shadow-elevated hover:bg-white/80 transition-all duration-300 flex flex-col justify-between items-start text-left"
            >
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white border border-border/80 mb-6 shadow-soft transition-transform group-hover:scale-105">
                  <ShieldCheck className="h-5 w-5 text-graphite" />
                </div>
                <div className="font-display text-5xl font-bold tracking-tight text-metal sm:text-6xl">
                  100% Audited
                </div>
                <div className="h-0.5 w-12 bg-silver/40 mt-4 mb-4 transition-all group-hover:w-20 duration-500" />
                <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Ethical Sourcing
                </div>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Manganese and silicon products are sourced exclusively from rigorously audited mines
                with safe conditions, fair labor, and land reclamation.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sustainable Supply Chain CTA Callout */}
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
              <Leaf className="h-6 w-6 text-graphite" />
            </div>
            <h3 className="font-display text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              Build An Ethical Supply Chain
            </h3>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              Establish a predictable, green-compliant supply pipeline for your foundry or assembly
              line. Request certified assays, conflict-free document checklists, or green cargo
              details customized to your manufacturing audit requirements.
            </p>
            <div className="mt-8 flex justify-center gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground transition-all hover:scale-105"
              >
                Inquire About Green Alloys
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
