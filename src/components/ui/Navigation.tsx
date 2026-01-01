'use client';

import { useEffect, useState } from 'react';
import { useMeditation } from '@/contexts/MeditationContext';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { isMeditating, startMeditation, stopMeditation } = useMeditation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 px-6 py-4 transition-all duration-300 ${
      isScrolled ? 'bg-slate-900/90 backdrop-blur-md' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <div className="w-10 h-10 rounded-full border-2 border-white/30 overflow-hidden">
            <img 
              src="/images/logos/meditation.jpeg" 
              alt="Meditation Logo" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-8">
          <a
            href="/"
            className="text-white hover:text-yellow-400 transition-colors"
            style={{
              width: '60px',
              height: '24px',
              transform: 'rotate(0deg)',
              opacity: 1
            }}
          >
            Home
          </a>
          <a
            href="/blogs"
            className="text-white hover:text-yellow-400 transition-colors"
            style={{
              width: '58px',
              height: '24px',
              transform: 'rotate(0deg)',
              opacity: 1
            }}
          >
            Blogs
          </a>
          <a
            href="/PDF/Retreat.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-yellow-400 transition-colors"
            style={{
              width: '100px',
              height: '22px',
              transform: 'rotate(0deg)',
              opacity: 1
            }}
          >
            MahaShivratri
          </a>
          <a
            href="/#community"
            className="text-white hover:text-yellow-400 transition-colors"
            style={{
              width: '90px',
              height: '24px',
              transform: 'rotate(0deg)',
              opacity: 1
            }}
          >
            Community
          </a>
          <a
            href="/guided-practices"
            className="text-white hover:text-yellow-400 transition-colors"
            style={{
              width: '130px',
              height: '24px',
              transform: 'rotate(0deg)',
              opacity: 1
            }}
          >
            Guided Practices
          </a>
          <a
            href="/book"
            className="text-white hover:text-yellow-400 transition-colors"
            style={{
              width: '72px',
              height: '24px',
              transform: 'rotate(0deg)',
              opacity: 1
            }}
          >
            Book
          </a>
        </div>

        {/* Meditate Button */}
        <button
          onClick={isMeditating ? stopMeditation : startMeditation}
          className="bg-yellow-400 hover:bg-yellow-500 text-black font-medium transition-colors"
          style={{
            width: '160px',
            height: '48px',
            transform: 'rotate(0deg)',
            opacity: 1,
            borderRadius: '24px'
          }}
        >
          {isMeditating ? 'Stop' : 'Meditate'}
        </button>
      </div>
    </nav>
  );
}
