import { Search } from "lucide-react";

export function Hero() {
  return (
    <section id="home" className="w-full py-12 md:py-24">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-12 lg:gap-24">
        {/* Left Side */}
        <div className="flex-1 flex flex-col items-start gap-6">
          <h1 className="font-pixel text-4xl md:text-5xl lg:text-7xl leading-[1.1] text-[var(--fg)] uppercase">
            GOOGLE DEVELOPER<br className="hidden md:block" /> GROUPS, RBU
          </h1>
          <p className="font-mono2 text-lg md:text-xl text-[var(--fg)] max-w-lg">
            Empowering students with cutting-edge tech skills, community, and resources for a future in technology
          </p>
          <div className="flex flex-wrap items-center gap-4 mt-2">
            <button className="rounded-lg px-6 py-3 font-bold text-[var(--fg)] border-2 border-[var(--fg)] shadow-[4px_4px_0_0_var(--fg)] hover:translate-y-1 hover:translate-x-1 hover:shadow-[2px_2px_0_0_var(--fg)] transition-all bg-transparent focus-visible:ring-2 focus-visible:ring-[var(--fg)] focus-visible:outline-none">
              LEARN MORE
            </button>
            <button className="rounded-lg px-6 py-3 font-bold text-[var(--fg)] border-2 border-[var(--fg)] shadow-[4px_4px_0_0_var(--fg)] hover:translate-y-1 hover:translate-x-1 hover:shadow-[2px_2px_0_0_var(--fg)] transition-all bg-transparent focus-visible:ring-2 focus-visible:ring-[var(--fg)] focus-visible:outline-none">
              PROFILE
            </button>
          </div>
          <div className="mt-4 inline-block bg-[var(--fg)] text-[var(--bg)] font-bold px-5 py-2 -rotate-6 border-2 border-[var(--fg)]">
            GDG • RBU
          </div>
        </div>

        {/* Right Side */}
        <div className="flex-1 w-full max-w-[500px] flex items-center justify-center relative">
          <svg viewBox="0 0 400 400" className="w-full h-auto text-[var(--fg)]" xmlns="http://www.w3.org/2000/svg">
            <path d="M 200 40 L 320 40 A 40 40 0 0 1 360 80 L 360 240 A 40 40 0 0 1 320 280 L 280 280 A 40 40 0 0 0 240 320 A 40 40 0 0 1 200 360 L 80 360 A 40 40 0 0 1 40 320 L 40 160 A 40 40 0 0 1 80 120 L 120 120 A 40 40 0 0 0 160 80 A 40 40 0 0 1 200 40 Z" fill="currentColor" />
          </svg>
          <div className="absolute bg-white rounded-full flex items-center px-5 py-3 w-3/4 max-w-[320px] shadow-[4px_4px_0_0_var(--fg)] border-2 border-[var(--fg)]">
            <Search className="text-gray-500 mr-2" size={20} />
            <input 
              type="text" 
              placeholder="gdgr" 
              className="bg-transparent outline-none text-black w-full font-body placeholder:text-gray-400 text-lg"
              readOnly
            />
          </div>
        </div>
      </div>
    </section>
  );
}
