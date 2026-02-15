'use client';

import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';
import { assetUrl } from '@/lib/basePath';

export default function MeditationSpaceSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      const p = audioRef.current.play();
      if (p !== undefined) {
        p.then(() => setIsPlaying(true)).catch(() => setIsPlaying(false));
      } else {
        setIsPlaying(true);
      }
    }
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      const handleEnded = () => setIsPlaying(false);
      audio.addEventListener('ended', handleEnded);
      return () => audio.removeEventListener('ended', handleEnded);
    }
  }, []);

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
          This is not just listening — it&apos;s arriving in the present moment.
        </p>
      </div>

      <div className="relative flex items-center justify-center my-16">

        <div className="relative mr-8" style={{ width: '435px', height: '250px', opacity: 0.2 }}>
          <Image
            src={assetUrl('/images/icons/Vibration1.png')}
            alt="Left vibration"
            fill
            className="object-contain"
            priority={false}
          />
        </div>

        <div className="relative">

          <div className="w-32 h-32 text-yellow-400/30 animate-spin-slow">
            <svg viewBox="0 0 200 200" className="w-full h-full">

              {Array.from({ length: 8 }).map((_, i) => (
                <g key={i} transform={`rotate(${i * 45} 100 100)`}>
                  <path
                    d="M100,20 Q120,40 100,60 Q80,40 100,20"
                    fill="currentColor"
                    opacity="0.3"
                  />
                </g>
              ))}

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

          {/* Play button background image */}
          <div
            className="absolute"
            style={{ left: '50%', top: '50%', transform: 'translate(-50%, -50%)', zIndex: 0 }}
          >
            <Image
              src={assetUrl('/images/backgrounds/PlayVibration.png')}
              alt="Play vibration background"
              width={120}
              height={120}
              className="object-contain"
            />
          </div>

          {/* Play Button */}
          <button
            onClick={togglePlay}
            className="absolute inset-0 flex items-center justify-center w-16 h-16 bg-yellow-400 hover:bg-yellow-500 rounded-full transition-all duration-300 transform hover:scale-110 mx-auto my-auto"
            style={{ left: '50%', top: '50%', transform: 'translate(-50%, -50%)', zIndex: 1 }}
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

        {/* Right Vibration Image */}
        <div className="relative ml-8" style={{ width: '435px', height: '250px', opacity: 0.2 }}>
          <Image
            src={assetUrl('/images/icons/Vibration2.png')}
            alt="Right vibration"
            fill
            className="object-contain"
            priority={false}
          />
        </div>
      </div>

      {/* Hidden Audio Element */}
      <audio ref={audioRef} src={assetUrl('/Audio/Binaural432Hz60Mins.mp3')} preload="auto" />
    </section>
  );
}
