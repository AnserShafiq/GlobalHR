import React from 'react'
import EmployersApplicationForm from '../../Components/Applications/EmployersApplicationForm.jsx'

const EmployersForm = () => {
  return (
    <div className='flex justify-start flex-col items-start mx-auto w-full lg:w-[1100px] px-4 lg:px-0 '>
        <h2 className='text-[2.3rem]  font-semibold capitalize leading-tight mt-3 lg:mt-6'>Ready to boost your business?</h2>
        <h4 className='text-[1.1rem] tracking-wide font-[300]'>
        Use the form below to share your hiring needs, and let's collaborate to find skilled candidates who will elevate your business. The more details you provide, the closer we get to finding the ideal talent that aligns with your goals!!!
        </h4>
        <EmployersApplicationForm />
    </div>
  )
}

export default EmployersForm