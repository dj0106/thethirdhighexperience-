import Navigation from "@/components/ui/Navigation";
import StarsBackground from "@/components/ui/StarsBackground";
import FooterSection from "@/components/sections/FooterSection";
import { MeditationProvider } from "@/contexts/MeditationContext";
import { posts, type BlogPost } from "../posts";

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post: BlogPost | undefined = posts.find((p) => p.slug === params.slug);

  return (
    <MeditationProvider>
      <div className="relative min-h-screen" style={{ background: "rgba(16, 33, 43, 1)" }}>
        {/* Stars Background */}
        <StarsBackground />

        {/* Navigation */}
        <Navigation />

        {/* Content */}
        <main className="max-w-3xl mx-auto px-6 pt-28 pb-20">
          {!post ? (
            <div className="text-center">
              <h1 className="text-3xl md:text-4xl font-semibold text-white mb-4">Post not found</h1>
              <p className="text-white/70 mb-6">The blog you are looking for does not exist.</p>
              <a href="/blogs" className="text-yellow-400 hover:text-yellow-300">← Back to all blogs</a>
            </div>
          ) : (
            <article>
              <header className="mb-8 text-center">
                <h1 className="text-3xl md:text-5xl font-light text-white mb-2">{post.title}</h1>
                <p className="text-white/60">{post.date}</p>
              </header>

              {post.coverImage ? (
                <img src={post.coverImage} alt="" className="w-full rounded-lg shadow-lg mb-8 object-cover" />
              ) : null}

              <div className="prose prose-invert max-w-none">
                {post.content.map((para, i) => (
                  <p key={i} className="text-white/90 leading-relaxed mb-5">{para}</p>
                ))}
              </div>

              <div className="mt-10 text-center">
                <a href="/blogs" className="text-yellow-400 hover:text-yellow-300">← Back to all blogs</a>
              </div>
            </article>
          )}
        </main>

        {/* Footer */}
        <FooterSection />
      </div>
    </MeditationProvider>
  );
}

