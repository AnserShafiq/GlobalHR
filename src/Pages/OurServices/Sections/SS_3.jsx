import React from 'react'
import { Link } from 'react-router-dom'

const SS_3 = () => {
    const Target = [
        {
            sideImg: require('../../../Images/Services/s-2.jpg'),
            title:'Flexible Temporary Staffing Solutions',
            description:' When you need additional staff on short notice, we deliver skilled professionals who seamlessly integrate into your operations, ensuring continuity and efficiency throughout your business.',
            btnText: 'Apply to be a talent',
            btnLink: '/for-talent',
            reverse: false,
        },{
            sideImg: require('../../../Images/Services/s-3.jpg'),
            title:'Secure Top Talent for Permanent Roles',
            description:'Skilled employees are essential to achieving lasting success. Our permanent recruitment services provide access to qualified professionals from our talent pool, ensuring your company is positioned for growth.',
            btnText: 'Apply to uplift business',
            btnLink: '/for-employers',
            reverse: true,
        },{
            sideImg: require('../../../Images/Services/s-4.jpg'),
            title:'Effective Workforce Optimization',
            description:'Our workforce management services focus on resource optimization, boosting productivity, and ensuring that your personnel are strategically positioned to meet your business demands.',
            btnText: 'Discuss With Us',
            btnLink: '/contact-us',
            reverse: false,
        },

    ]
  return (
    <div className='flex flex-col my-[10%] lg:my-[3%]'>
            {
                Target.map((Item, index) => (
                    <div className={`flex flex-col ${Item.reverse? 'lg:flex-row':'lg:flex-row-reverse'} w-[full]`} key={index}>
                        <div className='w-full lg:w-[50%]'>
                            <img className='w-full h-[350px] lg:h-[450px] object-cover object-center' src={Item.sideImg} alt={`about section 5 - ${Item.subtitle}`}/>
                        </div>
                        <div className={`flex flex-col items-start justify-center w-full lg:w-[50%] ${!Item.reverse ? 'pl-[5%] pr-[5%] pb-12 pt-8 lg:pt-0 lg:pb-0 lg:pl-[6%] lg:pr-[7%] bg-[#88171e2f]' : 'pl-[5%] pr-[5%] pb-12 pt-8 lg:pt-0 lg:pb-0 lg:pl-[7%] lg:pr-[6%]'}`}>
                            <h2 className='text-[2rem] lg:text-[2.5rem] leading-tight my-4 font-semibold capitalize'>{Item.title}</h2>
                            <p className=' text-[1.2rem] lg:text-[1.3rem]'>{Item.description}</p>
                            <Link className='text-[1.2rem] lg:text-[1.15rem] capitalize font-[400] text-logo-red border-2 border-logo-red rounded-md px-3 py-3 hover:text-slate-50 mt-4 hover:bg-logo-red transition ease-in-out duration-[0.5s]' to={Item.btnLink}>{Item.btnText}</Link>
                        </div>

                    </div>
                ))
            }
        </div>
    
  )
}

export default SS_3