import React from 'react'
import { FaArrowRightLong as Arrow } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const ES_4 = () => {

    const Steps = [
        {
            number: 1,
            title: 'Understanding Your Requirements',
            explanation: 'We collaborate with you to define specific role requirements, ensuring we align with your industry needs.',
        },{
            number: 2,
            title: 'Extensive Candidate Sourcing',
            explanation: 'We use our network and advanced tools to source highly qualified candidates tailored to your hiring needs.',
        },{
            number: 3,
            title: 'Rigorous Screening & Evaluation',
            explanation: 'Candidates are thoroughly screened through assessments and interviews to ensure they match your job and company requirements.',
        },{
            number: 4,
            title: 'Presenting the Top Candidates',
            explanation: 'We present only the best candidates and assist with interviews, ensuring a seamless hiring process for your team.',
        },
    ]

    return (
    <div className='w-[100%] h-[80vh] bg-special-bg-1 bg-cover bg-center bg-fixed'>
        <div className='flex flex-col items-center justify-center bg-[#00000044] w-full px-[7%] h-full'>
            <h2 className='text-[2.0rem] text-slate-50 font-semibold capitalize leading-tight'>Our Workflow for Implementation</h2>
            <div className='flex lg:flex-row flex-col w-full justify-center items-center my-[4%]'>
                {
                    Steps.map((Step, index) => (
                        <div className={`flex flex-col lg:flex-row ${Step.number === 4 ? 'w-[21%]':'w-[25%]'} min-h-[225px]`} key={index}>
                            <div className='flex flex-col justify-start items-center text-center px-[3%] py-[4%] bg-[#00000067] rounded-[30px]'>
                                <h5 className='text-[1rem] tracking-wider text-slate-100 font-[400] uppercase'>{`Step 0${Step.number}`}</h5>
                                <h2 className='text-[1.4rem] leading-tight tracking-wide font-semibold text-slate-100 my-[3%] capitalize'>{Step.title}</h2>
                                <p className='text-[0.9rem] text-slate-100 font-[300] capitalize'>{Step.explanation}</p>
                            </div>
                            { Step.number===4 ? (null):(
                                <div className='flex items-center justify-center px-[3%]'>
                                    <Arrow className='text-[2rem] text-slate-100'/>
                                </div>
                            ) }
                        </div>
                    ))
                }
            </div>
            <Link className='text-[1.2rem] w-fit lg:text-[1.1rem] capitalize font-[400] text-slate-100 border-2 border-slate-100 rounded-md px-3 py-3 hover:text-logo-red hover:bg-slate-100 transition ease-in-out duration-[0.5s] mb-4 lg:mb-0 mr-0 lg:mr-8' to={'/for-employers'}>To attract talent</Link>
        </div>
    </div>
  )
}

export default ES_4