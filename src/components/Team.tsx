import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

export function Team() {
  return (
    <section id="team" className="w-full py-12 md:py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="brutal overflow-hidden">
          <div className="flex flex-col md:flex-row">
            {/* Left Column */}
            <div className="flex-1 p-8 md:p-12 flex flex-col gap-6">
              <h2 className="font-pixel text-4xl md:text-5xl text-[var(--fg)]">
                Meet the Google Developer Group Team
              </h2>
              <p className="font-body text-lg text-[var(--fg)]">
                Google Developer Groups (GDG) are open and volunteer-run communities for developers interested in Google technologies. Our team focuses on learning, networking, and collaboration through events and hands-on sessions.
              </p>
              
              <div className="space-y-6 mt-4">
                <div className="flex gap-4 items-start">
                  <CheckCircle2 className="text-gdg-green flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="font-bold text-[var(--fg)] text-lg">Passionate Community Leaders</h3>
                    <p className="text-[var(--fg)]/80 mt-1">Our organizers build an inclusive environment where developers can connect, share knowledge, and grow together.</p>
                  </div>
                </div>
                
                <div className="flex gap-4 items-start">
                  <CheckCircle2 className="text-gdg-blue flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="font-bold text-[var(--fg)] text-lg">Empowering Developers</h3>
                    <p className="text-[var(--fg)]/80 mt-1">We host meetups and codelabs to help developers stay current with modern tools and best practices.</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right Column: Image */}
            <div className="flex-1 min-h-[300px] md:min-h-full relative border-t-2 md:border-t-0 md:border-l-2 border-[var(--fg)]">
              <Image 
                src="/images/team.jpg" 
                alt="GDG Team"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
