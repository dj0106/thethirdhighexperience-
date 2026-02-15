'use client';
import Image from 'next/image';
import { useState } from 'react';
import { assetUrl } from '@/lib/basePath';
export default function Level1Section() {
  const [level, setLevel] = useState<number>(1);
  const levelTexts: Record<number, string> = {
    1: `Discover the Path to Inner Transformation
Embark on a profound journey into Shiva Consciousness with The Third High Experience - Level 1.
This comprehensive guide invites you to explore the ancient practices of Shoonyata Meditation (the art of becoming nothing)
and AUM Chanting (the cosmic vibration), blending timeless wisdom from the Mandukya Upanishad and yogic traditions to awaken your true self.`,
    2: `Deepen your practice with extended AUM Chanting and guided breathwork.
Cultivate steady awareness through silence and mantra as you expand your experiential understanding.`,
    3: `Integrate the teachings into daily life with advanced meditations and contemplations on Mandukya wisdom.
Refine your inner stability and presence across all states of consciousness.`,
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 py-20 relative" style={{ background: 'rgba(16, 33, 43, 1)' }}>
      {/* Sun SVG - Positioned between sections */}
      <div className="pointer-events-none select-none">
        {/* Sun SVG */}
        <svg width="696" height="599" viewBox="0 0 696 599" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <g filter="url(#filter0_d_922_1017)">
            <path d="M446 346.395L371.613 348.442L374.641 349H321.359L324.387 348.442L250 346.395L324.387 344.348L251.514 329.647L325.144 340.347L255.868 313.457L326.564 336.532L263.155 298.197L328.551 333.089L272.903 284.427L331.296 329.926L285.017 272.61L334.419 327.32L299.024 262.933L338.015 325.273L314.45 255.862L341.896 323.878L331.012 251.489L345.965 323.227L348.047 250L350.035 323.227L364.988 251.489L354.104 323.878L381.55 255.862L357.985 325.273L397.071 262.933L361.581 327.32L410.983 272.61L364.799 329.926L423.097 284.427L367.449 333.089L432.94 298.197L369.531 336.532L440.132 313.457L370.95 340.347L444.58 329.647L371.613 344.348L446 346.395Z" fill="#FFDC41"/>
          </g>
          <defs>
            <filter id="filter0_d_922_1017" x="0" y="0" width="696" height="599" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix"/>
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
              <feOffset/>
              <feGaussianBlur stdDeviation="125"/>
              <feComposite in2="hardAlpha" operator="out"/>
              <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.86345 0 0 0 0 0.255183 0 0 0 0.5 0"/>
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_922_1017"/>
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_922_1017" result="shape"/>
            </filter>
          </defs>
        </svg>
      </div>

      {/* Level1 Background Image */}
      <div className="absolute pointer-events-none select-none" style={{
        width: '1323px',
        height: '610px',
        transform: 'rotate(0deg)',
        opacity: 0.1,
        top: '995px',
        left: '59px',
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: 'transparent',
      }}>
        <Image
          src={assetUrl('/images/backgrounds/Level1.png')}
          alt="Level 1 background"
          fill
          className="object-contain"
          priority={false}
        />
      </div>

      {/* Level Badge with optional yellow lines at Level 3 */}
      <div className="text-center mb-12">
        {level === 3 && <div className="h-0.5 bg-yellow-400 w-40 mx-auto mb-2" />}
        <div className="bg-yellow-400 text-black px-12 py-4 text-2xl font-medium inline-block">
          {`Level ${level}`}
        </div>
        {level === 3 && <div className="h-0.5 bg-yellow-400 w-40 mx-auto mt-2" />}
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto text-center">

        <p className="text-xl md:text-2xl text-white/80 mb-12 font-light leading-relaxed whitespace-pre-line">
          {levelTexts[level]}
        </p>

        {/* Buttons */}
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={() => setLevel((prev) => (prev === 3 ? 1 : prev + 1))}
            className="bg-yellow-400 hover:bg-yellow-500 text-black font-medium px-8 py-3 rounded-full transition-colors text-lg"
          >
            Next Level
          </button>
        </div>
      </div>
    </section>
  );
}
