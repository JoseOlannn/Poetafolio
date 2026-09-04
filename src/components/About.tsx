"use client";
import { useSafeReducedMotion } from "@/hooks/useSafeReducedMotion";

import SectionHeading from "./SectionHeading";
import { Reveal } from "./SignatureLine";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export default function About() {
  const reduce = useSafeReducedMotion();
  const { language } = useLanguage();
  return (
    <section id="sobre-mi" className="scroll-mt-24 px-6 py-16 md:py-28 md:px-10">
      <div className="mx-auto max-w-6xl">
        <SectionHeading 
          index="01" 
          label={language === "en" ? "About me" : "Sobre mí"} 
          title={language === "en" ? "Code as a living space" : "Código como un espacio habitable"} 
          hideEyebrow 
        />

        <div className="mt-14 grid gap-12 lg:grid-cols-[1.2fr_1fr]">
          <Reveal delay={0.05}>
            <div className="space-y-5 text-lg leading-relaxed text-muted">
              {language === "en" ? (
                <>
                  <p>
                    I am a <span className="text-ink font-medium">software engineer</span> focused on building complete digital products, with a special interest in <span className="text-ink font-medium">software architecture, backend, data, AI and cloud</span>.
                  </p>
                  <p>
                    I design and develop applications, APIs and enterprise systems, working with <span className="text-ink font-medium">backend architectures, databases, Business Intelligence, Machine Learning, Generative AI, Docker, Cloud and CI/CD</span>.
                  </p>
                  <p>
                    I combine <span className="text-ink font-medium">software engineering, data and user experience</span> to transform real problems and ideas into <span className="text-ink font-medium">maintainable, scalable and results-oriented</span> technological solutions.
                  </p>
                </>
              ) : (
                <>
                  <p>
                    Soy un <span className="text-ink font-medium">ingeniero de software</span> enfocado en construir productos digitales completos, con especial interés en <span className="text-ink font-medium">arquitectura de software, backend, datos, inteligencia artificial y cloud</span>.
                  </p>
                  <p>
                    Diseño y desarrollo aplicaciones, APIs y sistemas empresariales, trabajando con <span className="text-ink font-medium">arquitecturas backend, bases de datos, Business Intelligence, Machine Learning, IA generativa, Docker, Cloud y CI/CD</span>.
                  </p>
                  <p>
                    Combino <span className="text-ink font-medium">ingeniería de software, datos y experiencia de usuario</span> para transformar ideas y problemas reales en soluciones tecnológicas <span className="text-ink font-medium">mantenibles, escalables y orientadas a resultados</span>.
                  </p>
                </>
              )}
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <motion.blockquote
              whileHover={reduce ? undefined : { y: -3 }}
              transition={{ type: "spring", stiffness: 300, damping: 22 }}
              className="relative rounded-2xl border border-line bg-paper-2 p-8 shadow-[0_12px_32px_-16px_rgba(38,33,25,0.12)]"
            >
              <motion.span
                aria-hidden
                initial={reduce ? false : { scale: 0, rotate: -12 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 260, damping: 18, delay: 0.2 }}
                className="absolute -top-4 left-8 flex h-8 w-8 items-center justify-center rounded-full bg-terra font-display text-xl font-bold text-paper"
              >
                “
              </motion.span>
              <p className="font-display text-xl font-medium leading-relaxed text-ink">
                {language === "en" 
                  ? "I don't just develop applications; I build tools that turn ideas into solutions."
                  : "No desarrollo únicamente aplicaciones; construyo herramientas que convierten ideas en soluciones."}
              </p>
              <footer className="mt-6 flex items-center gap-3">
                <motion.span
                  aria-hidden
                  initial={reduce ? false : { scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  style={{ originX: 0 }}
                  className="h-px w-8 bg-terra"
                />
                <span className="font-mono text-sm text-muted">jose_olan</span>
              </footer>
            </motion.blockquote>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
