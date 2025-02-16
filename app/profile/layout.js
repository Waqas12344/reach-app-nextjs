import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import SiderBar from './SiderBar'

const layout = ({children}) => {
  return (
    <div className='flex flex-col h-screen justify-between'>
        <Navbar/>
       
        {children}
        <Footer/>
    </div>
  )
}

export default layout
