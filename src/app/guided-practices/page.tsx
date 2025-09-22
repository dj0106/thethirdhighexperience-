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

        {/* Content */}
        <main className="max-w-5xl mx-auto px-6 pt-32 pb-16">
          <h1 className="text-4xl md:text-5xl font-light text-white mb-4">Guided Practices</h1>
          <p className="text-white/80 mb-10">
            Explore AUM Chanting, Shoonyata Meditation, and more. New sessions are added regularly.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <section className="bg-slate-800/50 backdrop-blur-sm rounded-lg border border-white/10 hover:border-yellow-400/30 transition p-6">
              <h2 className="text-2xl text-white mb-2">AUM Chanting</h2>
              <p className="text-white/70 mb-4">Guided AUM chanting to align with the cosmic vibration.</p>
              <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-medium px-6 py-2 rounded-full">Start</button>
            </section>

            <section className="bg-slate-800/50 backdrop-blur-sm rounded-lg border border-white/10 hover:border-yellow-400/30 transition p-6">
              <h2 className="text-2xl text-white mb-2">Shoonyata Meditation</h2>
              <p className="text-white/70 mb-4">A guided journey into stillness and awareness.</p>
              <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-medium px-6 py-2 rounded-full">Start</button>
            </section>

            <section className="bg-slate-800/50 backdrop-blur-sm rounded-lg border border-white/10 hover:border-yellow-400/30 transition p-6">
              <h2 className="text-2xl text-white mb-2">Breath Awareness</h2>
              <p className="text-white/70 mb-4">Simple guided practice to center attention on the breath.</p>
              <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-medium px-6 py-2 rounded-full">Start</button>
            </section>
          </div>
        </main>

        {/* Footer */}
        <FooterSection />
      </div>
    </MeditationProvider>
  );
}

