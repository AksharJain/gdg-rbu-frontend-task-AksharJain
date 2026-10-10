"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { ThemeToggle } from "./ThemeToggle";

const navLinks = [
  { name: "Home", href: "#home", color: "bg-gdg-blue" },
  { name: "Team", href: "#team", color: "bg-gdg-red" },
  { name: "Events", href: "#events", color: "bg-gdg-yellow" },
  { name: "Gallery", href: "#", color: "bg-gdg-green" },
  { name: "Portfolio", href: "#", color: "bg-gdg-purple" },
  { name: "More", href: "#", color: "bg-gdg-blue" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-[var(--bg)] border-b-2 border-[var(--fg)]">
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
        {/* Left: Logo */}
        <Link href="/" className="flex-shrink-0">
          <Image
            src="/images/logo.png"
            alt="GDG RBU Logo"
            width={144}
            height={48}
            className="h-12 w-auto"
          />
        </Link>

        {/* Center: Desktop Pills */}
        <div className="hidden md:flex items-center gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`rounded-lg px-5 py-2 font-bold text-black border-2 border-black shadow-[4px_4px_0_0_#000] hover:translate-y-1 hover:translate-x-1 hover:shadow-[2px_2px_0_0_#000] transition-all ${link.color}`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Right: User Chip & Toggle */}
        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center gap-2 border-2 border-black bg-white rounded-full p-1 pr-3 shadow-[4px_4px_0_0_#000]">
            <div className="w-8 h-8 rounded-full bg-gdg-blue flex items-center justify-center font-bold text-black border-2 border-black">
              S
            </div>
            <span className="font-bold text-black text-sm">Saptanshu Wanjari</span>
            <ChevronDown size={16} className="text-black" />
          </div>
          
          <ThemeToggle />
          
          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 border-2 border-[var(--fg)] rounded-md hover:bg-[var(--fg)] hover:text-[var(--bg)] transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Slide-down Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden border-b-2 border-[var(--fg)] bg-[var(--bg)]"
          >
            <div className="flex flex-col gap-4 p-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`rounded-lg px-5 py-3 font-bold text-black border-2 border-black shadow-[4px_4px_0_0_#000] active:translate-y-1 active:translate-x-1 active:shadow-[2px_2px_0_0_#000] transition-all text-center ${link.color}`}
                >
                  {link.name}
                </Link>
              ))}
              
              <div className="sm:hidden flex items-center gap-2 border-2 border-black bg-white rounded-full p-2 justify-center shadow-[4px_4px_0_0_#000]">
                <div className="w-8 h-8 rounded-full bg-gdg-blue flex items-center justify-center font-bold text-black border-2 border-black">
                  S
                </div>
                <span className="font-bold text-black text-sm">Saptanshu Wanjari</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
