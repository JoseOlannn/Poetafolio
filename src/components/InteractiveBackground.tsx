"use client";

import { useEffect, useState } from "react";

export default function InteractiveBackground() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsMounted(true);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  if (!isMounted) return <div className="pointer-events-none fixed inset-0 z-[-1] bg-paper" />;

  return (
    <div className="pointer-events-none fixed inset-0 z-[-1] overflow-hidden bg-paper">
      {/* Cuadrícula sutil */}
      <div 
        className="absolute inset-0 opacity-[0.03] text-ink"
        style={{
          backgroundImage: `
            linear-gradient(to right, currentColor 1px, transparent 1px),
            linear-gradient(to bottom, currentColor 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />
      
      {/* Brillo expansivo siguiendo el mouse */}
      <div
        className="absolute inset-0 transition-opacity duration-300"
        style={{
          background: `radial-gradient(1000px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(217, 108, 74, 0.08), transparent 40%)`,
        }}
      />
      
      {/* Brillo secundario sutil en el centro de la pantalla para móviles o cuando el mouse no se mueve */}
      <div
        className="absolute inset-0 opacity-40 mix-blend-multiply"
        style={{
          background: `radial-gradient(800px circle at 50% 50%, rgba(217, 108, 74, 0.03), transparent 70%)`,
        }}
      />
    </div>
  );
}
