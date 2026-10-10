import { Search } from "lucide-react";

export function Hero() {
  return (
    <section id="home" className="w-full py-12 md:py-24">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-12 lg:gap-24">
        {/* Left Side */}
        <div className="flex-1 flex flex-col items-start gap-6">
          <h1 className="font-pixel text-5xl md:text-7xl leading-[1.1] text-[var(--fg)] uppercase">
            GOOGLE DEVELOPER<br className="hidden md:block" /> GROUPS, RBU
          </h1>
          <p className="font-mono2 text-lg md:text-xl text-[var(--fg)] max-w-lg">
            Empowering students with cutting-edge tech skills, community, and resources for a future in technology
          </p>
          <div className="flex flex-wrap items-center gap-4 mt-2">
            <button className="rounded-lg px-6 py-3 font-bold text-[var(--fg)] border-2 border-[var(--fg)] shadow-[4px_4px_0_0_var(--fg)] hover:translate-y-1 hover:translate-x-1 hover:shadow-[2px_2px_0_0_var(--fg)] transition-all bg-transparent">
              LEARN MORE
            </button>
            <button className="rounded-lg px-6 py-3 font-bold text-[var(--fg)] border-2 border-[var(--fg)] shadow-[4px_4px_0_0_var(--fg)] hover:translate-y-1 hover:translate-x-1 hover:shadow-[2px_2px_0_0_var(--fg)] transition-all bg-transparent">
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
            <rect x="40" y="120" width="200" height="240" rx="40" fill="currentColor" />
            <rect x="160" y="40" width="200" height="240" rx="40" fill="currentColor" />
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
