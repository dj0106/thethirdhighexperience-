'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

interface MeditationContextType {
  isMeditating: boolean;
  startMeditation: () => void;
  stopMeditation: () => void;
}

const MeditationContext = createContext<MeditationContextType | undefined>(undefined);

export function MeditationProvider({ children }: { children: ReactNode }) {
  const [isMeditating, setIsMeditating] = useState(false);

  const startMeditation = () => setIsMeditating(true);
  const stopMeditation = () => setIsMeditating(false);

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
