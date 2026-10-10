"use client";

import { ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

type EventData = {
  title: string;
  description: string;
  date: string;
  time: string;
};

const event: EventData = {
  title: "GDG ORIENTATION",
  description: "Google Developer Groups (GDG) - Student Chapter is a community of students passionate about technology, innovation, and learning. We bring students together to learn, build, and grow through technical workshops, hands-on sessions, hackathons, projects, and networking.",
  date: "Oct 7, 2026",
  time: "3:00 PM"
};

export function UpcomingEvent() {
  const shouldReduceMotion = useReducedMotion();
  return (
    <section id="events" className="w-full py-12 md:py-24">
      <div className="max-w-7xl mx-auto px-4 flex flex-col gap-12">
        <h2 className="font-pixel text-4xl md:text-5xl text-center text-[var(--fg)]">Upcoming Event</h2>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr] gap-8 items-stretch"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{
            visible: { transition: { staggerChildren: 0.2 } },
            hidden: {}
          }}
        >
          {/* Left Card: Dark gradient */}
          <motion.div 
            variants={{
              hidden: shouldReduceMotion ? {} : { opacity: 0, x: -20 },
              visible: shouldReduceMotion ? {} : { opacity: 1, x: 0, transition: { duration: 0.5 } }
            }}
            className="bg-gradient-to-b from-[#4a4a4a] to-[#1a1a1a] text-white p-8 md:p-12 rounded-3xl flex flex-col justify-between items-start gap-6 border-2 border-[var(--fg)] shadow-[6px_6px_0_0_var(--fg)]"
          >
            <div className="inline-block bg-white text-black text-xs font-bold px-3 py-1 rounded-full uppercase">
              UPCOMING
            </div>
            
            <div className="space-y-4 w-full">
              <h3 className="font-pixel text-4xl md:text-5xl">{event.title}</h3>
              <p className="font-mono2 text-gray-300 line-clamp-3">
                {event.description}
              </p>
            </div>
            
            <button aria-label="Go to event details" className="mt-4 w-12 h-12 rounded-full bg-gdg-yellow text-black flex items-center justify-center hover:scale-110 transition-transform focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none">
              <ArrowRight size={24} />
            </button>
          </motion.div>

          {/* Right Card: Yellow Ticket */}
          <motion.div 
            variants={{
              hidden: shouldReduceMotion ? {} : { opacity: 0, x: 20 },
              visible: shouldReduceMotion ? {} : { opacity: 1, x: 0, transition: { duration: 0.5 } }
            }}
            className="bg-gdg-yellow border-2 border-[var(--fg)] shadow-[6px_6px_0_0_var(--fg)] rounded-3xl p-8 md:p-12 flex flex-col gap-6 relative"
          >
            {/* Semicircle Notch */}
            <div className="hidden md:block absolute -left-[2px] top-1/2 -translate-y-1/2 w-6 h-12 bg-[var(--bg)] border-2 border-[var(--fg)] border-l-0 rounded-r-full"></div>
            
            <h3 className="font-pixel text-3xl text-black">New Event</h3>
            <div className="border-t-4 border-dotted border-black/30 w-full"></div>
            
            <div className="space-y-2">
              <p className="text-sm font-bold text-black/60">DATE & TIME</p>
              <p className="font-mono2 font-bold text-2xl text-black">{event.date}</p>
              <p className="font-mono2 font-bold text-2xl text-black">{event.time}</p>
            </div>
            
            <button className="mt-auto w-full bg-[var(--fg)] text-[var(--bg)] font-bold py-4 rounded-xl border-2 border-[var(--fg)] hover:translate-y-1 hover:translate-x-1 transition-all shadow-[4px_4px_0_0_var(--bg)] focus-visible:ring-2 focus-visible:ring-black focus-visible:outline-none">
              Register Now
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
