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
  const leftEyeRef = useRef<HTMLDivElement>(null);
  const rightEyeRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLSpanElement>(null);

  // // Parallax image
  // useEffect(() => {
  //   if (!imgRef.current || !conRef.current) return;

  //   gsap.to(imgRef.current, {
  //     y: 150,
  //     ease: "none",
  //     scrollTrigger: {
  //       trigger: containerRef.current,
  //       start: "top top",
  //       end: "bottom top",
  //       scrub: true,
  //       // markers:true,
  //     },
  //   });
  // }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!leftEyeRef.current || !rightEyeRef.current || !imgRef.current)
        return;

      const rect = imgRef.current.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;

      const maxOffset = 1; // max pergerakan mata

      const offsetX = ((mouseX - rect.width / 2) / rect.width) * maxOffset * 2;
      const offsetY =
        ((mouseY - rect.height / 2) / rect.height) * maxOffset * 2;

      gsap.to(leftEyeRef.current, { x: offsetX, y: offsetY, duration: 0.1 });
      gsap.to(rightEyeRef.current, { x: offsetX, y: offsetY, duration: 0.1 });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    if (!cardRef.current || !nameRef.current) return;

    const originalText = "Robby Novianto";
    const finalText = "The Destroyer";

    // Pastikan card tetap lebar saat teks berubah
    const tempSpan = document.createElement("span");
    tempSpan.style.visibility = "hidden";
    tempSpan.style.position = "absolute";
    tempSpan.style.whiteSpace = "nowrap";
    tempSpan.innerText = finalText;
    cardRef.current.appendChild(tempSpan);

    const cardWidth = tempSpan.offsetWidth;
    cardRef.current.style.width = `${cardWidth + 150}px`;
    tempSpan.remove();

    // Timeline animasi scroll
    gsap.to(
      {},
      {
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top top+=350",
          end: "bottom top+=100",
          scrub: true,
          // markers: true,
          onUpdate: (self) => {
            const progress = self.progress;

            // Reset ke teks asli ketika scroll balik ke atas
            if (progress === 0) {
              nameRef.current!.innerText = originalText;
              return;
            }

            // Efek acak karakter
            const scrambled = finalText
              .split("")
              .map((char, i) => {
                if (i / finalText.length < progress) return finalText[i];
                const rand = String.fromCharCode(
                  33 + Math.floor(Math.random() * 94)
                );
                return rand;
              })
              .join("");
            nameRef.current!.innerText = scrambled;
          },
          // Tambahkan onRefresh untuk handle ketika scroll position direset
          onRefresh: (self) => {
            if (self.progress === 0) {
              nameRef.current!.innerText = originalText;
            }
          },
        },
      }
    );
  }, []);
  return (
    <div
      ref={containerRef}
  className="relative h-screen bg-[#F7F6F2] flex items-center justify-center bg-[url('/image/bg-hero.png')] bg-cover bg-center"
    >
      <div
        ref={conRef}
        className="absolute p-2 md:p-0 container flex items-center justify-center flex-col gap-2 overflow-hidden"
      >
        {/* Hero Image */}
        <div className="img relative w-[230px] h-[230px] bg-[#FFF8ED] rounded-lg shadow-sm mb-10 overflow-hidden">
          <div
            ref={leftEyeRef}
            className="absolute w-2 h-2 bg-black rounded-full"
            style={{ top: "66px", left: "89px" }}
          ></div>

          {/* Mata kanan */}
          <div
            ref={rightEyeRef}
            className="absolute w-2 h-2 bg-black rounded-full"
            style={{ top: "66px", left: "127px" }}
          ></div>
          <img
            ref={imgRef}
            src="/image/hero-image2.png"
            alt="Hero"
            className="w-full h-full object-cover object-top scale-150"
          />
        </div>

        {/* Badge */}
        <div
          ref={cardRef}
          className="card flex items-center gap-2 px-3 h-10 bg-white rounded-md shadow-sm mb-3"
        >
          <span className="bg-red-100 text-red-600 text-sm font-medium px-2 py-0.5 rounded">
            Hey!
          </span>
          <span className="text-gray-500 text-lg">I'm</span>
          <span ref={nameRef} className="text-gray-800 text-lg font-medium">
            Robby Novianto
          </span>
        </div>

        <HeroText conRef={conRef} />

        {/* Description */}
        <div className="text-description text-gray-500 text-md text-[18px] lg:text-[22px] text-center max-w-xl">
          Code, Bugs, and late-night coffee keep it all running
          <br /> I turn complex problems into clean, working solutions.
        </div>
      </div>
    </div>
  );
}
