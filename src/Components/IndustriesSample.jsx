import React from 'react'
import { Link } from 'react-router-dom'

const IndustriesSample = ({MainHeading, Description, SideImg, ImgPosition}) => {

    const MajorIndustries = [
        {
            title: 'General Labour',
            icon: require('../Images/IndustryIcons/GeneralLabour.png'),
        },{
            title: 'Shipping / Receiving',
            icon: require('../Images/IndustryIcons/Shipping.png'),
        },{
            title: 'Order Picking',
            icon: require('../Images/IndustryIcons/OrderPicking.png'),
        },{
            title: 'Manufacturing',
            icon: require('../Images/IndustryIcons/Manufacturing.png'),
        }

    ]


  return (
    <div className={`flex flex-col ${ImgPosition === 'Left' ? 'lg:flex-row':'lg:flex-row-reverse'} px-[0%] lg:px-[7%] py-[10%] lg:pt-[0%] lg:pb-[6%]`}>
        <div className='flex w-full lg:w-[25%] h-[400px] lg:h-auto overflow-hidden lg:rounded-[30px] shadow-md shadow-zinc-40'>
            <img className='w-full h-full object-cover object-center lg:rounded-[30px]' src={SideImg} alt={MainHeading}/>
        </div>
        <div className={`flex flex-col justify-center items-start w-full lg:w-[75%] pl-[5%] pr-[5%] ${ImgPosition === 'Left' ? 'lg:pr-0 lg:pl-[4%]': 'lg:pr-[4%] lg:pl-[0%]'} py-[4%]`} >
            <h2 className='text-[2.0rem] font-semibold capitalize leading-tight w-full text-center'>{MainHeading}</h2>
            <p className='text-[1.2rem] font-[400] text-center mt-[2%]'>{Description}</p>
            <div className='grid grid-cols-1 mx-auto lg:grid-cols-4 gap-5 mt-[7%] lg:mt-[4%]' >
                {MajorIndustries.map((Industry, index) => (
                    <div key={index} className='flex flex-col items-center text-center p-4 bg-[#FFF4F8] rounded-[30px] shadow-md'>
                        <img className='w-[6rem]' src={Industry.icon} alt={`${Industry.title}'s icon`} />
                        <h3 className='text-[1.1rem] font-semibold tracking-wide mt-2'>{Industry.title}</h3>
                    </div>
                ))}
            </div>
            <Link className='text-[1.2rem] w-fit mx-auto mt-[7%] lg:mt-[4%] lg:text-[1.1rem] capitalize font-[400] text-neutral-50 border-2 border-logo-red rounded-md px-3 py-3 hover:text-logo-red bg-logo-red hover:bg-transparent transition ease-in-out duration-[0.5s]' to={'our-services'}>All Industries</Link>
        </div>
    </div>
  )
}

export default IndustriesSample