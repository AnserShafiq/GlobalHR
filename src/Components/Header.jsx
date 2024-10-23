import React, { useState, useEffect } from 'react';
import Logo from '../Images/Logo.png';
import { Link, useLocation } from 'react-router-dom';
import { HiMenuAlt3 as Menu} from "react-icons/hi";
import { IoIosCloseCircle as Close} from "react-icons/io";
import { FaPhoneVolume as Phone} from "react-icons/fa6";
import { FaEnvelopeOpenText as Mail} from "react-icons/fa";
import { FaLocationDot as Location} from "react-icons/fa6";


const Header = () => {
    const location = useLocation(); // Get the current location
    const [ShowHeader, setShowHeader] = useState(true);
    const [lastScrollPositionY, setLastScrollPosition] = useState(0)
    const [onHome, setOnHome] = useState(true);
    const [onContact, setOnContact] = useState(false);
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
        if(location.pathname === '/'){
            setOnHome(true);
        }else{
            setOnHome(false)
        }
        if(location.pathname === '/contact-us'){
            setOnContact(true);
        }else{
            setOnContact(false)
        }


    },[location])


    useEffect(() => {
        const updatedItems = menuItems.map(item => ({
            ...item,
            active: location.pathname === item.link,
        }));
        setMenuItems(updatedItems);
        //eslint-disable-next-line
    },[location]);

    const [sideMenu, setSideMenu] = useState(false);
    const OpenSideMenu = () =>{
        setSideMenu(true)
    }
    const CloseSideMenu = () =>{
        setSideMenu(false)
    }

    return (
        <>
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
                    <Menu className='text-[2rem]' onClick={OpenSideMenu}/>
                </div>
            </div>
        </div>
        <div className={`${sideMenu ? 'flex':'hidden'} fixed top-0 z-[999] w-[100%] h-[100vh] overflow-hidden bg-[#00000044]`} id='SideMenu'>

            <div className={`flex flex-col px-[3%] py-[0%] w-[94%] h-full bg-[#ffffff] transition-all ease-in-out duration-[1s] transform translate-x-0 ${sideMenu ? 'translate-x-0 opacity-100':'-translate-x-full opacity-0'}`}>
                <div className='flex relative flex-col items-start mt-[5%] pl-[5%]'>
                    <img className='w-[10rem] mt-[7%]' src={Logo} alt='Mobile View Logo'/>
                    <h3 className='text-[2.4rem] font-semibold leading-tight tracking-wider uppercase'>Global HR</h3>
                    <h4 className='text-[1.2rem] font-[500] leading-tight capitalize'>Your requirement, our commitment</h4>
                    <Close className='absolute text-[2rem] mt-[0%] right-0' onClick={CloseSideMenu} />
                </div>
                <div className='flex flex-col pl-[5%] mt-[10%]'>
                    <Link 
                        className={onHome 
                            ? 'text-[1.3rem] mb-5 p-0 border-b-2 border-logo-red text-logo-red w-fit ' 
                            : 'text-[1.3em] mb-5 p-0 hover:border-b-2 hover:border-b-logo-red w-fit hover:text-logo-red transition duration-[0.4s] ease-in-out hover:scale-[1.05]'
                        }
                    to={'/'} >
                        Home
                    </Link>
                    {
                        menuItems.map((Item, index) => (
                            <Link className={Item.active 
                                ? 'text-[1.3rem] mb-5 p-0 border-b-2 border-logo-red text-logo-red w-fit' 
                                : 'text-[1.3rem] mb-5 p-0 hover:border-b-2 hover:border-b-logo-red w-fit hover:text-logo-red transition duration-[0.4s] ease-in-out hover:scale-[1.05]'
                            }
                            to={Item.link} key={index}>
                                {Item.name}
                            </Link>
                        ))
                    }
                    <Link 
                        className={onContact 
                            ? 'text-[1.3rem] p-1 border-b-2 border-logo-red text-logo-red w-fit' 
                            : 'text-[1.3rem] p-1 hover:border-b-2 hover:border-b-logo-red w-fit hover:text-logo-red transition duration-[0.4s] ease-in-out hover:scale-[1.05]'
                        }
                    to={'/contact-us'} >
                        Contact Us
                    </Link>
                </div>

                <div className='flex flex-col absolute bottom-0 pl-[5%] pr-[0%] mb-3'>
                    <Link to={'tel:+16479015000'} className='flex items-center text-[1.2rem] p-1 hover:border-b-2 hover:border-b-logo-red hover:text-logo-red transition duration-[0.4s] ease-in-out hover:scale-[1.05]'><Phone className='text-logo-red mr-2 text-[1.4rem]'/>  (647) 901 5000</Link>
                    <Link to={'mailto:info@hrglobal.ca'} className='flex items-center text-[1.2rem] p-1 hover:border-b-2 hover:border-b-logo-red hover:text-logo-red transition duration-[0.4s] ease-in-out hover:scale-[1.05]'><Mail className='text-logo-red mr-2 text-[1.4rem] '/>  info@hrglobal.ca</Link>
                    <Link to={'https://maps.app.goo.gl/QonpayFJz3R9aw5H7'} className='flex text-[1.2rem] p-1 hover:border-b-2 hover:border-b-logo-red hover:text-logo-red transition duration-[0.4s] ease-in-out hover:scale-[1.05]'><Location className='text-logo-red mr-2 text-[2rem]'/>  2424 Finch Ave W #18, Toronto, ON M9M 2E1, Canada</Link>
                </div>

            </div>

        </div>
    </>
    );
}

export default Header;
