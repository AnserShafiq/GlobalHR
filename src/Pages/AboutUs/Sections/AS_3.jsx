import React from 'react'

const AS_3 = () => {
    const Target = [
        {
            sideImg: require('../../../Images/About/a-2.jpg'),
            subtitle: 'Values we own',
            title:'Fostering Career Growth Opportunities',
            description:'We prioritize the career growth of our candidates, providing them with the guidance needed to secure the right job. For our clients, we ensure that the hired talent seamlessly aligns with their organizational values and work culture. Transparency and customer satisfaction drive everything we do.',
            reverse: false,
        },{
            sideImg: require('../../../Images/About/a-3.jpg'),
            subtitle: 'Mission we targets',
            title:'Ensuring Quality Through Thorough Preparation',
            description:'Global HR is committed to finding skilled candidates who align with business goals. By handling the entire process from screening to training and orientation we ensure that every candidate is equipped with the skills and knowledge needed to excel in their role. We adapt to client demands with a flexible approach to work hours and ethics, consistently delivering high-performing talent.',
            reverse: true,
        },

    ]
  return (
    <div className='flex flex-col my-[10%] lg:my-0'>
            {
                Target.map((Item, index) => (
                    <div className={`flex flex-col ${Item.reverse? 'lg:flex-row-reverse':'lg:flex-row'} w-[full]`} key={index}>
                        <div className='w-full lg:w-[50%]'>
                            <img className='w-full h-[350px] lg:h-[550px] object-cover object-center' src={Item.sideImg} alt={`about section 5 - ${Item.subtitle}`}/>
                        </div>
                        <div className={`flex flex-col items-start justify-center w-full lg:w-[50%] ${Item.reverse ? 'pl-[5%] pr-[5%] pb-12 pt-8 lg:pt-0 lg:pb-0 lg:pl-[6%] lg:pr-[7%] bg-[#88171e2f]' : 'pl-[5%] pr-[5%] pb-12 pt-8 lg:pt-0 lg:pb-0 lg:pl-[7%] lg:pr-[6%]'}`}>

                            <h3 className='text-[0.9rem] lg:text-[1rem] font-[500] uppercase'>{Item.subtitle}</h3>
                            <h2 className='text-[2rem] lg:text-[2.5rem] leading-tight my-4 font-semibold capitalize'>{Item.title}</h2>
                            <p className=' text-[1.2rem] lg:text-[1.3rem]'>{Item.description}</p>
                        </div>

                    </div>
                ))
            }
        </div>
    
  )
}

export default AS_3