import React from 'react';
import { Link } from 'react-router-dom';

const HS_2 = () => {
    const Features = [
        {
            picture: require('../../../Images/Home/h1.jpg'),
            title: 'Get to Know Us',
            description: 'Discover how HR Global can assist you in securing the perfect job or finding top talent to fill your open positions.',
            button: 'Explore Us',
            Link: '/about-us',
        },
        {
            picture: require('../../../Images/Home/h2.jpg'),
            title: 'Join as a Job Seeker',
            description: 'Searching for the ideal job? Let HR Global guide you to opportunities that fit your professional goals.',
            button: 'Enroll for a job',
            Link: '/for-talent/application/',
        },
        {
            picture: require('../../../Images/Home/h3.jpg'),
            title: 'Recruit Top Talent',
            description: 'Need to fill key roles? HR Global provides access to a vast network of qualified candidates to meet your recruitment needs.',
            button: 'To Seek Options',
            Link: '/for-employers',
        },
    ];

    return (
        <div className="flex flex-col mx-[7%] my-[10%] lg:my-[5%]">
            <h2 className="text-[2rem] leading-tight lg:leading-normal font-[500]">
                To become the leading global organization excelling in equity & specialization.
            </h2>
            <p className="text-[1.3rem] font-normal mt-3">
                In a rapidly evolving work landscape, talent seeks opportunities for growth while prioritizing work-life balance, equity, and flexibility.
                As organizations require specialized skills across various industries, our goal is to be your trusted partner in talent. We aim to understand
                your unique needs and provide focused, scalable solutions.
            </p>
            <div className="flex flex-col lg:flex-row lg:flex-wrap justify-center mt-6">
                {Features.map((item, index) => (
                    <div
                        key={index}
                        className="relative group flex flex-col w-[100%] lg:w-[30%] mx-auto lg:mx-[1.5%] my-[7%] lg:my-[1.5%] rounded-[30px] shadow-sm shadow-[#00000033] overflow-hidden"
                    >
                        <img
                            className="h-[250px] w-[100%] object-cover object-center rounded-t-[30px] transition-transform duration-300 group-hover:scale-[1.3]"
                            src={item.picture}
                            alt={`${item.title} Feature`}
                        />
                        <div className='w-full flex justify-center group-hover:opacity-0'>
                            <h2 className="absolute bottom-0 px-3 py-2 bg-slate-50 bg-opacity-70 mx-auto mb-2 w-fit text-[1.1rem] rounded-xl font-[500]">{item.title}</h2>
                        </div>
                        <div className="absolute flex flex-col items-center justify-center px-3 text-center top-0 opacity-0 group-hover:opacity-100 bg-[#7d0e3acd] transition-opacity duration-300 h-full">
                            <h2 className="text-[1.5rem] text-slate-50 font-[500]">{item.title}</h2>
                            <p className="text-[1.1rem] text-slate-50">{item.description}</p>
                            <Link
                                className="text-[1.1rem] capitalize font-[500] bg-zinc-900 text-zinc-100 mt-4 w-fit px-4 py-2 rounded-[15px] transition ease-in-out duration-300 hover:scale-[1.05] inline-block"
                                to={item.Link}
                            >
                                {item.button}
                            </Link>
                        </div>
                        
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HS_2;
