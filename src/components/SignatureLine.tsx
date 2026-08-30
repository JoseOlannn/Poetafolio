"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useId, type ReactNode } from "react";

/**
 * Línea decorativa con degradado de la paleta, dibujada como un trazo.
 * Es el elemento firma del sitio: aparece en el hero y como divisor en el footer.
 */
export default function SignatureLine({
  className = "",
  width = 720,
}: {
  className?: string;
  width?: number;
}) {
  const id = useId().replace(/:/g, "");
  const reduce = useReducedMotion();

  const path =
    "M2 12 C 90 4, 170 20, 260 12 S 430 2, 520 11 S 650 18, 718 9";

  return (
    <svg
      viewBox={`0 0 ${width} 24`}
      fill="none"
      className={className}
      aria-hidden="true"
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient
          id={`grad-${id}`}
          x1="0"
          y1="0"
          x2={width}
          y2="0"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#d96c4a" />
          <stop offset="0.35" stopColor="#e8b84b" />
          <stop offset="0.68" stopColor="#7ba78d" />
          <stop offset="1" stopColor="#2b4963" />
        </linearGradient>
      </defs>
      <motion.path
        d={path}
        stroke={`url(#grad-${id})`}
        strokeWidth="2.5"
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: reduce ? 0 : 1.5, ease: [0.22, 1, 0.36, 1] }}
      />
    </svg>
  );
}

/**
 * Wrapper para aparición suave al hacer scroll.
 */
export function Reveal({
  children,
  delay = 0,
  y = 20,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: reduce ? 0 : 0.6, delay: reduce ? 0 : delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}