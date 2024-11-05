import React, { useState } from 'react';

const JobApplication = () => {

    const [error, setError] = useState(null)

    const [applicationForm, setApplicationForm] = useState({
        personalInfo: {
            firstName: '',
            lastName: '',
            eMail: '',
            contactNumber: '',
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

    // Inside handleFormChange
const handleFormChange = (e, sectionNo) => {
    const { name, value, files } = e.target;
    const updatedValue = files ? files[0] : value;

    setApplicationForm((prev) => {
        const updatedSection = {
            ...(sectionNo === 1 && { personalInfo: { ...prev.personalInfo, [name]: updatedValue } }),
            ...(sectionNo === 4 && { addressInfo: { ...prev.addressInfo, [name]: updatedValue } }),
            ...(sectionNo === 2 && { experienceInfo: {...prev.experienceInfo, [name]:updatedValue}, }),
            ...(sectionNo === 3 && { targetJob: { ...prev.targetJob, [name]: updatedValue || undefined } }), // default to undefined for resume
        };
        return { ...prev, ...updatedSection };
    });
};


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', applicationForm);
        // Handle form submission logic here
    };

    // useEffect(() => {
    //     console.log(applicationForm);
    // }, [applicationForm]);

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h3 className='text-[1.5rem] font-semibold capitalize leading-tight w-full'>Personal Information</h3>
                <div>
                    <div className="flex flex-col">
                        <label>First Name</label>
                        <input type="text" name="firstName" value={applicationForm.personalInfo.firstName} placeholder="Enter your first name" onChange={(e) => handleFormChange(e, 1)} required />
                    </div>
                    <div className="flex flex-col">
                        <label>Last Name</label>
                        <input type="text" name="lastName" value={applicationForm.personalInfo.lastName} placeholder="Enter your last name" onChange={(e) => handleFormChange(e, 1)} required />
                    </div>
                    <div className="flex flex-col">
                        <label>Email</label>
                        <input type="email" name="eMail" value={applicationForm.personalInfo.eMail} placeholder="Enter your email" onChange={(e) => handleFormChange(e, 1)} required />
                    </div>
                    <div className="flex flex-col">
                        <label>Contact Number</label>
                        <input type="tel" name="contactNumber" value={applicationForm.personalInfo.contactNumber} placeholder="Enter your contact number" onChange={(e) => handleSpecialEntry(e, 1)} required />
                    </div>
                    <div className="flex flex-col">
                        <label>Date Of Birth</label>
                        <input type="date" name="dateOfBirth" value={applicationForm.personalInfo.dateOfBirth} onChange={(e) => handleFormChange(e, 1)} required />
                    </div>
                    <div className="flex flex-col">
                        <label>Legal Status</label>
                        <div className="flex flex-row justify-evenly">
                            <label className='cursor-pointer flex items-center gap-1 mr-4'><input type="radio" name="legalStatus" value="Citizen" checked={applicationForm.personalInfo.legalStatus === 'Citizen'} onChange={(e) => handleFormChange(e, 1)} /> Citizen</label>
                            <label className='cursor-pointer flex items-center gap-1 mr-4'><input type="radio" name="legalStatus" value="Work Permit" checked={applicationForm.personalInfo.legalStatus === 'Work Permit'} onChange={(e) => handleFormChange(e, 1)} /> Work Permit</label>
                            <label className='cursor-pointer flex items-center gap-1 mr-4'><input type="radio" name="legalStatus" value="PR" checked={applicationForm.personalInfo.legalStatus === 'PR'} onChange={(e) => handleFormChange(e, 1)} /> PR</label>
                            <label className='cursor-pointer flex items-center gap-1 mr-4'><input type="radio" name="legalStatus" value="Refugee" checked={applicationForm.personalInfo.legalStatus === 'Refugee'} onChange={(e) => handleFormChange(e, 1)} /> Refugee</label>
                            <label className='cursor-pointer flex items-center gap-1 mr-4'><input type="radio" name="legalStatus" value="Student" checked={applicationForm.personalInfo.legalStatus === 'Student'} onChange={(e) => handleFormChange(e, 1)} /> Student</label>
                        </div>
                    </div>
                </div>
                <h3 className='text-[1.5rem] font-semibold capitalize leading-tight w-full'>Personal Address</h3>
                <div>
                    <div className="flex flex-col">
                        <label>Address</label>
                        <input type="text" name="address" value={applicationForm.addressInfo.address} placeholder="House no., block, street,..." onChange={(e) => handleFormChange(e, 4)} required />
                    </div>
                    <div className="flex flex-col">
                        <label>City</label>
                        <input type="text" name="city" value={applicationForm.addressInfo.city} placeholder="City" onChange={(e) => handleFormChange(e, 4)} required />
                    </div>
                    <div className="flex flex-col">
                        <label>State</label>
                        <input type="text" name="state" value={applicationForm.addressInfo.state} placeholder="State" onChange={(e) => handleFormChange(e, 4)} required />
                    </div>
                    <div className="flex flex-col">
                        <label>Postal Code</label>
                        <input type="text" name="postalCode" value={applicationForm.addressInfo.postalCode} placeholder="00000" onChange={(e) => handleFormChange(e, 4)} required />
                    </div>
                </div>
                <h3 className='text-[1.5rem] font-semibold capitalize leading-tight w-full'>Experience</h3>
                <div>
                    <div className="flex flex-col">
                        <label>Experience Level</label>
                        <label className='cursor-pointer flex items-center gap-1 mr-4'><input type="radio" name="experienceType" value="Fresh" checked={applicationForm.experienceInfo.experienceType === 'Fresh'} onChange={(e) => handleFormChange(e, 2)} /> Fresh</label>
                        <label className='cursor-pointer flex items-center gap-1 mr-4'><input type="radio" name="experienceType" value="Experienced" checked={applicationForm.experienceInfo.experienceType === 'Experienced'} onChange={(e) => handleFormChange(e, 2)} /> Experienced</label>
                    </div>
                    {applicationForm.experienceInfo.experienceType === 'Experienced' ? (
                        <div> 
                            <div className="flex flex-col">
                                <label>Years Of Experience</label>
                                <select name='yearsOfExperience' value={applicationForm.experienceInfo.yearsOfExperience} onChange={(e) => handleFormChange(e,2)}>
                                    <option >Choose experience years</option>
                                    <option value={'Less than an year'}>Less than an year</option>
                                    {
                                        Array.from({length: 50}, (_,i) => (
                                            <option key={i} value={String(i+1)}>{i+1}</option>
                                        ))
                                    }
                                </select>
                            </div>
                            <div className="flex flex-col">
                                <label>Prev Company's Name</label>
                                <input type="text" name="companyName" value={applicationForm.experienceInfo.companyName} placeholder="Enter previous company's name" onChange={(e) => handleFormChange(e, 2)} required />
                            </div>
                            <div className="flex flex-col">
                                <label>Company's Contact</label>
                                <input type="tel" name="companyContact" value={applicationForm.experienceInfo.companyContact} placeholder="Enter previous company's contact" onChange={(e) => handleSpecialEntry(e, 2)} required />
                            </div><div className="flex flex-col">
                                <label>Company's Address</label>
                                <input type="text" name="companyAddress" value={applicationForm.experienceInfo.companyAddress} placeholder="Enter previous company's address" onChange={(e) => handleFormChange(e, 2)} required />
                            </div><div className="flex flex-col">
                                <label>Job Post</label>
                                <input type="text" name="jobPost" value={applicationForm.experienceInfo.jobPost} placeholder="Enter your job post" onChange={(e) => handleFormChange(e, 2)} required />
                            </div><div className="flex flex-col">
                                <label>Salary</label>
                                <input type="number" name="salary" value={applicationForm.experienceInfo.salary} placeholder="Enter your salary" onChange={(e) => handleFormChange(e, 2)} required />
                            </div><div className="flex flex-col">
                                <label>Joining Date</label>
                                <input type="date" name="joiningDate" value={applicationForm.experienceInfo.joiningDate} onChange={(e) => handleFormChange(e, 2)} required />
                            </div>
                            <div className="flex flex-col">
                                <label>Leaving Date</label>
                                <input type="date" name="endingDate" value={applicationForm.experienceInfo.endingDate} onChange={(e) => handleFormChange(e, 2)} required />
                            </div>
                        </div>
                    ) : (null)}




                </div>
                <h3 className='text-[1.5rem] font-semibold capitalize leading-tight w-full'>Job Target</h3>
                <div>
                    <div className="flex flex-col">
                        <label>Target Industry</label>
                        <input type="text" name="targetIndustry" value={applicationForm.targetJob.targetIndustry} placeholder="Target industry" onChange={(e) => handleFormChange(e, 3)} required />
                    </div>
                    <div className="flex flex-col">
                        <label>Target Fields</label>
                        <input type="text" name="targetJobTitle" value={applicationForm.targetJob.targetJobTitle} placeholder="Target job fields" onChange={(e) => handleFormChange(e, 3)} required />
                    </div>
                    <div className="flex flex-col">
                        <label>Salary Expectation</label>
                        <input type="number" name="expectedSalary" value={applicationForm.targetJob.expectedSalary} placeholder="Salary you expects" onChange={(e) => handleFormChange(e, 3)} required />
                    </div>
                    <div className="flex flex-col">
                        <label>Possible Joining</label>
                        <input type="date" name="joiningDate" value={applicationForm.targetJob.joiningDate} onChange={(e) => handleFormChange(e, 3)} required />
                    </div>
                    <div className="flex flex-col">
                        <label>Resume</label>
                        <input 
                            type="file" 
                            name="resume" 
                            onChange={(e) => handleSpecialEntry(e, 3)} 
                            required 
                        />
                        {error && <p className='text-[1rem] text-red-800'>{error}</p>}
                    </div>
                </div>
                <button className='mt-5 px-5 py-2 bg-black text-white' type="submit">Submit</button>
            </form>
        </div>
    );
};

export default JobApplication;
