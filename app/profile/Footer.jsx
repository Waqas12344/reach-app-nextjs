import React from 'react'

const Footer = () => {
  return (
    <div className='bg-[#2E2E30] py-[18px] px-[12px] flex items-center justify-between border-[1px] border-[#565557]'>
        <div className='flex gap-[4px]'>
            <img src="/user.png" alt="" />
            <p className='text-[#797979] font-[manrope] font-[800] text-[12px] leading-[14px] '>12 Online</p>
        </div>
        <div className='bg-[#474747] rounded-[6px] py-[4px] px-[10px] '>
            <img src="/questionmark.png" alt="" />
        </div>
    </div>
  )
}

export default Footer