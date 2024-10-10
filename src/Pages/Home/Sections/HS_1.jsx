import React, { useEffect, useState } from 'react';
import BgImg from '../../../Images/home-bg-2.png';
import MobBgImg from '../../../Images/home-bg-2-mobile.png';


const HS_1 = () => {
  const [MobileView, setMobileView] = useState(false);
  useEffect(() =>{
    if(window.screen.width <= 1000){
      setMobileView(true)
    }else{
      setMobileView(false)
    }
  },[MobileView])
  return (
    <div className={`flex relative w-[94%] lg:w-[98%] mx-auto h-[75vh] lg:h-[65vh] my-4 shadow-xl shadow-[#00000044] rounded-[30px]`}>
      <img src={MobileView ? MobBgImg : BgImg} className='object-cover h-full w-full rounded-[30px]' alt='GlobalHR Home Bg-1' />

      
      {/* Black overlay with transparency */}
      <div className='flex items-start justify-center flex-col absolute content-0 top-0 left-0 flex rounded-[30px] pl-[6%] pr-[4%] lg:pl-[6%] lg:pr-[50%] w-full h-full bg-[#00000000]'>
        <h2 className='text-[2rem] lg:text-[2.2rem] font-[500] capitalize leading-tight text-slate-100' >Your Partner in Talent & Opportunity</h2>
        <h4 className='text-[1.15rem] lg:text-[1.125rem] font-[400] text-slate-100 my-5'>We simplify the job search for individuals, empowering them to find the right opportunities that align with their skills and aspirations. At the same time, we provide businesses with highly qualified and well-matched candidates, ensuring they have the right talent to drive their success and achieve their goals.</h4>
        <a className='text-[1.2rem] lg:text-[1.25rem] capitalize font-[400] text-slate-100 border-2 border-slate-100 rounded-md px-3 py-3 hover:text-[var(--logo-red-color)] hover:bg-slate-100 transition ease-in-out duration-[0.5s]' href='/'>To Explore Options</a>
      </div>
    </div>
  );
};

export default HS_1;
