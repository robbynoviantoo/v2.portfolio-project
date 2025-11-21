"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring } from "framer-motion";
import TransitionLink from "@/app/components/TransitionLink";

export default function ButtonAbout() {
  const [visible, setVisible] = useState(false);

  // Mouse position
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth follow
  const smoothX = useSpring(mouseX, { stiffness: 100, damping: 15 });
  const smoothY = useSpring(mouseY, { stiffness: 100, damping: 15 });

  const areaRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const about = document.getElementById("about");
    areaRef.current = about;

    if (!about) return;

    const enter = () => setVisible(true);
    const leave = () => setVisible(false);

    const follow = (e: MouseEvent) => {
      mouseX.set(e.clientX - 50);
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

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
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
          {/* 🔥 TransitionLink yang klik-nya mengarah ke /project */}
          <TransitionLink
            href="/project"
            label="Project"
            className="w-full h-full flex items-center justify-center"
          >
            <span className="text-sm font-medium">Contact Me</span>
          </TransitionLink>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
