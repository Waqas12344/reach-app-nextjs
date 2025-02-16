import React from 'react'
import SiderBar from './SiderBar'

const skills=[ "Excel", "Python","Leadership","Project Management","Task Delegation"," Brand Design", "Teamwork"]
const skill = ["Software Developement", "Project management", "UI/UX Design"]
const page = () => {
  return (
    <div className='flex h-full bg-[#1F1F1F]'>
      <div className='h-full w-[240px]'><SiderBar/></div>
      <div className='flex p-[32px] gap-[32px] w-auto'>
        <div className='flex flex-col py-[32px] px-[24px] gap-[32px] bg-[#2E2E30] rounded-[16px] '>
          <div>
            <h2 className='font-[900] text-[20px] leading-[21px] text-[#FFFFFF] '>ABOUT</h2>
            <p className='font-[500] text-[20px] leading-[25px] text-[#989898] mt-[16px]'>Aenean nec eget nunc semper ut egestas velit ullamcorper hac. At ipsum scelerisque lobortis aliquet consectetur id. Donec maecenas pretium et in. Egestas eget arcu arcu sollicitudin. Molestie cras metus massa in malesuada dignissim lectus tempor pellentesque.</p>
          </div>
          <div>
            <h2 className='font-[900] text-[20px] leading-[21px] text-[#FFFFFF] '>SKILLS</h2>
            <div className='w-full flex flex-wrap mt-[16px] gap-[16px]'>
                   {
                    skills.map((item,index)=>(
                        <div className='py-[8px] px-[12px] bg-[#AF52DE1F] text-[#AF52DE] rounded-[20px] font-[manrope] font-[800] text-[16px] leading-[16px]  ' key={index}>{item}</div>
                    ))
                   }
                </div>
          </div>
          <div>
            <h2 className='font-[900] text-[20px] leading-[21px] text-[#FFFFFF] '>Career Interests</h2>
            <div className='w-full flex flex-wrap mt-[16px] gap-[16px]'>
                    {
                        skill.map((item, index) => (
                            <div className='py-[8px] px-[12px] bg-[#FF95001F] text-[#FF9500] rounded-[20px] font-[manrope] font-[800] text-[16px] leading-[16px]  ' key={index}>{item}</div>
                        ))
                    }
                </div>
          </div>
          <div>
            <h2 className='font-[900] text-[20px] leading-[21px] text-[#FFFFFF] '>Big Five Assessment</h2>
            <p className='font-[500] text-[20px] leading-[25px] text-[#989898] mt-[16px]'>Aenean nec eget nunc semper ut egestas velit ullamcorper hac. At ipsum scelerisque lobortis aliquet consectetur id.</p>
          </div>
          <div className='w-full bg-[#FFFFFF] rounded-[12px] p-[14px] items-center justify-center gap-[8px] text-[16px] font-[700] font-[manrope] text-center'>
          Edit Resume
          </div>
        </div>

        <div className='flex flex-col px-[20px] py-[32px] bg-[#2E2E30] rounded-[16px]'>
          <div className='flex flex-col gap-[32px] '>
            <div className='flex flex-col justify-center items-center'>
              <img src="/image1.png" width={'120px'} height={'120px'} alt="" />
              <h1 className='font-[900] text-[20px] leading-[21px] text-[#ffffff]'>GEEBUMBUM</h1>
              <p className='text-center text-[16px] font-[500] font-[manrope] text-[#ffffff] opacity-[50%]'>Level 1</p>
              </div>
            <div>
              <p className='font-[600] font-[manrope] text-[20px] text-center leading-[27px] text-[#838383]'>“I want to build products that are inherently smaller than any of the products on the market today.”</p>
            </div>
            <div></div>
          </div>
             <div className='w-full mt-[200px] bg-[#3D3D3D] rounded-[12px] p-[14px] items-center justify-center gap-[8px] text-[16px] font-[700] font-[manrope] text-center text-[#AF52DE]'>
          Edit Resume
          </div> 
        </div>
      </div>
    </div>
  )
}

export default page