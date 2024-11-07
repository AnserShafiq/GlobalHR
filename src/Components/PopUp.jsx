import React, { useState } from 'react';
import { IoCloseCircle as Close} from "react-icons/io5";
import { Link } from 'react-router-dom';

const PopUp = ({ children, parentBtnTextColor }) => {
  const [popupCall, setPopUpCall] = useState(false);

  const PopUpBody = ({ trigger, setTrigger, children }) => {
    return trigger ? (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-[100]">
        <div className="flex relative flex-col bg-popup-bg-1 bg-cover bg-center w-[500px] h-[375px] p-6 rounded-lg shadow-lg">
            <div className='w-[100%] h-[100%] flex flex-col items-center justify-end pb-8 absolute top-0 left-0 bg-[#00000033] rounded-lg content-none'>
                <Close className='text-[1.7rem] text-slate-50 hover:text-[#ecdddd] absolute top-[2%] right-[1.5%] cursor-pointer ' onClick={() => setPopUpCall(false)} />
                {children}
                
            </div>
        </div>
      </div>
    ) : null;
  };

  return (
    <div>
      <button
        className={`text-[1.2rem] lg:text-[1.25rem] capitalize font-[400] border-2 rounded-md px-3 py-3  
            ${
                parentBtnTextColor === 'red' ? 'text-logo-red border-logo-red hover:text-neutral-100 bg-transparent hover:bg-logo-red' : 'text-slate-100 border-slate-100 hover:text-[var(--logo-red-color)] bg-[#0000001f] hover:bg-slate-100'
            } 
            transition ease-in-out duration-[0.5s]`}
        onClick={() => setPopUpCall(true)}
      >
        {children}
      </button>
      <PopUpBody trigger={popupCall} setTrigger={setPopUpCall}>
        <div className="flex flex-col items-center">
          <h1 className="text-white text-[1.8rem] font-[500] capitalize tracking-wide mb-4">What are you looking for ?</h1>
          <div className="flex flex-col items-center ">
            <Link to={'/for-talent/application/'} className="px-4 py-2 bg-white bg-opacity-[50%] text-[1.1rem] font-[500] border-[2px] border-logo-red text-logo-red hover:border-transparent hover:bg-[#ecdddd] rounded-[50px] mb-3">
              To Enroll for jobs
            </Link>
            <Link to={'/for-employers/application/'} className="px-4 py-2 bg-white bg-opacity-[50%] text-[1.1rem] font-[500] border-[2px] border-logo-red text-logo-red hover:border-transparent hover:bg-[#ecdddd] rounded-[50px]">
              Searching For Candidates 
            </Link>
          </div>
        </div>
      </PopUpBody>
    </div>
  );
};

export default PopUp;
