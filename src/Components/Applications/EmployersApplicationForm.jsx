import React, { useState, useEffect } from 'react';

const EmployersApplicationForm = () => {

    const [applicationForm, setApplicationForm] = useState({
        generalInfo: {
            firstName: '',
            lastName: '',
            companyName: '',
            designation: '',
            eMail: '',
            contactNumber: '',
        },
        requirementDetails:{
            requiredPosition: '',
            positionType:'',
            city: '',
            state:'',
            message:'',
        }
    });

    const formatPhoneNumber = (number) => {
        let cleanedNumber = number.replace(/\D/g, '');
        if (cleanedNumber.length > 10) cleanedNumber = cleanedNumber.slice(0, 10);
        return cleanedNumber.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
    };

    const handleSpecialEntry = (e, sectionNo) => {
        if (e.target.name === 'contactNumber' || e.target.name === 'companyContact') {
            e.target.value = formatPhoneNumber(e.target.value);
            handleFormChange(e, sectionNo);
        }

    };

    const handleFormChange = (e, sectionNo) => {
        const { name, value } = e.target;

        setApplicationForm((prev) => {
            const updatedSection = {
                ...(sectionNo === 1 && { generalInfo: { ...prev.generalInfo, [name]: value } }),
                ...(sectionNo === 2 && { requirementDetails: {...prev.requirementDetails, [name]:value}, }),
            };
            return { ...prev, ...updatedSection };
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', applicationForm);
    };

    useEffect(() => {
        console.log(applicationForm);
    }, [applicationForm]);

    return (
        <div className='mt-5'>
            <form onSubmit={handleSubmit} className='w-full flex flex-col'>
                <h3 className='text-[1.5rem] font-semibold capitalize leading-tight w-full mb-2 lg:mb-3'>General Information</h3>
                <div className='flex flex-col lg:flex-row flex-wrap justify-between'>
                    <div className="flex flex-col mb-2 lg:mb-2 w-full lg:w-[48%]">
                        <label className='text-[1.0rem] font-[600] lg:font-[500] tracking-wide lg:tracking-normal capitalize'>First Name</label>
                        <input className='text-[1.0rem] font-[400] px-5 py-2 border-[1px] bg-[#FFF4F8] rounded-xl' type="text" name="firstName" value={applicationForm.generalInfo.firstName} placeholder="Enter your first name" onChange={(e) => handleFormChange(e, 1)} required />
                    </div>
                    <div className="flex flex-col mb-2 lg:mb-2 w-full lg:w-[48%]">
                        <label className='text-[1.0rem] font-[600] lg:font-[500] tracking-wide lg:tracking-normal capitalize'>Last Name</label>
                        <input className='text-[1.0rem] font-[400] px-5 py-2 border-[1px] bg-[#FFF4F8] rounded-xl' type="text" name="lastName" value={applicationForm.generalInfo.lastName} placeholder="Enter your last name" onChange={(e) => handleFormChange(e, 1)} required />
                    </div>
                    <div className="flex flex-col mb-2 lg:mb-2 w-full lg:w-[48%]">
                        <label className='text-[1.0rem] font-[600] lg:font-[500] tracking-wide lg:tracking-normal capitalize'>Company Name</label>
                        <input className='text-[1.0rem] font-[400] px-5 py-2 border-[1px] bg-[#FFF4F8] rounded-xl' type="text" name="companyName" value={applicationForm.generalInfo.companyName} placeholder="Enter your company name" onChange={(e) => handleFormChange(e, 1)} required />
                    </div>
                    <div className="flex flex-col mb-2 lg:mb-2 w-full lg:w-[48%]">
                        <label className='text-[1.0rem] font-[600] lg:font-[500] tracking-wide lg:tracking-normal capitalize'>Designation</label>
                        <input className='text-[1.0rem] font-[400] px-5 py-2 border-[1px] bg-[#FFF4F8] rounded-xl' type="text" name="designation" value={applicationForm.generalInfo.designation} placeholder="Enter your designation" onChange={(e) => handleFormChange(e, 1)} required />
                    </div>
                    <div className="flex flex-col mb-2 lg:mb-2 w-full lg:w-[48%]">
                        <label className='text-[1.0rem] font-[600] lg:font-[500] tracking-wide lg:tracking-normal capitalize'>Email</label>
                        <input className='text-[1.0rem] font-[400] px-5 py-2 border-[1px] bg-[#FFF4F8] rounded-xl' type="email" name="eMail" value={applicationForm.generalInfo.eMail} placeholder="Enter your email" onChange={(e) => handleFormChange(e, 1)} required />
                    </div>
                    <div className="flex flex-col mb-2 lg:mb-2 w-full lg:w-[48%]">
                        <label className='text-[1.0rem] font-[600] lg:font-[500] tracking-wide lg:tracking-normal capitalize'>Contact Number</label>
                        <input className='text-[1.0rem] font-[400] px-5 py-2 border-[1px] bg-[#FFF4F8] rounded-xl' type="tel" name="contactNumber" value={applicationForm.generalInfo.contactNumber} placeholder="Enter your contact number" onChange={(e) => handleSpecialEntry(e, 1)} required />
                    </div>

                </div>
                
                <h3 className='text-[1.5rem] font-semibold capitalize leading-tight w-full my-2 lg:mb-2 lg:mt-3'>Target Employees</h3>
                <div className='flex flex-row flex-wrap justify-between'>
                    <div className="flex flex-col mb-2 lg:mb-2 w-full lg:w-[48%]">
                        <label className='text-[1.0rem] font-[600] lg:font-[500] tracking-wide lg:tracking-normal capitalize'>Required Position</label>
                        <input className='text-[1.0rem] font-[400] px-5 py-2 border-[1px] bg-[#FFF4F8] rounded-xl' type="text" name="targetIndustry" value={applicationForm.requirementDetails.requiredPosition} placeholder="Target industry" onChange={(e) => handleFormChange(e, 2)} required />
                    </div>
                    <div className="flex flex-col mb-2 lg:mb-2 w-full lg:w-[48%]">
                        <label className='text-[1.0rem] font-[600] lg:font-[500] tracking-wide lg:tracking-normal capitalize'>Industry</label>
                        <input className='text-[1.0rem] font-[400] px-5 py-2 border-[1px] bg-[#FFF4F8] rounded-xl' type="text" name="positionType" value={applicationForm.requirementDetails.positionType} placeholder="Target job fields" onChange={(e) => handleFormChange(e, 2)} required />
                    </div>
                    <div className="flex flex-col mb-2 lg:mb-2 w-full lg:w-[48%]">
                        <label className='text-[1.0rem] font-[600] lg:font-[500] tracking-wide lg:tracking-normal capitalize'>City</label>
                        <input className='text-[1.0rem] font-[400] px-5 py-2 border-[1px] bg-[#FFF4F8] rounded-xl' type="text" name="city" value={applicationForm.requirementDetails.city} placeholder="Enter city" onChange={(e) => handleFormChange(e, 2)} required />
                    </div>
                    <div className="flex flex-col mb-2 lg:mb-2 w-full lg:w-[48%]">
                        <label className='text-[1.0rem] font-[600] lg:font-[500] tracking-wide lg:tracking-normal capitalize'>State</label>
                        <input className='text-[1.0rem] font-[400] px-5 py-2 border-[1px] bg-[#FFF4F8] rounded-xl cursor-pointer' type="text" name="state" value={applicationForm.requirementDetails.state} placeholder='Enter State' onChange={(e) => handleFormChange(e, 2)} required />
                    </div>
                    
                </div>
                <button className='mt-5 mb-10 mx-auto text-[1.2rem] w-fit lg:text-[1.1rem] uppercase font-[500] tracking-wide text-slate-50 border-2 border-logo-red rounded-md px-5 py-2 hover:text-logo-red bg-logo-red hover:bg-transparent transition ease-in-out duration-[0.5s]' type="submit">Submit</button>
            </form>
        </div>
    );
};

export default EmployersApplicationForm;
