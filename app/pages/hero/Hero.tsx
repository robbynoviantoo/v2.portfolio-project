"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import HeroText from "./HeroText";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const imgRef = useRef<HTMLImageElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const conRef = useRef<HTMLDivElement>(null);
  const topRef = useRef<HTMLDivElement>(null);

  // Parallax image
  useEffect(() => {
    if (!imgRef.current || !conRef.current) return;

    gsap.to(imgRef.current, {
      y: 150,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    gsap.from(topRef.current,{
      x:1500,

    })
  }, []);
  

  return (
    <div
      ref={containerRef}
      className="relative h-screen bg-[#F7F6F2] flex items-center justify-center"
    >
      <div
        ref={conRef}
        className="absolute p-2 md:p-0 container flex items-center justify-center flex-col gap-2"
      >
        {/* Hero Image */}
        <div className="img w-[230px] h-[230px] bg-[#FFF8ED] rounded-lg shadow-sm mb-10 overflow-hidden">
          <img
            ref={imgRef}
            src="/image/hero-image.png"
            alt="Hero"
            className="w-full h-full object-cover object-top scale-150"
          />
        </div>

        {/* Badge */}
        <div className="card flex items-center gap-2 px-3 h-10 bg-white rounded-md shadow-sm mb-3">
          <span className="bg-red-100 text-red-600 text-sm font-medium px-2 py-0.5 rounded">
            Hey!
          </span>
          <span className="text-gray-500 text-lg">I'm</span>
          <span className="text-gray-800 text-lg font-medium">
            Robby Novianto
          </span>
        </div>

        <div className="text-hero text-[34px] lg:text-[70px] font-bold text-center leading-tight mb-3">
          <span ref={topRef} className="block">
            I Build <span className="font-special">Full-Stack</span> Stuff
          </span>
          <div className="block">That Actually Works!</div>
        </div>

        {/* Description */}
        <div className="text-description text-gray-500 text-md text-[18px] lg:text-[22px] text-center max-w-xl">
          Code, Bugs, and late-night coffee keep it all running
          <br /> I turn complex problems into clean, working solutions.
        </div>
      </div>
    </div>
  );
}
