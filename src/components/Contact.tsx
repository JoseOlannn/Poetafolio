import { socials } from "@/data/site";
import { Reveal } from "./SignatureLine";

function IconGithub() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden>
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2c-3.2.7-3.87-1.54-3.87-1.54-.53-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.12 3.05.74.81 1.19 1.84 1.19 3.1 0 4.43-2.69 5.41-5.25 5.69.41.36.78 1.06.78 2.14v3.17c0 .31.2.68.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
    </svg>
  );
}

function IconLinkedIn() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden>
      <path d="M4.98 3.5C4.98 4.6 4.1 5.5 3 5.5S1 4.6 1 3.5 1.9 1.5 3 1.5s1.98.9 1.98 2ZM.5 22.5V9h5v13.5H.5ZM9 9h4.8v1.85h.07c.67-1.2 2.3-2.47 4.73-2.47C24 8.38 24 12 24 15.06V22.5h-5v-6.63c0-1.58-.03-3.62-2.2-3.62-2.2 0-2.54 1.72-2.54 3.5v6.75H9V9Z" />
    </svg>
  );
}

function IconMail() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}

function iconFor(label: string) {
  if (label === "GitHub") return <IconGithub />;
  if (label === "LinkedIn") return <IconLinkedIn />;
  return <IconMail />;
}

export default function Contact() {
  return (
    <section id="contacto" className="scroll-mt-24 px-6 py-28 md:px-10">
      <div className="mx-auto max-w-4xl text-center">
        <Reveal>
          <p className="eyebrow justify-center">
            <span className="text-terra">//</span> 07 — Contacto
          </p>
          <h2 className="font-display mt-6 text-4xl font-bold tracking-tight text-ink sm:text-5xl">
            ¿Construimos algo?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted">
            Si tienes una idea, proyecto o problema que pueda convertirse en
            software, hablemos.
          </p>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.label === "Email" ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 rounded-full border border-ink/15 px-6 py-3 font-mono text-sm text-ink transition-all duration-300 hover:-translate-y-0.5 hover:border-terra hover:text-terra"
              >
                <span className="text-muted transition-colors group-hover:text-terra">
                  {iconFor(s.label)}
                </span>
                {s.label}
              </a>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.16}>
          <p className="mt-14 font-mono text-sm text-muted">
            <span className="text-ocean">{"//"}</span> let&apos;s build something.
          </p>
        </Reveal>
      </div>
    </section>
  );
}