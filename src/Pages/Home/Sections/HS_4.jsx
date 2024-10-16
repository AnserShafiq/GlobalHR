import React from 'react'
import { Link } from 'react-router-dom'



const HS_4 = () => {
  return (
    <div className='flex lg:flex-col relative' >
      <img className='h-[100vh] lg:h-[500px] lg:ml-[45%]' src={require('../../../Images/buildings-bg.png')} alt='Buildings Bg - Home' />
      <div className='absolute w-[100%] lg:h-[100%] content-0 left-0 top-0 flex items-center justify-center px-[7%] py-[20%] lg:py-12'>
        <div className='flex flex-col lg:flex-row'>
          <h2 className='text-[2.1rem] font-semibold capitalize leading-tight w-full lg:w-[30%]'>Tailored Staffing Solutions for Your Workforce Needs</h2>
          <div className='flex flex-col w-full lg:w-[70%] mt-[10%] lg:mt-0'>
          <p className='text-[1.2rem] tracking-wide font-[400] mb-8'>At <span className='font-semibold text-logo-red uppercase'>Global HR</span>, we specialize in delivering dependable, on-demand staffing solutions for businesses. Whether you need seasonal, ongoing, or contractual workers, we provide a wide range of professional, skilled, and unskilled labor. Our team carefully selects candidates to align with your company culture, ensuring a seamless fit. From temporary to full-time positions, we offer quick and reliable access to the talent you need, when you need it.</p>
          <Link className='text-[1.1rem] w-fit lg:text-[1.25rem] capitalize font-[400] text-logo-red border-2 border-logo-red rounded-md px-3 py-3 hover:text-neutral-100 hover:bg-logo-red transition ease-in-out duration-[0.5s]' to='/about-us'>Learn About Us</Link>
          </div>
        </div>
      </div>
    
    </div>
  )
}

export default HS_4