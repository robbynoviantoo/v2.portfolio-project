// app/page.tsx (Home)
import Link from "next/link";

export default function Home() {
  const sections = Array.from({ length: 30 }, (_, i) => i + 1);

  return (
    <main className="bg-zinc-50 dark:bg-zinc-900">
      {sections.map((n) => (
        <section
          key={n}
          className="min-h-screen flex items-center justify-center border-b border-zinc-200 dark:border-zinc-800"
        >
          <div className="text-center px-8">
            <h1 className="text-5xl font-bold text-zinc-900 dark:text-zinc-50">Section {n}</h1>
            <p className="mt-4 max-w-2xl text-lg text-zinc-600 dark:text-zinc-300">
              This is a long scrolling test page so you can try Lenis smooth scrolling.
              Scroll down to see more sections. Each section is full viewport height.
            </p>

            {/* tambahkan data-transition-label */}
            <Link href="/project" data-transition-label="Projects" className="text-indigo-600 dark:text-indigo-400 underline">
              Projects
            </Link>
          </div>
        </section>
      ))}
    </main>
  );
}
