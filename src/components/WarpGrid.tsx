"use client";

import { useEffect, useRef } from "react";
import { useSafeReducedMotion } from "@/hooks/useSafeReducedMotion";

type Props = {
  className?: string;
  variant?: "paper" | "dark";
  gridSize?: number;
  radius?: number;
  strength?: number;
};

export default function WarpGrid({ className = "", variant = "dark", gridSize = 40, radius = 180, strength = 42 }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const reduce = useSafeReducedMotion();
  const mouse = useRef({ x: -9999, y: -9999, tx: -9999, ty: -9999 });

  useEffect(() => {
    if (reduce) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let raf = 0;
    let w = 0;
    let h = 0;
    let dpr = 1;

    const isDark = variant === "dark";
    const lineColor = isDark ? "rgba(0, 201, 107, 0.09)" : "rgba(38, 33, 25, 0.045)";
    const accentColor = isDark ? "rgba(0, 201, 107, 0.18)" : "rgba(217,108,74,0.06)";

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      const rect = parent.getBoundingClientRect();
      dpr = Math.min(window.devicePixelRatio || 1, 1.6);
      w = rect.width;
      h = rect.height;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = w + "px";
      canvas.style.height = h + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();
    const ro = new ResizeObserver(resize);
    if (canvas.parentElement) ro.observe(canvas.parentElement);
    window.addEventListener("resize", resize);

    const onMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.current.tx = e.clientX - rect.left;
      mouse.current.ty = e.clientY - rect.top;
    };
    const onLeave = () => {
      mouse.current.tx = -9999;
      mouse.current.ty = -9999;
    };
    const parent = canvas.parentElement;
    parent?.addEventListener("mousemove", onMove);
    parent?.addEventListener("mouseleave", onLeave);

    // touch fallback
    const onTouchMove = (e: TouchEvent) => {
      const rect = canvas.getBoundingClientRect();
      const t = e.touches[0];
      if (!t) return;
      mouse.current.tx = t.clientX - rect.left;
      mouse.current.ty = t.clientY - rect.top;
    };
    parent?.addEventListener("touchmove", onTouchMove, { passive: true });

    const step = 14; // segment resolution
    const lerp = 0.085;

    const warp = (x: number, y: number, mx: number, my: number) => {
      const dx = x - mx;
      const dy = y - my;
      const dist = Math.hypot(dx, dy);
      if (dist > radius || dist < 0.1) return { x, y };
      const k = (1 - dist / radius) * strength;
      const nx = dx / dist;
      const ny = dy / dist;
      return { x: x + nx * k, y: y + ny * k };
    };

    const draw = () => {
      // lerp mouse
      mouse.current.x += (mouse.current.tx - mouse.current.x) * lerp;
      mouse.current.y += (mouse.current.ty - mouse.current.y) * lerp;

      const mx = mouse.current.x;
      const my = mouse.current.y;
      const active = mx > -500 && my > -500;

      ctx.clearRect(0, 0, w, h);

      // vignette for dark
      if (isDark) {
        const g = ctx.createRadialGradient(w * 0.5, h * 0.5, 0, w * 0.5, h * 0.5, Math.max(w, h) * 0.7);
        g.addColorStop(0, "rgba(0,0,0,0)");
        g.addColorStop(1, "rgba(0,0,0,0.32)");
        ctx.fillStyle = g;
        ctx.fillRect(0, 0, w, h);
      }

      ctx.lineWidth = 1;
      ctx.strokeStyle = lineColor as string;

      // vertical lines
      const cols = Math.ceil(w / gridSize) + 1;
      const rows = Math.ceil(h / gridSize) + 1;

      // Pre-calc offsets to center grid
      const offX = (w % gridSize) / 2;
      const offY = (h % gridSize) / 2;

      // Verticals as polylines with warp per segment
      for (let i = 0; i <= cols; i++) {
        const x0 = offX + i * gridSize;
        ctx.beginPath();
        let first = true;
        for (let y = -step; y <= h + step; y += step) {
          let px = x0;
          let py = y;
          if (active) {
            const wpos = warp(px, py, mx, my);
            px = wpos.x;
            py = wpos.y;
          }
          if (first) {
            ctx.moveTo(px, py);
            first = false;
          } else ctx.lineTo(px, py);
        }
        ctx.stroke();
      }

      // Horizontals
      for (let j = 0; j <= rows; j++) {
        const y0 = offY + j * gridSize;
        ctx.beginPath();
        let first = true;
        for (let x = -step; x <= w + step; x += step) {
          let px = x;
          let py = y0;
          if (active) {
            const wpos = warp(px, py, mx, my);
            px = wpos.x;
            py = wpos.y;
          }
          if (first) {
            ctx.moveTo(px, py);
            first = false;
          } else ctx.lineTo(px, py);
        }
        ctx.stroke();
      }

      // subtle accent glow at mouse
      if (active && isDark) {
        const gr = ctx.createRadialGradient(mx, my, 0, mx, my, radius * 0.9);
        gr.addColorStop(0, accentColor as string);
        gr.addColorStop(1, "rgba(0,0,0,0)");
        ctx.fillStyle = gr as unknown as string;
        ctx.beginPath();
        ctx.arc(mx, my, radius * 0.9, 0, Math.PI * 2);
        ctx.fill();
      }

      raf = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      window.removeEventListener("resize", resize);
      parent?.removeEventListener("mousemove", onMove);
      parent?.removeEventListener("mouseleave", onLeave);
      parent?.removeEventListener("touchmove", onTouchMove);
    };
  }, [reduce, variant, gridSize, radius, strength]);

  if (reduce) {
    // static fallback without warp
    return (
      <div
        aria-hidden
        className={`pointer-events-none absolute inset-0 ${className}`}
        style={{
          backgroundImage:
            variant === "dark"
              ? `linear-gradient(rgba(0,201,107,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(0,201,107,0.08) 1px, transparent 1px)`
              : `linear-gradient(rgba(38,33,25,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(38,33,25,0.045) 1px, transparent 1px)`,
          backgroundSize: `${gridSize}px ${gridSize}px`,
        }}
      />
    );
  }

  return <canvas ref={canvasRef} aria-hidden className={`pointer-events-none absolute inset-0 ${className}`} />;
}
