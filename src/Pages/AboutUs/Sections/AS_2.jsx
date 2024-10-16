import React from 'react'
import { Link } from 'react-router-dom'

const AS_2 = () => {
  return (
    <div className='flex flex-col lg:flex-row px-[7%] py-[10%] lg:py-[7%]'>
        <div className='flex flex-col lg:flex-row'>
          <h2 className='text-[2.0rem] font-semibold capitalize leading-tight w-full lg:w-[30%]'>About the Global HR staffing & recruiting experts </h2>
          <div className='flex flex-col w-full lg:w-[70%] mt-[10%] lg:mt-0'>
            <p className='text-[1.2rem] font-[400] tracking-wide mb-8'>At <span className='font-semibold text-logo-red uppercase'>Global HR</span> is a strategic partner for businesses seeking to build high-performing teams in the GTA. Our staffing solutions are designed to meet the dynamic needs of blue-collar sectors, including construction, logistics, manufacturing, and hospitality. We provide both temporary and permanent staffing options to ensure that organizations can scale their workforce efficiently and maintain operational continuity.</p>
            <div className='flex flex-col lg:flex-row'>
                <Link className='text-[1.2rem] w-fit lg:text-[1.1rem] capitalize font-[400] text-logo-red border-2 border-logo-red rounded-md px-3 py-3 hover:text-neutral-100 hover:bg-logo-red transition ease-in-out duration-[0.5s] mb-4 lg:mb-0 mr-0 lg:mr-8' to='/about-us'>Get enlist for jobs</Link>
                <Link className='text-[1.2rem] w-fit lg:text-[1.1rem] capitalize font-[400] text-neutral-50 border-2 border-logo-red rounded-md px-3 py-3 hover:text-logo-red bg-logo-red hover:bg-transparent transition ease-in-out duration-[0.5s]' to='/about-us'>Highlight as job option</Link>
            </div>
          </div>
        </div> 
    </div>  
  )
}

export default AS_2