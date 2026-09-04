"use client";
import { useSafeReducedMotion } from "@/hooks/useSafeReducedMotion";

import { motion } from "framer-motion";
import { Reveal } from "./SignatureLine";

export default function SectionHeading({
  index,
  label,
  title,
  intro,
  align = "left",
  hideEyebrow = false,
}: {
  index: string;
  label: string;
  title: string;
  intro?: string;
  align?: "left" | "center";
  hideEyebrow?: boolean;
}) {
  const reduce = useSafeReducedMotion();
  return (
    <Reveal
      className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}
    >
      {!hideEyebrow && (
        <p
          className={`eyebrow flex items-center gap-2 ${align === "center" ? "justify-center" : ""}`}
        >
          <span className="text-terra">//</span>
          <span>
            {index} - {label}
          </span>
        </p>
      )}
      <h2 className="font-display mt-4 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
        {title}
      </h2>
      <motion.span
        aria-hidden
        initial={reduce ? false : { scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: reduce ? 0 : 0.7, ease: [0.22, 1, 0.36, 1], delay: reduce ? 0 : 0.18 }}
        style={{ originX: align === "center" ? 0.5 : 0 }}
        className={`mt-5 block h-0.5 w-16 rounded-full bg-gradient-to-r from-terra via-mustard via-sage to-ocean ${align === "center" ? "mx-auto" : ""}`}
      />
      {intro && (
        <p className="mt-4 text-lg leading-relaxed text-muted">{intro}</p>
      )}
    </Reveal>
  );
}
