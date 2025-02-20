'use client'
import AvatarProgress from '@/components/AvatarProgress';
import { useAvatarProgress } from '@/context/AvatarProgressContext';
import { useRouter } from 'next/navigation';
 

import React, { useState } from 'react'

const suggestedInterests = ["Software Development", "Project Management", "UI/UX Design"];

const page = () => {
    const router = useRouter();
    const { currentStep, nextStep, formData, updateCareerInterests } = useAvatarProgress();
    const [inputValue, setInputValue] = useState('');
  
    const handleNext = () => {
      if (formData.careerInterests.length > 0) {
        console.log(formData)
        nextStep();
        router.push('/welcome');
      }
    };
  
    const handleAddInterest = (interest) => {
      if (!formData.careerInterests.includes(interest)) {
        updateCareerInterests([...formData.careerInterests, interest]);
        // console.log('Updated Career Interests:', formData.careerInterests);
      }
    };
  
    const handleRemoveInterest = (interest) => {
      updateCareerInterests(formData.careerInterests.filter((item) => item !== interest));
    };
  
    const handleInputSubmit = (e) => {
      e.preventDefault();
      if (inputValue.trim()) {
        handleAddInterest(inputValue.trim());
        setInputValue('');
      }
    };
    return (
        <div className='flex py-[32px] px-[48px] gap-[162px] w-[100vw]'>
            <div className='max-w-[316px]'>
                <div> <img src="/logo.png" width={'57px'} height={'20px'} alt="" /></div>
                <div className='w-[316px] mt-[100px] bg-[#2E2E30] rounded-[8px] border-[1px] border-[#565557] shadow-[#0000000A]'>
            <AvatarProgress
           progress={(currentStep / 4) * 100} step={currentStep + 1}
            />
              <div className='w-full mt-[70px] p-[20px]'>
              <button 
              className={`w-full rounded-[8px] p-[12px] bg-white text-[16px] font-bold font-manrope leading-[16.8px] transition ${
                formData.careerInterests.length > 0 ? 'hover:bg-gray-200' : 'opacity-50 cursor-not-allowed'
              }`} 
              onClick={handleNext}
              disabled={formData.careerInterests.length === 0}
            >
              Next
            </button>
        </div>
    
            </div>
            </div>


            <div className='flex flex-col w-[677px] items-center  justify-center'>
                <div className='w-full'>
                    <h2 className='font-[manrope] text-[20px] leading-[20px] font-[800]'>Choose your Career Interests</h2>
                    <p className='mt-[12px] font-[manrope] font-[600] text-[16px] leading-[20px] text-[#969696]'>Search for, or type in, your specific careers you are interested in. This will help us recommend more relevant job listings.</p>
                </div>
                <form className='mt-[48px] w-[100%]  ' onSubmit={handleInputSubmit}>
                    <input  
                    value={inputValue}
            onChange={(e) => setInputValue(e.target.value)} 
            className='bg-[#E7E7E7] rounded-[12px] py-[20px] px-[24px]  w-[100%]  font-[manrope] font-[600] text-[24px]  leading-[28px] outline-none' placeholder='e.g. UI/UX Design' />
                </form>

                 {/* Selected Interests */}
        <div className='w-full flex flex-wrap mt-[32px] gap-[16px]'>
          {formData.careerInterests.map((interest, index) => (
            <div
              key={index}
              className='py-[8px] px-[12px] bg-[#FF95001F] text-[#FF9500] rounded-[20px] font-[manrope] font-bold text-[16px] leading-[16px] cursor-pointer'
              onClick={() => handleRemoveInterest(interest)}
            >
              {interest} ✖
            </div>
          ))}
        </div>

        
                <div className='w-full flex flex-wrap mt-[32px] gap-[16px]'>
                {suggestedInterests.map((interest, index) => (
            <button
              key={index}
              className={`py-[8px] px-[12px] rounded-[20px] font-[manrope] font-bold text-[16px] leading-[16px] transition ${
                formData.careerInterests.includes(interest) ? 'bg-[#FF9500] text-white' : 'bg-[#FF95001F] text-[#FF9500]'
              }`}
              onClick={() => handleAddInterest(interest)}
              type="button"
            >
              {interest}
            </button>
          ))}
                </div>
            </div>
        </div>
    )
}

export default page