'use client';
import { createContext, useContext, useState } from 'react';

const AvatarProgressContext = createContext();

export const AvatarProgressProvider = ({ children }) => {
  const [currentStep, setCurrentStep] = useState(0);  

  return (
    <AvatarProgressContext.Provider value={{ currentStep, setCurrentStep }}>
      {children}
    </AvatarProgressContext.Provider>
  );
};

export const useAvatarProgress = () => useContext(AvatarProgressContext);
