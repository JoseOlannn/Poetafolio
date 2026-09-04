"use client";
import { useSafeReducedMotion } from "@/hooks/useSafeReducedMotion";

import SectionHeading from "./SectionHeading";
import { Stagger, StaggerItem } from "./SignatureLine";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

const servicesData = {
  es: [
    {
      title: "Ingeniería",
      description: "Arquitectura de software, Backend & APIs, Bases de datos, Sistemas empresariales.",
      accent: "#d96c4a",
    },
    {
      title: "Datos",
      description: "Business Intelligence, Data Analysis, Machine Learning, Data Engineering.",
      accent: "#e8b84b",
    },
    {
      title: "Infraestructura",
      description: "AWS, Docker, Linux, CI/CD, IaC.",
      accent: "#7ba78d",
    },
    {
      title: "Producto",
      description: "UI/UX, Product Thinking, Automatización, Experiencia de usuario.",
      accent: "#2b4963",
    },
  ],
  en: [
    {
      title: "Engineering",
      description: "Software architecture, Backend & APIs, Databases, Enterprise systems.",
      accent: "#d96c4a",
    },
    {
      title: "Data",
      description: "Business Intelligence, Data Analysis, Machine Learning, Data Engineering.",
      accent: "#e8b84b",
    },
    {
      title: "Infrastructure",
      description: "AWS, Docker, Linux, CI/CD, IaC.",
      accent: "#7ba78d",
    },
    {
      title: "Product",
      description: "UI/UX, Product Thinking, Automation, User Experience.",
      accent: "#2b4963",
    },
  ]
};

export default function Services() {
  const reduce = useSafeReducedMotion();
  const { language } = useLanguage();
  
  const services = servicesData[language];
  return (
    <section id="servicios" className="scroll-mt-24 px-6 py-28 md:px-10">
      <div className="mx-auto max-w-6xl">
        <SectionHeading 
          index="02" 
          label={language === "en" ? "What I build" : "Lo que construyo"} 
          title={language === "en" ? "Beyond code" : "Más allá del código"} 
          intro={language === "en" ? "Technical solutions adapted to your business or product problems." : "Soluciones técnicas adaptadas a los problemas de tu negocio o producto."} 
          hideEyebrow 
        />

        <Stagger className="mt-14 grid gap-6 sm:grid-cols-2" stagger={0.08}>
          {services.map((s) => (
            <StaggerItem key={s.title}>
              <motion.div
                whileHover={reduce ? undefined : { y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
                className="group flex h-full flex-col justify-center rounded-2xl border border-line bg-paper p-8 md:p-10 transition-all duration-300 hover:border-ink/15 hover:shadow-[0_24px_48px_-28px_rgba(38,33,25,0.22)]"
              >
                <div className="flex items-center gap-3">
                  <motion.span
                    aria-hidden
                    initial={reduce ? false : { scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 400, damping: 18 }}
                    className="inline-block h-3 w-3 rounded-full"
                    style={{ backgroundColor: s.accent }}
                  />
                  <h3 className="font-display text-xl font-semibold text-ink">{s.title}</h3>
                </div>
                <p className="mt-4 text-[15px] leading-relaxed text-muted">{s.description}</p>
              </motion.div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
