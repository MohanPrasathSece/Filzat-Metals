import { useEffect } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, ArrowRight, ChevronDown } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
});

function ContactPage() {
  useEffect(() => {
    document.title = "Contact Filizat Metals - Let's Start a Conversation";
  }, []);
  return (
    <div className="overflow-x-hidden bg-background">
      <Navbar />
      <ContactHero />
      <ContactMain />
      <QuickCards />
      <MapSection />
      <FAQ />
      <Footer />
    </div>
  );
}

function ContactHero() {
  return (
    <section className="relative overflow-hidden pb-20 pt-40 sm:pt-44">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-secondary/60 to-background" />
      <div className="pointer-events-none absolute -top-32 left-1/2 -z-10 h-96 w-[36rem] -translate-x-1/2 rounded-full bg-silver-light/60 blur-3xl" />
      <div className="mx-auto max-w-5xl px-6 text-center lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-sm font-medium uppercase tracking-widest text-muted-foreground"
        >
          Contact
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.05 }}
          className="mt-5 font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-7xl"
        >
          Let's Start A<br />
          <span className="text-metal">Conversation.</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mx-auto mt-7 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg"
        >
          We're here to answer your questions and discuss your metal requirements - from spec sheets
          to global delivery.
        </motion.p>
      </div>
    </section>
  );
}

function ContactMain() {
  return (
    <section className="py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-5 lg:px-10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="glass rounded-3xl p-8 shadow-soft lg:col-span-2"
        >
          <h3 className="font-display text-2xl font-semibold tracking-tight">Get in touch</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Our team typically responds within one business day.
          </p>

          <ul className="mt-8 space-y-6">
            {[
              { icon: Phone, label: "Phone", value: "+91 70601 81694", href: "tel:+917060181694" },
              { icon: Phone, label: "Phone 2", value: "+91 94525 30493", href: "tel:+919452530493" },
              { icon: Mail, label: "Email", value: "info@filizatmetals.com", href: "mailto:info@filizatmetals.com" },
              {
                icon: MapPin,
                label: "Address",
                value: "E 303 Central Tower, Kela Nagar Chauraha, Aligarh, Uttar Pradesh 202001, India",
                href: "https://maps.google.com/?q=E+303+Central+Tower+Kela+Nagar+Chauraha+Aligarh+Uttar+Pradesh+202001+India",
              },
              { icon: Clock, label: "Working Hours", value: "Mon - Sat  9:00 AM - 7:00 PM IST", href: null },
            ].map((c) => (
              <li key={c.label} className="flex items-start gap-4">
                <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-2xl silver-gradient shadow-soft">
                  <c.icon className="h-4 w-4 text-graphite" />
                </div>
                <div>
                  <div className="text-sm uppercase tracking-widest text-muted-foreground">
                    {c.label}
                  </div>
                  {c.href ? (
                    <a
                      href={c.href}
                      target={c.href.startsWith("http") ? "_blank" : undefined}
                      rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="mt-1 block text-sm font-medium text-foreground underline-offset-2 hover:underline hover:text-primary transition-colors"
                    >
                      {c.value}
                    </a>
                  ) : (
                    <div className="mt-1 text-sm font-medium text-foreground">{c.value}</div>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="lg:col-span-3"
        >
          <ContactForm />
        </motion.div>
      </div>
    </section>
  );
}

/** Result modal shown after the form is submitted */
function ResultModal({
  success,
  onClose,
}: {
  success: boolean;
  onClose: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ backdropFilter: "blur(8px)", backgroundColor: "rgba(0,0,0,0.55)" }}
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.92, y: 24 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.92, y: 24 }}
        transition={{ type: "spring", stiffness: 340, damping: 28 }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-sm rounded-3xl border border-border bg-card p-8 shadow-elevated text-center"
      >
        {/* Icon */}
        <div
          className={`mx-auto flex h-16 w-16 items-center justify-center rounded-full ${
            success ? "bg-emerald-500/15" : "bg-red-500/15"
          }`}
        >
          {success ? (
            <svg className="h-8 w-8 text-emerald-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          ) : (
            <svg className="h-8 w-8 text-red-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          )}
        </div>

        <h3 className="mt-5 font-display text-xl font-semibold tracking-tight">
          {success ? "Message Sent!" : "Something went wrong"}
        </h3>
        <p className="mt-2 text-sm text-muted-foreground">
          {success
            ? "Thank you — we'll be in touch within one business day."
            : "We couldn't deliver your message. Please try again or email us directly."}
        </p>

        <motion.button
          type="button"
          onClick={onClose}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          className="mt-6 w-full rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground shadow-soft"
        >
          {success ? "Done" : "Close"}
        </motion.button>
      </motion.div>
    </motion.div>
  );
}

function ContactForm() {
  const [sending, setSending] = useState(false);
  const [result, setResult] = useState<"success" | "error" | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const data = Object.fromEntries(new FormData(form).entries()) as Record<string, string>;
    setSending(true);
    fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((json) => {
        setSending(false);
        setResult(json.success ? "success" : "error");
        if (json.success) form.reset();
      })
      .catch(() => {
        setSending(false);
        setResult("error");
      });
  };

  return (
    <>
      {/* Result modal shown after submission */}
      {result !== null && (
        <ResultModal
          success={result === "success"}
          onClose={() => setResult(null)}
        />
      )}

      <form
        onSubmit={handleSubmit}
        className="rounded-3xl border border-border bg-card p-8 shadow-soft sm:p-10"
      >
        <div className="grid gap-5 sm:grid-cols-2">
          <Field label="Name" name="name" required />
          <Field label="Email" name="email" type="email" required />
          <Field label="Phone" name="phone" />
          <Field label="Company Name" name="company" />
          <div className="sm:col-span-2">
            <Field label="Subject" name="subject" required />
          </div>
          <div className="sm:col-span-2">
            <label className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
              Message
            </label>
            <textarea
              name="message"
              required
              rows={5}
              maxLength={1000}
              className="mt-2 w-full resize-none rounded-2xl border border-border bg-secondary/40 px-5 py-4 text-sm outline-none transition-all focus:border-foreground/40 focus:bg-card"
              placeholder="Tell us about your project, quantities, specifications…"
            />
          </div>
        </div>

        {/* Send Message button */}
        <motion.button
          type="submit"
          disabled={sending}
          whileHover={sending ? {} : { scale: 1.06, boxShadow: "0 8px 30px rgba(0,0,0,0.18)" }}
          whileTap={sending ? {} : { scale: 0.97 }}
          transition={{ type: "spring", stiffness: 400, damping: 22 }}
          className="group mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground disabled:opacity-70"
        >
          {sending ? (
            <>
              <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
              </svg>
              Sending…
            </>
          ) : (
            <>
              Send Message
              <motion.span
                className="inline-flex"
                animate={{ x: [0, 3, 0] }}
                transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
              >
                <Send className="h-4 w-4" />
              </motion.span>
            </>
          )}
        </motion.button>
      </form>
    </>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
        {label}
        {required && <span className="text-foreground"> *</span>}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        maxLength={255}
        className="mt-2 w-full rounded-2xl border border-border bg-secondary/40 px-5 py-3.5 text-sm outline-none transition-all focus:border-foreground/40 focus:bg-card"
      />
    </div>
  );
}

function QuickCards() {
  const cards = [
    { icon: Phone, t: "Call Us", d: "+91 70601 81694" },
    { icon: Mail, t: "Email Us", d: "info@filizatmetals.com" },
    { icon: ArrowRight, t: "Request Quote", d: "Fast turnaround in 24h" },
    { icon: MapPin, t: "Visit Us", d: "Aligarh, Uttar Pradesh" },
  ];
  return (
    <section className="bg-secondary/40 py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((c, i) => (
            <motion.div
              key={c.t}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="hover-lift rounded-3xl border border-border bg-card p-7 shadow-soft"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl silver-gradient shadow-soft">
                <c.icon className="h-5 w-5 text-graphite" />
              </div>
              <div className="mt-5 font-display text-lg font-semibold">{c.t}</div>
              <div className="mt-1 text-sm text-muted-foreground">{c.d}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function MapSection() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="overflow-hidden rounded-3xl border border-border shadow-soft"
        >
          <iframe
            title="Filizat Metals location"
            src="https://www.google.com/maps?q=E+303+Central+Tower+Kela+Nagar+Chauraha+Aligarh+Uttar+Pradesh+202001+India&output=embed"
            className="h-[460px] w-full grayscale-[40%]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>
      </div>
    </section>
  );
}

function FAQ() {
  const items = [
    {
      q: "Do you ship internationally?",
      a: "Yes - we ship to over 30 countries with full documentation, traceability and Incoterms of your choice.",
    },
    {
      q: "What's the minimum order quantity?",
      a: "MOQs vary by product category. Most refined metals start at one metric ton; please contact us for specifics.",
    },
    {
      q: "Can you supply custom specifications?",
      a: "Absolutely. Share your spec sheet or technical drawing and our engineering team will respond within 48 hours.",
    },
    {
      q: "How long does a typical quote take?",
      a: "Standard quotes return within one business day. Complex or custom-spec quotes may take up to 48 hours.",
    },
    {
      q: "Do you provide certificates of analysis?",
      a: "Every shipment includes a Mill Test Certificate and full COA where applicable.",
    },
  ];
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="bg-secondary/40 py-32">
      <div className="mx-auto max-w-3xl px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
            FAQ
          </div>
          <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            Frequently asked questions.
          </h2>
        </motion.div>
        <div className="mt-12 space-y-3">
          {items.map((it, i) => (
            <motion.div
              key={it.q}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="overflow-hidden rounded-2xl border border-border bg-card shadow-soft"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
              >
                <span className="font-display text-base font-medium text-foreground sm:text-lg">
                  {it.q}
                </span>
                <ChevronDown
                  className={`h-4 w-4 flex-shrink-0 text-muted-foreground transition-transform ${
                    open === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`grid transition-all duration-500 ${
                  open === i ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="px-6 pb-6 text-sm leading-relaxed text-muted-foreground">{it.a}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
