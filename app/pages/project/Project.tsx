"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projectsData } from "@/app/lib/data/projects";
import { ArrowUpRight } from "lucide-react";
import TransitionLink from "@/app/components/TransitionLink";

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const [displayCount, setDisplayCount] = useState(4);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Use ScrollTrigger per card so parallax starts when the card enters viewport.
    const cards = container.querySelectorAll(".project-card");
    cards.forEach((card) => {
      const img = card.querySelector(".project-image") as HTMLElement;
      if (!img) return;

      gsap.to(img, {
        // move image vertically by percent while scrolling the card
        yPercent: 30,
        ease: "none",
        scrollTrigger: {
          trigger: card,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
          // markers: true,
        },
      });

      // Set initial scale + initial y offset (turun sedikit)
      gsap.set(img, {
        scale: 1.7,
        y: -30, // ganti nilainya sesuai selera
      });

      // Hover scale effect - scale to 1.85 on hover
      card.addEventListener("mouseenter", () => {
        gsap.to(img, {
          scale: 1.85,
          duration: 0.3,
          overwrite: "auto",
        });
      });

      card.addEventListener("mouseleave", () => {
        gsap.to(img, {
          scale: 1.7,
          duration: 0.3,
          overwrite: "auto",
        });
      });
      cards.forEach((card) => {
        const wrapper = card.parentElement; // wrapper utama card + footer
        const number = wrapper?.querySelector(".dev-number");
        const arrow = wrapper?.querySelector(".arrow-icon");

        if (number) {
          const numberTl = gsap.timeline({ paused: true });
          numberTl.to(number, {
            y: -20,
            opacity: 0,
            duration: 0.15,
            ease: "power2.in",
          });
          numberTl.set(number, { y: 20 });
          numberTl.to(number, {
            y: 0,
            opacity: 1,
            duration: 0.25,
            ease: "power2.out",
          });

          wrapper?.addEventListener("mouseenter", () => numberTl.restart());
        }

        if (arrow) {
          const arrowTl = gsap.timeline({ paused: true });
          arrowTl.to(arrow, {
            y: -10,
            opacity: 0,
            duration: 0.2,
            ease: "power2.in",
          });
          arrowTl.set(arrow, { y: 10 });
          arrowTl.to(arrow, {
            y: 0,
            opacity: 1,
            duration: 0.25,
            ease: "power2.out",
          });

          wrapper?.addEventListener("mouseenter", () => arrowTl.restart());
        }
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  const displayedProjects = projectsData.slice(0, displayCount);
  const hasMore = displayCount < projectsData.length;

  return (
    <div
      id="projects"
      className="py-20 flex justify-center  bg-white dark:bg-zinc-950"
    >
      <div className="container  flex justify-center flex-col items-center px-5">
        {/* Header */}
        <div className="mb-16 text-center md:text-left">
          <h2 className="text-[34px] lg:text-[70px] font-bold mb-4 text-zinc-900 dark:text-zinc-50">
            Featured Projects
          </h2>
        </div>

        {/* Projects Grid */}
        <div
          ref={containerRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12 w-full max-w-screen"
        >
          {displayedProjects.map((project, index) => (
            <div key={project.id} className="flex flex-col">
              {/* CARD ASLI — TIDAK ADA YANG DIUBAH */}
              <div className="project-card flex flex-col border border-zinc-900 rounded-lg overflow-hidden duration-300 min-h-[500px] bg-white dark:bg-zinc-900">
                {/* Title */}
                <h1 className="font-semibold text-4xl text-center py-4 border-b border-zinc-900 text-zinc-900 dark:text-zinc-50">
                  {project.title}
                </h1>

                {/* Image */}
                <div className="relative w-full h-[500px] overflow-hidden border-b border-zinc-900 flex items-center justify-center bg-zinc-100 dark:bg-zinc-800">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="project-image max-w-full max-h-full scale-170"
                  />
                </div>
              </div>

              {/* FOOTER DIPINDAH — TIDAK DISENTUH, HANYA DIPINDAH */}
              <div className="flex justify-between items-center mt-3">
                <span className="font-mono text-lg text-zinc-700 dark:text-zinc-300">
                  Dev.
                  <span className="dev-number inline-block">
                    {String(index + 1).padStart(3, "0")}
                  </span>
                </span>

                <button
                  className="view-btn flex justify-between items-center gap-2 px-6 py-2 bg-zinc-900 dark:bg-zinc-50 
                        text-white dark:text-zinc-900 rounded-md font-medium 
                        hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors duration-300 cursor-pointer"
                >
                  Lihat
                  <ArrowUpRight className="arrow-icon w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {hasMore && (
          <div className="flex justify-center">
            <TransitionLink
              href="/project"
              label="Projects"
              className="px-10 py-4 bg-zinc-900 dark:bg-zinc-50 text-white dark:text-zinc-900 rounded-lg hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors duration-300 text-4xl inline-block"
            />
          </div>
        )}
      </div>
    </div>
  );
}
