"use client";
import { useSafeReducedMotion } from "@/hooks/useSafeReducedMotion";

import SectionHeading from "./SectionHeading";
import { Reveal, Stagger, StaggerItem } from "./SignatureLine";
import Image from "next/image";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

const capabilitiesData = {
  es: [
    { n: "01", title: "Sistemas empresariales", desc: "Operación, ventas, inventario y finanzas en un solo lugar." },
    { n: "02", title: "Business Intelligence", desc: "Datos transformados en decisiones claras." },
    { n: "03", title: "Inteligencia Artificial", desc: "Automatización y modelos útiles, no demos vacíos." },
    { n: "04", title: "Cloud & DevOps", desc: "Infraestructura que escala y se despliega sola." },
    { n: "05", title: "Automatización", desc: "Procesos manuales que se vuelven invisibles." },
    { n: "06", title: "Apps web y móviles", desc: "Producto completo, del API a la interfaz." },
  ],
  en: [
    { n: "01", title: "Enterprise systems", desc: "Operations, sales, inventory, and finance in one place." },
    { n: "02", title: "Business Intelligence", desc: "Data transformed into clear decisions." },
    { n: "03", title: "Artificial Intelligence", desc: "Automation and useful models, not empty demos." },
    { n: "04", title: "Cloud & DevOps", desc: "Infrastructure that scales and deploys itself." },
    { n: "05", title: "Automation", desc: "Manual processes that become invisible." },
    { n: "06", title: "Web and mobile apps", desc: "Complete product, from API to interface." },
  ]
};

export default function Infocod() {
  const reduce = useSafeReducedMotion();
  const { language } = useLanguage();
  const capabilities = capabilitiesData[language];
  return (
    <section id="infocod" className="scroll-mt-24 px-6 py-28 md:px-10">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          index="08"
          label="Infocod"
          title={language === "en" ? "Building Infocod" : "Construyendo Infocod"}
          intro={language === "en" ? "I don't just build products. I'm also building the company behind them." : "No solo desarrollo productos. También estoy construyendo la empresa detrás de ellos."}
          hideEyebrow
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-[1.05fr_1.15fr] lg:items-stretch">
          <Reveal delay={0.05} className="flex">
            <div className="flex h-full w-full max-w-xl flex-col rounded-2xl border border-line bg-paper p-8 lg:p-9">
              <motion.div
                initial={reduce ? false : { opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="flex justify-center"
              >
                <div className="relative h-32 w-80">
                  <Image src="/images/Infocod.png" alt="Infocod" fill sizes="320px" className="object-contain object-center" />
                </div>
              </motion.div>

              <div className="mt-6 space-y-4 text-center">
                <p className="text-[17px] leading-relaxed text-muted">
                  <span className="font-medium text-ink">Infocod</span> {language === "en" ? "is the studio where I design and build digital solutions for real companies. Software, data, artificial intelligence, and automation, no fluff." : "es el estudio donde diseño y construyo soluciones digitales para empresas reales. Software, datos, inteligencia artificial y automatización, sin humo."}
                </p>
                <p className="text-[15px] leading-relaxed text-muted">
                  {language === "en" ? "Started as an engineering practice. Today it's the way to turn operational problems into maintainable products." : "Empezó como práctica de ingeniería. Hoy es la forma de convertir problemas operativos en productos mantenibles."}
                </p>
              </div>

              <motion.div
                initial={reduce ? false : { opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15, duration: 0.5 }}
                className="mt-auto flex items-center justify-center gap-4 border-t border-line pt-6"
              >
                <div className="h-10 w-10 overflow-hidden rounded-full border border-line bg-paper-2" aria-hidden>
                  <Image src="/images/Jose_Olan.jpeg" alt="" width={40} height={40} className="h-full w-full object-cover" />
                </div>
                <div className="text-left">
                  <p className="font-display text-sm font-semibold text-ink">
                    Founder / Developer <span className="font-normal text-muted">- Infocod</span>
                  </p>
                  <p className="font-mono text-xs text-muted">Tabasco, {language === "en" ? "Mexico - operating remotely" : "México - operando remoto"}</p>
                </div>
              </motion.div>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <Stagger className="overflow-hidden rounded-2xl border border-line bg-line" stagger={0.05}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-line">
                {capabilities.map((c) => (
                  <StaggerItem key={c.n}>
                    <motion.div
                      whileHover={reduce ? undefined : { y: -2 }}
                      className="group bg-paper p-7 sm:p-8 flex flex-col justify-between min-h-[148px] transition-colors hover:bg-paper-2"
                    >
                      <div>
                        <span className="font-mono text-xs tracking-widest text-muted">{c.n}</span>
                        <h4 className="font-display mt-3 text-[16px] font-semibold leading-snug text-ink">{c.title}</h4>
                        <p className="mt-2 text-sm leading-relaxed text-muted">{c.desc}</p>
                      </div>
                      <motion.span
                        aria-hidden
                        initial={reduce ? false : { scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                        style={{ originX: 0 }}
                        className="mt-6 block h-px w-8 bg-ink/10 group-hover:w-full group-hover:bg-terra/40 transition-all duration-300"
                      />
                    </motion.div>
                  </StaggerItem>
                ))}
              </div>
              <div className="flex items-center justify-between bg-paper px-6 py-4 border-t border-line">
                <span className="font-mono text-xs text-muted">6 {language === "en" ? "work streams" : "líneas de trabajo"}</span>
                <span className="font-mono text-xs text-muted">2024 - {language === "en" ? "present" : "hoy"}</span>
              </div>
            </Stagger>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
