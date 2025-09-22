"use client";

import Navigation from "@/components/ui/Navigation";
import StarsBackground from "@/components/ui/StarsBackground";
import FooterSection from "@/components/sections/FooterSection";
import { MeditationProvider } from "@/contexts/MeditationContext";
 
export default function BlogsPage() {
  return (
    <MeditationProvider>
      <div className="relative min-h-screen" style={{ background: "rgba(16, 33, 43, 1)" }}>
        {/* Stars Background */}
        <StarsBackground />

        {/* Navigation */}
        <Navigation />

        {/* Page content */}
        <main className="max-w-5xl mx-auto px-6 pt-28 pb-20">
          <header className="mb-10 text-center">
            <h1 className="text-4xl md:text-5xl font-semibold text-white mb-3">The Third Scroll</h1>
            <p className="text-white/70 text-lg">Guided reflections, timeless wisdom, and living practices to help seekers walk deeper into the path of awakening.</p>
          </header>

          {/* Placeholder articles list */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[1, 2, 3, 4].map((id) => (
              <article key={id} className="bg-slate-800/50 backdrop-blur-sm rounded-lg border border-white/10 hover:border-yellow-400/30 transition p-6">
                <h2 className="text-2xl text-white mb-2">Sample Post {id}</h2>
                <p className="text-white/70 mb-4">
                  Coming soon: writings on Shoonyata Meditation, AUM Chanting, and the Mandukya wisdom in daily life.
                </p>
                <button className="text-yellow-400 hover:text-yellow-300">Read more</button>
              </article>
            ))}
          </div>
        </main>

        {/* Footer */}
        <FooterSection />
      </div>
    </MeditationProvider>
  );
}

