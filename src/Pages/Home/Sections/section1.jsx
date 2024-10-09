import React from 'react';
import BgImg from '../../../Images/home-bg-1.png';
import Circles from '../../../Components/Circles';

const HS_1 = () => {
  return (
    <div className='flex relative w-[98%] mx-auto h-[85vh] mt-4'>
      <img src={BgImg} className='object-cover h-full w-full rounded-[30px]' alt='GlobalHR Home Bg-1' />
      
      {/* Black overlay with transparency */}
      <div className='flex items-center justify-center absolute content-0 top-0 left-0 flex rounded-[30px] w-full h-full bg-[#00000080]'>
        <Circles/>
        <div className='border-2 border-black flex justify-center items-center max-w-[100px]'>
            <Circles/>
        </div>
      </div>
    </div>
  );
};

export default HS_1;
