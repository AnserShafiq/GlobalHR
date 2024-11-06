import React from 'react'
import { Link } from 'react-router-dom'

const TS_2 = () => {
    const Features = [
        {
            picture: require('../../../Images/Talent/t-4.jpg'),
            title: 'Guidance from our agents',
            description: 'We can assist you through the entire process of getting hired from start to finish.',
            button: 'Apply now',
            Link:'/for-talent/application/',
        },{
            picture: require('../../../Images/Talent/t-3.jpg'),
            title: 'Perfect job placement',
            description: "We'll find you a job placement that matches your skills, schedule, and location.",
            button: 'Enroll for a job',
            Link:'/for-talent/application/',
        },{
            picture: require('../../../Images/Talent/t-2.jpg'),
            title: 'Ongoing Support',
            description: "After getting you a placement you desire we'll still be here to answer all your questions and concerns.",
            button: 'Get Started',
            Link:'/for-talent/application/',
        }
    ]
    return (
        <div className='flex flex-col mx-[7%] my-[10%] lg:my-[5%]'>
            <h2 className='text-[2rem] leading-tight lg:leading-normal font-[500]'>Empowering Your Career with Targeted Job Opportunities</h2>
            <p className='text-[1.3rem] font-normal mt-3'>
            With a focus on industry-specific recruitment, we assist candidates in finding the perfect job across various sectors, including automotive, food, healthcare, logistics, IT, and supply chain. Our services span across Canada, offering tailored solutions for both companies and job seekers. By understanding the needs of both sides, we create an ideal match that supports your career growth and business goals.
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

export default TS_2