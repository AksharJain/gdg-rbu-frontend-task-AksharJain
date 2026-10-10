"use client";

import { Hero } from "@/components/Hero";
import { UpcomingEvent } from "@/components/UpcomingEvent";
import { Team } from "@/components/Team";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { motion, useReducedMotion } from "framer-motion";

function FadeUp({ children }: { children: React.ReactNode }) {
  const shouldReduceMotion = useReducedMotion();
  return (
    <motion.div
      initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
}

export default function Home() {
  return (
    <main className="flex flex-col">
      <FadeUp><Hero /></FadeUp>
      <FadeUp><UpcomingEvent /></FadeUp>
      <FadeUp><Team /></FadeUp>
      <FadeUp><FAQ /></FadeUp>
      <FadeUp><Footer /></FadeUp>
    </main>
  );
}
