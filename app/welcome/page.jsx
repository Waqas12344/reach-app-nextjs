'use client'
import { useRouter } from 'next/navigation'
import React from 'react'
 
const page = () => {
  const router=useRouter();
  return (
    <div className='flex flex-col  items-center justify-center   w-full h-[100vh] overflow-hidden'>
    
    <div>
    <div className='w-[320px] h-[320px] m-auto'><img src="/image1.png"  className='w-full h-full'/></div>
        <div className='w-[724px]  mt-[52px]'>
          <h2 className='font-[400] text-[72px] leading-[75px] text-center font-[manrope]'>
          Welcome  <br />
         <span className='font-[700] text-[#C785E8]'> GEEBUMBUM</span>
          </h2>
        </div>
        <div className='flex items-center mt-[32px] justify-center'>
            <button className='py-[20px] px-[32px] bg-[#292929] flex gap-[20px] rounded-[12px] font-[manrope] font-[700] text-[32px] leading-[33px] text-center items-center text-[#F9F8F7]' onClick={() => router.push("/profile")} >View Profile <img src="/arrow-right.png" alt="" /></button>
        </div>
    </div>
    </div>
  )
}

export default page