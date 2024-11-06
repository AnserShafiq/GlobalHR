import React from 'react'
import Side from '../../../Images/Home/h4.jpg'
import { Link } from 'react-router-dom'

const HS_3 = () => {
  return (
    <div className='flex flex-col lg:flex-row bg-[#b71f5c] mt-[10%] lg:mt-[2.5%]'>
        <div className=' w-[100%] lg:w-[50vw] max-h-[700px] h-[400px] lg:h-[700px] p-0 m-0'>
            <img className='w-full h-full object-cover' src={Side} alt='Find Out More Section'/>
        </div>
        <div className='w-[100%] lg:w-[50vw] flex flex-col justify-center items-start px-[5%] py-[7%] lg:py-none lg:pr-[7%] lg:pl-[4%]'>
            <h2 className='text-[2rem] lg:text-[2.8rem] font-[500] capitalize leading-tight text-slate-100' >Many roles keep aviation running smoothly, apply for all of them in one go.</h2>
            <h4 className='text-[1.15rem] lg:text-[1.125rem] font-[400] text-slate-100 my-5'>GlobalHR is your trusted partner for talent. We don't just help you find a job you love—we help you build a rewarding career with the perfect balance between work and life.</h4>
            <Link className='text-[1.2rem] lg:text-[1.25rem] capitalize font-[400] text-slate-100 border-2 border-slate-100 rounded-md px-3 py-3 hover:text-[var(--logo-red-color)] hover:bg-slate-100 transition ease-in-out duration-[0.5s]' to='/for-talent/application/'>To Be An Option</Link>
        </div>
    </div>
  )
}

export default HS_3