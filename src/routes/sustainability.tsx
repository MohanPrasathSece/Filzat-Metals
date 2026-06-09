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
  Scale,
  Truck
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import sustainImg from "@/assets/sustainability.jpg";
import ctaBg from "@/assets/cta-metal-bg.png";

export const Route = createFileRoute("/sustainability")({
  component: SustainabilityPage,
});

function SustainabilityPage() {
  useEffect(() => {
    document.title = "Sustainability — Filizat Metals — Circular & Ethical Sourcing";
  }, []);

  const commitments = [
    {
      icon: ShieldCheck,
      title: "RMI-Compliant Sourcing",
      desc: "Every batch of raw unbranded copper and zinc ingots meets conflict-free guidelines. We maintain trace links back to verified processors."
    },
    {
      icon: Recycle,
      title: "Circular Supply Loops",
      desc: "By aggregating pre-consumer scrap briquettes and unalloyed copper scrap, we redirect valuable industrial residues back to foundry floors."
    },
    {
      icon: FileText,
      title: "Global Standards Alignment",
      desc: "We strictly monitor European RoHS/REACH compliance to certify that lead-free 'Eco-Brass' and wire coils meet strict regulatory safety thresholds."
    },
    {
      icon: Globe,
      title: "Logistics Optimization",
      desc: "Consolidating container shipments out of Aligarh allows us to route freight through optimized corridors, reducing transit carbon footprints."
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
            Environmental Stewardship
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.05 }}
            className="mt-5 font-display text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl text-foreground"
          >
            Ethical Sourcing.<br />
            <span className="text-metal">Circular Flow.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mx-auto mt-7 max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            Evolving Aligarh's rich metallurgical heritage into a clean, modern global supply line. For Filizat Metals, sustainability is not an afterthought — it is the blueprint of every export.
          </motion.p>
        </div>
      </section>

      {/* Sustainability Story Section */}
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
              src={sustainImg}
              alt="Filizat Metals sustainable processing and circular recycling facility"
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
              Our Philosophy · Carbon Abatement
            </span>
            <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              Decarbonizing industrial metal procurement.
            </h2>
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground sm:text-base">
              The metal industry accounts for a major share of global carbon emissions, primarily driven by primary ore mining and smelting. We focus on bridging the gap with high-grade secondary base metals. Reintroducing pre-consumer copper, zinc, and aluminum scrap into the supply chain helps bypass heavy processing stages entirely.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              By consolidating and processing recycled scrap metal and distributing lead-free architectural materials directly from certified partners, we help manufacturers globally reach their ESG goals without compromising on structural strength or chemical purity.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Sustainability Pillars Card Grid */}
      <section className="bg-secondary/40 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
              Core Commitments
            </span>
            <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              The pillars of our green initiative.
            </h2>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {commitments.map((c, i) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="hover-lift glass rounded-3xl p-8 shadow-soft"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl silver-gradient shadow-soft border border-border">
                  <c.icon className="h-5 w-5 text-graphite" />
                </div>
                <h3 className="mt-6 font-display text-xl font-semibold text-foreground">{c.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Traceability Stats Section */}
      <section className="px-6 py-12 lg:px-10">
        <div className="relative mx-auto max-w-5xl overflow-hidden rounded-[2.5rem] bg-[#0e0f11] py-24 sm:py-32 px-6 sm:px-16 border border-white/10 shadow-elevated">
          {/* Glowing background lights */}
          <div className="pointer-events-none absolute left-1/4 top-1/4 -z-10 h-96 w-96 rounded-full bg-white/[0.02] blur-3xl" />
          <div className="pointer-events-none absolute right-1/4 bottom-1/4 -z-10 h-96 w-96 rounded-full bg-white/[0.02] blur-3xl" />
          
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-medium uppercase tracking-widest text-zinc-500">
              Measurable Accountability
            </span>
            <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Traceable environmental impacts.
            </h2>
          </div>

          <div className="mt-20 grid gap-8 md:grid-cols-3">
            {/* Stat 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="group hover-lift relative overflow-hidden rounded-3xl border border-white/5 bg-white/[0.02] p-8 shadow-elevated transition-all duration-300 hover:border-white/10 hover:bg-white/[0.04]"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5 border border-white/10 mb-8 transition-transform group-hover:scale-105">
                <Recycle className="h-5 w-5 text-white" />
              </div>
              <div className="font-display text-5xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-white via-zinc-200 to-zinc-400">
                Up to 90%
              </div>
              <div className="mt-5 inline-flex items-center rounded-full bg-white/5 border border-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-zinc-300">
                Energy Abatement
              </div>
              <p className="mt-4 text-xs leading-relaxed text-zinc-400">
                Using unalloyed pre-consumer scrap metal instead of energy-intensive raw ore smelting.
              </p>
            </motion.div>

            {/* Stat 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="group hover-lift relative overflow-hidden rounded-3xl border border-white/5 bg-white/[0.02] p-8 shadow-elevated transition-all duration-300 hover:border-white/10 hover:bg-white/[0.04]"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5 border border-white/10 mb-8 transition-transform group-hover:scale-105">
                <ShieldCheck className="h-5 w-5 text-white" />
              </div>
              <div className="font-display text-5xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-white via-zinc-200 to-zinc-400">
                100%
              </div>
              <div className="mt-5 inline-flex items-center rounded-full bg-white/5 border border-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-zinc-300">
                Conflict-Free Sourcing
              </div>
              <p className="mt-4 text-xs leading-relaxed text-zinc-400">
                Completely trace-verified procurement routes in strict alignment with global RMI standards.
              </p>
            </motion.div>

            {/* Stat 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="group hover-lift relative overflow-hidden rounded-3xl border border-white/5 bg-white/[0.02] p-8 shadow-elevated transition-all duration-300 hover:border-white/10 hover:bg-white/[0.04]"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5 border border-white/10 mb-8 transition-transform group-hover:scale-105">
                <Leaf className="h-5 w-5 text-white" />
              </div>
              <div className="font-display text-5xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-white via-zinc-200 to-zinc-400">
                REACH
              </div>
              <div className="mt-5 inline-flex items-center rounded-full bg-white/5 border border-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-zinc-300">
                RoHS Compliance
              </div>
              <p className="mt-4 text-xs leading-relaxed text-zinc-400">
                Secondary brass alloys and components certified below standard global hazard thresholds.
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
              Establish a predictable, green-compliant supply pipeline for your foundry or assembly line. Request certified assays, conflict-free document checklists, or green cargo details customized to your manufacturing audit requirements.
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
