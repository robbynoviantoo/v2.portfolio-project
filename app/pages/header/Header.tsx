"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Header() {

  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!headerRef.current) return;
    gsap.from(headerRef.current, {
      y: -100,
      opacity: 0,
      duration: 1,
      delay: 1.2,
      ease: "power3.out",
    });
    
  }, []);

  return (
    <header className="fixed hidden md:flex top-0 left-0 w-full px-2  justify-center z-[100]">
      <div
        ref={headerRef}
        className="flex items-center justify-between w-full max-w-4xl bg-white/70 backdrop-blur-sm
                   px-6 py-3 mt-4 rounded-lg shadow-sm border border-white/40"
      >
        {/* Kiri */}
        <div className="text-md font-medium">Logo</div>

        {/* Menu Navigasi */}
        <nav className="flex gap-8 text-gray-700 text-md font-medium">
          <a href="#about" className="hover:text-black transition">
            About
          </a>
          <a href="#projects" className="hover:text-black transition">
            Projects
          </a>
          <a href="#contact" className="hover:text-black transition">
            Contact
          </a>
        </nav>

        {/* Kanan */}
        <div className="text-md font-medium">Login</div>
      </div>
    </header>
  );
}
