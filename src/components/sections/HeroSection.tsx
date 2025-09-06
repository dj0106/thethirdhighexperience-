import StarsBackground from '@/components/ui/StarsBackground';
import Countdown from '@/components/ui/Countdown';

export default function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center px-6 relative">
      {/* Starry background overlay */}
      <StarsBackground />

      {/* Counter Group */}
      <Countdown />

      {/* Subtitle */}
      <h2 className="text-2xl md:text-3xl font-light text-white text-center mb-8 relative z-10 mt-96">
        Initiation into Awareness
      </h2>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
