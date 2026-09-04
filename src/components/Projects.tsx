"use client";

import { projectsData } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import SectionHeading from "./SectionHeading";
import { useLanguage } from "@/context/LanguageContext";

export default function Projects() {
  const { language } = useLanguage();
  const projects = projectsData[language];

  return (
    <section id="proyectos" className="scroll-mt-24 bg-paper-2/60 px-6 py-16 md:py-28 md:px-10">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          index="03"
          label={language === "en" ? "Featured projects" : "Proyectos destacados"}
          title={language === "en" ? "Products that connect software, data and people" : "Productos que conectan software, datos y personas"}
          intro={language === "en" ? "A selection of real products intersecting software engineering with data and the craftsmanship of every interface." : "Una selección de productos reales que cruzan la ingeniería de software con los datos y la talla artesanal de cada interfaz."}
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
