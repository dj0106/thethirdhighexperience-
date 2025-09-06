'use client';

import { useEffect, useState } from 'react';

// Navigation Component
function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);

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
          <div className="w-10 h-10 rounded-full border-2 border-white/30 flex items-center justify-center">
            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600"></div>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#home" className="text-white hover:text-yellow-400 transition-colors">Home</a>
          <a href="#blogs" className="text-white hover:text-yellow-400 transition-colors">Blogs</a>
          <a href="#store" className="text-white hover:text-yellow-400 transition-colors">Store</a>
          <a href="#community" className="text-white hover:text-yellow-400 transition-colors">Community</a>
          <a href="#practices" className="text-white hover:text-yellow-400 transition-colors">Guided Practices</a>
          <a href="#book" className="text-white hover:text-yellow-400 transition-colors">Book</a>
        </div>

        {/* Meditate Button */}
        <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-medium px-6 py-2 rounded-full transition-colors">
          Meditate
        </button>
      </div>
    </nav>
  );
}

// Stars Background Component
function StarsBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Generate random stars */}
      {Array.from({ length: 150 }).map((_, i) => (
        <div
          key={`star-${i}`}
          className="absolute bg-white rounded-full animate-pulse"
          style={{
            width: `${Math.random() * 3 + 1}px`,
            height: `${Math.random() * 3 + 1}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            opacity: Math.random() * 0.8 + 0.2,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${Math.random() * 2 + 1}s`,
          }}
        />
      ))}
    </div>
  );
}

// Countdown Circle Component
function CountdownCircle({ value, label, variant = 'default' }: {
  value: string;
  label: string;
  variant?: 'default' | 'bright' | 'dark'
}) {
  const getVariantClasses = () => {
    switch (variant) {
      case 'bright':
        return 'bg-gradient-to-br from-yellow-400/90 to-yellow-600/90';
      case 'dark':
        return 'bg-gradient-to-br from-yellow-700/80 to-yellow-900/80';
      default:
        return 'bg-gradient-to-br from-yellow-600/80 to-yellow-800/80';
    }
  };

  return (
    <div className="relative group">
      <div className={`w-48 h-48 rounded-full ${getVariantClasses()} backdrop-blur-sm flex flex-col items-center justify-center text-white transition-transform group-hover:scale-105`}>
        <div className="text-5xl font-light mb-2">{value}</div>
        <div className="text-xl font-light">{label}</div>
      </div>
      {/* Decorative dots */}
      <div className="absolute top-4 left-8 w-1 h-1 bg-white/40 rounded-full animate-pulse"></div>
      <div className="absolute top-8 right-6 w-1 h-1 bg-white/40 rounded-full animate-pulse delay-100"></div>
      <div className="absolute bottom-6 left-6 w-1 h-1 bg-white/40 rounded-full animate-pulse delay-200"></div>
    </div>
  );
}

// Hero Section - First Image
function HeroSection() {
  const [timeLeft, setTimeLeft] = useState({
    days: 180,
    hours: 13,
    minutes: 25
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59 };
        }
        return prev;
      });
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center px-6 relative">
      {/* Main Title */}
      <h1 className="text-6xl md:text-7xl lg:text-8xl font-light text-white text-center mb-16 tracking-wide">
        MahaShivratri 2026
      </h1>

      {/* Countdown Circles */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 mb-16">
        <CountdownCircle value={timeLeft.days.toString()} label="Days" variant="dark" />
        <CountdownCircle value={timeLeft.hours.toString()} label="Hours" variant="bright" />
        <CountdownCircle value={timeLeft.minutes.toString()} label="Mins" variant="dark" />
      </div>

      {/* Subtitle */}
      <h2 className="text-2xl md:text-3xl font-light text-white text-center mb-8">
        Initiation into Awareness
      </h2>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}

// Level 1 Section - Second Image
function Level1Section() {
  return (
    <section id="level1" className="min-h-screen flex flex-col items-center justify-center px-6 py-20 relative">
      {/* Background geometric pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          {/* Large "2026" background text */}
          <div className="text-[20rem] font-light text-white/5 select-none pointer-events-none">
            2026
          </div>
        </div>
        {/* Geometric grid lines */}
        <div className="absolute inset-0">
          <svg className="w-full h-full" viewBox="0 0 1000 1000" fill="none">
            {/* Horizontal lines */}
            <line x1="0" y1="200" x2="1000" y2="200" stroke="rgba(255,255,255,0.1)" strokeWidth="1"/>
            <line x1="0" y1="400" x2="1000" y2="400" stroke="rgba(255,255,255,0.1)" strokeWidth="1"/>
            <line x1="0" y1="600" x2="1000" y2="600" stroke="rgba(255,255,255,0.1)" strokeWidth="1"/>
            <line x1="0" y1="800" x2="1000" y2="800" stroke="rgba(255,255,255,0.1)" strokeWidth="1"/>
            {/* Vertical lines */}
            <line x1="200" y1="0" x2="200" y2="1000" stroke="rgba(255,255,255,0.1)" strokeWidth="1"/>
            <line x1="400" y1="0" x2="400" y2="1000" stroke="rgba(255,255,255,0.1)" strokeWidth="1"/>
            <line x1="600" y1="0" x2="600" y2="1000" stroke="rgba(255,255,255,0.1)" strokeWidth="1"/>
            <line x1="800" y1="0" x2="800" y2="1000" stroke="rgba(255,255,255,0.1)" strokeWidth="1"/>
            {/* Diagonal lines */}
            <line x1="0" y1="0" x2="1000" y2="1000" stroke="rgba(255,255,255,0.05)" strokeWidth="1"/>
            <line x1="1000" y1="0" x2="0" y2="1000" stroke="rgba(255,255,255,0.05)" strokeWidth="1"/>
          </svg>
        </div>
      </div>

      {/* Sun/Sunrise icon */}
      <div className="mb-12 relative">
        <div className="w-24 h-12 relative">
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
        <h2 className="text-3xl md:text-4xl font-light text-white mb-8">
          Discover the Path to Inner Transformation
        </h2>

        <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-12 max-w-5xl">
          Embark on a profound journey into Shiva Consciousness with The Third High Experience - Level 1.
          This comprehensive guide invites you to explore the ancient practices of Shoonyata Meditation (the
          art of becoming nothing) and AUM Chanting (the cosmic vibration), blending timeless wisdom from
          the Mandukya Upanishad and yogic traditions to awaken your true self.
        </p>

        {/* CTA Button */}
        <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-medium px-8 py-3 rounded-full transition-colors text-lg">
          CTA
        </button>
      </div>
    </section>
  );
}

// Awakening in Text Section - Third Image
function AwakeningTextSection() {
  return (
    <section id="awakening-text" className="min-h-screen flex flex-col items-center justify-center px-6 py-20 relative">
      {/* Section Title */}
      <h2 className="text-4xl md:text-5xl font-light text-white mb-16">
        Awakening in Text
      </h2>

      {/* Book Icon */}
      <div className="mb-12">
        <svg width="200" height="120" viewBox="0 0 200 120" fill="none" className="text-blue-400">
          {/* Book base */}
          <rect x="50" y="90" width="100" height="8" fill="currentColor" rx="2"/>

          {/* Book pages - left side */}
          <path
            d="M50 90 Q50 20 100 20 Q100 90 100 90 Z"
            fill="currentColor"
            opacity="0.8"
          />
          <path
            d="M60 85 Q60 25 95 25 Q95 85 95 85 Z"
            fill="currentColor"
            opacity="0.6"
          />
          <path
            d="M70 80 Q70 30 90 30 Q90 80 90 80 Z"
            fill="currentColor"
            opacity="0.4"
          />

          {/* Book pages - right side */}
          <path
            d="M100 90 Q100 20 150 20 Q150 90 150 90 Z"
            fill="currentColor"
            opacity="0.8"
          />
          <path
            d="M105 85 Q105 25 140 25 Q140 85 140 85 Z"
            fill="currentColor"
            opacity="0.6"
          />
          <path
            d="M110 80 Q110 30 130 30 Q130 80 130 80 Z"
            fill="currentColor"
            opacity="0.4"
          />
        </svg>
      </div>

      {/* Book Title */}
      <h3 className="text-2xl md:text-3xl font-medium text-white mb-8">
        Book Title
      </h3>

      {/* Description */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h4 className="text-xl md:text-2xl font-light text-white mb-6">
          Discover the Path to Inner Transformation
        </h4>

        <p className="text-lg text-white/90 leading-relaxed max-w-5xl">
          Embark on a profound journey into Shiva Consciousness with The Third High Experience – Level 1.
          This comprehensive guide invites you to explore the ancient practices of Shoonyata Meditation (the
          art of becoming nothing) and AUM Chanting (the cosmic vibration), blending timeless wisdom from
          the Mandukya Upanishad and yogic traditions to awaken your true self.
        </p>
      </div>

      {/* CTA Button */}
      <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-medium px-8 py-3 rounded-full transition-colors text-lg mb-20">
        CTA
      </button>

    </section>
  );
}

// Courses Section - Fourth Image
function CoursesSection() {
  const courses = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=400&h=250&fit=crop&auto=format",
      title: "Course Title",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
      price: "$99.99",
      duration: "15 Days"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=250&fit=crop&auto=format",
      title: "Course Title",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
      price: "$99.99",
      duration: "15 Days"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=400&h=250&fit=crop&auto=format",
      title: "Course Title",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
      price: "$99.99",
      duration: "15 Days"
    }
  ];

  return (
    <section id="courses" className="min-h-screen flex flex-col items-center justify-center px-6 py-20 relative">
      {/* Section Title */}
      <h2 className="text-4xl md:text-5xl font-light text-white mb-16">
        Courses
      </h2>

      {/* Course Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-20">
        {courses.map((course) => (
          <div
            key={course.id}
            className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300"
          >
            {/* Course Image */}
            <div className="h-48 bg-gradient-to-br from-orange-400 via-purple-500 to-blue-600 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-400/80 via-purple-500/80 to-blue-600/80"></div>
              <div className="absolute inset-0 bg-black/20"></div>
            </div>

            {/* Course Content */}
            <div className="p-6">
              <h3 className="text-xl font-medium text-white mb-3">
                {course.title}
              </h3>

              <p className="text-white/70 text-sm leading-relaxed mb-6">
                {course.description}
              </p>

              {/* Price and Duration */}
              <div className="flex justify-between items-center mb-4">
                <span className="text-yellow-400 font-semibold text-lg">
                  {course.price}
                </span>
                <span className="text-white/60 text-sm">
                  {course.duration}
                </span>
              </div>

              {/* Enroll Button */}
              <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-medium py-3 rounded-lg transition-colors">
                Enroll Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// Global Community Section - Fourth Image (Bottom)
function GlobalCommunitySection() {
  return (
    <section className="bg-yellow-400 py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-light text-black mb-6">
          Global Community
        </h2>

        <p className="text-xl md:text-2xl text-black/80 mb-6 font-light">
          Awakening together - one community on Telegram.
        </p>

        <p className="text-lg text-black/70 leading-relaxed max-w-3xl mx-auto">
          This is more than a chat — it's a circle of seekers, a space to grow, and a
          reminder that you are never walking alone.
        </p>
      </div>
    </section>
  );
}

// Meditation Space Section - Fifth Image
function MeditationSpaceSection() {
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
    <section className="min-h-screen flex flex-col items-center justify-center px-6 py-20 relative bg-slate-900">
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
          {/* Mandala Background */}
          <div className="w-48 h-48 relative">
            <svg
              viewBox="0 0 200 200"
              className="w-full h-full text-green-600/40"
              fill="currentColor"
            >
              {/* Mandala Pattern */}
              <defs>
                <pattern id="mandala" x="0" y="0" width="100%" height="100%">
                  <circle cx="100" cy="100" r="80" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.3"/>
                  <circle cx="100" cy="100" r="60" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.4"/>
                  <circle cx="100" cy="100" r="40" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.5"/>
                  <circle cx="100" cy="100" r="20" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.6"/>
                </pattern>
              </defs>

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

// Footer Section - Sixth Image
function FooterSection() {
  return (
    <footer className="bg-blue-600 py-12 px-6">
      <div className="max-w-4xl mx-auto text-center">
        {/* Logo */}
        <div className="mb-6">
          <div className="w-16 h-16 mx-auto mb-4 bg-white/10 rounded-full flex items-center justify-center">
            {/* Shiva/Meditation Figure Icon */}
            <svg
              viewBox="0 0 40 40"
              className="w-8 h-8 text-white"
              fill="currentColor"
            >
              {/* Simple meditation figure */}
              <circle cx="20" cy="12" r="4" />
              <path d="M20 16 L20 28 M16 20 L24 20 M18 28 L18 32 M22 28 L22 32"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round" />
            </svg>
          </div>

          <h3 className="text-white text-lg font-medium">
            thirdhighexperience
          </h3>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-4 mb-8">
          {/* LinkedIn */}
          <a
            href="#"
            className="w-10 h-10 bg-yellow-400 hover:bg-yellow-500 rounded-full flex items-center justify-center transition-colors"
          >
            <svg
              viewBox="0 0 24 24"
              className="w-5 h-5 text-black"
              fill="currentColor"
            >
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>

          {/* Facebook */}
          <a
            href="#"
            className="w-10 h-10 bg-yellow-400 hover:bg-yellow-500 rounded-full flex items-center justify-center transition-colors"
          >
            <svg
              viewBox="0 0 24 24"
              className="w-5 h-5 text-black"
              fill="currentColor"
            >
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
          </a>

          {/* Google */}
          <a
            href="#"
            className="w-10 h-10 bg-yellow-400 hover:bg-yellow-500 rounded-full flex items-center justify-center transition-colors"
          >
            <svg
              viewBox="0 0 24 24"
              className="w-5 h-5 text-black"
              fill="currentColor"
            >
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
          </a>
        </div>

        {/* Copyright */}
        <p className="text-white/80 text-sm mb-4">
          © 2025 Third High Experience All right reserved
        </p>

        {/* Legal Links */}
        <div className="flex justify-center space-x-6 text-white/70 text-sm">
          <a href="#" className="hover:text-white transition-colors">
            Terms & Conditions
          </a>
          <span>|</span>
          <a href="#" className="hover:text-white transition-colors">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 relative">
      {/* Stars Background */}
      <StarsBackground />

      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <HeroSection />

      {/* Level 1 Section */}
      <Level1Section />

      {/* Awakening in Text Section */}
      <AwakeningTextSection />

      {/* Courses Section */}
      <CoursesSection />

      {/* Global Community Section */}
      <GlobalCommunitySection />

      {/* Meditation Space Section */}
      <MeditationSpaceSection />

      {/* Footer Section */}
      <FooterSection />
    </div>
  );
}
