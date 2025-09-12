import StarsBackground from '@/components/ui/StarsBackground';
import Countdown from '@/components/ui/Countdown';
import MeditationView from '@/components/ui/MeditationView';
import { useMeditation } from '@/contexts/MeditationContext';

export default function HeroSection() {
  const { isMeditating } = useMeditation();

  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center px-6 relative" style={{ background: 'rgba(16, 33, 43, 1)' }}>
      {/* Starry background overlay */}
      <StarsBackground />

      {/* Conditional Content - Show either Countdown or Meditation View */}
      {isMeditating ? <MeditationView /> : <Countdown />}

      {/* Subtitle - Positioned below countdown */}
      <h2 className="text-2xl md:text-3xl font-light text-white text-center relative z-10" style={{
        width: '550px',
        height: '49px',
        transform: 'rotate(0deg)',
        opacity: 1,
        position: 'absolute',
        top: '858px',
        left: '463px'
      }}>
        Initiation into Awareness
      </h2>
    </section>
  );
}
