import React from 'react'

const SiderBar = () => {
  return (
    <div className='bg-[#2E2E30] border-[1px] border-[#565557] py-[20px] px-[16px] h-[100%] w-[240px] overflow-y-auto no-scrollbar '>
        <div className='flex p-[12px] gap-[12px] rounded-[12px] bg-[#3E3E3E] items-center '>
            <div className='  rounded-full '><img src="/siderbarimg.jpg" alt="" className=' bg-contain w-[32px] rounded-full h-[32px]' /></div>
            <div className='text-[#797979]'>|</div>
            <div className='font-[manrope] font-[700] text-[16px] leading-[21px] text-right  text-[#FFCC00]'>Rank: 2nd</div>
        </div>
        <div className='mt-[32px]'>
            <p className=' font-[manrope] font-[700] text-[14px] leading-[14px] text-[#515151]'>REcent Quests</p>
        </div>
        <div className='flex flex-col gap-[12px] mt-[16px] w-full'>
            <div className='p-[8px] border-[1px] border-[#565557] bg-[#474747] rounded-[8px] w-full flex '>
                <div className='w-[95%]'>
                    <h3 className='font-[manrope] font-[700] text-[14px] leading-[14px] text-[#FFFFFF]'>Attend Major</h3>
                    <p className='mt-[31px] font-[manrope] font-[700] text-[14px] leading-[14px] text-[#8D8D8D]'>Attend a major-specific career fair</p>
                </div>
                <div className='bg-[#FFFFFF] w-[20px] h-[20px] rounded-[100%] flex items-center justify-center'><img src="/arrow.png" alt="" /></div>
            </div>
            <div className='p-[8px] border-[1px] border-[#565557] bg-[#474747] rounded-[8px] w-full flex '>
                <div className='w-[95%]' >
                    <h3 className='font-[manrope] font-[700] text-[14px] leading-[14px] text-[#FFFFFF]'>Interview</h3>
                    <p className='mt-[31px] font-[manrope] font-[700] text-[14px] leading-[14px] text-[#8D8D8D]'>Conduct an informational interview with someone at the career fair.r</p>
                </div>
                <div className='bg-[#FFFFFF] w-[20px] h-[20px] rounded-[100%] flex items-center justify-center'><img src="/arrow.png" alt="" /></div>
            </div>

         
        </div>
        <div className='mt-[32px]'>
            <p className=' font-[manrope] font-[700] text-[14px] leading-[14px] text-[#515151]'>REcent Quests</p>
        </div>
        <div className='flex flex-col gap-[12px] mt-[16px] w-full'>
            <div className='px-[12px] py-[16px] border-[1px] border-[#565557] bg-[#292929] rounded-[8px] w-full flex gap-[8px] '>
            <div className='bg-[#FF5A5F] w-[28px] h-[28px] rounded-[100%] flex items-center justify-center'><img src="/arrow.png" alt="" /></div>
                <div className='w-[80%]'>
                    <h3 className='font-[manrope] font-[700] text-[14px] leading-[14px] text-[#FFFFFF]'>Software Engineering Intern</h3>
                    <p className='mt-[12px] font-[manrope] font-[700] text-[12px] leading-[14px] text-[#8D8D8D]'>AirBnB</p>
                    <p className='mt-[12px] font-[manrope] font-[700] text-[10px] leading-[14px] text-[#5AC8FA]'>2 days ago</p>
                </div>
               
            </div>
         
        </div>
    </div>
  )
}

export default SiderBar