import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Zap, Shield, Wrench, Clock, ArrowRight, CheckCircle2, Phone } from "lucide-react";
import heroImg from "@/assets/hero-generator.jpg";
import techImg from "@/assets/technician.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ARG Generators LLC — Generadores en Puerto Rico" },
      { name: "description", content: "Venta, instalación y mantenimiento certificado de generadores residenciales y comerciales. San Juan, PR. 15+ años de experiencia." },
      { property: "og:title", content: "ARG Generators LLC — Energía sin interrupciones" },
      { property: "og:description", content: "Técnicos certificados con más de 15 años de experiencia." },
    ],
  }),
  component: Home,
});

const stats = [
  { num: "15+", label: "Años de experiencia" },
  { num: "24/7", label: "Disponibilidad" },
  { num: "100%", label: "Certificados" },
  { num: "PR", label: "Servicio en toda la isla" },
];

const services = [
  { icon: Zap, title: "Venta", text: "Generadores residenciales y comerciales de las mejores marcas, dimensionados para tu necesidad real." },
  { icon: Wrench, title: "Instalación", text: "Instalación profesional con permisos y conexión segura. Cumplimos con todos los códigos eléctricos." },
  { icon: Shield, title: "Mantenimiento", text: "Plan preventivo periódico para que tu generador arranque cuando más lo necesitas." },
];

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div
          className="absolute inset-0"
          style={{ background: "var(--gradient-hero)" }}
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-24 lg:pt-28 lg:pb-32 grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 border border-primary/40 bg-primary/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-primary mb-6"
            >
              <span className="h-1.5 w-1.5 bg-primary animate-pulse" />
              San Juan · Puerto Rico
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-balance text-5xl sm:text-6xl lg:text-7xl xl:text-8xl"
            >
              Energía que <span className="text-primary">no se apaga</span>.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="mt-6 max-w-xl text-lg text-muted-foreground"
            >
              Técnicos certificados con más de 15 años en la industria. Venta, instalación y mantenimiento de generadores para tu hogar o negocio.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <Link
                to="/contacto"
                className="group inline-flex items-center gap-2 bg-primary px-6 py-3.5 text-sm font-bold uppercase tracking-wider text-primary-foreground hover:brightness-110 transition"
                style={{ boxShadow: "var(--shadow-volt)" }}
              >
                Solicitar cotización
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition" strokeWidth={3} />
              </Link>
              <a
                href="tel:7875166454"
                aria-label="Llamar al 787-516-6454"
                className="inline-flex items-center gap-2 border border-foreground/20 px-6 py-3.5 text-sm font-bold uppercase tracking-wider hover:bg-foreground/5 transition"
              >
                <Phone className="h-4 w-4" strokeWidth={3} />
                Llamar
              </a>
            </motion.div>

            <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-2xl">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                >
                  <div className="font-display text-3xl text-primary">{s.num}</div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground mt-1">{s.label}</div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="absolute -inset-4 bg-primary/20 blur-3xl" />
            <div className="relative aspect-[4/5] overflow-hidden border border-primary/20" style={{ boxShadow: "var(--shadow-deep)" }}>
              <img src={heroImg} alt="Generador instalado" className="h-full w-full object-cover" width={1600} height={1100} />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background to-transparent p-6">
                <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-primary">
                  <span className="h-2 w-2 bg-primary animate-pulse rounded-full" />
                  Always Open
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24 border-t border-border/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-14">
            <div>
              <div className="text-xs uppercase tracking-[0.3em] text-primary mb-3">Lo que hacemos</div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl max-w-2xl text-balance">Un servicio completo de generadores</h2>
            </div>
            <Link to="/servicios" className="inline-flex items-center gap-2 text-sm uppercase tracking-wider hover:text-primary transition">
              Ver todos los servicios <ArrowRight className="h-4 w-4" strokeWidth={3} />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-px bg-border">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-background p-8 lg:p-10 group hover:bg-surface transition-colors"
              >
                <div className="flex h-14 w-14 items-center justify-center bg-primary text-primary-foreground mb-6 group-hover:rotate-6 transition-transform">
                  <s.icon className="h-7 w-7" strokeWidth={2.5} />
                </div>
                <h3 className="text-2xl mb-3">{s.title}</h3>
                <p className="text-muted-foreground">{s.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT STRIP */}
      <section className="py-24 bg-surface border-y border-border/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-square overflow-hidden">
            <img src={techImg} alt="Técnico certificado trabajando" loading="lazy" width={1200} height={1400} className="h-full w-full object-cover" />
          </div>
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-primary mb-3">Sobre ARG</div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl text-balance">Más de 15 años manteniendo PR encendido.</h2>
            <p className="mt-6 text-lg text-muted-foreground">
              ARG Generators LLC es liderado por un técnico certificado con experiencia profunda en la industria. Cada instalación, cada mantenimiento, hecho con la responsabilidad que tu inversión merece.
            </p>
            <ul className="mt-8 space-y-3">
              {[
                "Diagnóstico honesto y dimensionamiento correcto",
                "Servicio de emergencia disponible",
                "Atención directa, sin intermediarios",
                "Cobertura en toda la isla",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" strokeWidth={2.5} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Link to="/nosotros" className="mt-10 inline-flex items-center gap-2 border border-primary/50 text-primary px-6 py-3 text-sm font-bold uppercase tracking-wider hover:bg-primary hover:text-primary-foreground transition">
              Conoce más <ArrowRight className="h-4 w-4" strokeWidth={3} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden border border-primary/30 p-10 sm:p-16 text-center" style={{ background: "var(--gradient-hero)" }}>
            <div className="absolute inset-0 bg-grid opacity-30" />
            <div className="relative">
              <Clock className="h-10 w-10 text-primary mx-auto mb-6" strokeWidth={2} />
              <h2 className="text-4xl sm:text-5xl lg:text-6xl text-balance">¿Tu generador necesita servicio?</h2>
              <p className="mt-4 text-muted-foreground text-lg max-w-xl mx-auto">
                Agenda una visita o cotización con nuestro equipo. Respondemos rápido.
              </p>
              <Link
                to="/contacto"
                className="mt-8 inline-flex items-center gap-2 bg-primary px-8 py-4 text-sm font-bold uppercase tracking-wider text-primary-foreground hover:brightness-110 transition"
                style={{ boxShadow: "var(--shadow-volt)" }}
              >
                Contáctanos
                <ArrowRight className="h-4 w-4" strokeWidth={3} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
