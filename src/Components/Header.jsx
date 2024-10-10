import React, { useState, useEffect } from 'react';
import Logo from '../Images/Logo.png';
import { Link, useLocation } from 'react-router-dom';
import { TiThMenuOutline as Menu} from "react-icons/ti";


const Header = () => {
    const location = useLocation(); // Get the current location
    const [ShowHeader, setShowHeader] = useState(false);
    const [lastScrollPositionY, setLastScrollPosition] = useState(0)
    const [menuItems, setMenuItems] = useState([
        {
            name: 'About Us',
            link: '/about-us',
            active: false,
        },{
            name: 'For Talent',
            link: '/for-talent',
            active: false,
        },{
            name: 'For Employers',
            link: '/for-employers',
            active: false,
        },{
            name: 'Our Services',
            link: '/our-services',
            active: false,
        }
    ]);

    const HandleScroll = () =>{
        if(window.scrollY > lastScrollPositionY){
            setShowHeader(false);
        }
        else{
            setShowHeader(true);
        }
        setLastScrollPosition(window.scrollY)
    }

    useEffect(() =>{
        window.addEventListener('scroll', HandleScroll);
        return()=>{
            window.removeEventListener('scroll', HandleScroll);
        }
    })


    useEffect(() => {
        const updatedItems = menuItems.map(item => ({
            ...item,
            active: location.pathname === item.link,
        }));
        setMenuItems(updatedItems);
        //eslint-disable-next-line
    },[location]);

    return (
        <div className={`shadow-sm w-full bg-[#fff4f8] top-0 z-10 sticky transition-transform ease-in-out duration-500 transform ${
            ShowHeader ? 'translate-y-0':'-translate-y-full'
        }`}>
            <div className='flex items-center justify-between py-[4%] mx-[4%] lg:py-[1%] lg:mx-[3%] 3xl:mx-[5%]'>
                <div className='flex cursor-pointer' onClick={() => window.location.href = '/'}>
                    <img className='w-[5rem] lg:w-[6rem] h-fit' src={Logo} alt='Global HR' />
                    <div className='flex flex-col justify-center'>
                        <h2 className='text-[2.2rem] uppercase leading-none font-bold'>Global HR</h2>
                        <h3 className='text-[0.8rem] lg:text-[1rem] capitalize font-normal'>Your requirement, our commitment</h3>
                    </div>
                </div>
                <div className='hidden lg:flex items-center'>
                    {menuItems.map((Item, index) => (
                        <Link 
                            key={index}
                            to={Item.link}
                            className={Item.active 
                                ? 'text-[1.1rem] mr-5 p-1 border-b-2 border-logo-red text-logo-red' 
                                : 'text-[1.1rem] mr-5 p-1 hover:border-b-2 hover:border-b-logo-red hover:text-logo-red transition duration-[0.4s] ease-in-out hover:scale-[1.05]'
                            }
                        >
                            {Item.name}
                        </Link>
                    ))}
                </div>
                <div className='block lg:hidden'>
                    <Menu className='text-[1.5rem] '/>
                </div>
            </div>
        </div>
    );
}

export default Header;
