export default function AwakeningTextSection() {
  return (
    <section className="min-h-screen flex flex-col items-center px-6 py-20 relative" style={{ background: 'rgba(16, 33, 43, 1)' }}>
      {/* Header with exact dimensions */}
      <div className="text-center mt-16 mb-8 flex justify-center">
        <h2 className="text-4xl md:text-5xl font-light text-white whitespace-nowrap" style={{
          width: '500px',
          height: '49px',
          transform: 'rotate(0deg)',
          top: '1918px',
          left: '530px',
          opacity: 1
        }}>
          Awakening in Text
        </h2>
      </div>

      {/* Blue Wings SVG Image - Exact Design */}
      <div className="mb-12">
        <svg width="552" height="194" viewBox="0 0 552 194" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 60L52.5 162.5L27.5 86C151.5 90 235.5 138.667 262 162.5C216.4 89.3 68.3333 63.6667 0 60Z" fill="#0067A3"/>
          <path d="M551.5 60L499 162.5L524 86C400 90 316 138.667 289.5 162.5C335.1 89.3 483.167 63.6667 551.5 60Z" fill="#0067A3"/>
          <path d="M77 22.5L87.5 63.5C167.5 63.5 243.167 119.167 270.5 146.5C231.3 70.1 125.167 32 77 22.5Z" fill="#0067A3"/>
          <path d="M474.5 22.5L464 63.5C384 63.5 308.333 119.167 281 146.5C320.2 70.1 426.333 32 474.5 22.5Z" fill="#0067A3"/>
          <path d="M154 38L148 0C228 36.4 262 96.8333 269 122.5C235.4 71.3 178.333 44.8333 154 38Z" fill="#0067A3"/>
          <path d="M397.5 38L403.5 0C323.5 36.4 289.5 96.8333 282.5 122.5C316.1 71.3 373.167 44.8333 397.5 38Z" fill="#0067A3"/>
          <rect x="156" y="182" width="240" height="12" fill="#0067A3"/>
        </svg>
      </div>




      {/* Main Content */}
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-xl md:text-2xl text-white/80 mb-12 font-light leading-relaxed">
          Discover the Path to Inner Transformation
          Embark on a profound journey into Shiva Consciousness with The Third High Experience - Level 1.
          This comprehensive guide invites you to explore the ancient practices of Shoonyata Meditation (the art of becoming nothing)
          and AUM Chanting (the cosmic vibration), blending timeless wisdom from the Mandukya Upanishad and yogic traditions to awaken your true self.
        </p>
      </div>

      {/* CTA Button */}
      <a
        href="/PDF/Retreat.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-yellow-400 hover:bg-yellow-500 text-black font-medium px-8 py-3 rounded-full transition-colors text-lg mb-20"
      >
        Retreat
      </a>
    </section>
  );
}
