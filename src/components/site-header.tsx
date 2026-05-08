import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Phone, Menu, X } from "lucide-react";
import logo from "@/assets/logo.jpg";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  const navLinks: { to: "/" | "/servicios" | "/nosotros" | "/contacto"; label: string; exact?: boolean }[] = [
    { to: "/", label: "Inicio", exact: true },
    { to: "/servicios", label: "Servicios" },
    { to: "/nosotros", label: "Nosotros" },
    { to: "/contacto", label: "Contacto" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-lg">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2 group" onClick={() => setOpen(false)}>
          <img src={logo} alt="ARG Generators logo" className="h-9 w-9 object-contain" />
          <div className="leading-none">
            <div className="font-display text-sm tracking-wide">ARG</div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Generators</div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium uppercase tracking-wider">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeProps={{ className: "text-primary" }}
              activeOptions={l.exact ? { exact: true } : undefined}
              className="hover:text-primary transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="mailto:arggenerators@gmail.com"
            className="hidden sm:inline-flex items-center gap-2 bg-primary px-4 py-2 text-sm font-bold uppercase tracking-wider text-primary-foreground hover:brightness-110 transition"
          >
            <Phone className="h-4 w-4" strokeWidth={3} />
            Cotizar
          </a>
          <button
            type="button"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="md:hidden inline-flex items-center justify-center h-10 w-10 border border-border hover:bg-foreground/5 transition"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="md:hidden border-t border-border/60 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 py-4 flex flex-col">
            {navLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                activeProps={{ className: "text-primary" }}
                activeOptions={l.exact ? { exact: true } : undefined}
                onClick={() => setOpen(false)}
                className="py-3 text-sm font-medium uppercase tracking-wider border-b border-border/40 last:border-b-0 hover:text-primary transition-colors"
              >
                {l.label}
              </Link>
            ))}
            <a
              href="mailto:arggenerators@gmail.com"
              onClick={() => setOpen(false)}
              className="mt-4 sm:hidden inline-flex items-center justify-center gap-2 bg-primary px-4 py-3 text-sm font-bold uppercase tracking-wider text-primary-foreground"
            >
              <Phone className="h-4 w-4" strokeWidth={3} />
              Cotizar
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
