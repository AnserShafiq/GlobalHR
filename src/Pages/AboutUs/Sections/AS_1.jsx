import React, { useEffect, useState } from 'react'
import Bg from '../../../Images/about-bg-1.png'
import anime from '../../../Images/About/a-1.png'
import MobileBg from '../../../Images/home-bg-2-mobile.png';

const AS_1 = () => {

  const [MobileView, setMobileView] = useState(false)

  useEffect(()=>{
    if(window.screen.width <= 1000){
      setMobileView(true)
    }else{
      setMobileView(false)
    }
  },[MobileView])

  return (
    <div className={`flex relative w-[94%] lg:w-[98%] mx-auto h-[100vh] lg:h-[65vh] my-4 shadow-xl shadow-[#00000044] rounded-[30px]`}>
      <img className={`object-cover h-full w-full rounded-[30px] ${MobileView ? 'rotate-[180deg]':''}`} src={MobileView ? MobileBg : Bg} alt='About Us'/>
      <div className='flex items-center justify-evenly lg:justify-center flex-col-reverse lg:flex-row absolute content-0 top-0 left-0 flex rounded-[30px] pl-[6%] pr-[4%] lg:pl-[6%] lg:pr-[0%] w-full h-full bg-[#00000001]'>
        <div className='flex items-start justify-center flex-col w-full lg:w-[50%]'>
          <h2 className='text-[2rem] lg:text-[2.2rem] font-[500] capitalize leading-tight text-slate-100' >Strategic Staffing for Distinct Industry Demands</h2>
          <h4 className='text-[1.15rem] lg:text-[1.125rem] font-[400] text-slate-100 my-5'>With over a decade of expertise, Global HR delivers comprehensive personnel management services. Our customized solutions help businesses overcome unique challenges, optimizing time and resources for better results.</h4>
          <a className='text-[1.2rem] lg:text-[1.1rem] capitalize font-[400] text-slate-100 border-2 border-slate-100 rounded-md px-3 py-3 hover:text-[var(--logo-red-color)] bg-[#0000001f] hover:bg-slate-100 transition ease-in-out duration-[0.5s]' href='/'>Get Connect With Us</a>
        </div>
        <div className='w-full lg:w-[50%]'>
          <img className='w-[28rem] mx-auto' src={anime} alt='about us animation'/>
        </div>
      </div>
    </div>
  )
}

export default AS_1