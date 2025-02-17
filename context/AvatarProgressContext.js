'use client';
import { createContext, useContext, useState } from 'react';

const AvatarProgressContext = createContext();

export const AvatarProgressProvider = ({ children }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    personalDetails: {}, 
    avatar: null, 
    bio: '', 
    skills: [], 
    careerInterests: []
  });

  // Move to next step
  const nextStep = () => setCurrentStep((prev) => Math.min(prev + 1, 4));

 
  // Update personal details
  const updatePersonalDetails = (data) => {
    setFormData((prev) => ({ ...prev, personalDetails: data }));
  };

  // Update avatar
  const updateAvatar = (image) => {
    setFormData((prev) => ({ ...prev, avatar: image }));
  };

  // Update bio
  const updateBio = (text) => {
    setFormData((prev) => ({ ...prev, bio: text }));
  };

  // Add new skill
  const addSkill = (skill) => {
    setFormData((prev) => ({
      ...prev,
      skills: [...prev.skills, skill]
    }));
  };

  // Remove a skill
  const removeSkill = (skill) => {
    setFormData((prev) => ({
      ...prev,
      skills: prev.skills.filter((s) => s !== skill)
    }));
  };

  // Update career interests
  const updateCareerInterests = (interests) => {
    setFormData((prev) => ({ ...prev, careerInterests: interests }));
  };

  // Reset form
  const resetForm = () => {
    setCurrentStep(0);
    setFormData({
      personalDetails: {},
      avatar: null,
      bio: '',
      skills: [],
      careerInterests: []
    });
  };

  return (
    <AvatarProgressContext.Provider value={{ 
      currentStep, 
      setCurrentStep,
      nextStep, 
      // prevStep,
      formData,
      setFormData,
      updatePersonalDetails,
      updateAvatar,
      updateBio,
      addSkill,
      removeSkill,
      updateCareerInterests,
      resetForm
    }}>
      {children}
    </AvatarProgressContext.Provider>
  );
};

export const useAvatarProgress = () => useContext(AvatarProgressContext);
