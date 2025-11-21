"use client";

import { useEffect } from "react";

export default function CustomScrollbar() {
  useEffect(() => {
    const lenis = (window as any).lenis; // ambil instance Lenis dari global
    if (!lenis) return;

    const track = document.getElementById("scrollbar-track");
    const thumb = document.getElementById("scrollbar-thumb");
    if (!track || !thumb) return;

    const update = () => {
      const scroll = lenis.scroll;
      const limit = lenis.limit;

      const percent = scroll / limit;
      const maxPos = track.clientHeight - thumb.clientHeight;

      thumb.style.transform = `translateY(${percent * maxPos}px)`;
    };

    // listen scroll dari Lenis
    lenis.on("scroll", update);

    // jalankan sekali untuk initial posisi
    update();

    return () => {
      lenis.off("scroll", update);
    };
  }, []);

  return null;
}
