import React from 'react'

const SS_2 = () => {

    const Industries = [
        {
            title: 'General Labour',
            icon: require('../../../Images/IndustryIcons/GeneralLabour.png'),
        },{
            title: 'Shipping / Receiving',
            icon: require('../../../Images/IndustryIcons/Shipping.png'),
        },{
            title: 'Order Picking',
            icon: require('../../../Images/IndustryIcons/OrderPicking.png'),
        },{
            title: 'Manufacturing',
            icon: require('../../../Images/IndustryIcons/Manufacturing.png'),
        },{
            title: 'Forklift Operator',
            icon: require('../../../Images/IndustryIcons/ForkliftOperator.png'),
        },{
            title: 'Skilled Labour',
            icon: require('../../../Images/IndustryIcons/SkilledLabour.png'),
        },{
            title: 'Food / Beverage',
            icon: require('../../../Images/IndustryIcons/Food.png'),
        },{
            title: 'Sorting / Packaging',
            icon: require('../../../Images/IndustryIcons/SortingPackaging.png'),
        },{
            title: 'Inventory Tracking',
            icon: require('../../../Images/IndustryIcons/Manufacturing.png'),
        },{
            title: 'Press Operating',
            icon: require('../../../Images/IndustryIcons/PressOperating.png'),
        },{
            title: 'Light Assembly',
            icon: require('../../../Images/IndustryIcons/LightAssembly.png'),
        },{
            title: 'Welders / Drivers',
            icon: require('../../../Images/IndustryIcons/welders.png'),
        },
    ]

    return (
        <div className={`flex flex-col justify-center items-start w-full px-[5%] lg:px-[7%] pt-[4%] pb-[8%]`} >
            <h2 className='text-[2.0rem] font-semibold capitalize leading-tight w-full text-center'>Industry Solutions We Offer</h2>
            <p className='text-[1.2rem] font-[400] text-center mt-[2%]'>
            Global HR specializes in direct hire recruitment, offering customized solutions that cater to the specific needs of each client. Our Direct Hire Recruitment service helps businesses secure permanent employees who are not just highly qualified but also an excellent cultural fit. We work closely with you to ensure a complete alignment with your business goals.
            </p>
            <div className='grid grid-cols-1 w-[85%] lg:w-full mx-auto lg:grid-cols-4 gap-y-[2%] lg:gap-y-[8%] lg:gap-x-[4%] mt-[7%] lg:mt-[4%]' >
                {Industries.map((Industry, index) => (
                    <div key={index} className='flex flex-col items-center text-center p-4 bg-[#FFF4F8] rounded-[30px] shadow-md'>
                        <img className='w-[6rem]' src={Industry.icon} alt={`${Industry.title}'s icon`} />
                        <h3 className='text-[1.1rem] font-semibold tracking-wide mt-2'>{Industry.title}</h3>
                    </div>
                ))}
            </div>
            {/* <Link className='text-[1.2rem] w-fit mx-auto mt-[7%] lg:mt-[4%] lg:text-[1.1rem] capitalize font-[400] text-neutral-50 border-2 border-logo-red rounded-md px-3 py-3 hover:text-logo-red bg-logo-red hover:bg-transparent transition ease-in-out duration-[0.5s]' to={'our-services'}>All Industries</Link> */}
        </div>
    )
}

export default SS_2