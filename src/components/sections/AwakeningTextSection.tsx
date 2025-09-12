export default function AwakeningTextSection() {
  return (
    <section className="min-h-screen flex flex-col items-center px-6 py-20 relative" style={{ background: 'rgba(16, 33, 43, 1)' }}>
      {/* Header positioned higher */}
      <div className="text-center mt-16 mb-8">
        <h2 className="text-4xl md:text-5xl font-light text-white">
          Awakening in Text
        </h2>
      </div>

      {/* Blue Wings SVG Image */}
      {/* Blue Wings SVG Logo */}
      <div className="mb-12 flex justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1000 320"
          className="w-[400px] h-auto"
          role="img"
          aria-labelledby="wingsLogoTitle"
        >
          <title id="wingsLogoTitle">Blue Wings Logo</title>

          <g stroke="rgba(0,103,163,1)" fill="none" strokeLinecap="round">
            {/* Left wing */}
            <path d="M50 250 Q100 50 200 150 Q250 100 300 180 Q350 120 400 200 Q450 140 500 220" strokeWidth="20" />
            <path d="M80 270 Q130 80 230 170 Q280 120 330 200 Q380 140 430 220 Q480 160 500 240" strokeWidth="18" />
            <path d="M110 280 Q160 110 260 190 Q310 140 360 220 Q410 160 460 240 Q490 180 500 250" strokeWidth="16" />

            {/* Right wing (mirrored) */}
            <path d="M950 250 Q900 50 800 150 Q750 100 700 180 Q650 120 600 200 Q550 140 500 220" strokeWidth="20" />
            <path d="M920 270 Q870 80 770 170 Q720 120 670 200 Q620 140 570 220 Q520 160 500 240" strokeWidth="18" />
            <path d="M890 280 Q840 110 740 190 Q690 140 640 220 Q590 160 540 240 Q510 180 500 250" strokeWidth="16" />
          </g>

          {/* Center base line */}
          <rect x="200" y="285" width="600" height="12" fill="rgba(0,103,163,1)" />
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
      <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-medium px-8 py-3 rounded-full transition-colors text-lg mb-20">
        CTA
      </button>
    </section>
  );
}
