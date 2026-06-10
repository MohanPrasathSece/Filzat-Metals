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
import { SEO } from "@/components/SEO";
import { categories } from "@/lib/products-data";
import heroImg from "@/assets/home/home-hero.png";
import facilityImg from "@/assets/about/about-facility.jpg";
import sustainImg from "@/assets/sustainability/sustainability-hero.jpg";
import ctaBg from "@/assets/shared/cta-metal-bg.png";
import whyChooseUsImg from "@/assets/home/why-choose-us.png";
import videoAsset from "@/assets/home/operational-showcase.mp4";
import gstCert from "@/assets/home/gst-certificate.png";
import importExportCert from "@/assets/home/import-export-certificate.png";
export const Route = createFileRoute("/")({
  component: HomePage,
});

const homeSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://filizatmetals.com/#website",
      "url": "https://filizatmetals.com/",
      "name": "Filizat Metals",
      "description": "Global Wholesale Metal Sourcing & Supply Company",
      "publisher": {
        "@id": "https://filizatmetals.com/#organization"
      }
    },
    {
      "@type": "Organization",
      "@id": "https://filizatmetals.com/#organization",
      "name": "Filizat Metals",
      "url": "https://filizatmetals.com/",
      "logo": "https://filizatmetals.com/favicon.svg",
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "telephone": "+91-70601-81694",
          "contactType": "sales",
          "areaServed": "worldwide",
          "availableLanguage": ["en", "hi"]
        },
        {
          "@type": "ContactPoint",
          "telephone": "+91-94525-30493",
          "contactType": "customer support",
          "areaServed": "worldwide",
          "availableLanguage": ["en", "hi"]
        }
      ]
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://filizatmetals.com/#localbusiness",
      "name": "Filizat Metals",
      "image": "https://filizatmetals.com/favicon.svg",
      "telephone": "+91-70601-81694",
      "email": "info@filizatmetals.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "E 303 Central Tower, Kela Nagar Chauraha",
        "addressLocality": "Aligarh",
        "addressRegion": "Uttar Pradesh",
        "postalCode": "202001",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "27.8824",
        "longitude": "78.0833"
      },
      "url": "https://filizatmetals.com/",
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday"
        ],
        "opens": "09:00",
        "closes": "19:00"
      }
    }
  ]
};

function HomePage() {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);
  return (
    <div className="overflow-x-hidden bg-background">
      <SEO
        title="Filizat Metals — Global Wholesale Metal Sourcing & Supply"
        description="Based in Aligarh, India, Filizat Metals is a leading wholesale supplier and global sourcing aggregator of high-purity unbranded base metals, eco-brass, and sustainable industrial minerals."
        canonicalPath=""
        schema={homeSchema}
      />
      <Navbar />
      <Hero />
      <VideoSection />
      <Trust />
      <ProductShowcase />
      <WhyChooseUs />
      <Testimonials />
      <CTA />
      <section className="py-32 bg-background">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h2 className="font-display text-3xl font-semibold text-foreground mb-8">Our Certifications</h2>
          <div className="glass p-8 rounded-2xl border border-white/20 shadow-soft flex flex-col sm:flex-row items-center justify-center gap-8">
            <div className="relative w-full max-w-md bg-white/10 backdrop-blur-lg rounded-xl border border-white/20 shadow-lg flex items-center justify-center overflow-hidden cursor-pointer" onClick={() => setSelectedImg(gstCert)}>
              <img src={gstCert} alt="GST Registration Certificate" className="object-contain w-full h-full" />
            </div>
            <div className="relative w-full max-w-md bg-white/10 backdrop-blur-lg rounded-xl border border-white/20 shadow-lg flex items-center justify-center overflow-hidden cursor-pointer" onClick={() => setSelectedImg(importExportCert)}>
              <img src={importExportCert} alt="Imported Exported Code Certificate" className="object-contain w-full h-full" />
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox modal */}
      {selectedImg && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm" onClick={() => setSelectedImg(null)}>
          <button className="absolute top-4 right-4 text-white text-3xl" onClick={(e) => { e.stopPropagation(); setSelectedImg(null); }} aria-label="Close">
            ✕
          </button>
          <img src={selectedImg} alt="Certificate enlarged" className="max-w-[90vw] max-h-[90vh] object-contain" onClick={(e) => e.stopPropagation()} />
        </div>
      )}
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
    <section
      ref={ref}
      className="relative flex h-screen items-center justify-center overflow-hidden"
    >
      <motion.div style={{ y }} className="absolute inset-0">
        <img
          src={heroImg}
          alt="Filizat Metals - premium metal solutions"
          className="h-full w-full object-cover object-center"
          width={1920}
          height={1080}
        />
        {/* White overlay */}
        <div className="absolute inset-0 bg-white/25" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white" />
      </motion.div>

      <motion.div
        style={{ opacity }}
        className="relative z-10 mx-auto max-w-5xl px-6 pt-24 text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="glass mx-auto inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium text-foreground/70"
        >
          <Sparkles className="h-3.5 w-3.5" />A premium metal solutions company
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="mt-6 font-display text-4xl font-semibold leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:text-7xl"
        >
          Shaping Sustainable
          <br />
          Metal Solutions <span className="text-metal">For Tomorrow</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mx-auto mt-7 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base lg:text-lg"
        >
          Delivering high-quality metal products with precision, innovation and environmental
          responsibility, for the industries that build tomorrow.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <Link
            to="/products"
            className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground shadow-elevated transition-all hover:scale-[1.03] sm:w-auto"
          >
            Explore Products
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            to="/contact"
            className="glass inline-flex w-full items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium text-foreground transition-all hover:scale-[1.03] sm:w-auto"
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

/* ---------------- Video Section ---------------- */
function VideoSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);

  // Autoplay on mount + resume when scrolled back into view
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;

    const tryPlay = () => {
      video.play().then(() => setIsPlaying(true)).catch(() => {});
    };

    // IntersectionObserver: play when visible, pause when hidden
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            tryPlay();
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    // Also try immediately
    tryPlay();

    return () => observer.disconnect();
  }, []);

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play().then(() => setIsPlaying(true)).catch(() => {});
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  return (
    <section ref={sectionRef} className="py-16 sm:py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto max-w-3xl text-center mb-12">
          <span className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
            Operational Showcase
          </span>
          <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            Precision in Motion.
          </h2>
          <p className="mt-4 text-muted-foreground text-sm sm:text-base">
            Take a virtual walkthrough of our state-of-the-art processing facilities and quality assurance labs.
          </p>
        </div>

        <div className="relative overflow-hidden rounded-2xl sm:rounded-[2.5rem] shadow-elevated border border-border bg-black aspect-video">
          <video
            ref={videoRef}
            src={videoAsset}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="h-full w-full object-cover"
          />

          {/* Controls */}
          <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 z-20 flex gap-2 sm:gap-3">
            <button
              onClick={togglePlay}
              className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-white/95 text-graphite shadow-soft backdrop-blur hover:scale-105 active:scale-95 transition-transform cursor-pointer"
              aria-label={isPlaying ? "Pause Video" : "Play Video"}
            >
              {isPlaying ? (
                <svg className="h-4 w-4 sm:h-5 sm:w-5 fill-current" viewBox="0 0 24 24">
                  <rect x="6" y="5" width="4" height="14" rx="1" />
                  <rect x="14" y="5" width="4" height="14" rx="1" />
                </svg>
              ) : (
                <svg className="h-4 w-4 sm:h-5 sm:w-5 fill-current" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              )}
            </button>

            <button
              onClick={toggleMute}
              className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-white/95 text-graphite shadow-soft backdrop-blur hover:scale-105 active:scale-95 transition-transform cursor-pointer"
              aria-label={isMuted ? "Enable Sound" : "Mute Sound"}
            >
              {isMuted ? (
                <svg className="h-4 w-4 sm:h-5 sm:w-5 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                  <path d="M11 5L6 9H2v6h4l5 4V5zM23 9l-6 6M17 9l6 6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              ) : (
                <svg className="h-4 w-4 sm:h-5 sm:w-5 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                  <path d="M11 5L6 9H2v6h4l5 4V5zM15.54 8.46a5 5 0 010 7.07M19.07 4.93a10 10 0 010 14.14" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
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
            <div className="mt-2 text-sm uppercase tracking-widest text-muted-foreground">
              {s.l}
            </div>
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
            For over fifteen years, Filizat Metals has been a trusted source of high-purity metals,
            refined alloys and unbranded raw materials for manufacturers across the globe. We
            combine precision, ancestral integrity and logistical fluidness in every shipment.
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
            Seven categories. Twenty-plus refined materials and components, all held to a single
            uncompromising standard.
          </p>
        </div>

          {/* Simplified Product Showcase */}
          <div className="mt-16 flex flex-col items-center gap-6">
            <p className="text-muted-foreground text-center max-w-md">
              Explore our full range of premium metal products and solutions.
            </p>
            <Link
              to="/products"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground shadow-elevated transition-all hover:scale-[1.03]"
            >
              View All Products
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

        </div>

    </section>
  );
}

/* ---------------- Why choose us ---------------- */
function WhyChooseUs() {
  const items = [
    {
      icon: Shield,
      title: "Quality Assurance",
      desc: "Every batch verified against international standards before it ships.",
    },
    {
      icon: Recycle,
      title: "Sustainable Sourcing",
      desc: "Recycled inputs and low-impact processes across our facilities.",
    },
    {
      icon: Globe,
      title: "Global Supply Network",
      desc: "Reliable logistics across 30+ countries with full traceability.",
    },
    {
      icon: Truck,
      title: "Reliable Delivery",
      desc: "On-time shipments backed by transparent communication.",
    },
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
              We operate with complete transparency, unyielding quality control, and an optimized
              global logistics network to support your supply chain without interruption.
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
                  <h3 className="mt-4 font-display text-xl font-semibold text-foreground">
                    {it.title}
                  </h3>
                  <p className="mt-2 text-base text-muted-foreground leading-relaxed">{it.desc}</p>
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
                  <div className="text-[11px] text-muted-foreground">
                    ISO 9001 & SGS inspection ready
                  </div>
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
                Recycling, responsible sourcing and sustainable manufacturing aren't side
                initiatives - they're how we build every product.
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
    {
      q: "Filizat Metals' consistency in purity and delivery has transformed our supply chain.",
      a: "Procurement Director, Tier-1 Automotive",
    },
    {
      q: "Their team treats sustainability with the same seriousness as quality. Rare and impressive.",
      a: "Head of Operations, Global Hardware Co.",
    },
    {
      q: "Premium-grade product, transparent pricing, and on-time every single shipment.",
      a: "Plant Manager, Specialty Alloys",
    },
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
        <div className="relative mt-10 min-h-[320px] sm:min-h-[280px]">
          {reviews.map((r, i) => (
            <motion.div
              key={i}
              animate={{ opacity: i === idx ? 1 : 0, y: i === idx ? 0 : 20 }}
              transition={{ duration: 0.6 }}
              className={`glass absolute inset-0 rounded-2xl p-6 shadow-soft sm:rounded-3xl sm:p-10 md:p-14 ${
                i === idx ? "pointer-events-auto" : "pointer-events-none"
              }`}
            >
              <div className="mb-6 flex justify-center gap-1">
                {Array.from({ length: 5 }).map((_, k) => (
                  <Star key={k} className="h-4 w-4 fill-foreground text-foreground" />
                ))}
              </div>
              <blockquote className="font-display text-xl font-medium leading-snug tracking-tight text-foreground sm:text-2xl md:text-3xl">
                "{r.q}"
              </blockquote>
              <div className="mt-6 text-sm text-muted-foreground">- {r.a}</div>
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
            Looking for reliable
            <br />
            metal solutions?
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-base text-graphite/80">
            Our team will help you specify, source and deliver the right material for your project.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              to="/contact"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground transition-all hover:scale-105 sm:w-auto"
            >
              Get a Quote
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-graphite/20 bg-white/60 px-7 py-3.5 text-sm font-medium text-graphite backdrop-blur transition-all hover:scale-105 sm:w-auto"
            >
              Contact Us
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
