"use client";

import { useState, useEffect } from "react";
import { useSafeReducedMotion } from "@/hooks/useSafeReducedMotion";
import SectionHeading from "./SectionHeading";
import { Reveal, Stagger, StaggerItem } from "./SignatureLine";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

const certifications = [
  { vendor: "Oracle", title: "OCI Data Science Professional", accent: "#d96c4a", image: "/certs/oci-data-science.jpg", link: "/pdfs/DataScienteOracle.pdf" },
  { vendor: "Oracle", title: "OCI AI Foundations", accent: "#d96c4a", image: "/certs/oci-ai.jpg", link: "/pdfs/IAOracle.pdf" },
  { vendor: "Oracle", title: "OCI Foundations", accent: "#d96c4a", image: "/certs/oci-foundations.jpg", link: "/pdfs/AssociateOracle.pdf" },
  { vendor: "Microsoft", title: "Azure Data Fundamentals", accent: "#2b4963", image: "/certs/microsoft-certified-fundamentals-badge.svg", link: "/pdfs/DataFudamento.pdf" },
  { vendor: "GitHub", title: "GitHub Foundations", accent: "#262119", image: "/certs/github-foundations.svg", link: "/pdfs/Github_Fudamentos.pdf" },
];

const badges = [
  { title: "MongoDB Skill", image: "/badges/from-relational-model-sql-to-mongodbs-document-mode.1.png" },
  { title: "GCP Computing Foundations", image: "/badges/google-cloud-computing-foundations-certificate.png" },
  { title: "GCP Data Analytics", image: "/badges/google-cloud-data-analytics-certificate.png" },
  { title: "GCP Cloud Engineering", image: "/badges/google-cloud-engineering-certificate.png" },
  { title: "Google Data Analytics Pro", image: "/badges/google-data-analytics-professional-certificate-v-3-Photoroom.png" },
  { title: "Linux DevOps & SRE (LFS162)", image: "/badges/lfs162-introduction-to-devops-and-site-reliability-.png" },
  { title: "Red Hat AI Foundations", image: "/badges/red-hat-ai-foundations-executive-skills-badge.png" },
  { title: "Data Science Python", image: "/badges/data-science-essentials-with-python.png" },
  { title: "Cisco Data Science", image: "/badges/core-skills-learning-path.png" },
];

export default function Certifications() {
  const reduce = useSafeReducedMotion();
  const { language } = useLanguage();
  const [selectedPdf, setSelectedPdf] = useState<string | null>(null);

  useEffect(() => {
    if (selectedPdf) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedPdf]);

  return (
    <section id="certificaciones" className="scroll-mt-24 px-6 py-16 md:py-28 md:px-10">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          index="06"
          label={language === "en" ? "Certifications & Credentials" : "Certificaciones & Credenciales"}
          title={language === "en" ? "What I keep learning" : "Lo que sigo aprendiendo"}
          intro={language === "en" ? "A collection of certifications and badges that support my training in Software, Data, AI, Cloud and DevOps." : "Una colección de certificaciones e insignias que respaldan mi formación en Software, Data, AI, Cloud y DevOps."}
          hideEyebrow
        />

        <div className="mt-16">
          <Reveal>
            <h3 className="mb-6 font-display text-2xl font-semibold text-ink">
              {language === "en" ? "Core Certifications" : "Certificaciones principales"}
            </h3>
          </Reveal>
          <Stagger className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5" stagger={0.08}>
            {certifications.map((cert) => (
              <StaggerItem key={cert.title} className="h-full">
                <motion.div
                  onClick={() => setSelectedPdf(cert.link)}
                  role="button"
                  tabIndex={0}
                  whileHover={reduce ? undefined : { y: -4 }}
                  transition={{ type: "spring", stiffness: 300, damping: 22 }}
                  className="group flex h-full flex-col items-center justify-between gap-4 rounded-2xl border border-line bg-paper p-6 text-center transition-all duration-300 hover:border-ink/15 hover:shadow-lg cursor-pointer"
                >
                  <div
                    className={`relative mb-3 flex h-20 w-20 items-center justify-center overflow-hidden rounded-full border shadow-sm transition-transform duration-300 group-hover:scale-110 ${
                      cert.vendor === "Oracle" ? "border-black/10 bg-black" : "border-line bg-white"
                    }`}
                  >
                    <Image
                      src={cert.image}
                      alt={cert.title}
                      fill
                      className={cert.vendor === "Oracle" ? "object-cover scale-[1.15]" : "object-contain p-3"}
                      sizes="(max-width: 768px) 100px, 100px"
                    />
                  </div>
                  <div>
                    <p className="font-mono text-[11px] font-semibold uppercase tracking-wider text-muted">
                      {cert.vendor}
                    </p>
                    <h4 className="mt-1 font-display text-[15px] font-semibold leading-tight text-ink">
                      {cert.title}
                    </h4>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>

        <div className="mt-20">
          <Reveal>
            <h3 className="mb-6 font-display text-2xl font-semibold text-ink">
              {language === "en" ? "Technical Badges" : "Insignias técnicas"}
            </h3>
          </Reveal>
            
          <div className="relative flex w-full overflow-hidden mt-6 [mask-image:linear-gradient(to_right,transparent_0,black_5%,black_95%,transparent_100%)]">
            <motion.div
              className="flex w-max items-center gap-8 py-4"
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                duration: 40,
                ease: "linear",
                repeat: Infinity,
              }}
            >
              {[...badges, ...badges].map((badge, i) => (
                <div
                  key={`${badge.title}-${i}`}
                  className="relative h-28 w-28 sm:h-32 sm:w-32 shrink-0 transition-transform duration-300 hover:scale-110"
                  title={badge.title}
                >
                  <Image
                    src={badge.image}
                    alt={badge.title}
                    fill
                    className="object-contain"
                    sizes="(max-width: 640px) 112px, 128px"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        <Reveal delay={0.15}>
          <div className="mt-16 flex flex-col sm:flex-row items-center justify-between gap-6 rounded-2xl border border-line bg-paper-2 p-6 md:px-8">
            <div className="flex items-center gap-4">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-terra/10 text-terra font-mono font-bold text-[17px]">
                49+
              </span>
              <p className="font-display text-[17px] font-medium text-ink">
                {language === "en" ? "Additional technical badges" : "Insignias técnicas adicionales"}
              </p>
            </div>
            <a
              href="https://www.credly.com/users/jose-olannnn"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 font-mono text-[13px] text-paper transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              {language === "en" ? "View all on Credly" : "Ver todas en Credly"} ↗
            </a>
          </div>
        </Reveal>
      </div>

      <AnimatePresence>
        {selectedPdf && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm sm:p-8"
            onClick={() => setSelectedPdf(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative flex h-[85vh] w-full max-w-5xl flex-col overflow-hidden rounded-2xl bg-paper shadow-2xl border border-line"
            >
              {/* Header del Modal */}
              <div className="flex items-center justify-between border-b border-line px-6 py-4">
                <h3 className="font-display font-semibold text-ink">
                  {language === "en" ? "Certificate Viewer" : "Visor de Certificado"}
                </h3>
                <button
                  onClick={() => setSelectedPdf(null)}
                  className="rounded-full bg-black/5 p-2 text-muted transition-colors hover:bg-black/10 hover:text-ink"
                  aria-label={language === "en" ? "Close modal" : "Cerrar modal"}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </button>
              </div>
              
              {/* Iframe del PDF */}
              <div className="flex-1 bg-black/5">
                <iframe
                  src={`${selectedPdf}#toolbar=0&navpanes=0&scrollbar=0`}
                  className="h-full w-full border-none"
                  title="Visor de PDF"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
