import { Link } from "@tanstack/react-router";
import { Zap, Mail, MapPin, Instagram } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-surface mt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 mb-4">
            <div className="flex h-9 w-9 items-center justify-center bg-primary text-primary-foreground">
              <Zap className="h-5 w-5" strokeWidth={3} />
            </div>
            <span className="font-display text-lg">ARG GENERATORS LLC</span>
          </div>
          <p className="text-sm text-muted-foreground max-w-md">
            Más de 15 años manteniendo Puerto Rico encendido. Venta, instalación y mantenimiento certificado de generadores residenciales y comerciales.
          </p>
        </div>

        <div>
          <h4 className="text-xs mb-4 text-primary">Navegación</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-primary transition">Inicio</Link></li>
            <li><Link to="/servicios" className="hover:text-primary transition">Servicios</Link></li>
            <li><Link to="/nosotros" className="hover:text-primary transition">Nosotros</Link></li>
            <li><Link to="/contacto" className="hover:text-primary transition">Contacto</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs mb-4 text-primary">Contacto</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-primary" /> arggenerators@gmail.com</li>
            <li className="flex items-center gap-2"><MapPin className="h-4 w-4 text-primary" /> San Juan, Puerto Rico</li>
            <li className="flex items-center gap-2"><Instagram className="h-4 w-4 text-primary" /> @a.r.g.generators</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/60 py-6 text-center text-xs text-muted-foreground uppercase tracking-widest">
        © {new Date().getFullYear()} ARG Generators LLC — Always Open
      </div>
    </footer>
  );
}
