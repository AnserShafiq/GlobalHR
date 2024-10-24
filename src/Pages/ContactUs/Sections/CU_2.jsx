import React from 'react'
import { PiBuildingApartmentBold as Location} from "react-icons/pi";
import { HiOutlineMail as Mail} from "react-icons/hi";
import { LuPhoneCall as Contact} from "react-icons/lu";
import { Link } from 'react-router-dom';

const CU_2 = () => {

    return (
    <div className='flex flex-col items-center w-full px-[5%] lg:px-[7%] py-[10%] lg:py-[5%]'>
        <h2 className='text-[2.0rem] font-semibold capitalize leading-tight w-fit'>
            Reach out to discover the solutions we offer
        </h2>
        <p className='text-[1.2rem] font-[400] text-center tracking-wide mb-8'>
        Combining our dedication to people with innovative technology, we deliver experiences that feel deeply human and personalized. We understand the importance of creating solutions that empower individuals and businesses alike, ensuring that each step of the process is infused with empathy and precision.
        </p>
        <div className='grid justify-center grid-cols-[275px,275px,275px] w-full gap-x-[5%] px-[5%]'>
            
            <div className='flex flex-col items-center w-full bg-[#FFF4F8] shadow-sm shadow-zinc-600 rounded-[30px] px-3 py-5'>
                <Mail className='text-[5rem] text-logo-red' />
                <h2 className='text-[1.3rem] uppercase tracking-wide font-semibold text-logo-red'>Our E-Mails</h2>
                <p className='text-[1rem] leading-tight text-center mt-2 text-logo-red'>
                Job Seekers: 
                <Link className=' text-black hover:text-logo-red hover:underline ml-1' to={'mailto:jobs@hrglobal.ca'}>
                 jobs@hrglobal.ca
                </Link><br/>
                Employers: 
                <Link className=' text-black hover:text-logo-red hover:underline ml-1' to={'mailto:info@hrglobal.ca'}>
                 info@hrglobal.ca
                </Link>
                </p>
            </div>
            <div className='flex flex-col items-center w-full bg-[#FFF4F8] shadow-sm shadow-zinc-600 rounded-[30px] px-4 py-5'>
                <Contact className='text-[5rem] text-logo-red' />
                <h2 className='text-[1.3rem] uppercase tracking-wide font-semibold text-logo-red'>Our Contact</h2>
                <p className='text-[1rem] leading-tight text-center mt-2 hover:text-logo-red hover:underline'>
                <Link to={'tel:+16479015000'}>
                (647) 901 5000
                </Link>
                </p>
            </div>
            <div className='flex flex-col items-center w-full bg-[#FFF4F8] shadow-sm shadow-zinc-600 rounded-[30px] px-4 py-5'>
                <Location className='text-[5rem] text-logo-red' />
                <h2 className='text-[1.3rem] uppercase tracking-wide font-semibold text-logo-red'>Our Office</h2>
                <p className='text-[1rem] leading-tight text-center mt-2 hover:text-logo-red hover:underline'>
                <Link to={'https://maps.app.goo.gl/QonpayFJz3R9aw5H7'}>
                2424 Finch Ave W #18, Toronto, ON M9M 2E1, Canada
                </Link>
                </p>
            </div>
        </div>
    </div>
  )
}

export default CU_2