import { Link } from "@tanstack/react-router";
import { Zap, Phone } from "lucide-react";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-lg">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="flex h-9 w-9 items-center justify-center bg-primary text-primary-foreground transition-transform group-hover:rotate-12">
            <Zap className="h-5 w-5" strokeWidth={3} />
          </div>
          <div className="leading-none">
            <div className="font-display text-sm tracking-wide">ARG</div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Generators</div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium uppercase tracking-wider">
          <Link to="/" activeProps={{ className: "text-primary" }} activeOptions={{ exact: true }} className="hover:text-primary transition-colors">Inicio</Link>
          <Link to="/servicios" activeProps={{ className: "text-primary" }} className="hover:text-primary transition-colors">Servicios</Link>
          <Link to="/nosotros" activeProps={{ className: "text-primary" }} className="hover:text-primary transition-colors">Nosotros</Link>
          <Link to="/contacto" activeProps={{ className: "text-primary" }} className="hover:text-primary transition-colors">Contacto</Link>
        </nav>

        <a
          href="mailto:arggenerators@gmail.com"
          className="hidden sm:inline-flex items-center gap-2 bg-primary px-4 py-2 text-sm font-bold uppercase tracking-wider text-primary-foreground hover:brightness-110 transition"
        >
          <Phone className="h-4 w-4" strokeWidth={3} />
          Cotizar
        </a>
      </div>
    </header>
  );
}
