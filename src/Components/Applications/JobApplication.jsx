import React, { useState, useEffect } from 'react';

const JobApplication = () => {
    const [error, setError] = useState(null)
    const [applicationForm, setApplicationForm] = useState({
        personalInfo: {
            firstName: '',
            lastName: '',
            eMail: '',
            contactNumber: '',
            gender: '',
            dateOfBirth: '',
            address: '',
            legalStatus: '',
        },
        addressInfo:{
            address: '',
            city:'',
            state:'',
            postalCode:'',
        },
        experienceInfo: {
            experienceType: '',
            yearsOfExperience: '',
            companyName: '',
            companyContact: '',
            companyAddress: '',
            jobPost: '',
            salary: '',
            joiningDate: '',
            endingDate: '',
        },
        targetJob: {
            targetJobTitle: '',
            targetIndustry: '',
            expectedSalary: '',
            joiningDate: '',
            resume: null,
        },
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
        }else if(e.target.name === 'resume'){
            const allowedFiles = [
                'application/msword',
                'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
                'text/plain',
                'application/pdf',
            ]

            const file = e.target.files[0];
            if ( file && allowedFiles.includes(file.type)){
                setApplicationForm(prev => ({
                    ...prev,
                    targetJob:{
                        ...prev.targetJob,
                        resume: file,
                    }
                }))
                setError(null)
            }else{
                setError('Please upload pdf or doc type file');
                e.target.value = null;
            }
        }

    };

    const handleFormChange = (e, sectionNo) => {
        const { name, value, files } = e.target;
        const updatedValue = files ? files[0] : value;

        setApplicationForm((prev) => {
            const updatedSection = {
                ...(sectionNo === 1 && { personalInfo: { ...prev.personalInfo, [name]: updatedValue } }),
                ...(sectionNo === 4 && { addressInfo: { ...prev.addressInfo, [name]: updatedValue } }),
                ...(sectionNo === 2 && { experienceInfo: {...prev.experienceInfo, [name]:updatedValue}, }),
                ...(sectionNo === 3 && { targetJob: { ...prev.targetJob, [name]: updatedValue || undefined } }),
            };
            return { ...prev, ...updatedSection };
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', applicationForm);
    };

    useEffect(() => {
        console.log(applicationForm, error);
    }, [applicationForm,error]);

    return (
        <div className='mt-5'>
            <form onSubmit={handleSubmit} className='w-full flex flex-col'>
                <h3 className='text-[1.5rem] font-semibold capitalize leading-tight w-full mb-2 lg:mb-3'>Personal Information</h3>
                <div className='flex flex-col lg:flex-row flex-wrap justify-between'>
                    <div className="flex flex-col mb-2 lg:mb-2 w-full lg:w-[48%]">
                        <label className='text-[1.0rem] font-[600] lg:font-[500] tracking-wide lg:tracking-normal capitalize'>First Name</label>
                        <input className='text-[1.0rem] font-[400] px-5 py-2 border-[1px] bg-[#FFF4F8] rounded-xl' type="text" name="firstName" value={applicationForm.personalInfo.firstName} placeholder="Enter your first name" onChange={(e) => handleFormChange(e, 1)} required />
                    </div>
                    <div className="flex flex-col mb-2 lg:mb-2 w-full lg:w-[48%]">
                        <label className='text-[1.0rem] font-[600] lg:font-[500] tracking-wide lg:tracking-normal capitalize'>Last Name</label>
                        <input className='text-[1.0rem] font-[400] px-5 py-2 border-[1px] bg-[#FFF4F8] rounded-xl' type="text" name="lastName" value={applicationForm.personalInfo.lastName} placeholder="Enter your last name" onChange={(e) => handleFormChange(e, 1)} required />
                    </div>
                    <div className="flex flex-col mb-2 lg:mb-2 w-full lg:w-[48%]">
                        <label className='text-[1.0rem] font-[600] lg:font-[500] tracking-wide lg:tracking-normal capitalize'>Email</label>
                        <input className='text-[1.0rem] font-[400] px-5 py-2 border-[1px] bg-[#FFF4F8] rounded-xl' type="email" name="eMail" value={applicationForm.personalInfo.eMail} placeholder="Enter your email" onChange={(e) => handleFormChange(e, 1)} required />
                    </div>
                    <div className="flex flex-col mb-2 lg:mb-2 w-full lg:w-[48%]">
                        <label className='text-[1.0rem] font-[600] lg:font-[500] tracking-wide lg:tracking-normal capitalize'>Gender</label>
                        <div className=" grid grid-cols-[1fr,1fr] lg:flex lg:flex-row lg:justify-start px-0 py-2 items-center">
                            <label className='cursor-pointer flex items-center gap-1 lg:mr-8'><input className='' type="radio" name="gender" value="Male" checked={applicationForm.personalInfo.gender === 'Male'} onChange={(e) => handleFormChange(e, 1)} /> Male</label>
                            <label className='cursor-pointer flex items-center gap-1 lg:mr-8'><input className='' type="radio" name="gender" value="Female" checked={applicationForm.personalInfo.gender === 'Female'} onChange={(e) => handleFormChange(e, 1)} /> Female</label>
                            <label className='cursor-pointer flex items-center gap-1 lg:mr-8'><input className='' type="radio" name="gender" value="Other" checked={applicationForm.personalInfo.gender === 'Other'} onChange={(e) => handleFormChange(e, 1)} /> Other</label>
                        </div>
                    </div>
                    <div className="flex flex-col mb-2 lg:mb-2 w-full lg:w-[48%]">
                        <label className='text-[1.0rem] font-[600] lg:font-[500] tracking-wide lg:tracking-normal capitalize'>Contact Number</label>
                        <input className='text-[1.0rem] font-[400] px-5 py-2 border-[1px] bg-[#FFF4F8] rounded-xl' type="tel" name="contactNumber" value={applicationForm.personalInfo.contactNumber} placeholder="Enter your contact number" onChange={(e) => handleSpecialEntry(e, 1)} required />
                    </div>
                    <div className="flex flex-col mb-2 lg:mb-2 w-full lg:w-[48%]">
                        <label className='text-[1.0rem] font-[600] lg:font-[500] tracking-wide lg:tracking-normal capitalize'>Date Of Birth</label>
                        <input className='text-[1.0rem] font-[400] px-5 py-2 border-[1px] bg-[#FFF4F8] rounded-xl cursor-pointer' type="date" name="dateOfBirth" value={applicationForm.personalInfo.dateOfBirth} onChange={(e) => handleFormChange(e, 1)} onFocus={(e) => e.target.showPicker()} required />
                    </div>
                    <div className="flex flex-col mb-2 lg:mb-2 w-full lg:w-[48%]">
                        <label className='text-[1.0rem] font-[600] lg:font-[500] tracking-wide lg:tracking-normal capitalize'>Legal Status</label>
                        <div className=" grid grid-cols-[1fr,1fr] lg:flex lg:flex-row lg:justify-between px-0 py-2 items-center">
                            <label className='cursor-pointer flex items-center gap-1 lg:mr-4'><input className='' type="radio" name="legalStatus" value="Citizen" checked={applicationForm.personalInfo.legalStatus === 'Citizen'} onChange={(e) => handleFormChange(e, 1)} /> Citizen</label>
                            <label className='cursor-pointer flex items-center gap-1 lg:mr-4'><input className='' type="radio" name="legalStatus" value="Work Permit" checked={applicationForm.personalInfo.legalStatus === 'Work Permit'} onChange={(e) => handleFormChange(e, 1)} /> Work Permit</label>
                            <label className='cursor-pointer flex items-center gap-1 lg:mr-4'><input className='' type="radio" name="legalStatus" value="PR" checked={applicationForm.personalInfo.legalStatus === 'PR'} onChange={(e) => handleFormChange(e, 1)} /> PR</label>
                            <label className='cursor-pointer flex items-center gap-1 lg:mr-4'><input className='' type="radio" name="legalStatus" value="Refugee" checked={applicationForm.personalInfo.legalStatus === 'Refugee'} onChange={(e) => handleFormChange(e, 1)} /> Refugee</label>
                            <label className='cursor-pointer flex items-center gap-1 lg:mr-4'><input className='' type="radio" name="legalStatus" value="Student" checked={applicationForm.personalInfo.legalStatus === 'Student'} onChange={(e) => handleFormChange(e, 1)} /> Student</label>
                        </div>
                    </div>
                </div>
                <h3 className='text-[1.5rem] font-semibold capitalize leading-tight w-full my-2 lg:mb-2 lg:mt-3'>Personal Address</h3>
                <div className='flex flex-row flex-wrap justify-between'>
                    <div className="flex flex-col mb-2 lg:mb-2 w-full lg:w-[48%]">
                        <label className='text-[1.0rem] font-[600] lg:font-[500] tracking-wide lg:tracking-normal capitalize'>Address</label>
                        <input className='text-[1.0rem] font-[400] px-5 py-2 border-[1px] bg-[#FFF4F8] rounded-xl' type="text" name="address" value={applicationForm.addressInfo.address} placeholder="House no., block, street,..." onChange={(e) => handleFormChange(e, 4)} required />
                    </div>
                    <div className="flex flex-col mb-2 lg:mb-2 w-full lg:w-[48%]">
                        <label className='text-[1.0rem] font-[600] lg:font-[500] tracking-wide lg:tracking-normal capitalize'>City</label>
                        <input className='text-[1.0rem] font-[400] px-5 py-2 border-[1px] bg-[#FFF4F8] rounded-xl' type="text" name="city" value={applicationForm.addressInfo.city} placeholder="City" onChange={(e) => handleFormChange(e, 4)} required />
                    </div>
                    <div className="flex flex-col mb-2 lg:mb-2 w-full lg:w-[48%]">
                        <label className='text-[1.0rem] font-[600] lg:font-[500] tracking-wide lg:tracking-normal capitalize'>State</label>
                        <input className='text-[1.0rem] font-[400] px-5 py-2 border-[1px] bg-[#FFF4F8] rounded-xl' type="text" name="state" value={applicationForm.addressInfo.state} placeholder="State" onChange={(e) => handleFormChange(e, 4)} required />
                    </div>
                    <div className="flex flex-col mb-2 lg:mb-2 w-full lg:w-[48%]">
                        <label className='text-[1.0rem] font-[600] lg:font-[500] tracking-wide lg:tracking-normal capitalize'>Postal Code</label>
                        <input className='text-[1.0rem] font-[400] px-5 py-2 border-[1px] bg-[#FFF4F8] rounded-xl' type="text" name="postalCode" value={applicationForm.addressInfo.postalCode} placeholder="00000" onChange={(e) => handleFormChange(e, 4)} required />
                    </div>
                </div>
                <h3 className='text-[1.5rem] font-semibold capitalize leading-tight w-full my-2 lg:mb-2 lg:mt-3'>Experience</h3>
                <div className='flex flex-row flex-wrap justify-between'>
                    <div className="flex flex-col mb-2 lg:mb-2 w-full lg:w-[48%]">
                        <label className='text-[1.0rem] font-[600] lg:font-[500] tracking-wide lg:tracking-normal capitalize'>Experience Level</label>
                        <div className='grid lg:flex grid-cols-[1fr,1fr] lg:flex-row lg:justify-start px-0 py-2 lg:items-center'>
                            <label className='cursor-pointer flex items-center gap-1 mr-8'><input className='' type="radio" name="experienceType" value="Fresh" checked={applicationForm.experienceInfo.experienceType === 'Fresh'} onChange={(e) => handleFormChange(e, 2)} /> Fresh</label>
                            <label className='cursor-pointer flex items-center gap-1 mr-4'><input className='' type="radio" name="experienceType" value="Experienced" checked={applicationForm.experienceInfo.experienceType === 'Experienced'} onChange={(e) => handleFormChange(e, 2)} /> Experienced</label>
                        </div>
                    </div>
                    {applicationForm.experienceInfo.experienceType === 'Experienced' ? (
                        <> 
                            <div className="flex flex-col mb-2 lg:mb-2 w-full lg:w-[48%]">
                                <label className='text-[1.0rem] font-[600] lg:font-[500] tracking-wide lg:tracking-normal capitalize'>Years Of Experience</label>
                                <select className='text-[1.0rem] font-[400] px-5 py-2 border-[1px] bg-[#FFF4F8] rounded-xl' name='yearsOfExperience' value={applicationForm.experienceInfo.yearsOfExperience} onChange={(e) => handleFormChange(e,2)}>
                                    <option>Choose experience years</option>
                                    <option value={'Less than an year'}>Less than an year</option>
                                    {
                                        Array.from({length: 50}, (_,i) => (
                                            <option key={i} value={String(i+1)}>{i+1}</option>
                                        ))
                                    }
                                </select>
                            </div>
                            <div className="flex flex-col mb-2 lg:mb-2 w-full lg:w-[48%]">
                                <label className='text-[1.0rem] font-[600] lg:font-[500] tracking-wide lg:tracking-normal capitalize'>Prev Company's Name</label>
                                <input className='text-[1.0rem] font-[400] px-5 py-2 border-[1px] bg-[#FFF4F8] rounded-xl' type="text" name="companyName" value={applicationForm.experienceInfo.companyName} placeholder="Enter previous company's name" onChange={(e) => handleFormChange(e, 2)} required />
                            </div>
                            <div className="flex flex-col mb-2 lg:mb-2 w-full lg:w-[48%]">
                                <label className='text-[1.0rem] font-[600] lg:font-[500] tracking-wide lg:tracking-normal capitalize'>Company's Contact</label>
                                <input className='text-[1.0rem] font-[400] px-5 py-2 border-[1px] bg-[#FFF4F8] rounded-xl' type="tel" name="companyContact" value={applicationForm.experienceInfo.companyContact} placeholder="Enter previous company's contact" onChange={(e) => handleSpecialEntry(e, 2)} required />
                            </div>
                            <div className="flex flex-col mb-2 lg:mb-2 w-full lg:w-[48%]">
                                <label className='text-[1.0rem] font-[600] lg:font-[500] tracking-wide lg:tracking-normal capitalize'>Company's Address</label>
                                <input className='text-[1.0rem] font-[400] px-5 py-2 border-[1px] bg-[#FFF4F8] rounded-xl' type="text" name="companyAddress" value={applicationForm.experienceInfo.companyAddress} placeholder="Enter previous company's address" onChange={(e) => handleFormChange(e, 2)} required />
                            </div>
                            <div className="flex flex-col mb-2 lg:mb-2 w-full lg:w-[48%]">
                                <label className='text-[1.0rem] font-[600] lg:font-[500] tracking-wide lg:tracking-normal capitalize'>Job Post</label>
                                <input className='text-[1.0rem] font-[400] px-5 py-2 border-[1px] bg-[#FFF4F8] rounded-xl' type="text" name="jobPost" value={applicationForm.experienceInfo.jobPost} placeholder="Enter your job post" onChange={(e) => handleFormChange(e, 2)} required />
                            </div>
                            <div className="flex flex-col mb-2 lg:mb-2 w-full lg:w-[48%]">
                                <label className='text-[1.0rem] font-[600] lg:font-[500] tracking-wide lg:tracking-normal capitalize'>Salary</label>
                                <input className='text-[1.0rem] font-[400] px-5 py-2 border-[1px] bg-[#FFF4F8] rounded-xl' type="number" name="salary" value={applicationForm.experienceInfo.salary} placeholder="Enter your salary" onChange={(e) => handleFormChange(e, 2)} required />
                            </div>
                            <div className='flex flex-row justify-between mb-2 lg:mb-2 w-full lg:w-[48%]'>
                            <div className="flex flex-col w-[48%]" >
                                <label className='text-[1.0rem] font-[600] lg:font-[500] tracking-wide lg:tracking-normal capitalize'>Joining Date</label>
                                <input className='text-[1.0rem] font-[400] px-5 py-2 border-[1px] bg-[#FFF4F8] rounded-xl cursor-pointer' type="date" name="joiningDate" value={applicationForm.experienceInfo.joiningDate} onChange={(e) => handleFormChange(e, 2)} onFocus={(e) => e.target.showPicker()} required />
                            </div>
                            <div className="flex flex-col w-[48%]">
                                <label className='text-[1.0rem] font-[600] lg:font-[500] tracking-wide lg:tracking-normal capitalize'>Leaving Date</label>
                                <input className='text-[1.0rem] font-[400] px-5 py-2 border-[1px] bg-[#FFF4F8] rounded-xl cursor-pointer' type="date" name="endingDate" value={applicationForm.experienceInfo.endingDate} onChange={(e) => handleFormChange(e, 2)} onFocus={(e) => e.target.showPicker()} required />
                            </div>
                            </div>
                        </>
                    ) : (null)}

                </div>
                <h3 className='text-[1.5rem] font-semibold capitalize leading-tight w-full my-2 lg:mb-2 lg:mt-3'>Job Target</h3>
                <div className='flex flex-row flex-wrap justify-between'>
                    <div className="flex flex-col mb-2 lg:mb-2 w-full lg:w-[48%]">
                        <label className='text-[1.0rem] font-[600] lg:font-[500] tracking-wide lg:tracking-normal capitalize'>Target Industry</label>
                        <input className='text-[1.0rem] font-[400] px-5 py-2 border-[1px] bg-[#FFF4F8] rounded-xl' type="text" name="targetIndustry" value={applicationForm.targetJob.targetIndustry} placeholder="Target industry" onChange={(e) => handleFormChange(e, 3)} required />
                    </div>
                    <div className="flex flex-col mb-2 lg:mb-2 w-full lg:w-[48%]">
                        <label className='text-[1.0rem] font-[600] lg:font-[500] tracking-wide lg:tracking-normal capitalize'>Target Fields</label>
                        <input className='text-[1.0rem] font-[400] px-5 py-2 border-[1px] bg-[#FFF4F8] rounded-xl' type="text" name="targetJobTitle" value={applicationForm.targetJob.targetJobTitle} placeholder="Target job fields" onChange={(e) => handleFormChange(e, 3)} required />
                    </div>
                    <div className="flex flex-col mb-2 lg:mb-2 w-full lg:w-[48%]">
                        <label className='text-[1.0rem] font-[600] lg:font-[500] tracking-wide lg:tracking-normal capitalize'>Salary Expectation</label>
                        <input className='text-[1.0rem] font-[400] px-5 py-2 border-[1px] bg-[#FFF4F8] rounded-xl' type="number" name="expectedSalary" value={applicationForm.targetJob.expectedSalary} placeholder="Salary you expects" onChange={(e) => handleFormChange(e, 3)} required />
                    </div>
                    <div className="flex flex-col mb-2 lg:mb-2 w-full lg:w-[48%]">
                        <label className='text-[1.0rem] font-[600] lg:font-[500] tracking-wide lg:tracking-normal capitalize'>Possible Joining</label>
                        <input className='text-[1.0rem] font-[400] px-5 py-2 border-[1px] bg-[#FFF4F8] rounded-xl cursor-pointer' type="date" name="joiningDate" value={applicationForm.targetJob.joiningDate} onChange={(e) => handleFormChange(e, 3)} onFocus={(e) => e.target.showPicker()} required />
                    </div>
                    {/* <div className="flex flex-col">
                        <label className='text-[1.1rem] font-[400] capitalize'>Resume</label>
                        <input 
                            type="file" 
                            accept='.pdf,.doc,.docx'
                            name="resume" 
                            onChange={(e) => handleSpecialEntry(e, 3)} 
                            required 
                        />
                        {error && <p className='text-[1rem] text-red-800'>{error}</p>}
                    </div> */}
                </div>
                <button className='mt-5 mb-10 mx-auto text-[1.2rem] w-fit lg:text-[1.1rem] uppercase font-[500] tracking-wide text-slate-50 border-2 border-logo-red rounded-md px-5 py-2 hover:text-logo-red bg-logo-red hover:bg-transparent transition ease-in-out duration-[0.5s]' type="submit">Submit</button>
            </form>
        </div>
    );
};

export default JobApplication;
