import React from 'react'

const ES_2 = () => {

  const Content = [
    {
      img: require('../../../Images/Employers/e-2.jpg'),
      heading: "Effortless Hiring, Zero Extra Costs",
      paragraph: "Reduce recruitment costs effortlessly—no extra payments for WSIB claims, employee benefits, incentives, or severance, helping you save both time and money.",
      divider: true,
    },{
      img: require('../../../Images/Employers/e-3.jpg'),
      heading: "Streamlined Hiring & Payroll Solutions",
      paragraph: "Secure top-tier, dedicated hires for your team while we handle all payroll complexities. Focus on growing your business, and let us ensure smooth payroll operations.",
      divider:false,
    }
  ]

  return (
    <div className='flex flex-col lg:flex-row px-[7%] py-[10%] lg:pt-[4%] lg:pb-[7%]'>
      {Content.map((Data, index) => (
        <div className={`flex flex-col items-center text-center lg:w-[50%] lg:px-[5%] ${Data.divider ? 'lg:border-r-[0.5px] lg:border-[#00000044]':'mt-[10%] lg:mt-0 lg:border-l-[0.5px] lg:border-[#00000044]'}`} key={index}>
          <img className='w-[340px] h-[340px] rounded-[50%] mx-auto object-center object-cover shadow-md shadow-[#0000001f] ' src={Data.img} alt={`${Data.heading}'s Pic`} />
          <h3 className='text-[1.6rem] font-[500] capitalize mt-4' >
            {Data.heading}
          </h3>
          <p className='text-[1.1rem] font-light'>{Data.paragraph}</p>
        </div>
      ))}
    </div>
  )
}

export default ES_2