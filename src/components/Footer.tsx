import { navLinks } from "@/data/site";

const PALETTE = ["#d96c4a", "#e8b84b", "#7ba78d", "#2b4963"];

export default function Footer() {
  return (
    <footer className="border-t border-line bg-paper-2/60 px-6 py-12 md:px-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 md:flex-row md:justify-between">
        <a
          href="#inicio"
          className="font-mono text-sm text-ink transition-colors hover:text-terra"
        >
          <span className="text-muted">//</span> jose_olan<span className="text-terra">.dev</span>
        </a>

        <nav className="flex flex-wrap items-center justify-center gap-6">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-mono text-[13px] text-muted transition-colors hover:text-ink"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* paleta, como firma */}
        <div className="flex items-center gap-2" aria-hidden>
          {PALETTE.map((c) => (
            <span
              key={c}
              className="h-3 w-3 rounded-full transition-transform duration-300 hover:scale-125"
              style={{ backgroundColor: c }}
            />
          ))}
        </div>
      </div>
      <p className="mt-8 text-center font-mono text-xs text-muted">
        © {new Date().getFullYear()} Jose Olan · Hecho con código, datos y propósito.
      </p>
    </footer>
  );
}