'use client'
import AvatarProgress from '@/components/AvatarProgress';
import { useAvatarProgress } from '@/context/AvatarProgressContext';
import { useRouter } from 'next/navigation';
 
import React from 'react'
 

const page = () => {
    const router = useRouter();
    const { currentStep, nextStep, formData, updateBio } = useAvatarProgress();
  
    const handleNext = () => {
      if (formData.bio.trim()) {
        console.log(formData)
        nextStep();
        router.push('/skills');
      }
    };
  
    return (
        <div className='flex py-[32px] px-[48px] gap-[162px] w-[100vw] h-[100vh] '>
            <div className='max-w-[316px]'>
                <div> <img src="/logo.png" width={'57px'} height={'20px'} alt="" /></div>
                <div className='w-[316px] mt-[100px] bg-[#2E2E30] rounded-[8px] border-[1px] border-[#565557] shadow-[#0000000A]'>
            <AvatarProgress
            progress={(currentStep / 4) * 100} step={currentStep + 1}
            />
              <div className='w-full mt-[70px] p-[20px]'>
        <button className='w-full rounded-[8px] p-[12px]  bg-[#ffffff] text-[16px] font-[700] font-[manrope] leading-[16.8px]'     onClick={handleNext}
              disabled={!formData.bio.trim()}>
      Next
    </button>
        </div>
    
            </div>
            </div>
            

            <div className='flex flex-col max-w-[720px] items-center  justify-center'>
                <div className='w-full'>
                    <h2 className='font-[manrope] text-[20px] leading-[20px] font-[800]'>Biography</h2>
                    <p className='mt-[12px] font-[manrope] font-[600] text-[16px] leading-[20px] text-[#969696]'>Tell us a little bit more about yourself. Not an autobiography, just something people can read to get to know you.</p>
                </div>
                <form className='mt-[48px] w-full  '>
                  <textarea  
                  value={formData.bio}
            onChange={(e) => updateBio(e.target.value)}
            aria-label="Biography Input" 
            className='bg-[#E7E7E7] rounded-[12px] py-[20px] px-[24px] h-[240px] w-full  font-[manrope] font-[600] text-[24px]  leading-[28px] outline-none' placeholder='e.g. I am originally from Chicago...'></textarea>
                </form>
            </div>
        </div>
    )
}

export default page