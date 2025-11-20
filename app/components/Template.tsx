// app/template.tsx
"use client"

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { animatePageIn } from '../lib/animation'

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  useEffect(() => {
    // Handle initial page load
    const timeoutId = setTimeout(() => {
      animatePageIn()
    }, 100)

    return () => clearTimeout(timeoutId)
  }, [pathname])

  return (
    <div>
      {children}
      
      <div id="banner-1" className="fixed top-0 left-0 w-1/4 h-screen bg-black z-50" />
      <div id="banner-2" className="fixed top-0 left-1/4 w-1/4 h-screen bg-black z-50" />
      <div id="banner-3" className="fixed top-0 left-2/4 w-1/4 h-screen bg-black z-50" />
      <div id="banner-4" className="fixed top-0 left-3/4 w-1/4 h-screen bg-black z-50" />
    </div>
  )
}