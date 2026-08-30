import { process } from "@/data/skills";
import SectionHeading from "./SectionHeading";
import { Reveal } from "./SignatureLine";

const STEP_COLORS = ["#d96c4a", "#e8b84b", "#7ba78d", "#2b4963", "#d96c4a"];

export default function Process() {
  return (
    <section className="bg-paper-2/60 px-6 py-28 md:px-10">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          index="05"
          label="Cómo trabajo"
          title="Un método, no un accidente"
          intro="Cada proyecto atraviesa el mismo recorrido disciplinado, del problema a la producción."
        />

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-5">
          {process.map((step, i) => {
            const c = STEP_COLORS[i % STEP_COLORS.length];
            return (
              <Reveal key={step.index} delay={i * 0.05} className="h-full">
                <div className="group flex h-full flex-col bg-paper p-7 transition-colors duration-300 hover:bg-paper-2">
                  <span
                    className="font-mono text-sm"
                    style={{ color: c }}
                  >
                    {step.index}
                  </span>
                  <h3 className="font-display mt-3 text-xl font-semibold text-ink">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {step.description}
                  </p>
                  <span
                    className="mt-6 block h-0.5 w-8 transition-all duration-300 group-hover:w-full"
                    style={{ backgroundColor: c }}
                  />
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}