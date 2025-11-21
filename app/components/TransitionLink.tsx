"use client";

import { usePathname, useRouter } from "next/navigation";
import { useRef } from "react";
import { animatePageOut } from "../lib/animation";

interface Props {
  href: string;
  label?: string;
  className?: string;
  children?: React.ReactNode;
}

const TransitionLink = ({ href, label, className, children }: Props) => {
  const router = useRouter();
  const pathname = usePathname();

  // prevent spam click
  const isRunning = useRef(false);

  const handleClick = () => {
    if (isRunning.current) return; // ← sudah running → jangan eksekusi lagi
    if (pathname === href) return; // ← halaman sama → nothing

    isRunning.current = true; // lock

    const labelElement = document.getElementById("route-label");
    setTimeout(() => {
      if (labelElement) {
        labelElement.textContent = label || children?.toString() || "";
        labelElement.style.opacity = "1";
      }
    }, 400);

    animatePageOut(href, router);

    // optional reset (kalau mau bisa klik lagi setelah animasi selesai)
    setTimeout(() => {
      if (labelElement) labelElement.style.opacity = "0";
      isRunning.current = false; // unlock → kalau mau disable selamanya, hapus ini
    }, 1500);
  };

  return (
    <button
      onClick={handleClick}
      className={`cursor-pointer ${className || ""}`}
    >
      {children || label}
    </button>
  );
};

export default TransitionLink;
