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
            href="https://razorpay.com/?utm_source=google&utm_medium=cpc&utm_campaign=RPSME-RPPerf-GSearchBrand-Prospect-Dweb-Core&utm_adgroup=brandsearch_core_exact&utm_content=RPSME-Brand-010223&utm_term=razorpay&utm_gclid=Cj0KCQjwrJTGBhCbARIsANFBfgtRCS_WETcjkLEkn59pRsAr7hlpF3fpKWXwyYJ0oSLOqNXov-LPl-IaAhtfEALw_wcB&utm_campaignID=400139470&utm_adgroupID=27293859910&utm_adID=689518700854&utm_network=g&utm_device=c&utm_matchtype=e&utm_devicemodel=&utm_adposition=&utm_location=9198210&gad_source=1&gad_campaignid=400139470&gbraid=0AAAAADdXWPoIl83ir5mz4lp7Pa52XzT4F&gclid=Cj0KCQjwrJTGBhCbARIsANFBfgtRCS_WETcjkLEkn59pRsAr7hlpF3fpKWXwyYJ0oSLOqNXov-LPl-IaAhtfEALw_wcB"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-yellow-400 transition-colors"
            style={{
              width: '55px',
              height: '24px',
              transform: 'rotate(0deg)',
              opacity: 1
            }}
          >
            Store
          </a>
          <a
            href="/#community"
            className="text-white hover:text-yellow-400 transition-colors"
            style={{
              width: '100px',
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
              width: '140px',
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
