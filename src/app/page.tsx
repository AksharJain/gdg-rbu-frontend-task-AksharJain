"use client";

import { Hero } from "@/components/Hero";
import { UpcomingEvent } from "@/components/UpcomingEvent";
import { Team } from "@/components/Team";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Hero />
      <UpcomingEvent />
      <Team />
      <FAQ />
      <Footer />
    </main>
  );
}
