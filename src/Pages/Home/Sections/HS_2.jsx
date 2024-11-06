import React from 'react'
import { Link } from 'react-router-dom'

const HS_2 = () => {
    const Features = [
        {
            picture: require('../../../Images//Home/h1.jpg'),
            title: 'Get to Know Us',
            description: 'Discover how HR Global can assist you in securing the perfect job or finding top talent to fill your open positions.',
            button: 'Explore Us',
            Link:'/about-us',
        },{
            picture: require('../../../Images/Home/h2.jpg'),
            title: 'Join as a Job Seeker',
            description: 'Searching for the ideal job? Let HR Global guide you to opportunities that fit your professional goals.',
            button: 'Enroll for a job',
            Link:'/for-talent/application/',
        },{
            picture: require('../../../Images/Home/h3.jpg'),
            title: 'Recruit Top Talent',
            description: 'Need to fill key roles? HR Global provides access to a vast network of qualified candidates to meet your recruitment needs.',
            button: 'To Seek Options',
            Link:'/for-employers',
        }
    ]
    return (
        <div className='flex flex-col mx-[7%] my-[10%] lg:my-[5%]'>
            <h2 className='text-[2rem] leading-tight lg:leading-normal font-[500]'>To become the leading global organization excelling in equity & specialization.</h2>
            <p className='text-[1.3rem] font-normal mt-3'>
            In a rapidly evolving work landscape, talent seeks opportunities for growth while prioritizing work-life balance, equity, and flexibility. As organizations require specialized skills across various industries, our goal is to be your trusted partner in talent. We aim to understand your unique needs and provide focused, scalable solutions.
            </p>
            <div className='flex flex-col lg:flex-row lg:flex-wrap justify-center mt-6 '>
                {Features.map((Item, index) =>(
                    <div key={index} className='flex flex-col w-[100%] lg:w-[30%] mx-auto lg:mx-[1.5%] my-[7%] lg:my-[1.5%] rounded-[30px] shadow-sm shadow-[#00000033]'>
                        <img className='h-[230px] object-cover object-center rounded-t-[30px]' src={Item.picture} alt={`${Item.title} Feature`} />
                        <h2 className='text-[1.5rem] font-[500] mx-4 mt-4'>{Item.title}</h2>
                        <h3 className='text-[1.1rem] mx-4 mt-4'>{Item.description}</h3>
                        <Link className='text-[1.1rem] capitalize font-[500] bg-zinc-900 text-zinc-100 mx-auto lg:mx-4 my-4 w-fit px-4 py-2 rounded-[15px] transition ease-in-out duration-[0.3s] hover:scale-[1.03]' to={Item.Link}>{Item.button}</Link>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default HS_2