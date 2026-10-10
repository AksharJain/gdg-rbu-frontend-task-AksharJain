"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type FAQItem = {
  question: string;
  answer: string;
};

const faqs: FAQItem[] = [
  { question: "What is GDG RBU?", answer: "GDG RBU is focused on empowering students through hands-on workshops, tech talks, hackathons, and real-world project collaboration." },
  { question: "How to join GDG?", answer: "Keep an eye on our recruitment drive, fill the application form on this website, and complete the domain task for the team you want to join." },
  { question: "What does a GDG Lead do?", answer: "A GDG Lead guides a domain team, organizes events and workshops, and mentors members to build real projects." },
  { question: "How is GDG related to Google?", answer: "GDG is a community program supported by Google for developers. We are an independent student chapter, not run by Google." },
  { question: "How to reach us?", answer: "Email us at gdsc@rknec.edu or follow us on our social media pages." }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="w-full py-12 md:py-24">
      <div className="max-w-3xl mx-auto px-4 flex flex-col gap-10">
        <h2 className="font-pixel text-4xl md:text-5xl text-center text-[var(--fg)]">FAQs</h2>
        
        <div className="flex flex-col gap-6">
          {faqs.map((faq, index) => (
            <div key={index} className="flex flex-col">
              <button 
                onClick={() => toggle(index)}
                className="brutal w-full px-6 py-5 flex items-center justify-between text-left z-10"
              >
                <span className="font-bold text-lg md:text-xl text-[var(--fg)] pr-4">{faq.question}</span>
                <motion.div 
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex-shrink-0"
                >
                  <ChevronDown size={24} className="text-[var(--fg)]" />
                </motion.div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0, marginTop: -10 }}
                    animate={{ height: "auto", opacity: 1, marginTop: 12 }}
                    exit={{ height: 0, opacity: 0, marginTop: -10 }}
                    className="overflow-hidden"
                  >
                    <div className="bg-[#F8F9FB] dark:bg-gray-800 border-2 border-[var(--fg)] rounded-xl p-6 shadow-[4px_4px_0_0_var(--fg)]">
                      <p className="font-body text-[var(--fg)] text-lg">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
