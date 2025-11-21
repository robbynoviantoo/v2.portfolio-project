"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const trailRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!cursorRef.current || !trailRef.current) return;

    // QuickSetter untuk performa tinggi
    const setCursor = gsap.quickSetter(cursorRef.current, "css");
    const setTrail = gsap.quickSetter(trailRef.current, "css");

    // Mouse position
    let mouseX = 0;
    let mouseY = 0;

    // Current position of trail
    let trailX = 0;
    let trailY = 0;

    // Event mouse
    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      // Cursor inti elastis
      gsap.to(cursorRef.current, {
        x: mouseX,
        y: mouseY,
        duration: 0.5,
        ease: "power3.out",
        scale: 1.2,
        rotate: Math.random() * 15 - 7.5,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Smooth trailing dengan ticker
    gsap.ticker.add(() => {
      // Lerp untuk trailing: trailX/Y mendekati mouse
      trailX += (mouseX - trailX) * 0.1;
      trailY += (mouseY - trailY) * 0.1;

      setTrail({ x: trailX, y: trailY });
    });

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="hidden md:block">
      {/* Lingkaran inti */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-[7px] h-[7px] pointer-events-none z-[9999] rounded-full bg-zinc-800 origin-center"
        style={{ transform: "translate(-50%, -50%) scale(1)" }}
      />

      {/* Lingkaran trailing */}
      <div
        ref={trailRef}
        className="fixed top-0 left-0 w-7 h-7 pointer-events-none z-[9998] rounded-full border-1 border-dashed border-zinc-800"
        style={{ transform: "translate(-50%, -50%)" }}
      />
    </div>
  );
}
