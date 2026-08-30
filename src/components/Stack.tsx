import { skillGroups } from "@/data/skills";
import SectionHeading from "./SectionHeading";
import { Reveal } from "./SignatureLine";

const ACCENTS = {
  terra: { dot: "#d96c4a", bar: "#d96c4a" },
  mustard: { dot: "#e8b84b", bar: "#e8b84b" },
  sage: { dot: "#7ba78d", bar: "#7ba78d" },
  ocean: { dot: "#2b4963", bar: "#2b4963" },
};

export default function Stack() {
  return (
    <section id="stack" className="scroll-mt-24 px-6 py-28 md:px-10">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          index="04"
          label="Mi stack"
          title="Herramientas que convierten ideas en soluciones"
          intro="Un stack que se mueve con fluidez entre el producto, los datos y la infraestructura."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => {
            const a = ACCENTS[group.accent];
            return (
              <Reveal key={group.title} delay={i * 0.04}>
                <div className="group flex h-full flex-col rounded-2xl border border-line bg-paper p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_48px_-28px_rgba(38,33,25,0.3)]">
                  <div className="flex items-center gap-2.5">
                    <span
                      className="inline-block h-2.5 w-2.5 rounded-full"
                      style={{ backgroundColor: a.dot }}
                    />
                    <h3 className="font-display text-lg font-semibold text-ink">
                      {group.title}
                    </h3>
                  </div>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {group.skills.map((s) => (
                      <span key={s} className="chip">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}