"use client";

import { usePathname, useRouter } from "next/navigation";
import { animatePageOut } from "../lib/animation";

interface Props {
  href: string;
  label?: string;         // optional, karena kita akan dukung children
  className?: string;
  children?: React.ReactNode;
}

const TransitionLink = ({ href, label, className, children }: Props) => {
  const router = useRouter();
  const pathname = usePathname();

  const handleClick = () => {
    if (pathname !== href) {
      animatePageOut(href, router);
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`
        cursor-pointer
        ${className || ""}  /* kalau user kirim styling, terapkan di sini */
      `}
    >
      {children || label}
    </button>
  );
};

export default TransitionLink;
