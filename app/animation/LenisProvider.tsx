"use client";

import { useEffect } from "react";
import Lenis from "lenis";

type Props = {
  children: React.ReactNode;
};

export default function LenisProvider({ children }: Props) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    // ⬅️ Tambahkan ini supaya Lenis bisa diakses global
    if (typeof window !== "undefined") {
      (window as any).lenis = lenis;
    }

    let rafId: number;

    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    return () => {
      try {
        cancelAnimationFrame(rafId);
      } catch {}

      if (typeof (lenis as any).destroy === "function") {
        (lenis as any).destroy();
      }

      // optional: bersihkan
      if (typeof window !== "undefined") {
        (window as any).lenis = null;
      }
    };
  }, []);

  return <>{children}</>;
}
