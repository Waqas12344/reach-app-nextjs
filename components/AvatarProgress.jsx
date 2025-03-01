'use client'
import { useAvatarProgress } from '@/context/AvatarProgressContext';

import React from 'react'
import { TiTick } from 'react-icons/ti'

const steps = ["Personal Details", "Avatar", "Bio", "Skills", "Career Interests"];
const AvatarProgress = ({progress,step}) => {
 
  const { currentStep } = useAvatarProgress();
// console.log(currentStep)
 
 
  return (

    <div className='p-[20px] flex flex-col justify-between'>
        {/* first div  */}
        <div>
            <h3 className='font-[700] text-[16px] leading-[16.8px] text-[#ffffff]'>BUILD YOUR AVATAR</h3>
            <p className='mt-[12px] font-[manrope] font-[700] text-[16px] leading-[20px] text-[#B5B5B5] '>Complete the tasks to build out your avatar.</p>
            <div className='w-full mt-[20px]'>
                <div className='w-full h-[8px] bg-[#C785E8] rounded-[12px] '>
                <div style={{ width: `${progress}%` }} className="bg-[#AF52DE] h-[8px] rounded-[12px]"></div>


                </div>
                <div className='mt-[12px] w-full flex items-center justify-between'>
                    <p className='font-[manrope] font-[700] leading-[20px] text-[16px] text-[#B5B5B5]'>{progress}%</p>
                    <p className='font-[manrope] font-[700] leading-[20px] text-[16px] text-[#B5B5B5]'>{step}/5</p>
                </div>
            </div>
        </div>
    
        {/* second div  */}
    
    
        <div className='flex flex-col gap-[16px] mt-[48px]'>
          {steps.map((step, index) => (
            <div key={index} className={`flex items-center gap-[12px] ${index  == currentStep ? "opacity-100" : "opacity-30"}`}>
              <h2 className='font-[manrope] font-[700] text-[16px] leading-[16px] text-[#ffffff]'>{step}</h2>
              <div className={`p-[3px] flex text-[#00C451] items-center justify-center rounded-full bg-[#00C451] bg-opacity-30  ${index + 1 <= currentStep ? "block" : "hidden"}`}>
                <TiTick className={`w-[13px] h-[11px]`} />
              </div>
            </div>
          ))}
        </div>
     
    
        {/* third div  */}
      
    </div>
 
  )
}

export default AvatarProgress