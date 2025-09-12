'use client';

import { useState } from 'react';

export default function MeditationSpaceSection() {
  const [isPlaying, setIsPlaying] = useState(false);

  // Generate random sound wave bars
  const generateSoundWave = (count: number) => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      height: Math.random() * 60 + 20, // Random height between 20-80
      delay: Math.random() * 2, // Random animation delay
    }));
  };

  const leftWave = generateSoundWave(20);
  const rightWave = generateSoundWave(20);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 py-20 relative" style={{ background: 'rgba(16, 33, 43, 1)' }}>
      {/* Section Title */}
      <div className="text-center mb-8">
        <h2 className="text-4xl md:text-5xl font-light text-white mb-4">
          Meditation Space
        </h2>
        <p className="text-xl md:text-2xl text-white/80 mb-6 font-light">
          Enter the silence. Feel the sound.
        </p>
        <p className="text-white/70 max-w-2xl mx-auto leading-relaxed">
          Close your eyes, breathe deeply, and let this sound guide you inward.
          This is not just listening — it's arriving in the present moment.
        </p>
      </div>

      {/* Audio Player with Mandala */}
      <div className="relative flex items-center justify-center my-16">
        {/* Left Sound Wave */}
        <div className="flex items-end space-x-1 mr-8">
          {leftWave.map((bar) => (
            <div
              key={`left-${bar.id}`}
              className={`w-1 bg-green-400/60 rounded-full transition-all duration-300 ${
                isPlaying ? 'animate-pulse' : ''
              }`}
              style={{
                height: `${bar.height}px`,
                animationDelay: `${bar.delay}s`,
              }}
            />
          ))}
        </div>

        {/* Central Mandala with Play Button */}
        <div className="relative">
          {/* Mandala SVG */}
          <div className="w-32 h-32 text-yellow-400/30 animate-spin-slow">
            <svg viewBox="0 0 200 200" className="w-full h-full">
              {/* Outer petals */}
              {Array.from({ length: 8 }).map((_, i) => (
                <g key={i} transform={`rotate(${i * 45} 100 100)`}>
                  <path
                    d="M100,20 Q120,40 100,60 Q80,40 100,20"
                    fill="currentColor"
                    opacity="0.3"
                  />
                </g>
              ))}

              {/* Inner petals */}
              {Array.from({ length: 8 }).map((_, i) => (
                <g key={i} transform={`rotate(${i * 45 + 22.5} 100 100)`}>
                  <path
                    d="M100,40 Q110,50 100,60 Q90,50 100,40"
                    fill="currentColor"
                    opacity="0.4"
                  />
                </g>
              ))}

              {/* Center circle */}
              <circle cx="100" cy="100" r="15" fill="currentColor" opacity="0.5"/>
            </svg>
          </div>

          {/* Play Button */}
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="absolute inset-0 flex items-center justify-center w-16 h-16 bg-yellow-400 hover:bg-yellow-500 rounded-full transition-all duration-300 transform hover:scale-110 mx-auto my-auto"
            style={{ left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }}
          >
            {isPlaying ? (
              // Pause icon
              <div className="flex space-x-1">
                <div className="w-1.5 h-6 bg-black rounded-full"></div>
                <div className="w-1.5 h-6 bg-black rounded-full"></div>
              </div>
            ) : (
              // Play icon
              <div className="w-0 h-0 border-l-[12px] border-l-black border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent ml-1"></div>
            )}
          </button>
        </div>

        {/* Right Sound Wave */}
        <div className="flex items-end space-x-1 ml-8">
          {rightWave.map((bar) => (
            <div
              key={`right-${bar.id}`}
              className={`w-1 bg-green-400/60 rounded-full transition-all duration-300 ${
                isPlaying ? 'animate-pulse' : ''
              }`}
              style={{
                height: `${bar.height}px`,
                animationDelay: `${bar.delay}s`,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
