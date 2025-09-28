"use client";

import Navigation from "@/components/ui/Navigation";
import StarsBackground from "@/components/ui/StarsBackground";
import FooterSection from "@/components/sections/FooterSection";
import { MeditationProvider } from "@/contexts/MeditationContext";
import Link from "next/link";
import { posts } from "./posts";

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

          {/* Articles list */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {posts.map((post) => (
              <article key={post.slug} className="bg-slate-800/50 backdrop-blur-sm rounded-lg border border-white/10 hover:border-yellow-400/30 transition p-6">
                <h2 className="text-2xl text-white mb-2">{post.title}</h2>
                <p className="text-white/60 text-sm mb-2">{post.date}</p>
                <p className="text-white/80 mb-4">{post.excerpt}</p>
                <Link href={`/blogs/${post.slug}`} className="text-yellow-400 hover:text-yellow-300">Read more</Link>
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

