'use client';

import { createContext, useContext, useState, ReactNode, useRef, useEffect } from 'react';
import { assetUrl } from '@/lib/basePath';

interface MeditationContextType {
  isMeditating: boolean;
  startMeditation: () => void;
  stopMeditation: () => void;
}

const MeditationContext = createContext<MeditationContextType | undefined>(undefined);

export function MeditationProvider({ children }: { children: ReactNode }) {
  const [isMeditating, setIsMeditating] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Create audio element on mount
    audioRef.current = new Audio(assetUrl('/audio/Binaural432Hz60Mins.mp3'));

    // Handle audio end
    const handleEnded = () => {
      setIsMeditating(false);
    };

    audioRef.current.addEventListener('ended', handleEnded);

    return () => {
      if (audioRef.current) {
        audioRef.current.removeEventListener('ended', handleEnded);
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const startMeditation = () => {
    setIsMeditating(true);
    if (audioRef.current) {
      audioRef.current.currentTime = 0; // Reset to beginning
      audioRef.current.play().catch(error => {
        console.error('Error playing audio:', error);
        setIsMeditating(false);
      });
    }
  };

  const stopMeditation = () => {
    setIsMeditating(false);
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0; // Reset to beginning
    }
  };

  return (
    <MeditationContext.Provider value={{ isMeditating, startMeditation, stopMeditation }}>
      {children}
    </MeditationContext.Provider>
  );
}

export function useMeditation() {
  const context = useContext(MeditationContext);
  if (context === undefined) {
    throw new Error('useMeditation must be used within a MeditationProvider');
  }
  return context;
}
