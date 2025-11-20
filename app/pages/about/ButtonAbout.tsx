"use client";

import { useState, useEffect, useRef } from "react";
import { ChevronRight } from "lucide-react";
import { motion, AnimatePresence, useMotionValue, useSpring } from "framer-motion";
import { useRouter, usePathname } from "next/navigation";
import { animatePageOut } from "@/app/lib/animation";

export default function ButtonAbout() {
  const [visible, setVisible] = useState(false);

  const router = useRouter();
  const pathname = usePathname();

  // Mouse position
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth follow
  const smoothX = useSpring(mouseX, { stiffness: 100, damping: 15 });
  const smoothY = useSpring(mouseY, { stiffness: 100, damping: 15 });

  // Ref area about
  const areaRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const about = document.getElementById("about");
    areaRef.current = about;

    if (!about) return;

    const enter = () => setVisible(true);
    const leave = () => setVisible(false);

    const follow = (e: MouseEvent) => {
      mouseX.set(e.clientX - 50); // -50 biar center (100px)
      mouseY.set(e.clientY - 50);
    };

    about.addEventListener("mouseenter", enter);
    about.addEventListener("mouseleave", leave);
    about.addEventListener("mousemove", follow);

    return () => {
      about.removeEventListener("mouseenter", enter);
      about.removeEventListener("mouseleave", leave);
      about.removeEventListener("mousemove", follow);
    };
  }, []);

  const handleClick = () => {
    if (pathname !== "/project") {
      animatePageOut("/project", router);
    }
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          onClick={handleClick}
          style={{
            position: "fixed",
            top: smoothY,
            left: smoothX,
          }}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          transition={{ duration: 0.25 }}
          className="
            z-[999]
            w-[100px] h-[100px]
            rounded-full
            bg-zinc-900 dark:bg-zinc-50
            text-white dark:text-zinc-900
            flex flex-col items-center justify-center
            cursor-pointer select-none
            shadow-lg
            hover:bg-zinc-800 dark:hover:bg-zinc-200
          "
        >
          <span className="text-sm font-medium">Contact Me</span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
