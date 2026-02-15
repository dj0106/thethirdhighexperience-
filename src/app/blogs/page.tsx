"use client";

import Navigation from "@/components/ui/Navigation";
import StarsBackground from "@/components/ui/StarsBackground";
import FooterSection from "@/components/sections/FooterSection";
import { MeditationProvider } from "@/contexts/MeditationContext";
import Link from "next/link";
import { fetchPosts, type BlogPost } from "./posts";
import { useEffect, useState } from "react";
import { assetUrl } from "@/lib/basePath";

export default function BlogsPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadPosts() {
      const fetchedPosts = await fetchPosts();
      setPosts(fetchedPosts);
      setLoading(false);
    }
    loadPosts();
  }, []);

  return (
    <MeditationProvider>
      <div className="relative min-h-screen" style={{ background: "rgba(16, 33, 43, 1)" }}>
        {/* Stars Background */}
        <StarsBackground />

        {/* Navigation */}
        <Navigation />

        {/* Page content */}
        <main className="max-w-6xl mx-auto px-6 pt-28 pb-20">
          <header className="mb-16 text-center">
            <h1 className="text-4xl md:text-5xl font-semibold text-white mb-3">The Third Scroll</h1>
            <p className="text-white/70 text-lg">Guided reflections, timeless wisdom, and living practices to help seekers walk deeper into the path of awakening.</p>
          </header>

          {/* Loading state */}
          {loading ? (
            <div className="text-center text-white/60">Loading blogs...</div>
          ) : (
            /* Articles grid */
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post: BlogPost) => (
                <article key={post.slug} className="group relative overflow-hidden rounded-lg bg-black/20 backdrop-blur-sm border border-white/10 hover:border-yellow-400/30 transition-all duration-300">
                  {/* Cover Image */}
                  <div className="relative h-64 overflow-hidden bg-white/5">
                    {post.coverImage ? (
                      <img
                        src={post.coverImage.startsWith('/') ? assetUrl(post.coverImage) : post.coverImage}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-white/30 text-sm">No image</div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h2 className="text-xl font-semibold text-white mb-2 line-clamp-2">{post.title}</h2>
                    <p className="text-white/60 text-sm mb-3">{post.date}</p>
                    <p className="text-white/80 text-sm mb-4 line-clamp-3">{post.excerpt}</p>

                    {/* Read more button */}
                    <Link
                      href={`/blogs/${post.slug}`}
                      className="inline-block text-yellow-400 hover:text-yellow-300 font-medium transition-colors duration-200"
                    >
                      Read more
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}
        </main>

        {/* Footer */}
        <FooterSection />
      </div>
    </MeditationProvider>
  );
}

