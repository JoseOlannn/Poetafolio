import SectionHeading from "./SectionHeading";
import { Reveal } from "./SignatureLine";

export default function About() {
  return (
    <section id="sobre-mi" className="scroll-mt-24 px-6 py-28 md:px-10">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          index="01"
          label="Sobre mí"
          title="Código como un espacio habitable"
        />

        <div className="mt-14 grid gap-12 lg:grid-cols-[1.2fr_1fr]">
          <Reveal delay={0.05}>
            <div className="space-y-5 text-lg leading-relaxed text-muted">
              <p>
                Soy desarrollador de software enfocado en construir productos
                digitales que combinan{" "}
                <span className="text-ink font-medium">
                  ingeniería, datos y experiencia de usuario
                </span>
                .
              </p>
              <p>
                Trabajo principalmente con React, Next.js, Node.js, NestJS,
                Python y TypeScript, creando aplicaciones modernas, escalables y
                orientadas a resolver problemas reales.
              </p>
              <p>
                También exploro Business Intelligence, Data Science, Cloud y
                DevOps, conectando el desarrollo de software con decisiones
                basadas en datos.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <blockquote className="relative rounded-2xl border border-line bg-paper-2 p-8">
              <span
                aria-hidden
                className="absolute -top-4 left-8 flex h-8 w-8 items-center justify-center rounded-full bg-terra font-display text-xl font-bold text-paper"
              >
                “
              </span>
              <p className="font-display text-xl font-medium leading-relaxed text-ink">
                No desarrollo únicamente aplicaciones; construyo herramientas
                que convierten ideas en soluciones.
              </p>
              <footer className="mt-6 flex items-center gap-3">
                <span className="h-px w-8 bg-terra" />
                <span className="font-mono text-sm text-muted">jose_olan</span>
              </footer>
            </blockquote>
          </Reveal>
        </div>
      </div>
    </section>
  );
}