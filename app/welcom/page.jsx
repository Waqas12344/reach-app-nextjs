'use client'
import { useRouter } from 'next/navigation'
import React from 'react'
 
const Welcom = () => {
  const router=useRouter();
  return (
    <div className='flex flex-col p-[48px] items-center justify-center relative w-full h-[100vh] overflow-hidden'>
        <div className='absolute top-[261px] left-[56px] hidden lg:block'><img src="/image2.png" alt="" /></div>
        <div className='absolute top-[52px] left-[1005px] hidden lg:block'><img src="/image3.png" alt="" /></div>
        <div className='absolute top-[206px] left-[1301px] hidden lg:block'><img src="/image4.png" alt="" /></div>
        <div className='absolute top-[513px] left-[1201px] hidden lg:block'><img src="/image5.png" alt="" /></div>
        <div className='absolute top-[481px] left-[92px] hidden lg:block'><img src="/image8.png" alt="" /></div>
        <div className='absolute top-[757px] left-[319px] hidden lg:block'><img src="/image7.png" alt="" /></div>
        <div className='absolute top-[839px] left-[962px] hidden lg:block'><img src="/image6.png" alt="" /></div>
        <div className=''><img src="/logo.png" width={'57px'} height={'20px'} alt="" /></div>
        <div className='w-[724px] lg:mt-[207px] '>
            <h2 className='text-center font-[fivosans] font-[400] text-[72px] leading-[75px] text-[#1A1A1A]  '>Welcome to {" "}
            <span className='text-[#C785E8] '>Reach Pathways</span></h2>
            <p className='py-[32px] px-[33px]  font-[manrope] font-[600] text-[32px] leading-[33px] text-center text-[#838383]'>Turpis senectus ultricies interdum bibendum. Ultrices integer lacus nunc facilisis aenean facilisi rutrum feugiat.</p>
        </div>
        <div className='flex items-center justify-center'>
            <button className='py-[20px] px-[32px] bg-[#292929] flex gap-[20px] rounded-[12px] font-[manrope] font-[700] text-[32px] leading-[33px] text-center items-center text-[#F9F8F7]' onClick={() => router.push("/form")} >Get Started <img src="/arrow-right.png" alt="" /></button>
        </div>
    </div>
  )
}

export default Welcom