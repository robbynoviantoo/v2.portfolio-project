// app/template.tsx
"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { animatePageIn } from "../lib/animation";

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    // Handle initial page load
    const timeoutId = setTimeout(() => {
      animatePageIn();
    }, 50);

    return () => clearTimeout(timeoutId);
  }, [pathname]);

  return (
    <div>
      {children}

      <div
        id="route-label"
        className="fixed inset-0 flex items-center justify-center z-[60] 
  text-zinc-50 text-7xl font-semibold opacity-0 pointer-events-none transition-opacity duration-300"
      ></div>

  <div
  id="banner-1"
  className="fixed top-0 left-0 w-1/4 h-screen z-50 bg-zinc-800 flex items-center justify-center"
>
  <img
    src="/svg/Api.svg"
    alt="Tirai"
    className="w-[40%] h-[40%]"
  />
</div>

<div
  id="banner-2"
  className="fixed top-0 left-1/4 w-1/4 h-screen z-50 bg-zinc-800 flex items-center justify-center"
>
  <img
    src="/svg/Air.svg"
    alt="Tirai"
    className="w-[40%] h-[40%]"
  />
</div>

<div
  id="banner-3"
  className="fixed top-0 left-2/4 w-1/4 h-screen z-50 bg-zinc-800 flex items-center justify-center"
>
  <img
    src="/svg/Tanah.svg"
    alt="Tirai"
    className="w-[40%] h-[40%]"
  />
</div>

<div
  id="banner-4"
  className="fixed top-0 left-3/4 w-1/4 h-screen z-50 bg-zinc-800 flex items-center justify-center"
>
  <img
    src="/svg/Udara.svg"
    alt="Tirai"
    className="w-[40%] h-[40%]"
  />
</div>

    </div>
  );
}
