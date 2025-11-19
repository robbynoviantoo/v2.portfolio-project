"use client";

import { ChevronRight } from "lucide-react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const aboutSections = [
  {
    id: "intro",
    title: "A Bit About Me",
    description:
      "Hello! I'm a passionate full-stack developer with a love for creating beautiful and functional web experiences. With years of experience in both frontend and backend development, I strive to build applications that are not only powerful but also delightful to use.",
    description2:
      "Enjoy turning complex ideas into elegant, scalable solutions and constantly look for ways to refine both my workflow and the user experience.",
    image: "/image/about-1.png",
  },
  {
    id: "skills",
    title: "My Skills",
    description:
      "I specialize in modern JavaScript frameworks like React and Next.js, with strong proficiency in TypeScript, Tailwind CSS, and various animation libraries like GSAP and Framer Motion. On the backend, I work with Node.js, Express, and databases like MongoDB and PostgreSQL.",
    description2:
"Exploring new tools and refining my technical approach, always seeking better patterns that improve performance, reliability, and code quality. Continuously learning to stay sharp and build with confidence.",
    image: "/image/about-2.png",
  },
  {
    id: "future",
    title: "Looking Ahead",
    description:
      "I'm excited about the future of web development and the possibilities that emerging technologies bring. Whether it's exploring AI integration, optimizing performance, or pioneering new design patterns, I'm committed to continuous growth and innovation.",
    description2:
      "Driven by the idea of creating meaningful digital experiences and continually pushing myself to adapt, innovate, and contribute to the evolving tech landscape.",
    image: "/image/about-3.png",
  },
];

export default function About() {
  const descriptionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const text2Ref = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sections = document.querySelectorAll(".about-section");

    sections.forEach((section, index) => {
      // index 0 di DOM = index 1 di aboutSections (karena skip intro)
      const contentIndex = index + 1;
      const content = aboutSections[contentIndex];
      const prevContent = aboutSections[contentIndex - 1];

      const updateContent = (newContent: typeof aboutSections[0]) => {
        gsap.to(titleRef.current, {
          opacity: 0,
          y: -20,
          duration: 0.2,
          ease: "power2.inOut",
        });
        gsap.to(textRef.current, {
          opacity: 0,
          y: -20,
          duration: 0.2,
          ease: "power2.inOut",
        });
        gsap.to(text2Ref.current, {
          opacity: 0,
          y: -20,
          duration: 0.2,
          ease: "power2.inOut",
        });
        gsap.to(imageRef.current, {
          opacity: 0,
          duration: 0.2,
          ease: "power2.inOut",
        });

        setTimeout(() => {
          if (titleRef.current) titleRef.current.innerHTML = newContent.title;
          if (textRef.current)
            textRef.current.innerHTML = newContent.description;
          if (text2Ref.current)
            text2Ref.current.innerHTML = newContent.description2;
          if (imageRef.current) {
            imageRef.current.style.backgroundImage = `url('${newContent.image}')`;
          }

          gsap.to(titleRef.current, {
            opacity: 1,
            y: 0,
            duration: 0.3,
            ease: "power2.inOut",
          });
          gsap.to(textRef.current, {
            opacity: 1,
            y: 0,
            duration: 0.3,
            ease: "power2.inOut",
          });
          gsap.to(text2Ref.current, {
            opacity: 1,
            y: 0,
            duration: 0.3,
            ease: "power2.inOut",
          });
          gsap.to(imageRef.current, {
            opacity: 1,
            duration: 0.3,
            ease: "power2.inOut",
          });
        }, 200);
      };

      ScrollTrigger.create({
        trigger: section,
        start: "top center",
        end: "center center",
        markers:true,
        onEnter: () => {
          updateContent(content);
        },
        onEnterBack: () => {
          updateContent(prevContent);
        },
      });
    });

    // Add trigger untuk section pertama - ketika scroll ke atas dari skills
    const firstSection = document.querySelector(".about-section");
    if (firstSection) {
      ScrollTrigger.create({
        trigger: firstSection,
        start: "top 80%",
        onEnterBack: () => {
          // Ketika scroll ke atas dari skills dan masuk ke area skills (dari bawah)
          // Update ke intro
          gsap.to(titleRef.current, {
            opacity: 0,
            y: -20,
            duration: 0.2,
            ease: "power2.inOut",
          });
          gsap.to(textRef.current, {
            opacity: 0,
            y: -20,
            duration: 0.2,
            ease: "power2.inOut",
          });
          gsap.to(text2Ref.current, {
            opacity: 0,
            y: -20,
            duration: 0.2,
            ease: "power2.inOut",
          });
          gsap.to(imageRef.current, {
            opacity: 0,
            duration: 0.2,
            ease: "power2.inOut",
          });

          setTimeout(() => {
            if (titleRef.current)
              titleRef.current.innerHTML = aboutSections[0].title;
            if (textRef.current)
              textRef.current.innerHTML = aboutSections[0].description;
            if (text2Ref.current)
              text2Ref.current.innerHTML = aboutSections[0].description2;
            if (imageRef.current) {
              imageRef.current.style.backgroundImage = `url('${aboutSections[0].image}')`;
            }

            gsap.to(titleRef.current, {
              opacity: 1,
              y: 0,
              duration: 0.3,
              ease: "power2.inOut",
            });
            gsap.to(textRef.current, {
              opacity: 1,
              y: 0,
              duration: 0.3,
              ease: "power2.inOut",
            });
            gsap.to(text2Ref.current, {
              opacity: 1,
              y: 0,
              duration: 0.3,
              ease: "power2.inOut",
            });
            gsap.to(imageRef.current, {
              opacity: 1,
              duration: 0.3,
              ease: "power2.inOut",
            });
          }, 200);
        },
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div id="about" className="relative">
      {/* Header Section */}
      <div className="h-screen sticky top-0 z-10 flex items-center justify-center bg-white dark:bg-zinc-950">
        <div className="container p-5 flex justify-center flex-col md:flex-row gap-10">
          {/* Kiri - Sticky Image */}
          <div className="flex-1 flex items-center justify-center">
            <div
              ref={imageRef}
              className="w-[250px] h-[350px] md:w-[400px] md:h-[550px] bg-[url('/image/about-1.png')] rounded-lg shadow-lg bg-cover"
            ></div>
          </div>

          {/* Kanan - Dynamic Description */}
          <div
            ref={descriptionRef}
            className="flex-1 flex flex-col justify-start"
          >
            <div
              ref={titleRef}
              className="title text-[34px] lg:text-[70px] font-semibold mb-4 text-zinc-900 dark:text-zinc-50 transition-colors duration-300"
            >
              {aboutSections[0].title}
            </div>

            <div
              ref={textRef}
              className="text-description text-zinc-600 dark:text-zinc-400 mb-4 md:max-w-[80%] text-[16px] lg:text-[18px] leading-relaxed transition-colors duration-300"
            >
              {aboutSections[0].description}
            </div>
            <div
              ref={text2Ref}
              className="text-description text-zinc-600 dark:text-zinc-400 mb-4 md:max-w-[80%] text-[16px] lg:text-[18px] leading-relaxed transition-colors duration-300"
            >
              {aboutSections[0].description2}
            </div>

            <button
              className="
                mt-4 px-4 py-3 w-fit
                bg-zinc-900 dark:bg-zinc-50 text-white dark:text-zinc-900
                rounded-lg shadow-md
                flex items-center gap-2
                hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors duration-300
              "
            >
              Contact Me
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Content Sections - Triggers for scroll animation */}
      <div className="bg-zinc-50 dark:bg-zinc-900">
        {aboutSections.slice(1).map((section, index) => (
          <div
            key={section.id}
            className="about-section min-h-screen flex items-center justify-center p-5 border-b border-zinc-200 dark:border-zinc-800"
          >
            <div className="container max-w-3xl">
              <div className="text-center md:text-left">
                <h2 className="text-[40px] lg:text-[60px] font-bold mb-6 text-zinc-900 dark:text-zinc-50">
                  {section.title}
                </h2>
                <p className="text-[18px] lg:text-[20px] text-zinc-700 dark:text-zinc-300 leading-relaxed mb-8">
                  {section.description}
                </p>
                <div className="flex items-center gap-4 text-sm text-zinc-500 dark:text-zinc-400">
                  <span>Section {index + 2}</span>
                  <div className="h-1 w-8 bg-zinc-400 dark:bg-zinc-600 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
