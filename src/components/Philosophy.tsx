import { philosophy } from "@/data/skills";
import { Reveal } from "./SignatureLine";

const PHILO_COLORS = ["#d96c4a", "#e8b84b", "#7ba78d", "#2b4963"];

export default function Philosophy() {
  return (
    <section className="px-6 py-28 md:px-10">
      <div className="mx-auto max-w-6xl">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">
            <span className="text-terra">//</span> 06 — Filosofía
          </p>
          <h2 className="font-display mt-4 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Lo que guía cada decisión
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {philosophy.map((p, i) => {
            const c = PHILO_COLORS[i % PHILO_COLORS.length];
            return (
              <Reveal key={p} delay={i * 0.06}>
                <div
                  className="flex h-full flex-col justify-between rounded-2xl border border-line bg-paper p-7"
                  style={{ borderTop: `3px solid ${c}` }}
                >
                  <span
                    className="font-mono text-xs"
                    style={{ color: c }}
                  >
                    0{i + 1}
                  </span>
                  <p className="font-display mt-6 text-2xl font-semibold leading-snug text-ink">
                    {p}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}