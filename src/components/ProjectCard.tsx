import type { Project } from "@/data/projects";
import { Reveal } from "./SignatureLine";

const ACCENTS: Record<
  Project["accent"],
  { tint: string; fg: string }
> = {
  terra: { tint: "rgba(217,108,74,0.13)", fg: "#b5522f" },
  mustard: { tint: "rgba(232,184,75,0.16)", fg: "#a97f15" },
  sage: { tint: "rgba(123,167,141,0.16)", fg: "#4c7a5f" },
  ocean: { tint: "rgba(43,73,99,0.11)", fg: "#2b4963" },
};

export default function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const a = ACCENTS[project.accent];
  const num = String(index + 1).padStart(2, "0");

  return (
    <Reveal>
      <article
        className={`group grid gap-0 overflow-hidden rounded-2xl bg-paper transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_48px_-24px_rgba(38,33,25,0.25)] lg:grid-cols-[5fr_7fr] ${
          index === 0 ? "border-2 shadow-lg" : "border border-line"
        }`}
        style={index === 0 ? { borderColor: `${a.fg}55` } : {}}
      >
        {/* portada abstracta */}
        <div
          className="relative flex min-h-[200px] items-center justify-center border-b border-line lg:border-b-0 lg:border-r"
          style={{ backgroundColor: a.tint }}
        >
          <div className="project-cover-grid absolute inset-0 opacity-70" />
          <div
            aria-hidden
            className="absolute right-8 top-8 h-20 w-20 rounded-full border-2"
            style={{ borderColor: `${a.fg}55` }}
          />
          <div
            aria-hidden
            className="absolute bottom-8 left-8 h-16 w-16 rotate-12 border-2"
            style={{ borderColor: `${a.fg}44` }}
          />
          <span
            className="font-display relative text-7xl font-bold tracking-tighter"
            style={{ color: a.fg, opacity: 0.9 }}
          >
            {num}
          </span>
        </div>

        {/* contenido */}
        <div className="flex flex-col p-8 md:p-10">
          <div className="flex items-start justify-between gap-4">
            <div>
              {index === 0 && (
                <div
                  className="mb-3 inline-block rounded-full px-3 py-1 font-mono text-[11px] font-bold uppercase tracking-wider"
                  style={{ backgroundColor: a.tint, color: a.fg }}
                >
                  ★ Featured Project
                </div>
              )}
              <p
                className="font-mono text-xs uppercase tracking-[0.12em]"
                style={{ color: a.fg }}
              >
                {project.subtitle}
              </p>
              <h3 className="font-display mt-2 text-2xl font-bold tracking-tight text-ink">
                {project.name}
              </h3>
            </div>
            <span
              className="mt-1 h-3 w-3 shrink-0 rounded-full"
              style={{ backgroundColor: a.fg }}
              aria-hidden
            />
          </div>

          <p className="mt-4 leading-relaxed text-muted">
            {project.description}
          </p>

          {/* stack */}
          <div className="mt-6 flex flex-wrap gap-2">
            {project.stack.map((t) => (
              <span key={t} className="chip">
                {t}
              </span>
            ))}
          </div>

          {/* características */}
          <ul className="mt-6 grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-2">
            {project.features.map((f) => (
              <li
                key={f}
                className="flex items-center gap-2 text-sm text-muted"
              >
                <span
                  className="h-1.5 w-1.5 shrink-0 rounded-full"
                  style={{ backgroundColor: a.fg }}
                />
                {f}
              </li>
            ))}
          </ul>

          {/* enlaces */}
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
                <span className="transition-transform duration-300 group-hover/btn:translate-x-0.5">
                  ↗
                </span>
              </a>
            ))}
          </div>
        </div>
      </article>
    </Reveal>
  );
}