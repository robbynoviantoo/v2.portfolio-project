// app/page.tsx (Home)
import Link from "next/link";
import Hero from "./pages/hero/Hero";
import About from "./pages/about/About";
import Skill from "./pages/skill/Skill";
import Projects from "./pages/project/Project";
import Contact from "./pages/contact/Contact";

export default function Home() {
  const sections = Array.from({ length: 30 }, (_, i) => i + 1);

  return (
    <main className="bg-zinc-50 dark:bg-zinc-900">
      <Hero />
      <About />
      <Skill />
      <Projects />
      <Contact />
    </main>
  );
}
