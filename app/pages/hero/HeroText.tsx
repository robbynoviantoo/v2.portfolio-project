"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface HeroTextProps {
  conRef: React.RefObject<HTMLDivElement | null>;
}

// List kalimat yang ingin diganti
const TEXT_VARIANTS = ["Full-Stack", "Front-End", "Back-End"];

export default function HeroText({ conRef }: HeroTextProps) {
  const topRef = useRef<HTMLSpanElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);
  const changingRef = useRef<HTMLSpanElement>(null);
  const [index, setIndex] = useState(0);

  // --- Scroll dan load animation ---
  useEffect(() => {
    if (!topRef.current || !bottomRef.current || !conRef.current) return;

    const containerRect = conRef.current.getBoundingClientRect();
    const containerWidth = containerRect.width;

    gsap.set([topRef.current, bottomRef.current], {
      x: 0,
      opacity: 0,
      y: 50,
    });

    const loadTl = gsap.timeline();
    loadTl
      .to(topRef.current, { opacity: 1, y: 0, duration: 1, ease: "power3.out" })
      .to(
        bottomRef.current,
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
        "-=0.8"
      );

    gsap.to(topRef.current, {
      x: containerWidth / 2, // Contoh scroll, sesuaikan
      scrollTrigger: {
        trigger: conRef.current,
        start: "top top",
        end: "+=" + containerWidth,
        scrub: true,
      },
    });

    gsap.to(bottomRef.current, {
      x: -containerWidth / 2,
      scrollTrigger: {
        trigger: conRef.current,
        start: "top top",
        end: "+=" + containerWidth,
        scrub: true,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      loadTl.kill();
    };
  }, [conRef]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!changingRef.current) return;

      const tl = gsap.timeline();
      tl.to(changingRef.current, { y: -20, opacity: 0, duration: 0.3 })
        .call(() => {
          setIndex((prev) => (prev + 1) % TEXT_VARIANTS.length);
          gsap.set(changingRef.current, { y: 20 }); // set posisi awal teks baru
        })
        .to(changingRef.current, { y: 0, opacity: 1, duration: 0.3 });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-hero text-[34px] lg:text-[70px] font-bold text-center leading-tight mb-3 z-0">
      <span ref={topRef} className="block relative">
        I Build{" "}
        <span
          ref={changingRef}
          className="font-special inline-block w-[10ch] text-center"
        >
          {TEXT_VARIANTS[index]}
        </span>{" "}
        Stuff
      </span>
      <div ref={bottomRef} className="block">
        That Actually Works!
      </div>
    </div>
  );
}
