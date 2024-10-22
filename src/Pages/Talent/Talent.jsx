import React from 'react'
import PageStarter from '../../Components/PageStarter'
import TS_2 from './Sections/TS_2'
import IndustriesSample from '../../Components/IndustriesSample'
import TS_4 from './Sections/TS_4'
import ContactCard from '../../Components/ContactCard'

const Talent = () => {
  const SectionOneData = {
    Bg1: require('../../Images/home-bg-2.png'),
    Bg2: require('../../Images/home-bg-2-mobile.png'),
    Anime: require('../../Images/Talent/t-1.png'),
    Title: 'Personalized Job Matches for Your Career Advancement',
    MiniDesc: "We understand your unique strengths and focus on finding job options that fit your career life and aspirations. Our expert team works to present you with opportunities that align with your experience and goals, ensuring you land the right job faster.",
    BtnText: "To Seek Job Options",
    BtnLink: '/contact-us',
  }

  const IndustriesSection = {
    MainHead: 'Industries We Collaborate With',
    Description: 'At Global HR, we pride ourselves on delivering tailored recruitment solutions across a wide array of industries, each with its own unique demands. Our expertise extends to the following sectors.',
    SideImg: require('../../Images/Talent/t-5.jpg'),
    ImgSide: 'Right',
  }

  const ContactData = {
    Tagline:'Enhance Your Career with Exceptional Opportunities That Match Your Skills.',
    BtnText:'Submit Your Application',
    BtnLink:'/contact-us',
    SidePic:require('../../Images/Talent/t-6.jpg'),
  }

  return (
    <div>
      <PageStarter BodyData={SectionOneData} />
      <TS_2 />
      <IndustriesSample MainHeading={IndustriesSection.MainHead} Description={IndustriesSection.Description} SideImg={IndustriesSection.SideImg} ImgPosition={IndustriesSection.ImgSide} />
      <TS_4/>
      <ContactCard CardData={ContactData}/>
    </div>
  )
}

export default Talent