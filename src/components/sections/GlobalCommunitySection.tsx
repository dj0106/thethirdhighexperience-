export default function GlobalCommunitySection() {
  return (
    <section id="community" className="py-20 px-6" style={{ background: 'rgba(255, 220, 65, 1)' }}>
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-light text-black mb-6">
          Global Community
        </h2>

        <p className="text-xl md:text-2xl text-black/80 mb-6 font-light">
          Awakening together - one community on Telegram.
        </p>

        <p className="text-black/70 mb-12 leading-relaxed max-w-2xl mx-auto">
          This is more than a chat — it’s a circle of seekers, a space to grow, and a reminder that you are never walking alone.
        </p>

        {/* Join Community Button */}
        <button className="bg-black hover:bg-gray-800 text-white font-medium px-8 py-3 rounded-full transition-colors text-lg">
          Enroll Now
        </button>
      </div>
    </section>
  );
}
