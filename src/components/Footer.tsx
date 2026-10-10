"use client";

import Image from "next/image";
import { MapPin, Mail } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

const InstagramIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
  </svg>
);

const LinkedinIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect width="4" height="12" x="2" y="9"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const XIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4l11.733 16h4.267l-11.733 -16z"></path>
    <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"></path>
  </svg>
);

export function Footer() {
  const shouldReduceMotion = useReducedMotion();
  return (
    <footer id="footer" className="w-full pt-12 md:pt-24 flex flex-col items-center">
      <div className="max-w-6xl w-full mx-auto px-4 mb-16">
        <div className="brutal p-8 md:p-12 flex flex-col items-center text-center">
          <Image 
            src="/images/logo.png" 
            alt="GDG RBU Logo" 
            width={240} 
            height={80} 
            className="h-16 w-auto mb-4"
          />
          <h2 className="font-pixel text-3xl md:text-5xl text-[var(--fg)] mb-2">Google Developer Groups</h2>
          <p className="font-bold text-lg text-[var(--fg)]">On Campus • Ramdeobaba University</p>
          
          <div className="w-full border-t-2 border-dashed border-[var(--fg)] my-10"></div>
          
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            {/* Left Column */}
            <div className="flex flex-col gap-4 h-full">
              <div className="flex-1 bg-[#60A5FA] border-2 border-[var(--fg)] shadow-[4px_4px_0_0_var(--fg)] rounded-xl p-6 flex items-start gap-4 text-black">
                <MapPin size={28} className="flex-shrink-0 mt-1" />
                <p className="font-bold text-left text-lg leading-tight">
                  Ramdeobaba University, Ramdeo Tekdi,<br/>
                  Gittikhadan, Katol Road, Nagpur-440013
                </p>
              </div>
              <div className="flex-1 bg-[#FDC10D] border-2 border-[var(--fg)] shadow-[4px_4px_0_0_var(--fg)] rounded-xl p-6 flex items-center gap-4 text-black">
                <Mail size={28} className="flex-shrink-0" />
                <p className="font-bold text-xl">gdsc@rknec.edu</p>
              </div>
            </div>
            
            {/* Right Column */}
            <div className="bg-[#6C72FF] border-2 border-[var(--fg)] shadow-[4px_4px_0_0_var(--fg)] rounded-xl p-8 flex flex-col justify-center items-center gap-6 h-full">
              <h3 className="font-bold text-2xl text-white">Follow Us:</h3>
              <div className="flex gap-4">
                <a href="#" aria-label="Instagram" className="w-14 h-14 bg-gdg-red border-2 border-black shadow-[4px_4px_0_0_#000] rounded-xl flex items-center justify-center text-black hover:translate-y-1 hover:translate-x-1 hover:shadow-[2px_2px_0_0_#000] transition-all focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none">
                  <InstagramIcon />
                </a>
                <a href="#" aria-label="LinkedIn" className="w-14 h-14 bg-gdg-blue border-2 border-black shadow-[4px_4px_0_0_#000] rounded-xl flex items-center justify-center text-black hover:translate-y-1 hover:translate-x-1 hover:shadow-[2px_2px_0_0_#000] transition-all focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none">
                  <LinkedinIcon />
                </a>
                <a href="#" aria-label="X (Twitter)" className="w-14 h-14 bg-gdg-green border-2 border-black shadow-[4px_4px_0_0_#000] rounded-xl flex items-center justify-center text-black hover:translate-y-1 hover:translate-x-1 hover:shadow-[2px_2px_0_0_#000] transition-all focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none">
                  <XIcon />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="text-center font-body text-sm mb-4">
        Built by <a href="https://github.com/AksharJain" target="_blank" rel="noopener noreferrer" className="font-bold underline hover:text-gdg-blue transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--fg)]">Akshar Jain</a> for GDG RBU Recruitment 2026-27
      </div>

      {/* Shapes Strip */}
      <motion.div 
        className="w-full relative h-24 md:h-32 mix-blend-multiply dark:invert dark:mix-blend-screen"
        animate={{ y: shouldReduceMotion ? 0 : [-5, 5, -5] }}
        transition={{ repeat: shouldReduceMotion ? 0 : Infinity, duration: 4, ease: "easeInOut" }}
      >
        <Image 
          src="/images/shapes.png" 
          alt="GDG Shapes background pattern" 
          fill
          className="object-cover object-top"
        />
      </motion.div>
    </footer>
  );
}
