"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Monitor, MoonIcon, SunIcon } from "lucide-react";
import { Tabs, TabsList, TabsTrigger } from "../ui/tabs";

function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <Tabs defaultValue={theme}>
      <TabsList className="border dark:border-zinc-600 dark:bg-zinc-800">
        <TabsTrigger
          value="light"
          onClick={() => {
            console.log("Theme changed to: light");
            setTheme("light");
          }}
        >
          <SunIcon className="h-4 w-4" />
        </TabsTrigger>

        <TabsTrigger
          value="dark"
          onClick={() => {
            console.log("Theme changed to: dark");
            setTheme("dark");
          }}
        >
          <MoonIcon className="h-4 w-4 rotate-90 transition-all dark:rotate-0" />
        </TabsTrigger>

        <TabsTrigger
          value="system"
          onClick={() => {
            console.log("Theme changed to: system");
            setTheme("system");
          }}
        >
          <Monitor className="h-4 w-4" />
        </TabsTrigger>
      </TabsList>
    </Tabs>
  );
}

export default ThemeSwitcher;
