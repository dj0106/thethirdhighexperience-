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
        <main className="max-w-5xl mx-auto px-6 pt-32 pb-16">
          <h1 className="text-4xl md:text-5xl font-light text-white mb-4">The Third High: Experience Shiva Within</h1>
          <p className="text-white/80 mb-10 max-w-3xl">
            Within these pages lies a path of awakening — a synthesis of yogic wisdom and living experience. It leads the seeker from the first spark of awareness to the vast expanse of inner stillness, where the illusion of separation dissolves and the infinite is revealed as one’s true nature.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <section className="bg-slate-800/50 backdrop-blur-sm rounded-lg border border-white/10 hover:border-yellow-400/30 transition p-6">
              <h2 className="text-2xl text-white mb-2">Get the Book</h2>
              <p className="text-white/70 mb-4">Print and digital editions will be available shortly.</p>
            </section>
            <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-medium px-8 py-3 rounded-full transition-colors text-lg mb-20">
              Get Ebook
            </button>
          </div>
        </main>

        {/* Footer */}
        <FooterSection />
      </div>
    </MeditationProvider>
  );
}

