import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const PageStarter = ({BodyData}) => {
  const [MobileView, setMobileView] = useState(false);
  useEffect(() =>{
    if(window.screen.width <= 1000){
      setMobileView(true)
    }else{
      setMobileView(false)
    }
  },[MobileView])
  return (
    <div className={`flex relative w-[94%] lg:w-[98%] mx-auto h-[108vh] lg:h-[65vh] my-4 shadow-xl shadow-[#00000044] rounded-[30px]`}>
      <img src={MobileView ? BodyData.Bg2 : BodyData.Bg1} className='object-cover h-full w-full rounded-[30px]' alt='GlobalHR Home Bg-1' />
      <div className='flex items-center justify-evenly lg:justify-center flex-col-reverse lg:flex-row absolute content-0 top-0 left-0 flex rounded-[30px] pl-[6%] pr-[4%] lg:pl-[6%] lg:pr-[0%] w-full h-full bg-[#00000001]'>
        <div className='flex items-start justify-center flex-col w-full lg:w-[50%]'>
          <h2 className='text-[2rem] lg:text-[2.2rem] font-[500] capitalize leading-tight text-slate-100' >{BodyData.Title}</h2>
          <h4 className='text-[1.15rem] lg:text-[1.125rem] font-[400] text-slate-100 my-5'>{BodyData.MiniDesc}</h4>
          <Link className='text-[1.2rem] lg:text-[1.25rem] capitalize font-[400] text-slate-100 border-2 border-slate-100 rounded-md px-3 py-3 hover:text-[var(--logo-red-color)] bg-[#0000001f] hover:bg-slate-100 transition ease-in-out duration-[0.5s]' to={BodyData.BtnLink}>{BodyData.BtnText}</Link>
        </div>
        <div className=' w-full lg:w-[50%]'>
          <img className='w-[25rem] lg:w-[28rem] mx-auto' src={BodyData.Anime} alt='about us animation'/>
        </div>
      </div>
    </div>
  );
};

export default PageStarter;
