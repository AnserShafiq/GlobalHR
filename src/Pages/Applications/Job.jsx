import React from 'react'
import JobApplication from '../../Components/Applications/JobApplication'

const JobForTalent = () => {
  return (
    <div className='flex justify-start flex-col items-start mx-auto w-full lg:w-[1100px] px-4 lg:px-0 '>
        <h2 className='text-[2.3rem] font-semibold capitalize leading-tight mt-3 lg:mt-6'>Ready to take the next step in your career?</h2>
        <h4 className='text-[1.1rem] tracking-wide font-[300]'>
          Use the form below to share your information, and together we can explore positions that align with your career path. The more details you provide, the closer we can get to finding your ideal match!!!
        </h4>
        <JobApplication />
    </div>
  )
}

export default JobForTalent