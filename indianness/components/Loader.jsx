"use client";
import React, { useState, useEffect } from "react";

export default function SplashScreen() {
  const [loading, setLoading] = useState(true);
  const [showButton, setShowButton] = useState(false);
  const [isExiting, setIsExiting] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // 1. Lock body scroll when component mounts
    document.body.style.overflow = "hidden";

    // 2. Sequence the loading states
    const timer = setTimeout(() => {
      setLoading(false);
      // Delay button appearance slightly for smooth transition
      setTimeout(() => setShowButton(true), 600);
    }, 4500); // Total loading time

    return () => clearTimeout(timer);
  }, []);

  const handleEnter = () => {
    // 3. Trigger exit animation (slide up)
    setIsExiting(true);

    // 4. Wait for animation to finish, then unmount and unlock scroll
    setTimeout(() => {
      setIsVisible(false);
      document.body.style.overflow = "auto"; // Restore scrolling
    }, 1000);
  };

  // If animation is done, do not render anything
  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-9999 w-full h-full bg-[#FDFBF7] flex flex-col items-center justify-between overflow-hidden font-serif text-black transition-transform duration-1000 ease-in-out ${
        isExiting ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      {/* FIX: Using standard style tag via dangerouslySetInnerHTML 
         to avoid hydration mismatches caused by 'style jsx' 
      */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @import url('https://fonts.googleapis.com/css2?family=Karma:wght@400;600;700&family=Rozha+One&display=swap');
        .font-karma { font-family: 'Karma', serif; }
        .font-rozha { font-family: 'Rozha One', serif; }
        
        /* Khadi Texture Effect */
        .bg-khadi {
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.3'/%3E%3C/svg%3E");
        }
        
        /* Animations */
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-up {
          animation: fadeInUp 1.4s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
        }

        @keyframes breathe {
            0%, 100% { opacity: 0.05; transform: scale(1); }
            50% { opacity: 0.08; transform: scale(1.05); }
        }
        .animate-breathe {
            animation: breathe 8s ease-in-out infinite;
        }
      `,
        }}
      />

      {/* Background Elements */}
      <div className="absolute inset-0 bg-khadi opacity-40 pointer-events-none z-0 mix-blend-multiply"></div>

      {/* Corner Rangoli Pattern - Top Left */}
      <div className="absolute top-0 left-0 w-48 h-48 md:w-64 md:h-64 opacity-5 pointer-events-none animate-breathe">
        <svg
          viewBox="0 0 100 100"
          fill="none"
          stroke="currentColor"
          className="text-[#FF9933]"
        >
          <path d="M0 0 Q50 0 50 50 T100 100" strokeWidth="0.5" />
          <circle cx="0" cy="0" r="30" strokeWidth="0.5" />
          <circle cx="0" cy="0" r="50" strokeWidth="0.3" />
          <circle cx="0" cy="0" r="70" strokeWidth="0.2" />
          <path d="M0 0 L100 100" strokeWidth="0.2" opacity="0.5" />
        </svg>
      </div>

      {/* Corner Rangoli Pattern - Bottom Right */}
      <div
        className="absolute bottom-0 right-0 w-48 h-48 md:w-64 md:h-64 opacity-5 pointer-events-none transform rotate-180 animate-breathe"
        style={{ animationDelay: "4s" }}
      >
        <svg
          viewBox="0 0 100 100"
          fill="none"
          stroke="currentColor"
          className="text-[#138808]"
        >
          <path d="M0 0 Q50 0 50 50 T100 100" strokeWidth="0.5" />
          <circle cx="0" cy="0" r="30" strokeWidth="0.5" />
          <circle cx="0" cy="0" r="50" strokeWidth="0.3" />
          <circle cx="0" cy="0" r="70" strokeWidth="0.2" />
        </svg>
      </div>

      {/* Main Content Container */}
      <main className="flex-1 w-full max-w-6xl flex flex-col items-center justify-between py-12 px-6 z-10 relative h-full">
        {/* TOP: Gandhi Portrait */}
        <div className="flex-1 flex items-end pb-6 md:pb-0 md:items-center justify-center w-full">
          <div className="relative group animate-fade-up">
            <div className="relative w-40 h-40 md:w-60 md:h-60 rounded-full overflow-hidden border-[6px] border-[#FDFBF7] ring-1 ring-black/10 shadow-2xl z-10 transition-transform duration-1000 hover:scale-105">
              <img
                src="http://googleusercontent.com/image_generation_content/0"
                alt="Mahatma Gandhi"
                className="w-full h-full object-cover filter contrast-[1.05] sepia-[.15]"
              />
            </div>
            {/* Subtle Color Aura */}
            <div className="absolute inset-0 -m-4 bg-linear-to-br from-orange-100/30 to-green-100/30 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
          </div>
        </div>

        {/* CENTER: The Quote */}
        <div className="flex-none md:flex-1 flex flex-col items-center justify-center w-full max-w-4xl text-center relative mt-8 md:mt-0">
          <div
            className={`transition-all duration-1000 transform ease-out ${
              loading
                ? "translate-y-8 opacity-0 blur-sm"
                : "translate-y-0 opacity-100 blur-0"
            }`}
          >
            <div className="relative inline-block">
              <span className="absolute -top-6 -left-6 md:-top-10 md:-left-10 text-6xl md:text-8xl text-[#FF9933] opacity-20 font-rozha leading-none select-none">
                “
              </span>
              <p className="font-rozha text-2xl md:text-5xl leading-relaxed md:leading-normal text-[#1a1a1a] drop-shadow-sm px-4">
                All of us are Indians first and last. Wherever we live and to
                whatever creed or class or province we belong.
              </p>
              <span className="absolute -bottom-8 -right-4 md:-bottom-12 md:-right-8 text-6xl md:text-8xl text-[#138808] opacity-20 font-rozha leading-none select-none">
                ”
              </span>
            </div>
            <div className="mt-10 flex flex-col items-center opacity-80 hover:opacity-100 transition-opacity duration-500">
              <p className="font-karma font-bold text-xs md:text-sm tracking-[0.4em] uppercase text-[#000080] mb-2">
                Mahatma Gandhi
              </p>
              <div className="w-16 h-px bg-linear-to-r from-transparent via-[#000080] to-transparent opacity-50"></div>
            </div>
          </div>
        </div>

        {/* BOTTOM: True Ashoka Chakra Loader / Action */}
        <div className="flex-1 flex items-end justify-center pb-16 w-full">
          <div className="h-20 flex items-center justify-center relative w-full">
            {/* 24-Spoke Ashoka Chakra Loader */}
            <div
              className={`absolute transition-all duration-1000 ease-out ${
                loading
                  ? "opacity-100 scale-100 rotate-0"
                  : "opacity-0 scale-75 rotate-180 pointer-events-none"
              }`}
            >
              <div className="flex flex-col items-center gap-4">
                <div
                  className="relative w-12 h-12 md:w-14 md:h-14 animate-spin"
                  style={{ animationDuration: "6s" }}
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="w-full h-full text-[#000080]"
                  >
                    {/* Outer Rim */}
                    <circle
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                    {/* Inner Hub */}
                    <circle cx="12" cy="12" r="1.5" fill="currentColor" />
                    {/* 24 Spokes */}
                    {[...Array(24)].map((_, i) => (
                      <line
                        key={i}
                        x1="12"
                        y1="12"
                        x2="12"
                        y2="2"
                        transform={`rotate(${i * 15} 12 12)`}
                        stroke="currentColor"
                        strokeWidth="0.6"
                        strokeLinecap="round"
                      />
                    ))}
                    {/* 24 Semi-circles on rim */}
                    {[...Array(24)].map((_, i) => (
                      <circle
                        key={`dot-${i}`}
                        cx="12"
                        cy="1.5"
                        r="0.3"
                        transform={`rotate(${i * 15} 12 12)`}
                        fill="currentColor"
                      />
                    ))}
                  </svg>
                </div>
                <span className="font-karma text-[10px] tracking-[0.3em] uppercase text-gray-500 animate-pulse">
                  Loading
                </span>
              </div>
            </div>

            {/* Enter Button */}
            <div
              className={`absolute transition-all duration-1000 transform ease-out ${
                showButton
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8 pointer-events-none"
              }`}
            >
              <button
                onClick={handleEnter}
                className="group relative px-12 py-4 bg-transparent overflow-hidden transition-all cursor-pointer"
              >
                <span className="relative z-10 font-karma font-bold text-[#000080] tracking-[0.2em] text-xs md:text-sm group-hover:text-[#FDFBF7] transition-colors duration-500">
                  ENTER WEBSITE
                </span>
                <div className="absolute bottom-0 left-0 w-full h-px bg-[#000080] opacity-30 group-hover:opacity-0 transition-opacity duration-300"></div>
                <div className="absolute inset-0 h-full w-full scale-y-0 group-hover:scale-y-100 origin-bottom transition-transform duration-500 bg-[#000080] ease-[cubic-bezier(0.23,1,0.32,1)]"></div>
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
