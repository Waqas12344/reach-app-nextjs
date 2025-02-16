import React from 'react'

const Navbar = () => {
  return (
    <div className='bg-[#2E2E30] border-[1px] border-[#565557] w-full h-[120px] pl-[32px] pr-[20px] pt-[12px] pb-[20px] flex flex-col gap-[43px]'>
        <div className='flex justify-end gap-[12px]'>
            <div className='py-[4px] px-[8px] bg-[#474747] rounded-[6px]'><img src="/save.png" alt="" /></div>
            <div className='py-[4px] px-[8px] bg-[#FF3B30] rounded-[6px]'><img src="/bell.png" alt="" /></div>
        </div>
        <div className='w-full flex justify-start'>
            <ul className='flex gap-[32px] '>
                <li className='font-[900] text-[20px] leading-[20px] font-[manrope] text-[#FFFFFF] opacity-[20%] hover:opacity-[100%] hover:text-[#AF52DE]'><a href="#">Dashboard</a></li>
                <li className='font-[900] text-[20px] leading-[20px] font-[manrope] text-[#FFFFFF] opacity-[20%] hover:opacity-[100%] hover:text-[#AF52DE]'><a href="#">JOb Portal</a></li>
                <li className='font-[900] text-[20px] leading-[20px] font-[manrope] text-[#FFFFFF] opacity-[20%] hover:opacity-[100%] hover:text-[#AF52DE]'><a href="#">Skilltree</a></li>
                <li className='font-[900] text-[20px] leading-[20px] font-[manrope] text-[#FFFFFF] opacity-[20%] hover:opacity-[100%] hover:text-[#AF52DE]'><a href="#">Quests</a></li>
                <li className='font-[900] text-[20px] leading-[20px] font-[manrope] text-[#FFFFFF] opacity-[20%] hover:opacity-[100%] hover:text-[#AF52DE]'><a href="#">GEEBUMBUM</a></li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar