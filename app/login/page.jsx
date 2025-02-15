'use client'
import { useRouter } from 'next/navigation'
import React from 'react'

const Login = () => {
    const router = useRouter();
  return (
    <div className='py-[53px] flex   w-full h-[100vh]'>
        <div className='flex flex-col items-center w-[335px] mr-[479px] ml-[184px] justify-center'>
            <div className='w-full'>
                <div className='flex justify-center '>
                    <img src="/logo.png" alt=""  />
                </div>
                <div className='w-full mt-[48px] '>
                    <button   className='w-full rounded-[10px] border-[#EFECE6] border-[1px] bg-[#FFFFFF]'>
                       <div className='flex items-center justify-center py-[16px] px-[12px] gap-[15px]' onClick={() => router.push("/welcom")} >
                       <img src="/googlelogo.png" alt="" />
                       <p className='font-[700] text-[16px] xl:text-[20px] leading-[27.32px] text-primary font-[Manrope]'>Continue with Google</p>
                       </div>
                    </button>
                </div>
                <div className='mt-[32px] w-full rounded-[20px] p-[16px] '>
             <p className='text-center font-[Manrope] font-[700] text-[16px] text-[#8F8F8F] leading-[20px] '>
             By signing into this application, you’re agreeing to our Privacy Policy.
<br />
<br />
Reach Pathways will never post any data without your premission.
             </p>
                </div>
            </div>
        </div>
        <div className='w-[527px] h-full  bg-contain bg-no-repeat bg-[url("/loginImg.png")]'>
            {/* <img src="/loginImg.png" alt="" className='' /> */}
        </div>
    </div>
  )
}

export default Login