"use client";
import { useSafeReducedMotion } from "@/hooks/useSafeReducedMotion";

import { processData } from "@/data/skills";
import SectionHeading from "./SectionHeading";
import { Stagger, StaggerItem } from "./SignatureLine";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

const STEP_COLORS = ["#d96c4a", "#e8b84b", "#7ba78d", "#2b4963", "#d96c4a"];

export default function Process() {
  const reduce = useSafeReducedMotion();
  const { language } = useLanguage();
  const process = processData[language];

  return (
    <section className="bg-paper-2/60 px-6 py-16 md:py-28 md:px-10">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          index="05"
          label={language === "en" ? "How I work" : "Cómo trabajo"}
          title={language === "en" ? "A method, not an accident" : "Un método, no un accidente"}
          intro={language === "en" ? "Every project goes through the same disciplined journey, from problem to production." : "Cada proyecto atraviesa el mismo recorrido disciplinado, del problema a la producción."}
          hideEyebrow
        />

        <Stagger className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-5" stagger={0.07}>
          {process.map((step, i) => {
            const c = STEP_COLORS[i % STEP_COLORS.length];
            return (
              <StaggerItem key={step.index} className="h-full">
                <motion.div
                  whileHover={reduce ? undefined : { y: -2 }}
                  className="group flex h-full flex-col bg-paper p-7 transition-colors duration-300 hover:bg-paper-2 h-full"
                >
                  <motion.span
                    initial={reduce ? false : { opacity: 0, y: 6 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.06, duration: 0.4 }}
                    className="font-mono text-sm"
                    style={{ color: c }}
                  >
                    {step.index}
                  </motion.span>
                  <h3 className="font-display mt-3 text-xl font-semibold text-ink">{step.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{step.description}</p>
                  <motion.span
                    initial={reduce ? false : { scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.55, delay: 0.3 + i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                    style={{ originX: 0, backgroundColor: c }}
                    className="mt-6 block h-0.5 w-8 group-hover:w-full transition-all duration-300"
                  />
                </motion.div>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
