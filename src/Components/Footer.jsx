import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebookSquare as FB} from "react-icons/fa";
import { RiInstagramFill as INSTA } from "react-icons/ri";
import { FaSquareXTwitter as X} from "react-icons/fa6";
import { IoLocation as Location} from "react-icons/io5";
import { BiSolidPhoneCall as Contact} from "react-icons/bi";
import { FaEnvelopeOpenText as Mail} from "react-icons/fa6";
import { RiCopyrightLine as CR} from "react-icons/ri";

const FooterMenu = () =>{
    const MenuTabs = [
        {
            name:'Home',
            Link: '/',
        },{
            name:'About Us',
            Link: '/about-us',
        },{
            name:'For Talent',
            Link: '/for-talent',
        },{
            name:'For Employers',
            Link: '/for-employers',
        },{
            name:'Our Services',
            Link: '/our-services',
        },{
            name:'Contact Us',
            Link: '/contact-us',
        },
    ]
    return(
        <div className='flex flex-col lg:flex-row justify-between w-full border-b-[1px] pb-[2%] border-[#ffffff55]'>
            <div className='flex flex-col lg:flex-row items-start lg:items-center justify-start '>
                {
                    MenuTabs.map((Menu, index) => (
                        <Link key={index} className='text-[1.2rem] leading-loose lg:leading-normal lg:text-[1.1rem] text-slate-100 font-[400] pr-8' to={Menu.Link}>{Menu.name}</Link>
                    ))
                }
            </div>
            <div className='flex flex-row justify-start my-2 lg:my-0 lg:justify-end items-center'>
                <Link className='text-[1.8rem] text-slate-100 font-[400] pr-6 pl-0 lg:pr-0 lg:pl-6' to={'https://facebook.com/'}><FB /></Link>
                <Link className='text-[1.8rem] text-slate-100 font-[400] pr-6 pl-0 lg:pr-0 lg:pl-6' to={'https://instagram.com/'}><INSTA /></Link>
                <Link className='text-[1.8rem] text-slate-100 font-[400] pr-6 pl-0 lg:pr-0 lg:pl-6' to={'https://twitter.com/'}><X /></Link>                
            </div>
        </div>
    ) 
}

const AboutSection = () =>{
    return(
        <div className='flex flex-col w-full pt-[2%] pb-[1%]'>
            <h3 className='text-[1.5rem] lg:text-[1.3rem] font-semibold text-slate-100 tracking-wide mb-[0.5%]'>Global HR <span className='text-[1rem] tracking-none font-[400] capitalize'>- Your requirement, our commitment</span></h3>
            <h3 className='text-[1rem] text-slate-100 tracking-wide font-[300] mb-[0.5%]'>We thrive on embracing challenges and pushing boundaries in the advertising industry.</h3>
            <Link to={'tel:+16479015000'}><h3 className='text-[1.2rem] lg:text-[1rem] text-slate-100 font-[300] mb-[0.5%] flex items-center'><Contact className='text-[2.2rem] lg:text-[2rem] pr-3'/>647-901-5000</h3></Link>
            <Link to={'mailto:info@hrglobal.ca'}><h3 className='text-[1.2rem] lg:text-[1rem] text-slate-100 font-[300] mb-[0.5%] flex items-center'><Mail className='text-[2.2rem] lg:text-[2rem] pr-3'/>info@hrglobal.ca</h3></Link>
            <Link to={'https://maps.app.goo.gl/QonpayFJz3R9aw5H7'}><h3 className='text-[1.2rem] lg:text-[1rem] text-slate-100 font-[300] mb-[0.5%] flex items-start lg:items-center'><Location className='text-[3.5rem] lg:text-[2rem] pr-3'/>2424 Finch Ave W #18, Toronto, ON M9M 2E1, Canada</h3></Link>
        </div>
    )
}


const Footer = () => {
  return (
    <div className=' bg-[#B71F5C]'>
        <div className='w-[100%] px-[7%] pt-[7%] lg:pt-[3%] h-fit border-b-0 lg:border-b-[1px] border-[#ffffffaf]' >
            <FooterMenu />
            <AboutSection />
        </div>
        <div className='flex flex-col lg:flex-row justify-between mx-[7%] py-2 lg:py-[0.35%] border-t-[1px] lg:border-t-0 border-[#ffffffaf]'>
            <h3 className='text-[0.8rem] text-slate-100 font-[200] flex items-center'><CR className='text-[1.4rem] pr-1'/> Copyright 2022 Global HR. All rights reserved.</h3>
            <h3 className='text-[0.8rem] text-slate-100 font-[200] mt-2 lg:mt-0'>Some images in our website are gathered by using browser or AI.</h3>
        </div>
    </div>
  )
}

export default Footer