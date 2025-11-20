// lib/animation.ts
import gsap from "gsap";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export const animatePageIn = () => {
  const banners = [
    document.getElementById("banner-1"),
    document.getElementById("banner-2"),
    document.getElementById("banner-3"),
    document.getElementById("banner-4")
  ];

  // Pastikan semua banner ada
  if (banners.every(banner => banner !== null)) {
    const tl = gsap.timeline();
    
    tl.set(banners, {
      yPercent: 0 // Reset ke posisi normal
    }).to(banners, {
      yPercent: -100, // Geser ke atas (keluar dari viewport)
      stagger: 0.1,
      duration: 0.8,
      ease: "power2.inOut"
    });
  }
};

export const animatePageOut = (href: string, router: AppRouterInstance) => {
  const banners = [
    document.getElementById("banner-1"),
    document.getElementById("banner-2"),
    document.getElementById("banner-3"),
    document.getElementById("banner-4")
  ];

  if (banners.every(banner => banner !== null)) {
    const tl = gsap.timeline();

    tl.set(banners, {
      yPercent: -100 // Mulai dari atas
    }).to(banners, {
      yPercent: 0, // Geser ke bawah (menutupi viewport)
      stagger: 0.1,
      duration: 0.8,
      ease: "power2.inOut",
      onComplete: () => {
        router.push(href);
      }
    });
  }
};