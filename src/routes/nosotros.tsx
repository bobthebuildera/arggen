import { createFileRoute, Link } from "@tanstack/react-router";
import { Award, Heart, Users, ArrowRight } from "lucide-react";
import techImg from "@/assets/technician.jpg";

export const Route = createFileRoute("/nosotros")({
  head: () => ({
    meta: [
      { title: "Nosotros — ARG Generators LLC" },
      { name: "description", content: "Conoce a ARG Generators LLC: técnicos certificados con más de 15 años de experiencia en generadores en Puerto Rico." },
      { property: "og:title", content: "Nosotros — ARG Generators LLC" },
      { property: "og:description", content: "Más de 15 años de experiencia certificada." },
    ],
  }),
  component: Nosotros,
});

const values = [
  { icon: Award, title: "Certificación", text: "Técnico certificado con formación continua en las marcas líderes de la industria." },
  { icon: Heart, title: "Compromiso", text: "Atendemos cada cliente como si fuera nuestra propia familia. Sin atajos, sin excusas." },
  { icon: Users, title: "Cercanía", text: "Atención directa con quien va a hacer el trabajo. Sin call centers ni intermediarios." },
];

function Nosotros() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-border/60">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-primary mb-3">Nosotros</div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl text-balance">15 años. Una misión: <span className="text-primary">no dejarte a oscuras</span>.</h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl">
              ARG Generators LLC nace en San Juan, Puerto Rico, con un objetivo simple: ofrecer a la isla un servicio de generadores honesto, técnico y disponible cuando hace falta.
            </p>
          </div>
          <div className="relative aspect-[4/5] overflow-hidden">
            <img src={techImg} alt="Técnico certificado" loading="lazy" width={1200} height={1400} className="h-full w-full object-cover" />
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-xs uppercase tracking-[0.3em] text-primary mb-3">Valores</div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl mb-14 max-w-3xl text-balance">Lo que nos define.</h2>
          <div className="grid md:grid-cols-3 gap-px bg-border">
            {values.map((v) => (
              <div key={v.title} className="bg-background p-10">
                <div className="flex h-14 w-14 items-center justify-center bg-primary text-primary-foreground mb-6">
                  <v.icon className="h-7 w-7" strokeWidth={2.5} />
                </div>
                <h3 className="text-2xl mb-3">{v.title}</h3>
                <p className="text-muted-foreground">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-surface border-y border-border/60">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl text-balance">¿Listo para asegurar tu energía?</h2>
          <p className="mt-4 text-muted-foreground text-lg">Conversemos sobre tu generador hoy.</p>
          <Link to="/contacto" className="mt-8 inline-flex items-center gap-2 bg-primary px-8 py-4 text-sm font-bold uppercase tracking-wider text-primary-foreground hover:brightness-110 transition" style={{ boxShadow: "var(--shadow-volt)" }}>
            Contactar <ArrowRight className="h-4 w-4" strokeWidth={3} />
          </Link>
        </div>
      </section>
    </>
  );
}
