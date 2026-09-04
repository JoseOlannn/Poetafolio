"use client";
import { useSafeReducedMotion } from "@/hooks/useSafeReducedMotion";

import type { Project } from "@/data/projects";
import { Reveal } from "./SignatureLine";
import { motion } from "framer-motion";

const ACCENTS: Record<Project["accent"], { tint: string; fg: string }> = {
  terra: { tint: "rgba(217,108,74,0.13)", fg: "#b5522f" },
  mustard: { tint: "rgba(232,184,75,0.16)", fg: "#a97f15" },
  sage: { tint: "rgba(123,167,141,0.16)", fg: "#4c7a5f" },
  ocean: { tint: "rgba(43,73,99,0.11)", fg: "#2b4963" },
};

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  const a = ACCENTS[project.accent];
  const num = String(index + 1).padStart(2, "0");
  const reduce = useSafeReducedMotion();

  return (
    <Reveal>
      <motion.article
        whileHover={reduce ? undefined : { y: -4 }}
        transition={{ type: "spring", stiffness: 300, damping: 24 }}
        className={`group grid gap-0 overflow-hidden rounded-2xl bg-paper lg:grid-cols-[5fr_7fr] ${
          index === 0 ? "border-2 shadow-lg" : "border border-line"
        }`}
        style={index === 0 ? { borderColor: `${a.fg}55` } : {}}
      >
        {/* portada abstracta con parallax sutil */}
        <div
          className="relative flex min-h-[200px] items-center justify-center border-b border-line lg:border-b-0 lg:border-r overflow-hidden"
          style={{ backgroundColor: a.tint }}
        >
          <div className="project-cover-grid absolute inset-0 opacity-70" />
          <motion.div
            aria-hidden
            className="absolute right-8 top-8 h-20 w-20 rounded-full border-2"
            style={{ borderColor: `${a.fg}55` }}
            animate={reduce ? undefined : { y: [0, -6, 0], rotate: [0, 2, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: index * 0.3 }}
          />
          <motion.div
            aria-hidden
            className="absolute bottom-8 left-8 h-16 w-16 rotate-12 border-2"
            style={{ borderColor: `${a.fg}44` }}
            animate={reduce ? undefined : { y: [0, 5, 0], rotate: [12, 14, 12] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: index * 0.4 }}
          />
          <motion.span
            className="font-display relative text-7xl font-bold tracking-tighter"
            style={{ color: a.fg, opacity: 0.9 }}
            whileHover={reduce ? undefined : { scale: 1.04 }}
            transition={{ type: "spring", stiffness: 300, damping: 18 }}
          >
            {num}
          </motion.span>
          {/* brillo hover */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-tr from-white/0 via-white/10 to-white/0" />
        </div>

        <div className="flex flex-col p-8 md:p-10">
          <div className="flex items-start justify-between gap-4">
            <div>
              {index === 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="mb-3 inline-block rounded-full px-3 py-1 font-mono text-[11px] font-bold uppercase tracking-wider"
                  style={{ backgroundColor: a.tint, color: a.fg }}
                >
                  Featured Project
                </motion.div>
              )}
              <p className="font-mono text-xs uppercase tracking-[0.12em]" style={{ color: a.fg }}>
                {project.subtitle}
              </p>
              <h3 className="font-display mt-2 text-2xl font-bold tracking-tight text-ink">
                {project.name}
              </h3>
            </div>
            <span className="mt-1 h-3 w-3 shrink-0 rounded-full transition-transform duration-300 group-hover:scale-125" style={{ backgroundColor: a.fg }} aria-hidden />
          </div>

          <p className="mt-4 leading-relaxed text-muted">{project.description}</p>

          <div className="mt-6 flex flex-wrap gap-2">
            {project.stack.map((t) => (
              <span key={t} className="chip">
                {t}
              </span>
            ))}
          </div>

          <ul className="mt-6 grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-2">
            {project.features.map((f, i) => (
              <motion.li
                key={f}
                initial={reduce ? false : { opacity: 0, x: -6 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="flex items-center gap-2 text-sm text-muted"
              >
                <span className="h-1.5 w-1.5 shrink-0 rounded-full" style={{ backgroundColor: a.fg }} />
                {f}
              </motion.li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-line pt-6">
            {project.links.map((link, i) => (
              <a
                key={link.label}
                href={link.href}
                className={
                  i === 0
                    ? "group/btn inline-flex items-center gap-1.5 font-mono text-sm font-medium"
                    : "inline-flex items-center gap-1.5 font-mono text-sm text-muted transition-colors hover:text-ink"
                }
                style={i === 0 ? { color: a.fg } : undefined}
              >
                {link.label}
                <span className="transition-transform duration-300 group-hover/btn:translate-x-0.5">↗</span>
              </a>
            ))}
          </div>
        </div>
      </motion.article>
    </Reveal>
  );
}
