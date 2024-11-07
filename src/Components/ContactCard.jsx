import React from 'react'
import Background from '../Images/cardBg.jpg'
import { Link } from 'react-router-dom'
import PopUp from './PopUp'

const ContactCard = ({CardData}) => {
  return (
    <div className='flex flex-col-reverse lg:flex-row w-[88%] lg:w-[70%] mx-auto my-[14%] lg:my-[5%] h-auto lg:h-[300px] rounded-[30px] shadow-md shadow-[#00000022]'>
        <div className='w-full lg:w-[65%] flex flex-col relative rounded-l-[30px]'>
          <img className='object-cover h-[260px] lg:h-[100%] w-full rounded-b-[30px] lg:rounded-l-[30px]' src={Background} alt='Contact Card Bg' />
          <div className='flex flex-col justify-center px-[5%] absolute left-0 top-0 content-0 w-full h-full bg-[#FFF4F888] lg:rounded-l-[30px]'>
            <h2 className='text-[1.8rem] lg:text-[2rem] text-logo-red lg:text-[2.5rem] leading-tight mb-4 font-semibold capitalize'>{CardData.Tagline}</h2>
            {
            CardData.PopUp === true ? (
              <PopUp parentBtnTextColor='red'>{CardData.BtnText}</PopUp>
            ):(
              <Link className='text-[1.2rem] w-fit lg:text-[1.25rem] capitalize font-[400] text-logo-red border-2 border-logo-red rounded-md px-3 py-2 mt-3 hover:text-neutral-100 hover:bg-logo-red transition ease-in-out duration-[0.5s]' to={CardData.BtnLink}>{CardData.BtnText}</Link>
            )
          }

          </div>
        </div>
        <div className='w-full lg:w-[35%] rounded-r-[30px] p-0'>
            <img className='w-full h-[300px] lg:h-full object-cover object-center rounded-t-[30px] lg:rounded-tl-none lg:rounded-r-[30px]' src={CardData.SidePic} alt={`Contact Card Pic`}/>
        </div>
    </div>
  )
}

export default ContactCard