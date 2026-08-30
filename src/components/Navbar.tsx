"use client";

import { useEffect, useState } from "react";
import { navLinks } from "@/data/site";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-paper/85 backdrop-blur-md border-b border-line"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 md:px-10 h-16">
        {/* marca */}
        <a
          href="#inicio"
          className="font-mono text-sm tracking-tight text-ink hover:text-terra transition-colors"
        >
          <span className="text-muted">//</span> jose_olan<span className="text-terra">.dev</span>
        </a>

        {/* enlaces escritorio */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-mono text-[13px] text-muted hover:text-ink transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contacto"
            className="rounded-full border border-ink/20 px-4 py-1.5 font-mono text-[13px] text-ink transition-all duration-300 hover:border-terra hover:text-terra"
          >
            Conectar
          </a>
        </div>

        {/* botón móvil */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label="Abrir menú"
          className="md:hidden flex flex-col gap-1.5 p-2"
        >
          <span
            className={`block h-0.5 w-6 bg-ink transition-transform duration-300 ${
              open ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-ink transition-opacity duration-300 ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-ink transition-transform duration-300 ${
              open ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      {/* menú móvil */}
      {open && (
        <div className="md:hidden border-t border-line bg-paper px-6 py-6">
          <div className="flex flex-col gap-4">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="font-mono text-ink text-sm"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contacto"
              onClick={() => setOpen(false)}
              className="rounded-full border border-ink/20 px-4 py-1.5 font-mono text-sm text-ink text-center"
            >
              Conectar
            </a>
          </div>
        </div>
      )}
    </header>
  );
}