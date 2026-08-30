import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import SectionHeading from "./SectionHeading";

export default function Projects() {
  return (
    <section id="proyectos" className="scroll-mt-24 bg-paper-2/60 px-6 py-28 md:px-10">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          index="03"
          label="Proyectos destacados"
          title="Productos que conectan software, datos y personas"
          intro="Una selección de productos reales que cruzan la ingeniería de software con los datos y la talla artesanal de cada interfaz."
        />

        <div className="mt-14 flex flex-col gap-8">
          {projects.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}