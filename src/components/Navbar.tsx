"use client";
import { useSafeReducedMotion } from "@/hooks/useSafeReducedMotion";

import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { navLinksData } from "@/data/site";
import { useLanguage } from "@/context/LanguageContext";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const reduce = useSafeReducedMotion();
  const { language, toggleLanguage } = useLanguage();
  const navLinks = navLinksData[language];
  
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

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
      {/* scroll progress */}
      <motion.div
        aria-hidden
        className="absolute bottom-0 left-0 h-px w-full origin-left bg-gradient-to-r from-terra via-mustard via-sage to-ocean"
        style={{ scaleX: reduce ? 1 : scaleX, opacity: reduce ? 0 : 1 }}
      />

      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 md:px-10 h-16">
        <a
          href="#inicio"
          className="group font-mono text-sm tracking-tight text-ink transition-colors"
        >
          <span className="text-muted group-hover:text-terra transition-colors">{"//"}</span> jose_olan<span className="text-terra">.dev</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="group relative font-mono text-[13px] text-muted hover:text-ink transition-colors py-1"
            >
              {l.label}
              <span className="absolute left-0 -bottom-0.5 h-px w-0 bg-terra transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          <button
            onClick={toggleLanguage}
            aria-label="Alternar idioma"
            className="flex items-center gap-2 rounded-full border border-line bg-paper-2 px-2.5 py-1 font-mono text-[11px] text-muted transition-all hover:border-ink/20 hover:shadow-sm"
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path><path d="M2 12h20"></path></svg>
            <div className="flex items-center gap-1 uppercase tracking-widest mt-px">
              <span className={language === "es" ? "text-ink font-bold" : "text-muted/60"}>es</span>
              <span className="text-line">|</span>
              <span className={language === "en" ? "text-ink font-bold" : "text-muted/60"}>en</span>
            </div>
          </button>
          <motion.a
            href="#contacto"
            whileHover={reduce ? undefined : { y: -1 }}
            whileTap={reduce ? undefined : { scale: 0.98 }}
            className="rounded-full border border-ink/20 px-4 py-1.5 font-mono text-[13px] text-ink transition-all duration-300 hover:border-terra hover:text-terra hover:shadow-[0_8px_20px_-12px_rgba(38,33,25,0.25)]"
          >
            {language === "en" ? "Connect" : "Conectar"}
          </motion.a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={language === "en" ? "Open menu" : "Abrir menú"}
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

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="md:hidden border-t border-line bg-paper px-6 py-6"
        >
          <div className="flex flex-col gap-4">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="font-mono text-ink text-sm py-1 active:text-terra"
              >
                {l.label}
              </a>
            ))}
            
            <button
              onClick={() => {
                toggleLanguage();
                setOpen(false);
              }}
              className="mt-2 flex items-center justify-between rounded-xl border border-line bg-paper-2 px-4 py-3 font-mono text-ink text-sm text-left uppercase active:border-terra font-semibold transition-all"
            >
              <div className="flex items-center gap-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-muted"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path><path d="M2 12h20"></path></svg>
                {language === "es" ? "Idioma" : "Language"}
              </div>
              <span className="text-terra">{language === "es" ? "Español" : "English"}</span>
            </button>

            <a
              href="#contacto"
              onClick={() => setOpen(false)}
              className="rounded-full border border-ink/20 px-4 py-2 font-mono text-sm text-ink text-center mt-2"
            >
              {language === "en" ? "Connect" : "Conectar"}
            </a>
          </div>
        </motion.div>
      )}
    </header>
  );
}
