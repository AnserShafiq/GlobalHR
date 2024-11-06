import React from 'react'
import { FaArrowRightLong as Arrow } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const TS_4 = () => {

    const JobSeekerSteps = [
        {
            number: 1,
            title: 'Initial Consultation & Resume Review',
            explanation: 'We conduct a one-on-one consultation to understand your career goals and review your resume for tailored job matching.',
        },
        {
            number: 2,
            title: 'Identifying Suitable Job Opportunities',
            explanation: 'We leverage our industry connections and resources to find job openings that align with your skills and aspirations.',
        },
        {
            number: 3,
            title: 'Personalized Interview Preparation',
            explanation: 'We provide you with guidance and resources to prepare for interviews, boosting your confidence and readiness.',
        },
        {
            number: 4,
            title: 'Ongoing Support and Feedback',
            explanation: 'We stay in touch throughout the application process, offering support and feedback to ensure you succeed in landing the job.',
        },
    ];
    

    return (
    <div className='w-[100%] h-fit lg:h-[80vh] bg-special-bg-2 lg:bg-special-bg-1 bg-cover bg-center bg-fixed'>
        <div className='flex flex-col items-center justify-center bg-[#00000044] w-full px-[7%] h-full'>
            <h2 className='text-[2.0rem] text-slate-50 font-semibold capitalize leading-tight mx-auto text-center mt-[15%] lg:mt-0'>Navigating Your Job Search Journey Together</h2>
            <div className='flex lg:flex-row flex-col w-full justify-center items-center my-[7%] lg:my-[4%]'>
                {
                    JobSeekerSteps.map((Step, index) => (
                        <div className={`flex flex-col lg:flex-row w-full ${Step.number === 4 ? 'lg:w-[21%]':'lg:w-[25%]'} min-h-[225px]`} key={index}>
                            <div className='flex flex-col justify-start items-center text-center px-[3%] py-[4%] bg-[#00000067] rounded-[30px]'>
                                <h5 className='text-[1rem] tracking-wider text-slate-100 font-[400] uppercase'>{`Step 0${Step.number}`}</h5>
                                <h2 className='text-[1.4rem] leading-tight tracking-wide font-semibold text-slate-100 my-[3%] capitalize'>{Step.title}</h2>
                                <p className='text-[0.9rem] text-slate-100 font-[300] capitalize'>{Step.explanation}</p>
                            </div>
                            { Step.number===4 ? (null):(
                                <div className='flex items-center justify-center px-[3%] my-[7%] lg:my-0'>
                                    <Arrow className='text-[2rem] rotate-[90deg] lg:rotate-0 text-slate-100'/>
                                </div>
                            ) }
                        </div>
                    ))
                }
            </div>
            <Link className='text-[1.2rem] w-fit lg:text-[1.1rem] capitalize font-[400] text-slate-100 border-2 border-slate-100 rounded-md px-3 py-3 hover:text-logo-red hover:bg-slate-100 transition ease-in-out duration-[0.5s] mb-[15%] lg:mb-0 mr-0 lg:mr-8' to={'/for-talent/application/'}>Enroll To Be Option</Link>
        </div>
    </div>
  )
}

export default TS_4