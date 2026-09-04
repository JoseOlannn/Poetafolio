"use client";
import SectionHeading from "./SectionHeading";
import { Reveal } from "./SignatureLine";
import { useLanguage } from "@/context/LanguageContext";

export default function Experience() {
  const { language } = useLanguage();

  return (
    <section id="trayectoria" className="scroll-mt-24 px-6 py-28 md:px-10">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          index="07"
          label={language === "en" ? "Path" : "Trayectoria"}
          title={language === "en" ? "Professional Experience" : "Experiencia profesional"}
          hideEyebrow
        />

        <div className="mt-14">
          <Reveal delay={0.05}>
            <div className="group relative border-l border-line pl-8 pb-12 last:pb-0">
              <span className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-terra ring-4 ring-paper" />
              <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                <h3 className="font-display text-xl font-semibold text-ink">
                  Software / Web Developer
                </h3>
                <span className="font-mono text-sm text-muted">
                  2026 - {language === "en" ? "Present" : "Actualidad"}
                </span>
              </div>
              <p className="mt-2 text-lg text-ink font-medium">Cluster ITMX</p>
              <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-muted">
                {language === "en"
                  ? "Development of web and software solutions, collaborating on the design and implementation of technological products."
                  : "Desarrollo de soluciones web y de software, colaborando en el diseño e implementación de productos tecnológicos."}
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
