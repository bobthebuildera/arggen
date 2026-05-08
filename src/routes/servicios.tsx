import { createFileRoute, Link } from "@tanstack/react-router";
import { Zap, Wrench, Shield, Settings, Truck, Battery, ArrowRight } from "lucide-react";
import commercialImg from "@/assets/commercial.jpg";

export const Route = createFileRoute("/servicios")({
  head: () => ({
    meta: [
      { title: "Servicios — ARG Generators LLC" },
      { name: "description", content: "Venta, instalación, mantenimiento y reparación de generadores residenciales y comerciales en Puerto Rico." },
      { property: "og:title", content: "Servicios — ARG Generators LLC" },
      { property: "og:description", content: "Servicio integral de generadores en Puerto Rico." },
    ],
  }),
  component: Servicios,
});

const services = [
  { icon: Zap, title: "Venta de generadores", text: "Asesoría experta para escoger el generador correcto. Marcas reconocidas, garantía de fábrica.", tag: "01" },
  { icon: Wrench, title: "Instalación profesional", text: "Instalación segura con cumplimiento de códigos eléctricos y permisos requeridos.", tag: "02" },
  { icon: Shield, title: "Mantenimiento preventivo", text: "Planes periódicos: cambio de aceite, filtros, inspección eléctrica y prueba de carga.", tag: "03" },
  { icon: Settings, title: "Reparación y diagnóstico", text: "Diagnóstico computarizado y reparación de fallas mecánicas y eléctricas.", tag: "04" },
  { icon: Battery, title: "Baterías y transferencia", text: "Reemplazo de baterías y servicio de transfer switch automático y manual.", tag: "05" },
  { icon: Truck, title: "Servicio a domicilio", text: "Visitamos tu hogar o negocio en toda la isla de Puerto Rico.", tag: "06" },
];

function Servicios() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-border/60">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-xs uppercase tracking-[0.3em] text-primary mb-3">Servicios</div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl max-w-4xl text-balance">Cobertura completa para tu generador.</h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            Desde la asesoría inicial hasta el mantenimiento de largo plazo, ARG Generators acompaña a residentes y negocios de Puerto Rico.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {services.map((s) => (
            <div key={s.title} className="bg-background p-10 group hover:bg-surface transition">
              <div className="flex items-start justify-between mb-8">
                <div className="flex h-14 w-14 items-center justify-center bg-primary text-primary-foreground group-hover:rotate-6 transition-transform">
                  <s.icon className="h-7 w-7" strokeWidth={2.5} />
                </div>
                <span className="font-display text-sm text-muted-foreground">{s.tag}</span>
              </div>
              <h2 className="text-2xl mb-3">{s.title}</h2>
              <p className="text-muted-foreground">{s.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 bg-surface border-y border-border/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-primary mb-3">Comercial</div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl text-balance">Soluciones para tu negocio.</h2>
            <p className="mt-6 text-muted-foreground text-lg">
              Restaurantes, oficinas, almacenes, comercios. Diseñamos soluciones de respaldo eléctrico que se adaptan a la carga real de tu operación.
            </p>
            <Link to="/contacto" className="mt-8 inline-flex items-center gap-2 bg-primary px-6 py-3 text-sm font-bold uppercase tracking-wider text-primary-foreground hover:brightness-110 transition" style={{ boxShadow: "var(--shadow-volt)" }}>
              Cotizar proyecto <ArrowRight className="h-4 w-4" strokeWidth={3} />
            </Link>
          </div>
          <div className="aspect-video overflow-hidden">
            <img src={commercialImg} alt="Generador comercial" loading="lazy" width={1200} height={900} className="h-full w-full object-cover" />
          </div>
        </div>
      </section>
    </>
  );
}
