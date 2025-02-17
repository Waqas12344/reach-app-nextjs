'use client'
import AvatarProgress from '@/components/AvatarProgress';
 
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation';
import { useAvatarProgress } from '@/context/AvatarProgressContext';

const page = () => {
    const router = useRouter();
    const { currentStep, setCurrentStep,nextStep,formData, updatePersonalDetails } = useAvatarProgress();

    // Local state for form inputs
    const [form, setForm] = useState({
        firstName: '',
        lastName: '',
        birthday: '',
        highSchool: '',
        zipCode: ''
    });

    // Handle input change
    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };
    useEffect(()=>{
        updatePersonalDetails(form);  
        console.log(form)
        console.log(formData.personalDetails)
    },[form])

    // Handle "Next" click
    const handleNext = () => {
        if (formData.personalDetails.length > 0) {
            setCurrentStep(currentStep + 1);
            nextStep();
            router.push('/avatar');
          }
    };
    return (
        <div className='flex py-[32px] px-[48px] gap-[162px] h-100vh'>
            <div className='max-w-[316px]'>
                <div>
                     <img src="/logo.png" width={'57px'} height={'20px'} alt="" />
                     </div>
                     <div className='w-[316px] mt-[100px] bg-[#2E2E30] rounded-[8px] border-[1px] border-[#565557] shadow-[#0000000A]'>
            <AvatarProgress
            progress={(currentStep / 4) * 100} step={currentStep + 1}
            />
              <div className='w-full mt-[70px] p-[20px]'>
        <button className='w-full rounded-[8px] p-[12px]  bg-[#ffffff] text-[16px] font-[700] font-[manrope] leading-[16.8px]' onClick={handleNext}>
      Next
    </button>
        </div>
    
            </div>
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
                            <input 
                            type="text" 
                                name="firstName" 
                                placeholder='e.g. John' 
                                value={form.firstName} 
                                onChange={handleChange} 
                                className=' rounded-[12px] py-[20px] px-[24px] bg-[#E7E7E7] text-[#797979] font-[manrope] font-[600] text-[24px] leading-[28px] outline-none ' />
                        </div>
                        <div className='flex flex-col gap-[32px] '>
                            <label className='font-[manrope] font-[700] text-[20px] text-[#1F1F1F] leading-[20px]'>When’s your birthday?</label>
                            <input  
                            type="text" 
                                name="birthday" 
                                placeholder='e.g. MM/DD/YYYY' 
                                value={form.birthday} 
                                onChange={handleChange} 
                                className=' rounded-[12px] py-[20px] px-[24px] bg-[#E7E7E7] text-[#797979] font-[manrope] font-[600] text-[24px] leading-[28px] outline-none ' />
                        </div>
                        <div className='flex flex-col gap-[32px] '>
                        <div>
                           <label className='font-[manrope] font-[700] text-[20px] text-[#1F1F1F] leading-[20px]'>High School Name</label>
                           <p className='font-[manrope] font-[600] text-[16px] leading-[20px] text-[#8D8D8D]'>
                           What’s your most recent high school name?
                           </p>
                           </div>
                            <input 
                            type="text" 
                                name="highSchool" 
                                placeholder='e.g. WY High School' 
                                value={form.highSchool} 
                                onChange={handleChange} 
                                className=' rounded-[12px] py-[20px] px-[24px] bg-[#E7E7E7] text-[#797979] font-[manrope] font-[600] text-[24px] leading-[28px] outline-none ' />
                        </div>
                    </div>
                    <div className='flex flex-col justify-between'>
                        <div className='flex flex-col gap-[32px] '>
                        
                           <label className='font-[manrope] font-[700] text-[20px] text-[#1F1F1F] leading-[20px]'>Last Name</label>
                          
                            <input 
                            type="text" 
                                name="lastName" 
                                placeholder='e.g. Doe' 
                                value={form.lastName} 
                                onChange={handleChange}
                                 className=' rounded-[12px] py-[20px] px-[24px] bg-[#E7E7E7] text-[#797979] font-[manrope] font-[600] text-[24px] leading-[28px]  outline-none' />
                        </div>
                        <div className='flex flex-col gap-[32px] '>
                           <div>
                           <label className='font-[manrope] font-[700] text-[20px] text-[#1F1F1F] leading-[20px]'>Zip Code</label>
                           <p className='font-[manrope] font-[600] text-[16px] leading-[20px] text-[#8D8D8D]'>
                           What’s your neighborhood zip code?
                           </p>
                           </div>
                            <input 
                            type="text" 
                                name="zipCode" 
                                placeholder='e.g. 60637' 
                                value={form.zipCode} 
                                onChange={handleChange} 
                                className=' rounded-[12px] py-[20px] px-[24px] bg-[#E7E7E7] text-[#797979] font-[manrope] font-[600] text-[24px] leading-[28px] outline-none ' />
                        </div>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default page