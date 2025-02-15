'use client'
import AvatarProgress from '@/components/AvatarProgress';
 
import React from 'react'
 

const page = () => {
 
    return (
        <div className='flex py-[32px] px-[48px] gap-[162px] h-100vh'>
            <div className='max-w-[316px]'>
                <div> <img src="/logo.png" width={'57px'} height={'20px'} alt="" /></div>
            <AvatarProgress
            progress="0"
            step="1"
            
            />
            </div>

            <div className='flex flex-col max-w-[824px] h-full   items-center  justify-center '>
                <div className='w-full'>
                    <h2 className='font-[manrope] text-[32px] leading-[38px] font-[800]'>Personal Details</h2>
                    <p className='mt-[12px] font-[manrope] font-[600] text-[20px] leading-[24px] text-[#969696]'>Let's learn a little bit more about you </p>
                </div>
                <form className='mt-[48px] flex gap-[48px]'>
                    <div className='flex justify-between items-center flex-col gap-[48px]'>
                        <div className='flex flex-col gap-[32px] '>
                            <label className='font-[manrope] font-[700] text-[20px] text-[#1F1F1F] leading-[20px]'>First name</label>
                            <input type="text" placeholder='e.g. Gee' className=' rounded-[12px] py-[20px] px-[24px] bg-[#E7E7E7] text-[#797979] font-[manrope] font-[600] text-[24px] leading-[28px] outline-none ' />
                        </div>
                        <div className='flex flex-col gap-[32px] '>
                            <label className='font-[manrope] font-[700] text-[20px] text-[#1F1F1F] leading-[20px]'>When’s your birthday?</label>
                            <input type="text" placeholder='e.g. MM/DD/YYYY' className=' rounded-[12px] py-[20px] px-[24px] bg-[#E7E7E7] text-[#797979] font-[manrope] font-[600] text-[24px] leading-[28px] outline-none ' />
                        </div>
                        <div className='flex flex-col gap-[32px] '>
                        <div>
                           <label className='font-[manrope] font-[700] text-[20px] text-[#1F1F1F] leading-[20px]'>High School Name</label>
                           <p className='font-[manrope] font-[600] text-[16px] leading-[20px] text-[#8D8D8D]'>
                           What’s your most recent high school name?
                           </p>
                           </div>
                            <input type="text" placeholder='e.g. WY High School' className=' rounded-[12px] py-[20px] px-[24px] bg-[#E7E7E7] text-[#797979] font-[manrope] font-[600] text-[24px] leading-[28px] outline-none ' />
                        </div>
                    </div>
                    <div className='flex flex-col justify-between'>
                        <div className='flex flex-col gap-[32px] '>
                        
                           <label className='font-[manrope] font-[700] text-[20px] text-[#1F1F1F] leading-[20px]'>Last Name</label>
                          
                            <input type="text" placeholder='e.g. Bumbum' className=' rounded-[12px] py-[20px] px-[24px] bg-[#E7E7E7] text-[#797979] font-[manrope] font-[600] text-[24px] leading-[28px]  outline-none' />
                        </div>
                        <div className='flex flex-col gap-[32px] '>
                           <div>
                           <label className='font-[manrope] font-[700] text-[20px] text-[#1F1F1F] leading-[20px]'>Zip Code</label>
                           <p className='font-[manrope] font-[600] text-[16px] leading-[20px] text-[#8D8D8D]'>
                           What’s your neighborhood zip code?
                           </p>
                           </div>
                            <input type="text" placeholder='e.g. 60637' className=' rounded-[12px] py-[20px] px-[24px] bg-[#E7E7E7] text-[#797979] font-[manrope] font-[600] text-[24px] leading-[28px] outline-none ' />
                        </div>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default page