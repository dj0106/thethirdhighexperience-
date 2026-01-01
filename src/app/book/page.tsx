"use client";

import Navigation from "@/components/ui/Navigation";
import StarsBackground from "@/components/ui/StarsBackground";
import FooterSection from "@/components/sections/FooterSection";
import { MeditationProvider } from "@/contexts/MeditationContext";

export default function BookPage() {
  return (
    <MeditationProvider>
      <div className="relative min-h-screen" style={{ background: "rgba(16, 33, 43, 1)" }}>
        {/* Stars Background */}
        <StarsBackground />

        {/* Navigation */}
        <Navigation />

        {/* Content */}
        <main className="relative max-w-4xl mx-auto px-6 pt-32 pb-24 text-center min-h-screen">
          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-light text-white mb-4">
            The Third High: Experience Shiva Within
          </h1>

          {/* Paragraph - Positioned in the middle */}
          <p className="text-white/80 max-w-3xl mx-auto leading-relaxed absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-6 text-lg z-20">
            Within these pages lies a path of awakening — a synthesis of yogic wisdom and living experience. It leads the seeker from the first spark of awareness to the vast expanse of inner stillness, where the illusion of separation dissolves and the infinite is revealed as one’s true nature.
          </p>

          {/* Decorative mandala + glow behind the book */}
          <div className="relative flex items-center justify-center my-8">
            {/* Glow */}
            <div aria-hidden className="absolute -z-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <div
                className="rounded-full"
                style={{
                  width: 520,
                  height: 520,
                  filter: "blur(0.6px)",
                  background:
                    "radial-gradient(closest-side, rgba(255,213,0,0.45), rgba(255,213,0,0.0) 70%),\n radial-gradient(closest-side, rgba(255,170,0,0.30), rgba(255,170,0,0.0) 55%),\n                   radial-gradient(closest-side, rgba(255,235,59,0.20), rgba(255,235,59,0.0) 40%)",
                  boxShadow:
                    "0 0 80px 20px rgba(255,200,0,0.25), 0 0 160px 40px rgba(255,170,0,0.20)",
                }}
              />
            </div>

            {/* Ornamental mandala image */}
            <div aria-hidden className="absolute -z-0 inset-0 flex items-center justify-center select-none opacity-90">
              <img src="/images/backgrounds/BookDesign2.png" alt="" className="w-[520px] h-[520px] object-contain" />
            </div>

            {/* Book cover */}
            <div className="relative z-10">
              <img
                src="/images/backgrounds/image.png"
                alt="The Third High: Experience Shiva Within book cover"
                className="w-[360px] h-auto rounded-md shadow-2xl"
              />
            </div>
          </div>

          {/* CTA */}
          <div className="relative z-10 mt-6">
            <a
              href="https://amzn.in/d/gvXojEK"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-yellow-400 hover:bg-yellow-500 text-black font-medium px-8 py-3 rounded-full shadow-md transition-colors"
            >
              Get eBook
            </a>
          </div>
        </main>

        {/* Footer */}
        <FooterSection />
      </div>
    </MeditationProvider>
  );
}

