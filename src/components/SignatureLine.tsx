"use client";
import { useSafeReducedMotion } from "@/hooks/useSafeReducedMotion";

import { motion } from "framer-motion";
import { useId, type ReactNode } from "react";

export default function SignatureLine({
  className = "",
  width = 720,
}: {
  className?: string;
  width?: number;
}) {
  const id = useId().replace(/:/g, "");
  const reduce = useSafeReducedMotion();

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
        transition={{ duration: reduce ? 0 : 1.6, delay: reduce ? 0 : 0.65, ease: [0.22, 1, 0.36, 1] }}
      />
    </svg>
  );
}

export function Reveal({
  children,
  delay = 0,
  y = 18,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  const reduce = useSafeReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y, filter: "blur(4px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-56px", amount: 0.18 }}
      transition={{
        duration: reduce ? 0 : 0.62,
        delay: reduce ? 0 : delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}

export function Stagger({
  children,
  className = "",
  stagger = 0.07,
}: {
  children: ReactNode;
  className?: string;
  stagger?: number;
}) {
  const reduce = useSafeReducedMotion();
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-56px", amount: 0.15 }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: reduce ? 0 : stagger, delayChildren: 0.06 } },
      }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className = "",
  y = 16,
}: {
  children: ReactNode;
  className?: string;
  y?: number;
}) {
  const reduce = useSafeReducedMotion();
  return (
    <motion.div
      className={className}
      variants={{
        hidden: reduce ? { opacity: 1, y: 0 } : { opacity: 0, y, filter: "blur(4px)" as unknown as string },
        visible: {
          opacity: 1,
          y: 0,
          filter: "blur(0px)" as unknown as string,
          transition: { duration: 0.58, ease: [0.22, 1, 0.36, 1] },
        },
      }}
    >
      {children}
    </motion.div>
  );
}
