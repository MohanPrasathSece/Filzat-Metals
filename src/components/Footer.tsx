import { Link } from "@tanstack/react-router";
import { Globe, Mail } from "lucide-react";
import logoImg from "@/assets/image copy.png";

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-secondary/40">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2">
              <img src={logoImg} alt="Filizat Metals" className="h-10 w-auto" />
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Generations of uncompromised sourcing excellence. Bridging the gap between heavy
              industrial production and global market demands.
            </p>
            <div className="mt-6 flex gap-3">
              {[Globe, Mail].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card transition-all hover:scale-110 hover:shadow-soft"
                >
                  <Icon className="h-4 w-4 text-foreground/70" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-foreground/80">
              Quick Links
            </h4>
            <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
              {[
                { to: "/", label: "Home" },
                { to: "/about", label: "About Us" },
                { to: "/products", label: "Products" },
                { to: "/sustainability", label: "Sustainability" },
                { to: "/contact", label: "Contact" },
              ].map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="hover:text-foreground">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-foreground/80">
              Products
            </h4>
            <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
              {["Silicon", "Zinc", "Lead", "Manganese", "Mica", "Aluminium", "Brass"].map((p) => (
                <li key={p}>
                  <Link to="/products" className="hover:text-foreground">
                    {p}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-foreground/80">
              Contact
            </h4>
            <div className="mt-5 space-y-2 text-sm text-muted-foreground">
              <p>+91 70601 81694</p>
              <p>+91 94525 30493</p>
              <p>hello@filizatmetals.com</p>
              <p>E 303 Central Tower, Kela Nagar Chauraha,</p>
              <p>Aligarh, Uttar Pradesh 202001, India</p>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-border/60 pt-8 text-xs text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} Filizat Metals. All rights reserved.</p>
          <p>Crafted with precision.</p>
        </div>
      </div>
    </footer>
  );
}
