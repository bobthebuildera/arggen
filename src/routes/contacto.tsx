import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, Instagram, Clock, Send } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/contacto")({
  head: () => ({
    meta: [
      { title: "Contacto — ARG Generators LLC" },
      { name: "description", content: "Contáctanos para venta, instalación o mantenimiento de generadores en Puerto Rico. arggenerators@gmail.com" },
      { property: "og:title", content: "Contacto — ARG Generators LLC" },
      { property: "og:description", content: "Estamos disponibles 24/7 en San Juan, Puerto Rico." },
    ],
  }),
  component: Contacto,
});

function Contacto() {
  const [form, setForm] = useState({ nombre: "", email: "", mensaje: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Cotización — ${form.nombre}`);
    const body = encodeURIComponent(`Nombre: ${form.nombre}\nEmail: ${form.email}\n\n${form.mensaje}`);
    window.location.href = `mailto:arggenerators@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <>
      <section className="relative overflow-hidden border-b border-border/60">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-xs uppercase tracking-[0.3em] text-primary mb-3">Contacto</div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl max-w-4xl text-balance">Hablemos sobre tu <span className="text-primary">generador</span>.</h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
            Cuéntanos qué necesitas. Te respondemos rápido con un diagnóstico claro y una cotización honesta.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16">
          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2 block">Nombre</label>
              <input
                required
                value={form.nombre}
                onChange={(e) => setForm({ ...form, nombre: e.target.value })}
                className="w-full bg-surface border border-border px-4 py-3 focus:border-primary focus:outline-none transition"
              />
            </div>
            <div>
              <label className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2 block">Email</label>
              <input
                required
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full bg-surface border border-border px-4 py-3 focus:border-primary focus:outline-none transition"
              />
            </div>
            <div>
              <label className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2 block">Mensaje</label>
              <textarea
                required
                rows={6}
                value={form.mensaje}
                onChange={(e) => setForm({ ...form, mensaje: e.target.value })}
                className="w-full bg-surface border border-border px-4 py-3 focus:border-primary focus:outline-none transition resize-none"
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center gap-2 bg-primary px-8 py-4 text-sm font-bold uppercase tracking-wider text-primary-foreground hover:brightness-110 transition"
              style={{ boxShadow: "var(--shadow-volt)" }}
            >
              <Send className="h-4 w-4" strokeWidth={3} />
              Enviar mensaje
            </button>
          </form>

          {/* Info */}
          <div className="space-y-8">
            <div className="text-xs uppercase tracking-[0.3em] text-primary">Información</div>
            <a href="mailto:arggenerators@gmail.com" className="flex items-start gap-4 p-6 bg-surface border border-border hover:border-primary transition group">
              <Mail className="h-6 w-6 text-primary flex-shrink-0 mt-1" strokeWidth={2.5} />
              <div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">Email</div>
                <div className="font-display mt-1 group-hover:text-primary transition">arggenerators@gmail.com</div>
              </div>
            </a>
            <div className="flex items-start gap-4 p-6 bg-surface border border-border">
              <MapPin className="h-6 w-6 text-primary flex-shrink-0 mt-1" strokeWidth={2.5} />
              <div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">Ubicación</div>
                <div className="font-display mt-1">San Juan, Puerto Rico</div>
              </div>
            </div>
            <a href="https://instagram.com/a.r.g.generators" target="_blank" rel="noreferrer" className="flex items-start gap-4 p-6 bg-surface border border-border hover:border-primary transition group">
              <Instagram className="h-6 w-6 text-primary flex-shrink-0 mt-1" strokeWidth={2.5} />
              <div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">Instagram</div>
                <div className="font-display mt-1 group-hover:text-primary transition">@a.r.g.generators</div>
              </div>
            </a>
            <div className="flex items-start gap-4 p-6 bg-surface border border-border">
              <Clock className="h-6 w-6 text-primary flex-shrink-0 mt-1" strokeWidth={2.5} />
              <div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">Horario</div>
                <div className="font-display mt-1">Always Open · 24/7</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
