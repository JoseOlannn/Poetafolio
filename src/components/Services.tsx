import SectionHeading from "./SectionHeading";
import { Reveal } from "./SignatureLine";

const services = [
  {
    title: "Aplicaciones web",
    description: "Productos modernos con React, Next.js y TypeScript.",
    accent: "#d96c4a", // terra
  },
  {
    title: "APIs & Backend",
    description: "Arquitecturas backend con Node.js, NestJS y Python.",
    accent: "#e8b84b", // mustard
  },
  {
    title: "Data & BI",
    description: "Dashboards, análisis y soluciones orientadas a datos.",
    accent: "#7ba78d", // sage
  },
  {
    title: "Cloud & DevOps",
    description: "Contenedores, CI/CD, infraestructura y despliegues cloud.",
    accent: "#2b4963", // ocean
  },
];

export default function Services() {
  return (
    <section id="servicios" className="scroll-mt-24 px-6 py-28 md:px-10">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          index="02"
          label="Servicios"
          title="Lo que puedo construir"
          intro="Soluciones técnicas adaptadas a los problemas de tu negocio o producto."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.05}>
              <div className="group flex h-full flex-col justify-center rounded-2xl border border-line bg-paper p-8 md:p-10 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_48px_-28px_rgba(38,33,25,0.3)]">
                <div className="flex items-center gap-3">
                  <span
                    className="inline-block h-3 w-3 rounded-full"
                    style={{ backgroundColor: s.accent }}
                  />
                  <h3 className="font-display text-xl font-semibold text-ink">
                    {s.title}
                  </h3>
                </div>
                <p className="mt-4 text-[15px] leading-relaxed text-muted">
                  {s.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
