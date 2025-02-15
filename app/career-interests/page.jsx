'use client'
import AvatarProgress from '@/components/AvatarProgress';
 
import React from 'react'
 
const skills=["Software Developement","Project management","UI/UX Design"]
const page = () => {
  
    return (
        <div className='flex py-[32px] px-[48px] gap-[162px] w-[100vw]'>
            <div className='max-w-[316px]'>
                <div> <img src="/logo.png" width={'57px'} height={'20px'} alt="" /></div>
            <AvatarProgress
            progress="80"
            step="5"
            
            />
            </div>
            

            <div className='flex flex-col w-[677px] items-center  justify-center'>
                <div className='w-full'>
                    <h2 className='font-[manrope] text-[20px] leading-[20px] font-[800]'>Choose your Career Interests</h2>
                    <p className='mt-[12px] font-[manrope] font-[600] text-[16px] leading-[20px] text-[#969696]'>Search for, or type in, your specific careers you are interested in. This will help us recommend more relevant job listings.</p>
                </div>
                <form className='mt-[48px] w-[100%]  '>
                  <input name="" id="" className='bg-[#E7E7E7] rounded-[12px] py-[20px] px-[24px]  w-[100%]  font-[manrope] font-[600] text-[24px]  leading-[28px] outline-none' placeholder='e.g. UI/UX Design' /> 
                </form>
                <div className='w-full flex flex-wrap mt-[32px] gap-[16px]'>
                   {
                    skills.map((item,index)=>(
                        <div className='py-[8px] px-[12px] bg-[#FF95001F] text-[#FF9500] rounded-[20px] font-[manrope] font-[800] text-[16px] leading-[16px]  ' key={index}>{item}</div>
                    ))
                   }
                </div>
            </div>
        </div>
    )
}

export default page