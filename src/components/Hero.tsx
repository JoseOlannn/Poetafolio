"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import SignatureLine from "./SignatureLine";

const roles = [
  "Backend Developer & System Design",
  "Data Science & Business Intelligence",
  "Cloud Computing & DevOps",
  "AI & Machine Learning Explorer",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="inicio"
      className="relative overflow-hidden px-6 pt-28 pb-16 md:px-10 md:pt-36 md:pb-20"
    >
      {/* fondo: manchas suaves + textura */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 top-10 h-[420px] w-[420px] rounded-full bg-terra/10 blur-[80px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-20 bottom-10 h-[520px] w-[520px] rounded-full bg-ocean/10 blur-[90px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-px w-[140%] -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-transparent via-line to-transparent opacity-60"
      />

      <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-8">
        {/* izquierda: editorial */}
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-2 rounded-full border border-line bg-paper px-3 py-1.5"
          >
            <span className="h-2 w-2 animate-pulse rounded-full bg-sage" />
            <span className="font-mono text-xs tracking-wide text-muted">
              Disponible para nuevos proyectos y oportunidades
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.06, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 font-mono text-sm text-muted"
          >
            <span className="text-terra">//</span> jose_olan.dev — Tabasco, MX
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="font-display mt-4 text-5xl font-bold leading-[0.95] tracking-[-0.04em] text-ink sm:text-6xl lg:text-[72px]"
          >
            Jose
            <span className="font-light tracking-[-0.05em] text-muted"> Olan</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="mt-4 h-6 overflow-hidden font-mono text-sm text-ink font-medium relative"
          >
            <AnimatePresence mode="popLayout">
              <motion.span
                key={roleIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="absolute left-0 top-0 whitespace-nowrap"
              >
                {roles[roleIndex]}
              </motion.span>
            </AnimatePresence>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 max-w-xl text-[18px] leading-relaxed text-muted"
          >
            Construyendo soluciones con{" "}
            <span className="font-medium text-ink">código</span>,{" "}
            <span className="font-medium text-ink">datos</span>,{" "}
            <span className="font-medium text-ink">diseño</span> y propósito.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.36 }}
            className="mt-8 max-w-xl"
          >
            <SignatureLine />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.46, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a
              href="#proyectos"
              className="group inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3.5 font-mono text-sm text-paper transition-colors duration-300 hover:bg-ocean"
            >
              Ver proyectos
              <span className="transition-transform duration-300 group-hover:translate-x-0.5">
                →
              </span>
            </a>
            <a
              href="#contacto"
              className="inline-flex items-center gap-2 rounded-full border border-ink/15 bg-paper px-7 py-3.5 font-mono text-sm text-ink transition-all duration-300 hover:border-terra hover:text-terra"
            >
              Conectar
            </a>
            <span className="hidden items-center gap-2 font-mono text-xs text-muted sm:flex">
              <span className="h-px w-8 bg-line" /> Scroll ↓
            </span>
          </motion.div>

          {/* métricas sutiles */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mt-10 flex flex-wrap gap-10 border-t border-line pt-8"
          >
            {[
              ["4", "productos construidos"],
              ["∞", "ideas por explorar"],
              ["01", "ingeniero detrás del código"],
            ].map(([n, l]) => (
              <div key={l}>
                <p className="font-display text-2xl font-bold tracking-tight text-ink">
                  {n}
                </p>
                <p className="font-mono text-xs uppercase tracking-wide text-muted">
                  {l}
                </p>
              </div>
            ))}
          </motion.div>

          {/* Actualmente explorando */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="mt-10 border-t border-line pt-6"
          >
            <p className="font-mono text-xs text-muted mb-3">Actualmente explorando</p>
            <div className="flex flex-wrap gap-2">
              {["AWS", "Cloud Architecture", "DevOps", "AI", "Data Engineering"].map((tech) => (
                <span key={tech} className="chip text-[11px] py-1 px-2.5">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* derecha: composición estudio Condesa */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="relative hidden lg:block"
        >
          <div className="relative mx-auto aspect-[4/3.4] w-full max-w-[440px] flex flex-col rounded-[24px] border border-line bg-paper p-5 shadow-[0_24px_64px_-24px_rgba(38,33,25,0.22)]">
            {/* ventana simulada */}
            <div className="flex items-center gap-1.5 border-b border-line pb-4">
              <span className="h-3 w-3 rounded-full bg-terra" />
              <span className="h-3 w-3 rounded-full bg-mustard" />
              <span className="h-3 w-3 rounded-full bg-sage" />
              <span className="ml-auto font-mono text-xs text-muted">
                jose_olan.dev — preview
              </span>
            </div>

            {/* foto de perfil a tamaño completo dentro de la ventana */}
            <div className="relative mt-5 flex-1 w-full rounded-xl border border-line overflow-hidden group">
              <Image
                src="/Jose_Olan.jpeg"
                alt="Jose Olan"
                fill
                sizes="(max-width: 768px) 100vw, 400px"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-ink/5 mix-blend-multiply transition-opacity duration-500 group-hover:opacity-0" />
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}