'use client'
import AvatarProgress from '@/components/AvatarProgress';
 
import React from 'react'
 

const page = () => {
  
    return (
        <div className='flex py-[32px] px-[48px] gap-[162px] w-[100vw] h-[100vh] '>
            <div className='max-w-[316px]'>
                <div> <img src="/logo.png" width={'57px'} height={'20px'} alt="" /></div>
            <AvatarProgress
            progress="20"
            step="2"
            />
            </div>
            

            <div className='flex flex-col w-full  items-center  justify-center'>
                 <div className='relative '>
                 <img src="/image1.png" width={'348px'} height={'340px'} alt="" />
                 <div className='absolute bottom-0 right-0 p-[25px] bg-[#000000] rounded-full'>
                    <img src="/addGallary.png" width={'40px'} height={'40px'} alt="" />
                 </div>
                 </div>
                 <div className='mt-[48px]'>
                    <p className='font-[700] font-[manrope]  text-[16px]  leading-[20px] tracking-[3%] text-[#838383] text-center
'>Note: Upload only PNG or JPEG file types</p>
                 </div>
            </div>
        </div>
    )
}

export default page