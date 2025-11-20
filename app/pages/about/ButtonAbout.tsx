"use client";

import { useState, useEffect } from "react";
import { ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter, usePathname } from "next/navigation";
import { animatePageOut } from "@/app/lib/animation";

export default function ButtonAbout() {
  const [visible, setVisible] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const about = document.getElementById("about");
    if (!about) return;

    const show = () => setVisible(true);
    const hide = () => setVisible(false);

    about.addEventListener("mouseenter", show);
    about.addEventListener("mouseleave", hide);

    return () => {
      about.removeEventListener("mouseenter", show);
      about.removeEventListener("mouseleave", hide);
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
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.25 }}
          className="
            fixed bottom-10 right-10 z-[999]
            px-5 py-3 rounded-lg shadow-lg
            bg-zinc-900 dark:bg-zinc-50 
            text-white dark:text-zinc-900
            flex items-center gap-2
            hover:bg-zinc-800 dark:hover:bg-zinc-200
            cursor-pointer
          "
        >
          <span>Contact Me</span>
          <ChevronRight className="w-5 h-5" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
