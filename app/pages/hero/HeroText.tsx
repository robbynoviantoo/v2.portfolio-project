"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface HeroTextProps {
  conRef: React.RefObject<HTMLDivElement | null>;
}

export default function HeroText({ conRef }: HeroTextProps) {
  const topRef = useRef<HTMLSpanElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!topRef.current || !bottomRef.current || !conRef.current) return;

    const containerWidth = conRef.current.offsetWidth;

    gsap.set([topRef.current, bottomRef.current], { x: 0 });

    gsap.to(topRef.current, {
      x: containerWidth, // bergerak sesuai lebar container
      scrollTrigger: {
        trigger: conRef.current,
        start: "top top",
        end: "+=" + containerWidth,
        scrub: true,
        markers: true,
      },
    });

    gsap.to(bottomRef.current, {
      x: -containerWidth,
      scrollTrigger: {
        trigger: conRef.current,
        start: "top top",
        end: "+=" + containerWidth,
        scrub: true,
        markers: true,
      },
    });
  }, [conRef]);

  return (

  );
}
