"use client";

import Navigation from "@/components/ui/Navigation";
import StarsBackground from "@/components/ui/StarsBackground";
import FooterSection from "@/components/sections/FooterSection";
import { MeditationProvider } from "@/contexts/MeditationContext";

export default function GuidedPracticesPage() {
  return (
    <MeditationProvider>
      <div className="relative min-h-screen" style={{ background: "rgba(16, 33, 43, 1)" }}>
        {/* Stars Background */}
        <StarsBackground />

        {/* Navigation */}
        <Navigation />

        {/* Hero */}
        <main className="relative min-h-[90vh] flex flex-col items-center justify-center pt-28 pb-24 overflow-hidden">
          {/* Decorative side lines */}
          <div aria-hidden className="pointer-events-none absolute inset-y-20 left-4 right-4">
            <div className="absolute inset-y-0 left-0 w-px bg-white/20" />
            <div className="absolute inset-y-0 right-0 w-px bg-white/20" />
          </div>

          {/* Concentric glow background */}
          <div aria-hidden className="absolute -z-0 top-24 left-1/2 -translate-x-1/2 select-none">
            <div
              className="rounded-full"
              style={{
                width: 520,
                height: 520,
                filter: "blur(0.5px)",
                background:
                  "radial-gradient(closest-side, rgba(255,220,65,0.7), rgba(255,220,65,0.0) 70%),\n radial-gradient(closest-side, rgba(255,220,65,0.45), rgba(255,220,65,0.0) 55%),\n                   radial-gradient(closest-side, rgba(255,220,65,0.25), rgba(255,220,65,0.0) 40%)",
                boxShadow:
                  "0 0 80px 20px rgba(255,220,65,0.25), 0 0 160px 40px rgba(255,220,65,0.18)",
              }}
            />
            {/* Sun burst */}
            <div className="absolute inset-0 grid place-items-center">
              <svg width="420" height="360" viewBox="0 0 696 599" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#f)">
                  <path d="M446 346.395L371.613 348.442L374.641 349H321.359L324.387 348.442L250 346.395L324.387 344.348L251.514 329.647L325.144 340.347L255.868 313.457L326.564 336.532L263.155 298.197L328.551 333.089L272.903 284.427L331.296 329.926L285.017 272.61L334.419 327.32L299.024 262.933L338.015 325.273L314.45 255.862L341.896 323.878L331.012 251.489L345.965 323.227L348.047 250L350.035 323.227L364.988 251.489L354.104 323.878L381.55 255.862L357.985 325.273L397.071 262.933L361.581 327.32L410.983 272.61L364.799 329.926L423.097 284.427L367.449 333.089L432.94 298.197L369.531 336.532L440.132 313.457L370.95 340.347L444.58 329.647L371.613 344.348L446 346.395Z" fill="#FFDC41"/>
                </g>
                <defs>
                  <filter id="f" x="0" y="0" width="696" height="599" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="b"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset/>
                    <feGaussianBlur stdDeviation="125"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.86345 0 0 0 0 0.255183 0 0 0 0.5 0"/>
                    <feBlend mode="normal" in2="b" result="effect1_dropShadow"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
                  </filter>
                </defs>
              </svg>
            </div>
          </div>

          {/* Top title */}
          <h2 className="relative z-10 text-white text-2xl md:text-3xl font-semibold tracking-wide drop-shadow-md mb-10">
            Initiation into Awareness
          </h2>

          {/* Giant faint word */}
          <div className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 text-center select-none">
            <span
              className="text-white/5 font-[\'Bodoni\',serif]"
              style={{ fontSize: "22vw", letterSpacing: "0.02em", WebkitTextStroke: "1px rgba(255,255,255,0.2)", color: "transparent" }}
            >
              Level
            </span>
          </div>

          {/* Level badge */}
          <div className="relative z-10 mb-8">
            <div className="bg-yellow-400 text-black px-12 py-3 text-xl md:text-2xl font-medium rounded-full shadow-[0_10px_40px_rgba(255,220,65,0.35)]">
              Level 1
            </div>
          </div>

          {/* Description */}
          <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
            <p className="text-white/90 text-base md:text-lg leading-7 md:leading-8">
              Discover the Path to Inner Transformation<br/>
              Embark on a profound journey into Shiva Consciousness with The Third High Experience – Level 1.
              This comprehensive guide invites you to explore the ancient practices of Shoonyata Meditation (the
              art of becoming nothing) and AUM Chanting (the cosmic vibration), blending timeless wisdom from
              the Mandukya Upanishad and yogic traditions to awaken your true self.
            </p>
          </div>

          {/* Get PDF CTA */}
          <div className="relative z-10 mt-8">
            <button
              type="button"
              className="inline-block bg-yellow-400 hover:bg-yellow-500 text-black font-medium px-6 py-2 rounded-full shadow-md transition-colors"
              aria-label="Get Level 1 PDF"
            >
              Get PDF
            </button>
          </div>
        </main>

        {/* Level 2 Section */}
        <section className="relative min-h-[85vh] flex flex-col items-center justify-center py-24 overflow-hidden">
          {/* Decorative side lines */}
          <div aria-hidden className="pointer-events-none absolute inset-y-16 left-6 right-6">
            <div className="absolute inset-y-0 left-0 w-px bg-white/20" />
            <div className="absolute inset-y-0 right-0 w-px bg-white/20" />
          </div>

          {/* Concentric glow background (warm) */}
          <div aria-hidden className="absolute -z-0 top-24 left-1/2 -translate-x-1/2 select-none">
            <div
              className="rounded-full"
              style={{
                width: 520,
                height: 520,
                filter: "blur(0.6px)",
                background:
                  "radial-gradient(closest-side, rgba(255,107,107,0.70), rgba(255,107,107,0.0) 70%),\n radial-gradient(closest-side, rgba(255,166,63,0.45), rgba(255,166,63,0.0) 55%),\n                   radial-gradient(closest-side, rgba(255,86,155,0.25), rgba(255,86,155,0.0) 40%)",
                boxShadow:
                  "0 0 80px 20px rgba(255,107,107,0.20), 0 0 160px 40px rgba(255,86,155,0.18)",
              }}
            />
            <div className="absolute inset-0 grid place-items-center">
              <svg width="420" height="360" viewBox="0 0 696 599" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#f)">
                  <path d="M446 346.395L371.613 348.442L374.641 349H321.359L324.387 348.442L250 346.395L324.387 344.348L251.514 329.647L325.144 340.347L255.868 313.457L326.564 336.532L263.155 298.197L328.551 333.089L272.903 284.427L331.296 329.926L285.017 272.61L334.419 327.32L299.024 262.933L338.015 325.273L314.45 255.862L341.896 323.878L331.012 251.489L345.965 323.227L348.047 250L350.035 323.227L364.988 251.489L354.104 323.878L381.55 255.862L357.985 325.273L397.071 262.933L361.581 327.32L410.983 272.61L364.799 329.926L423.097 284.427L367.449 333.089L432.94 298.197L369.531 336.532L440.132 313.457L370.95 340.347L444.58 329.647L371.613 344.348L446 346.395Z" fill="#FF6B6B"/>
                </g>
                <defs>
                  <filter id="f" x="0" y="0" width="696" height="599" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="b"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset/>
                    <feGaussianBlur stdDeviation="125"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.86345 0 0 0 0 0.255183 0 0 0 0.5 0"/>
                    <feBlend mode="normal" in2="b" result="effect1_dropShadow"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
                  </filter>
                </defs>
              </svg>
            </div>
          </div>

          {/* Giant faint word */}
          <div className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 text-center select-none">
            <span
              className="text-white/5 font-['Bodoni',serif]"
              style={{ fontSize: "22vw", letterSpacing: "0.02em", WebkitTextStroke: "1px rgba(255,255,255,0.2)", color: "transparent" }}
            >
              Level
            </span>
          </div>

          {/* Level badge */}
          <div className="relative z-10 mb-8">
            <div className="bg-rose-400/90 text-white px-12 py-3 text-xl md:text-2xl font-medium rounded-full shadow-[0_10px_40px_rgba(244,63,94,0.35)]">
              Level 2
            </div>
          </div>

          {/* Description */}
          <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
            <p className="text-white/90 text-base md:text-lg leading-7 md:leading-8">
              Discover the Path to Inner Transformation<br/>
              Embark on a profound journey into Shiva Consciousness with The Third High Experience – Level 2.
              Deepen your practice through mantra, silence, and breath to stabilize awareness across states of consciousness.
            </p>
          </div>

          {/* Get PDF CTA */}
          <div className="relative z-10 mt-8">
            <button type="button" className="inline-block bg-rose-400 hover:bg-rose-500 text-white font-medium px-6 py-2 rounded-full shadow-md transition-colors" aria-label="Get Level 2 PDF">
              Get PDF
            </button>
          </div>
        </section>

        {/* Level 3 Section */}
        <section className="relative min-h-[85vh] flex flex-col items-center justify-center py-24 overflow-hidden">
          {/* Decorative side lines */}
          <div aria-hidden className="pointer-events-none absolute inset-y-16 left-6 right-6">
            <div className="absolute inset-y-0 left-0 w-px bg-white/20" />
            <div className="absolute inset-y-0 right-0 w-px bg-white/20" />
          </div>

          {/* Concentric glow background (cool) */}
          <div aria-hidden className="absolute -z-0 top-24 left-1/2 -translate-x-1/2 select-none">
            <div
              className="rounded-full"
              style={{
                width: 520,
                height: 520,
                filter: "blur(0.6px)",
                background:
                  "radial-gradient(closest-side, rgba(123,97,255,0.70), rgba(123,97,255,0.0) 70%),\n radial-gradient(closest-side, rgba(155,93,229,0.45), rgba(155,93,229,0.0) 55%),\n                   radial-gradient(closest-side, rgba(80,160,255,0.25), rgba(80,160,255,0.0) 40%)",
                boxShadow:
                  "0 0 80px 20px rgba(123,97,255,0.22), 0 0 160px 40px rgba(155,93,229,0.20)",
              }}
            />
            <div className="absolute inset-0 grid place-items-center">
              <svg width="420" height="360" viewBox="0 0 696 599" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#f)">
                  <path d="M446 346.395L371.613 348.442L374.641 349H321.359L324.387 348.442L250 346.395L324.387 344.348L251.514 329.647L325.144 340.347L255.868 313.457L326.564 336.532L263.155 298.197L328.551 333.089L272.903 284.427L331.296 329.926L285.017 272.61L334.419 327.32L299.024 262.933L338.015 325.273L314.45 255.862L341.896 323.878L331.012 251.489L345.965 323.227L348.047 250L350.035 323.227L364.988 251.489L354.104 323.878L381.55 255.862L357.985 325.273L397.071 262.933L361.581 327.32L410.983 272.61L364.799 329.926L423.097 284.427L367.449 333.089L432.94 298.197L369.531 336.532L440.132 313.457L370.95 340.347L444.58 329.647L371.613 344.348L446 346.395Z" fill="#9B5DE5"/>
                </g>
                <defs>
                  <filter id="f" x="0" y="0" width="696" height="599" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="b"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset/>
                    <feGaussianBlur stdDeviation="125"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.86345 0 0 0 0 0.255183 0 0 0 0.5 0"/>
                    <feBlend mode="normal" in2="b" result="effect1_dropShadow"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
                  </filter>
                </defs>
              </svg>
            </div>
          </div>

          {/* Giant faint word */}
          <div className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 text-center select-none">
            <span
              className="text-white/5 font-['Bodoni',serif]"
              style={{ fontSize: "22vw", letterSpacing: "0.02em", WebkitTextStroke: "1px rgba(255,255,255,0.2)", color: "transparent" }}
            >
              Level
            </span>
          </div>

          {/* Level badge */}
          <div className="relative z-10 mb-8">
            <div className="bg-indigo-400/90 text-white px-12 py-3 text-xl md:text-2xl font-medium rounded-full shadow-[0_10px_40px_rgba(129,140,248,0.35)]">
              Level 3
            </div>
          </div>

          {/* Description */}
          <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
            <p className="text-white/90 text-base md:text-lg leading-7 md:leading-8">
              Discover the Path to Inner Transformation<br/>
              The Third High Experience – Level 3 integrates advanced meditations and contemplations to
              refine inner stability and presence across all states of consciousness.
            </p>
          </div>

          {/* Get PDF CTA */}
          <div className="relative z-10 mt-8">
            <button type="button" className="inline-block bg-indigo-400 hover:bg-indigo-500 text-white font-medium px-6 py-2 rounded-full shadow-md transition-colors" aria-label="Get Level 3 PDF">
              Get PDF
            </button>
          </div>
        </section>
        {/* Footer */}
        <FooterSection />
      </div>
    </MeditationProvider>
  );
}
