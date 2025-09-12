export default function Level1Section() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 py-20 relative" style={{ background: 'rgba(16, 33, 43, 1)' }}>
      {/* Decorative Sun */}
      <div className="absolute top-20 left-1/2 transform -translate-x-1/2">
        <div className="relative w-24 h-12 overflow-hidden">
          {/* Sun rays */}
          <div className="absolute inset-0">
            {Array.from({ length: 16 }).map((_, i) => (
              <div
                key={`sun-ray-${i}-${i * 22.5}`}
                className="absolute w-0.5 h-6 bg-yellow-400 origin-bottom"
                style={{
                  left: '50%',
                  bottom: '0',
                  transform: `translateX(-50%) rotate(${(i * 22.5) - 180}deg)`,
                  transformOrigin: 'bottom center',
                }}
              />
            ))}
          </div>
          {/* Sun semicircle */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-12 h-6 bg-yellow-400 rounded-t-full"></div>
        </div>
      </div>

      {/* Level 1 Badge */}
      <div className="bg-yellow-400 text-black px-12 py-4 mb-12 text-2xl font-medium">
        Level 1
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto text-center">
        
        <p className="text-xl md:text-2xl text-white/80 mb-12 font-light leading-relaxed">
          Discover the Path to Inner Transformation
          Embark on a profound journey into Shiva Consciousness with The Third High Experience - Level 1. 
          This comprehensive guide invites you to explore the ancient practices of Shoonyata Meditation (the art of becoming nothing) 
          and AUM Chanting (the cosmic vibration), blending timeless wisdom from the Mandukya Upanishad and yogic traditions to awaken your true self.
        </p>

        {/* CTA Button */}
        <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-medium px-8 py-3 rounded-full transition-colors text-lg">
          CTA
        </button>
      </div>
    </section>
  );
}
