import React from 'react'

import PageStarter from '../../Components/PageStarter'
import CU_2 from './Sections/CU_2'
import CU_3 from './Sections/CU_3'

const ContactUs = () => {
  const SectionOne = {
    Bg1: require('../../Images/about-bg-1.png'),
    Bg2: require('../../Images/home-bg-2-mobile.png'),
    Anime: require('../../Images/ContactUs/cu-1.png'),
    Title: 'Your Pathway to Exceptional Talent & Career Opportunities',
    MiniDesc: "Whether you're looking to build a team of top-tier professionals or seeking your next career breakthrough, we are here to guide you. Our extensive network and personalized approach guarantee results that align with your goals.",
    BtnText: "Reach Us Out",
    BtnLink: '/contact-us',
  }
  return (
    <div>
      <PageStarter BodyData={SectionOne}/>
      <CU_2 />
      <CU_3/>
    </div>
  )
}

export default ContactUs