import React from 'react'
import { Link } from 'react-router-dom'

const HS_5 = () => {

    const Target = [
        {
            sideImg: require('../../../Images/Home/h5.jpg'),
            subtitle: 'Tailored HR Solutions',
            title:'Customized HR Solutions for Growth',
            description:'Customize your human resources approach with our tailored solutions designed to meet the unique needs of your organization. We provide expertise in talent acquisition, employee engagement, and compliance to help you thrive.',
            button: 'Read More',
            link:'/about-us',
            reverse:false,
        },{
            sideImg: require('../../../Images/Home/h6.jpg'),
            subtitle: 'Comprehensive Talent Management',
            title:'End-to-End Talent Management',
            description:'Streamline your hiring process with our end-to-end talent management services. From recruitment to onboarding and performance management, we ensure you have the right people in the right roles.',
            button: 'Connect with us',
            link:'/for-talent/application/',
            reverse:true,
        },{
            sideImg: require('../../../Images/Home/h7.jpg'),
            subtitle: 'Expert Consultation Services',
            title:'Expert HR Consulting Services',
            description:' Leverage our industry expertise with personalized consultation services. Our team of seasoned HR professionals is ready to guide you through complex HR challenges and develop effective strategies for success.',
            button: 'How we handle',
            link:'/our-services',
            reverse:false,
        },{
            sideImg: require('../../../Images/Home/h8.jpg'),
            subtitle: 'Innovative Training Programs',
            title:'Workforce Empowerment through Training',
            description:'Invest in your workforce with our innovative training programs. We offer workshops and courses that foster skill development, leadership training, and compliance education to empower your team.',
            button: 'Request any field',
            link:'/for-employers/application/',
            reverse:true,
        },{
            sideImg: require('../../../Images/Home/h9.jpg'),
            subtitle: 'Data-Driven Insights',
            title:'Analytics for Better Decision-Making',
            description:'Make informed decisions with our data-driven insights. We provide analytics and reporting tools that help you understand employee performance, engagement levels, and overall organizational health.',
            button: 'Consult with us',
            link:'/contact-us',
            reverse:false,
        },
    ]

    return (
        <div className='flex flex-col my-[10%] lg:my-0'>
            {
                Target.map((Item, index) => (
                    <div className={`flex flex-col-reverse ${Item.reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} w-[full]`} key={index}>
                        <div className={`flex flex-col items-start justify-center w-full lg:w-[50%] ${Item.reverse ? 'pl-[5%] pr-[5%] pb-12 pt-8 lg:pt-0 lg:pb-0 lg:pl-[6%] lg:pr-[7%] bg-[#88171e2f]' : 'pl-[5%] pr-[5%] pb-12 pt-8 lg:pt-0 lg:pb-0 lg:pl-[7%] lg:pr-[6%]'}`}>

                            <h3 className='text-[0.9rem] lg:text-[1rem] font-[500] uppercase'>{Item.subtitle}</h3>
                            <h2 className='text-[2rem] lg:text-[2.5rem] leading-tight my-4 font-semibold capitalize'>{Item.title}</h2>
                            <p className=' text-[1.2rem] lg:text-[1.3rem]'>{Item.description}</p>
                            <Link className='text-[1.2rem] w-fit lg:text-[1.25rem] capitalize font-[400] text-logo-red border-2 border-logo-red rounded-md px-3 py-3 mt-4 hover:text-neutral-100 hover:bg-logo-red transition ease-in-out duration-[0.5s]'to={Item.link}>{Item.button}</Link>

                        </div>
                        <div className='w-full lg:w-[50%]'>
                            <img className='w-full h-[350px] lg:h-[600px] object-cover object-center' src={Item.sideImg} alt={`home section 5 - ${Item.subtitle}`}/>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default HS_5