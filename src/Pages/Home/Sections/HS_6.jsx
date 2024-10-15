import React from 'react'
import Anime from '../../../Images/Home/h10.png'
import { Link } from 'react-router-dom'

const HS_6 = () => {
  return (
    <div className='flex flex-col lg:flex-row px-[7%] bg-[#88171e2f] py-[10%] lg:py-[2%]'>
        <div className='w-full lg:w-[50%] max-h-[550px]'>
            <img className='w-full h-full object-contain' src={Anime} alt='Home Anime' />
        </div>
        <div className='w-full lg:w-[50%] flex flex-col justify-center'>
            <h2 className='text-[2rem] lg:text-[2.5rem] leading-tight my-4 font-semibold capitalize'>Contact Global HR for Expert Staffing Support</h2>
            <p className=' text-[1.2rem] lg:text-[1.3rem]'>Whether you're looking for temporary, permanent, or contract-based employees, our team of recruitment experts is ready to assist. Reach out today to discover how we can help you find the right talent to drive your company’s success. </p>
            <Link className='text-[1.2rem] w-fit lg:text-[1.25rem] capitalize font-[400] text-logo-red border-2 border-logo-red rounded-md px-3 py-3 mt-4 hover:text-neutral-100 hover:bg-logo-red transition ease-in-out duration-[0.5s]'to={'/contact-us'}>To Contact Us</Link>
        </div>  
    </div>
  )
}

export default HS_6