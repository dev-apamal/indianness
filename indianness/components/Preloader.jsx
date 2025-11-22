"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Preloader (client) — shows once per session by default.
 *
 * Props:
 * - minDuration (ms)
 * - logoSrc, portraitSrc, quote, quoteAuthor
 * - oncePerSession (boolean) — default true
 */
export default function Preloader({
  minDuration = 3500,
  logoSrc = "/logo.svg",
  portraitSrc = "/portrait-sketch.jpg",
  quote = `I never imagined this institution would achieve such remarkable progress...`,
  quoteAuthor = "MT Vasudevan Nair",
  background = "bg-white",
  oncePerSession = false,
}) {
  const [visible, setVisible] = useState(true); // whether to render
  const [fade, setFade] = useState(false); // fade-out class
  const startedAt = useRef(Date.now());

  // If oncePerSession, check sessionStorage on initial render
  useEffect(() => {
    if (!oncePerSession) return;
    try {
      const shown = sessionStorage.getItem("preloader_shown_v1");
      if (shown) {
        // already shown in this session — don't render at all
        setVisible(false);
      }
    } catch (e) {
      // ignore storage errors
    }
    // no dependency — run once
  }, [oncePerSession]);

  useEffect(() => {
    if (!visible) return; // don't run hide logic if already hidden

    let loaded = false;
    let minDone = false;
    let minTimer;

    const tryFinish = () => {
      if (loaded && minDone) {
        // mark session as shown
        try {
          if (oncePerSession) sessionStorage.setItem("preloader_shown_v1", "1");
        } catch (e) {}
        setFade(true);
        setTimeout(() => setVisible(false), 420);
      }
    };

    // min-duration timer (respects time already elapsed)
    const elapsed = Date.now() - startedAt.current;
    const remaining = Math.max(0, minDuration - elapsed);
    minTimer = setTimeout(() => {
      minDone = true;
      tryFinish();
    }, remaining);

    // page load fallback
    if (typeof window !== "undefined") {
      if (document.readyState === "complete") {
        loaded = true;
        tryFinish();
      } else {
        const onLoad = () => {
          loaded = true;
          tryFinish();
          window.removeEventListener("load", onLoad);
        };
        window.addEventListener("load", onLoad);
      }
    }

    return () => {
      clearTimeout(minTimer);
      try {
        window.removeEventListener("load", () => {});
      } catch (e) {}
    };
  }, [minDuration, oncePerSession, visible]);

  if (!visible) return null;

  const maroon = "#8b1d1d";

  return (
    <div
      role="status"
      aria-live="polite"
      className={`fixed inset-0 z-50 flex items-center justify-center p-6 ${background} transition-opacity duration-300 ${
        fade ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="w-full max-w-7xl mx-auto">
        <div>
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
            <div className="order-2 md:order-1 md:w-1/2 flex justify-center md:justify-start">
              <img
                src={portraitSrc}
                alt="MT Vasudevan Nair"
                aria-hidden="true"
                className="block max-w-full w-64 sm:w-80 md:w-auto object-contain"
                style={{ maxHeight: "800px", objectFit: "contain" }}
              />
            </div>

            <div className="order-1 md:order-2 md:w-1/2">
              <div className="flex justify-start mb-8">
                <img
                  src={logoSrc}
                  alt="Indianness Academy logo"
                  className="h-12 object-contain"
                />
              </div>
              {/* <div className="px-4 md:px-0"> */}
              <div className="">
                <blockquote className="text-left">
                  <p
                    className="text-2xl sm:text-2xl md:text-2xl lg:text-3xl leading-relaxed text-gray-900"
                    style={{ fontFamily: "Georgia, serif" }}
                  >
                    “{quote}”
                  </p>
                </blockquote>

                <p
                  className="mt-6 text-lg"
                  style={{ color: maroon, fontFamily: "Georgia, serif" }}
                >
                  {quoteAuthor}
                </p>
              </div>
              <div className="flex items-center justify-start mt-8">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 animate-spin">
                    <svg viewBox="0 0 24 24" className="w-full h-full">
                      <circle
                        cx="12"
                        cy="12"
                        r="9"
                        stroke="#e5e7eb"
                        strokeWidth="2.5"
                        fill="none"
                      />
                      <path
                        d="M21 12a9 9 0 0 0-9-9"
                        stroke="#111827"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                  <span className="text-gray-600">Loading…</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* loader */}
      </div>
    </div>
  );
}

// "use client";
// // import { useEffect, useState, useRef } from "react";

// // export default function Preloader({
// //   minDuration = 3000,
// //   quote = "Simplicity is the ultimate sophistication.",
// //   quoteAuthor = "— Leonardo da Vinci",
// // }) {
// //   const [show, setShow] = useState(true);
// //   const [fade, setFade] = useState(false);
// //   const start = useRef(Date.now());

// //   useEffect(() => {
// //     let loaded = false;
// //     let minDone = false;

// //     const finish = () => {
// //       if (loaded && minDone) {
// //         setFade(true);
// //         setTimeout(() => setShow(false), 400);
// //       }
// //     };

// //     // Minimum duration timer
// //     setTimeout(() => {
// //       minDone = true;
// //       finish();
// //     }, minDuration);

// //     // Window load
// //     if (document.readyState === "complete") {
// //       loaded = true;
// //       finish();
// //     } else {
// //       const onLoad = () => {
// //         loaded = true;
// //         finish();
// //         window.removeEventListener("load", onLoad);
// //       };
// //       window.addEventListener("load", onLoad);
// //     }
// //   }, [minDuration]);

// //   if (!show) return null;

// //   return (
// //     <div
// //       className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-white transition-opacity duration-300 ${
// //         fade ? "opacity-0" : "opacity-100"
// //       }`}
// //     >
// //       {/* Sketch Illustration */}
// //       <div className="w-32 h-32 mb-6">
// //         <svg viewBox="0 0 120 120" className="w-full h-full">
// //           <rect width="120" height="120" rx="18" fill="#f9f6f2" />
// //           <g
// //             stroke="#222"
// //             strokeWidth="1.6"
// //             fill="none"
// //             strokeLinecap="round"
// //             strokeLinejoin="round"
// //           >
// //             <path
// //               d="M60 36c5 0 9 4 9 9s-4 9-9 9-9-4-9-9 4-9 9-9z"
// //               strokeDasharray="2 2"
// //             />
// //             <path d="M60 54c0 6 0 12 12 18" strokeDasharray="3 2" />
// //             <path d="M60 54c0 6 0 12-12 18" strokeDasharray="3 2" />
// //             <path
// //               d="M48 66 l24 0 l-6 10 l-18 0 z"
// //               fill="#fff7ed"
// //               strokeDasharray="1 2"
// //             />
// //             <ellipse
// //               cx="60"
// //               cy="90"
// //               rx="32"
// //               ry="9"
// //               fill="#fff6ea"
// //               strokeDasharray="4 2"
// //             />
// //           </g>
// //         </svg>
// //       </div>

// //       {/* Quote */}
// //       <p className="text-gray-700 italic text-center px-6 max-w-sm">
// //         “{quote}”
// //       </p>
// //       <p className="text-gray-500 text-sm mt-2">{quoteAuthor}</p>

// //       {/* Loading indicator */}
// //       <div className="mt-6 flex items-center gap-3">
// //         <div className="w-8 h-8 animate-spin">
// //           <svg viewBox="0 0 24 24" className="w-full h-full">
// //             <circle
// //               cx="12"
// //               cy="12"
// //               r="9"
// //               stroke="#ddd"
// //               strokeWidth="2.5"
// //               fill="none"
// //             />
// //             <path
// //               d="M21 12a9 9 0 0 0-9-9"
// //               stroke="#333"
// //               strokeWidth="2.5"
// //               strokeLinecap="round"
// //             />
// //           </svg>
// //         </div>
// //         <span className="text-gray-500 text-sm">Loading…</span>
// //       </div>
// //     </div>
// //   );
// // }

// // components/Preloader.jsx
// import { useEffect, useRef, useState } from "react";

// /**
//  * Preloader that matches the provided desktop & mobile designs.
//  *
//  * Props:
//  * - minDuration (ms) — minimum visible time (default 3500)
//  * - logoSrc — string path to logo image (optional)
//  * - portraitSrc — string path to portrait/sketch image (optional)
//  * - quote — quote text
//  * - quoteAuthor — author text
//  * - background — tailwind classes for background (optional)
//  *
//  * Behavior: exactly the same load + minDuration logic as before.
//  */

// export default function Preloader({
//   minDuration = 3500,
//   logoSrc = "/logo.svg",
//   portraitSrc = "/portrait-sketch.jpg",
//   quote = `I never imagined this institution would achieve such remarkable progress. It's a testament to my friend Samadani’s hard work. The first time I saw this building, I was overcome with a sense of cultural pride. It reminded me of the feeling I had when I passed through Subrahmanya Bharati Street in New Delhi and Shakespeare Street in Calcutta. I salute this magnificent building, a symbol of India's national glory and greatness.`,
//   quoteAuthor = "MT Vasudevan Nair",
//   background = "bg-white",
// }) {
//   const [show, setShow] = useState(true);
//   const [fade, setFade] = useState(false);
//   const start = useRef(Date.now());

//   useEffect(() => {
//     let loaded = false;
//     let minDone = false;

//     const finish = () => {
//       if (loaded && minDone) {
//         setFade(true);
//         setTimeout(() => setShow(false), 420); // same fade timing as before
//       }
//     };

//     // Minimum duration timer
//     const elapsed = Date.now() - start.current;
//     const remaining = Math.max(0, minDuration - elapsed);
//     const minTimer = setTimeout(() => {
//       minDone = true;
//       finish();
//     }, remaining);

//     // Window load
//     if (typeof window !== "undefined") {
//       if (document.readyState === "complete") {
//         loaded = true;
//         finish();
//       } else {
//         const onLoad = () => {
//           loaded = true;
//           finish();
//           window.removeEventListener("load", onLoad);
//         };
//         window.addEventListener("load", onLoad);
//       }
//     }

//     return () => {
//       clearTimeout(minTimer);
//       try {
//         window.removeEventListener("load", () => {});
//       } catch (e) {}
//     };
//   }, [minDuration]);

//   if (!show) return null;

//   return (
//     <div
//       role="status"
//       aria-live="polite"
//       className={`fixed inset-0 z-50 flex items-center justify-center p-6 ${background} transition-opacity duration-300 ${
//         fade ? "opacity-0" : "opacity-100"
//       }`}
//     >
//       <div className="w-full max-w-7xl mx-auto">
//         {/* Logo (centered) */}

//         {/* Main content: responsive — two-column on md+; stacked on mobile */}
//         <div className="bg-transparent">
//           <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
//             {/* Left column: portrait (on desktop) — on mobile portrait will appear below via order */}
//             <div className="order-2 md:order-1 md:w-1/2 flex justify-center md:justify-start">
//               {/* portraitSrc should be a high-res sketch with transparent or white background */}
//               <img
//                 src={portraitSrc}
//                 alt=""
//                 aria-hidden="true"
//                 className="block max-w-full w-64 sm:w-80 md:w-auto object-contain"
//                 style={{ maxHeight: "600px", objectFit: "contain" }}
//               />
//             </div>

//             {/* Right column: quote + author */}
//             <div className="order-1 md:order-2 md:w-1/2">
//               <div className="px-4 md:px-0">
//                 <div className="flex justify-start mb-8">
//                   <img
//                     src={logoSrc}
//                     alt="Indianness Academy logo"
//                     className="h-12 object-contain"
//                   />
//                 </div>
//                 <blockquote className="text-left">
//                   <h4 className="text-lg sm:text-xl md:text-2xl leading-relaxed text-foreground">
//                     “{quote}”
//                   </h4>
//                 </blockquote>

//                 <p className="mt-6 text-base text-red-700">{quoteAuthor}</p>
//               </div>
//               <div className="flex items-center justify-start mt-8">
//                 <div className="flex items-center gap-3">
//                   <div className="w-8 h-8 animate-spin">
//                     <svg viewBox="0 0 24 24" className="w-full h-full">
//                       <circle
//                         cx="12"
//                         cy="12"
//                         r="9"
//                         stroke="#e5e7eb"
//                         strokeWidth="2.5"
//                         fill="none"
//                       />
//                       <path
//                         d="M21 12a9 9 0 0 0-9-9"
//                         stroke="#95191B"
//                         strokeWidth="2.5"
//                         strokeLinecap="round"
//                       />
//                     </svg>
//                   </div>
//                   <span className="text-background">Loading…</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Loading indicator centered below content (to match the feel of preloader) */}
//       </div>
//     </div>
//   );
// }
