"use client";

import { Hero } from "@/components/Hero";
import { UpcomingEvent } from "@/components/UpcomingEvent";
import { Team } from "@/components/Team";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Hero />
      <UpcomingEvent />
      <Team />
    </main>
  );
}
