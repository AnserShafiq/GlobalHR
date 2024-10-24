import React, { useState } from 'react'
import SidePic from '../../../Images/ContactUs/cu-2.jpg'

const CU_3 = () => {

    const [contactForm, setContactForm] = useState({
        FullName: '',
        Email: '',
        ContactNumber:'',
        Reason:"",
        Message:'',
    })

    const handleValueChange = (e) =>{
        const {name, value} = e.target;
        if(name === 'ContactNumber'){

            let newValue = value.replace(/\D/g,'');
            if(newValue.length > 10){
                newValue = newValue.slice(0,10);
            }
            newValue=newValue.replace(/(\d{3})(\d{3})(\d{4})/,'($1) $2 $3')

            setContactForm((prev) => ({
                ...prev,
                [name]:newValue,
            }))
        }else{
            setContactForm((prev) => ({
                ...prev,
                [name]:value,
            }))
        }

    }

    const handleSubmission = (e) => {
        e.preventDefault();
    }
  return (
    <div className='flex flex-col my-[10%] lg:my-0 p-0'>
        <div className={`flex flex-col lg:flex-row w-[full]`}>
            <div className='w-full lg:w-[50%]'>
                <img className='w-full h-[350px] lg:h-full object-cover object-center' src={SidePic} alt={`contact us form section`}/>
            </div>
            <div className={`flex flex-col items-start justify-center w-full lg:w-[50%] pl-[5%] pr-[5%] pb-12 pt-8 lg:pt-4 lg:pb-8 lg:pl-[6%] lg:pr-[7%] `}>
                <h3 className='text-[2rem] lg:text-[2.5rem] leading-tight my-4 font-semibold capitalize'>To Leave Us A Message</h3>
                <form onSubmit={handleSubmission} className='flex flex-col flex-wrap w-full pl-2'>
                    <div className='flex flex-col w-full mb-3'>
                        <label className='text-[1.5rem] font-[500] capitalize'>Full Name:</label>
                        <input className='text-[1.2rem] font-[400] px-5 py-2 border-[1px] bg-[#FFF4F8] rounded-xl'  type='text' placeholder='Enter your full name' value={contactForm.FullName} name='FullName' onChange={handleValueChange} required/>
                    </div>
                    <div className='flex flex-col w-full mb-3'>
                        <label className='text-[1.5rem] font-[500] capitalize'>E-Mail:</label>
                        <input className='text-[1.2rem] font-[400] px-5 py-2 border-[1px] bg-[#FFF4F8] rounded-xl'  type='email' placeholder='Enter your email' value={contactForm.Email} name='Email' onChange={handleValueChange} required/>
                    </div>
                    <div className='flex flex-col w-full mb-3'>
                        <label className='text-[1.5rem] font-[500] capitalize'>Contact Number:</label>
                        <input className='text-[1.2rem] font-[400] px-5 py-2 border-[1px] bg-[#FFF4F8] rounded-xl'  type='text' placeholder='(000) 000 0000' value={contactForm.ContactNumber} name='ContactNumber' onChange={handleValueChange} required/>
                    </div>
                    <div className='flex flex-col w-full mb-3'>
                        <label className='text-[1.5rem] font-[500] capitalize'>Reason:</label>
                        <input className='text-[1.2rem] font-[400] px-5 py-2 border-[1px] bg-[#FFF4F8] rounded-xl'  type='text' placeholder='Enter reason for message' value={contactForm.Reason} name='Reason' onChange={handleValueChange} required/>
                    </div>
                    <div className='flex flex-col w-full mb-3'>
                        <label className='text-[1.5rem] font-[500] capitalize'>Message:</label>
                        <textarea className='text-[1.2rem] font-[400] px-5 py-2 border-[1px] bg-[#FFF4F8] rounded-xl'  rows={3} placeholder='Enter your message' value={contactForm.Message} name='Message' onChange={handleValueChange} required/>
                    </div>
                    <button className='text-[1.2rem] w-fit lg:text-[1.3rem] uppercase font-[400] text-neutral-50 border-2 border-logo-red rounded-md px-5 py-2 mt-5 tracking-wider hover:text-logo-red bg-logo-red hover:bg-transparent transition ease-in-out duration-[0.5s]' type='submit'>
                        Submit
                    </button>
                </form>
                
            </div>
        </div>
    </div>
  )
}

export default CU_3