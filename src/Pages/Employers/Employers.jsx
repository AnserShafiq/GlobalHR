import React from 'react'
import PageStarter from '../../Components/PageStarter'
import ES_2 from './Sections/ES_2'
import IndustriesSample from '../../Components/IndustriesSample'
import ContactCard from '../../Components/ContactCard'
import ES_4 from './Sections/ES_4'

const Employers = () => {
  const SectionOneData = {
    Bg1: require('../../Images/about-bg-1.png'),
    Bg2: require('../../Images/home-bg-2-mobile.png'),
    Anime: require('../../Images/Employers/e-1.png'),
    Title: 'Drive Business Growth with Quality Workforce Solutions',
    MiniDesc: "We offer top-tier talent and expert workforce insights. Our reports help you make informed decisions that drive business growth. Every candidate is rigorously screened to meet your needs, and we quickly replace any who don’t fit.",
    BtnText: "To Get Candidates",
    BtnLink: '/contact-us',
  }

  const IndustriesSection = {
    MainHead: 'Industries We Collaborate With',
    Description: 'At Global HR, we pride ourselves on delivering tailored recruitment solutions across a wide array of industries, each with its own unique demands. Our expertise extends to the following sectors.',
    SideImg: require('../../Images/Employers/e-4.jpg'),
    ImgSide: 'Left',
  }

  const ContactData = {
    Tagline:'Accelerate Your Business with Top-Tier Talent Tailored to Your Needs.',
    BtnText:'To apply for talents',
    BtnLink:'/contact-us',
    SidePic:require('../../Images/Employers/e-5.jpg'),
  }

  return (
    <div>
      <PageStarter BodyData={SectionOneData}/>
      <ES_2 />
      <IndustriesSample MainHeading={IndustriesSection.MainHead} Description={IndustriesSection.Description} SideImg={IndustriesSection.SideImg} ImgPosition={IndustriesSection.ImgSide} />
      <ES_4 />
      <ContactCard CardData={ContactData}/>
    </div>
  )
}

export default Employers