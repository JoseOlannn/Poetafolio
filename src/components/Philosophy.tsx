"use client";
import { useSafeReducedMotion } from "@/hooks/useSafeReducedMotion";

import { philosophyData } from "@/data/skills";
import { Reveal, Stagger, StaggerItem } from "./SignatureLine";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

const PHILO_COLORS = ["#d96c4a", "#e8b84b", "#7ba78d", "#2b4963"];

export default function Philosophy() {
  const reduce = useSafeReducedMotion();
  const { language } = useLanguage();
  const philosophy = philosophyData[language];

  return (
    <section className="px-6 py-28 md:px-10">
      <div className="mx-auto max-w-6xl">
        <Reveal className="max-w-2xl">
          <h2 className="font-display mt-4 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            {language === "en" ? "What guides every decision" : "Lo que guía cada decisión"}
          </h2>
          <motion.span
            aria-hidden
            initial={reduce ? false : { scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
            style={{ originX: 0 }}
            className="mt-5 block h-0.5 w-16 rounded-full bg-gradient-to-r from-terra via-mustard via-sage to-ocean"
          />
        </Reveal>

        <Stagger className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4" stagger={0.07}>
          {philosophy.map((p, i) => {
            const c = PHILO_COLORS[i % PHILO_COLORS.length];
            return (
              <StaggerItem key={p}>
                <motion.div
                  whileHover={reduce ? undefined : { y: -4, rotate: 0.2 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="flex h-full flex-col justify-between rounded-2xl border border-line bg-paper p-7 shadow-sm"
                  style={{ borderTop: `3px solid ${c}` }}
                >
                  <span className="font-mono text-xs" style={{ color: c }}>
                    0{i + 1}
                  </span>
                  <p className="font-display mt-6 text-2xl font-semibold leading-snug text-ink">{p}</p>
                </motion.div>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
