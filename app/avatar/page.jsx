'use client'
import AvatarProgress from '@/components/AvatarProgress';
import React, { useState } from 'react';
import { useAvatarProgress } from '@/context/AvatarProgressContext';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const page = () => {
    const router = useRouter();
    const { currentStep,nextStep, setCurrentStep,formData,updateAvatar } = useAvatarProgress();
    const [imagePreview, setImagePreview] = useState("/image0.png"); 
  
    const handleNext = () => {
      if (formData.avatar) {   
        nextStep();
        router.push('/bio');
      } else {
        alert('Please upload an avatar image.');
      }
    };
  
    const handleImageUpload = (e) => {
      const file = e.target.files[0];
      if (file && (file.type === "image/png" || file.type === "image/jpeg")) {
        const imageUrl = URL.createObjectURL(file);
        setImagePreview(imageUrl);
        updateAvatar(file);
        
      } else {
        alert("Please upload a PNG or JPEG file.");
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
        <button className='w-full rounded-[8px] p-[12px]  bg-[#ffffff] text-[16px] font-[700] font-[manrope] leading-[16.8px]' onClick={handleNext}>
      Next
    </button>
        </div>
    
            </div>
            </div>
            

            <div className='flex flex-col w-full  items-center  justify-center '>
                 <div className='relative w-[378px] h-[370px] bg-contain overflow-hidden'>
                 <Image src={imagePreview} width={348} height={340} alt="Avatar Preview" className='bg-cover rounded-[76px] '  />

                 <label className='absolute bottom-[0px] right-[0px] p-[25px] bg-[#000000] rounded-full cursor-pointer'>
            <input 
              type="file" 
              accept="image/png, image/jpeg" 
              className="hidden" 
              onChange={handleImageUpload} 
            />
            <Image src="/addGallary.png" width={40} height={40} alt="Upload Avatar" />
          </label>
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