import Link from "next/link";

export default function ProjectPage() {
  return (
    <main className="min-h-screen flex items-center justify-center flex-col gap-10 p-20 bg-white dark:bg-zinc-900 text-black dark:text-white">
      <h1 className="text-4xl font-bold">Projects</h1>
      <p>Ini halaman project saya</p>
      <Link href="/">Main</Link>
    </main>
  );
}
