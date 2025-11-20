"use client";

import TransitionLink from "@/app/components/TransitionLink";

export default function ProjectPage() {
  return (
    <main className="min-h-screen flex items-center justify-center flex-col gap-10 p-20 bg-white dark:bg-zinc-900 text-black dark:text-white">
      <h1 className="text-4xl font-bold">Projects</h1>
      <p>Ini halaman project saya</p>
      <TransitionLink
        href="/"
        className="bg-black text-white px-7 py-3 rounded-md hover:bg-neutral-800"
        label="Main"
      />
    </main>
  );
}
