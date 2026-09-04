"use client";
import { useSafeReducedMotion } from "@/hooks/useSafeReducedMotion";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import SignatureLine from "./SignatureLine";
import WarpGrid from "./WarpGrid";
import { useLanguage } from "@/context/LanguageContext";

export default function Hero() {
  const { language } = useLanguage();
  const ref = useRef<HTMLElement>(null);
  const reduce = useSafeReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const yParallax = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 40]);
  const opacityFade = useTransform(scrollYProgress, [0, 0.85], [1, 0]);
  const imageY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : -24]);

  return (
    <section
      ref={ref}
      id="inicio"
      className="relative overflow-hidden px-6 pt-20 pb-16 md:px-10 md:pt-24 md:pb-20 min-h-[100dvh] flex items-center"
    >
      <WarpGrid variant="paper" gridSize={36} radius={200} strength={44} className="opacity-60" />
      {/* blobs ambientales con flotación sutil */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -left-32 top-10 h-[420px] w-[420px] rounded-full bg-terra/10 blur-[80px]"
        animate={reduce ? undefined : { y: [0, -14, 0], x: [0, 6, 0] }}
        transition={reduce ? undefined : { duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -right-20 bottom-10 h-[520px] w-[520px] rounded-full bg-ocean/10 blur-[90px]"
        animate={reduce ? undefined : { y: [0, 12, 0], x: [0, -8, 0] }}
        transition={reduce ? undefined : { duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-px w-[140%] -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-transparent via-line to-transparent opacity-60"
      />

      <motion.div
        style={{ y: yParallax, opacity: opacityFade }}
        className="mx-auto grid w-full max-w-6xl items-center gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-8"
      >
        {/* izquierda: texto con stagger orquestado */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.08, delayChildren: 0.12 } },
          }}
          className="relative"
        >
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 12 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
            }}
            className="font-mono text-sm text-muted"
          >
            <span className="text-terra">//</span> jose_olan.dev
          </motion.p>

          <motion.h1
            variants={{
              hidden: { opacity: 0, y: 18 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
            }}
            className="font-display mt-4 text-5xl font-bold leading-[0.95] tracking-[-0.04em] text-ink sm:text-6xl lg:text-[72px]"
          >
            Jose
            <span className="font-light tracking-[-0.05em] text-muted"> Olan</span>
          </motion.h1>

          <motion.p
            variants={{
              hidden: { opacity: 0, y: 14 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
            }}
            className="mt-6 max-w-xl text-[18px] leading-relaxed text-muted"
          >
            {language === "en" ? (
              <>
                Full Stack Developer. Building solutions with{" "}
                <span className="font-medium text-ink">code</span>,{" "}
                <span className="font-medium text-ink">data</span>,{" "}
                <span className="font-medium text-ink">design</span> and purpose.
              </>
            ) : (
              <>
                Full Stack Developer. Construyendo soluciones con{" "}
                <span className="font-medium text-ink">código</span>,{" "}
                <span className="font-medium text-ink">datos</span>,{" "}
                <span className="font-medium text-ink">diseño</span> y propósito.
              </>
            )}
          </motion.p>

          <motion.div
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { duration: 0.8 } },
            }}
            className="mt-8 max-w-xl"
          >
            <SignatureLine />
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
            }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <motion.a
              href="#proyectos"
              whileHover={reduce ? undefined : { y: -1 }}
              whileTap={reduce ? undefined : { scale: 0.98 }}
              className="group inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3.5 font-mono text-sm text-paper shadow-[0_10px_24px_-14px_rgba(38,33,25,0.5)] transition-colors duration-300 hover:bg-ocean"
            >
              {language === "en" ? "View projects" : "Ver proyectos"}
              <span className="transition-transform duration-300 group-hover:translate-x-0.5">→</span>
            </motion.a>
            <motion.a
              href="#contacto"
              whileHover={reduce ? undefined : { y: -1 }}
              whileTap={reduce ? undefined : { scale: 0.98 }}
              className="inline-flex items-center gap-2 rounded-full border border-ink/15 bg-paper px-7 py-3.5 font-mono text-sm text-ink transition-all duration-300 hover:border-terra hover:text-terra hover:shadow-[0_10px_24px_-16px_rgba(38,33,25,0.2)]"
            >
              {language === "en" ? "Connect" : "Conectar"}
            </motion.a>
          </motion.div>
        </motion.div>

        {/* derecha: ventana con parallax y hover 3D sutil */}
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 24, rotate: -0.6 }}
          animate={{ opacity: 1, y: 0, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
          style={{ y: imageY }}
          className="relative hidden lg:block"
        >
          <motion.div
            whileHover={reduce ? undefined : { y: -4, rotate: 0.3 }}
            transition={{ type: "spring", stiffness: 260, damping: 22 }}
            className="relative mx-auto aspect-[4/3.4] w-full max-w-[440px] flex flex-col rounded-[24px] border border-line bg-paper p-5 shadow-[0_24px_64px_-24px_rgba(38,33,25,0.22)]"
          >
            <div className="flex items-center gap-1.5 border-b border-line pb-4">
              <span className="h-3 w-3 rounded-full bg-terra" />
              <span className="h-3 w-3 rounded-full bg-mustard" />
              <span className="h-3 w-3 rounded-full bg-sage" />
              <span className="ml-auto font-mono text-xs text-muted">jose_olan.dev</span>
            </div>

            <div className="relative mt-5 flex-1 w-full rounded-xl border border-line overflow-hidden group">
              <Image
                src="/images/Jose_Olan.jpeg"
                alt="Jose Olan"
                fill
                priority
                sizes="440px"
                className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-ink/5 mix-blend-multiply transition-opacity duration-500 group-hover:opacity-0" />
              {/* brillo superior */}
              <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent opacity-60" />
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
