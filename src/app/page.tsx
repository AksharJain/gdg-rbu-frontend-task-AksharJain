"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export default function Home() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8 gap-8">
      {mounted && (
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="brutal p-3 flex items-center justify-center text-black bg-gdg-yellow"
          aria-label="Toggle theme"
        >
          {theme === "dark" ? <Sun size={24} /> : <Moon size={24} />}
        </button>
      )}

      <div className="brutal p-8 max-w-md w-full text-center space-y-4">
        <h1 className="font-pixel text-4xl text-gdg-blue">Neo-Brutalism</h1>
        <p className="font-mono2 text-lg text-gdg-red">
          This is the hero paragraph in Space Mono.
        </p>
        <p className="font-body text-base">
          This is the body text in Space Grotesk. The card has thick borders, hard offset shadows, and moves on hover.
        </p>
      </div>
    </main>
  );
}
