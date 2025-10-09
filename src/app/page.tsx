'use client';

import Navigation from '@/components/ui/Navigation';
import HeroSection from '@/components/sections/HeroSection';
import Level1Section from '@/components/sections/Level1Section';
import AwakeningTextSection from '@/components/sections/AwakeningTextSection';
import CoursesSection from '@/components/sections/CoursesSection';
import GlobalCommunitySection from '@/components/sections/GlobalCommunitySection';
import MeditationSpaceSection from '@/components/sections/MeditationSpaceSection';
import FooterSection from '@/components/sections/FooterSection';
import StarsBackground from '@/components/ui/StarsBackground';
import { MeditationProvider } from '@/contexts/MeditationContext';

export default function Home() {
  return (
    <MeditationProvider>
      <div className="relative" style={{ background: 'rgba(16, 33, 43, 1)' }}>
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
    </MeditationProvider>
  );
}