"use client";
import { useSafeReducedMotion } from "@/hooks/useSafeReducedMotion";

import { skillGroupsData } from "@/data/skills";
import SectionHeading from "./SectionHeading";
import { Stagger, StaggerItem } from "./SignatureLine";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export default function Stack() {
  const reduce = useSafeReducedMotion();
  const { language } = useLanguage();
  const skillGroups = skillGroupsData[language];

  return (
    <section id="stack" className="scroll-mt-24 px-6 py-28 md:px-10">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          index="04"
          label={language === "en" ? "My stack" : "Mi stack"}
          title={language === "en" ? "Tools that turn ideas into solutions" : "Herramientas que convierten ideas en soluciones"}
          intro={language === "en" ? "A stack that connects software, data, AI and infrastructure. No noise, just what I use to ship." : "Un stack que conecta software, datos, inteligencia artificial e infraestructura. Sin ruido, solo lo que uso para shippear."}
          hideEyebrow
        />

        <Stagger className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3" stagger={0.06}>
          {skillGroups.map((group, i) => (
            <StaggerItem key={group.title}>
              <motion.div
                whileHover={reduce ? undefined : { y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
                className="group flex h-full flex-col rounded-2xl border border-line bg-paper p-7 transition-colors duration-300 hover:border-ink/15 hover:shadow-[0_16px_40px_-28px_rgba(38,33,25,0.22)]"
              >
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-display text-[15px] font-semibold leading-tight tracking-tight text-ink">
                    {group.title}
                  </h3>
                  <span className="shrink-0 font-mono text-xs tracking-widest text-muted">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                <motion.span
                  aria-hidden
                  initial={reduce ? false : { scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.15 + i * 0.05, ease: [0.22, 1, 0.36, 1] }}
                  style={{ originX: 0 }}
                  className="mt-4 block h-px w-full bg-line group-hover:bg-terra/30 transition-colors"
                />

                <div className="mt-5 flex flex-wrap gap-1.5">
                  {group.skills.map((s) => (
                    <span
                      key={s}
                      className="inline-flex items-center rounded-full border border-line bg-paper-2/70 px-2.5 py-1 font-mono text-[11px] font-medium leading-none tracking-wide text-ink/75 transition-colors hover:border-ink/15 hover:bg-paper hover:text-ink"
                    >
                      {s}
                    </span>
                  ))}
                </div>

                <span className="mt-auto pt-5 font-mono text-xs text-muted/50">
                  {group.skills.length} {language === "en" ? "technologies" : "tecnologías"}
                </span>
              </motion.div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
