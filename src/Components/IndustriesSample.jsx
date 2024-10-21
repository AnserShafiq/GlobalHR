import React from 'react'
import { Link } from 'react-router-dom'

const IndustriesSample = ({MainHeading, Description, SideImg, ImgPosition}) => {

    const MajorIndustries = [
        {
            title: 'Manufacturing',
            icon: require('../Images/IndustryIcons/Manufacturing.png'),
        },{
            title: 'Information Technology',
            icon: require('../Images/IndustryIcons/InfoTech.png'),
        },{
            title: 'Healthcare',
            icon: require('../Images/IndustryIcons/Healthcare.png'),
        },{
            title: 'Marketing & Finance',
            icon: require('../Images/IndustryIcons/Financial.png'),
        }

    ]


  return (
    <div className={`flex flex-col ${ImgPosition === 'Left' ? 'lg:flex-row':'lg:flex-row-reverse'} px-[7%] py-[10%] lg:pt-[0%] lg:pb-[0%]`}>
        <div className='flex w-[25%] overflow-hidden  rounded-[30px] shadow-md shadow-zinc-40'>
            <img className='w-full h-full object-cover object-center rounded-[30px]0' src={SideImg} alt={MainHeading}/>
        </div>
        <div className='flex flex-col justify-center items-start w-[75%] lg:pl-[4%] py-[4%]' >
            <h2 className='text-[2.0rem] font-semibold capitalize leading-tight w-full text-center'>{MainHeading}</h2>
            <p className='text-[1.2rem] font-[400] text-center mt-[2%]'>{Description}</p>
            <div className='grid grid-cols-4 gap-5 mt-[4%]' >
                {MajorIndustries.map((Industry, index) => (
                    <div key={index} className='flex flex-col items-center text-center p-4 bg-[#FFF4F8] rounded-[30px] shadow-md'>
                        <img className='w-[6rem]' src={Industry.icon} alt={`${Industry.title}'s icon`} />
                        <h3 className='text-[1.1rem] font-semibold tracking-wide mt-2'>{Industry.title}</h3>
                    </div>
                ))}
            </div>
            <Link className='text-[1.2rem] w-fit mx-auto mt-[4%] lg:text-[1.1rem] capitalize font-[400] text-neutral-50 border-2 border-logo-red rounded-md px-3 py-3 hover:text-logo-red bg-logo-red hover:bg-transparent transition ease-in-out duration-[0.5s]' to={'our-services'}>All Industries</Link>
        </div>
    </div>
  )
}

export default IndustriesSample