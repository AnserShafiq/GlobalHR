import React from 'react'
import AS_2 from './Sections/AS_2'
import AS_3 from './Sections/AS_3'
import ContactCard from '../../Components/ContactCard'
import PageStarter from '../../Components/PageStarter'

const AboutUs = () => {
  const Data = {
      Tagline:'Get started and grow your business or career with us.',
      BtnText:'To hit your life target',
      // BtnLink:'/contact-us',
      SidePic:require('../../Images/About/a-4.jpg'),
      PopUp:true,
  }

  const PageStart = {
    Bg1: require('../../Images/about-bg-1.png'),
    Bg2: require('../../Images/home-bg-2-mobile.png'),
    Anime: require('../../Images/About/a-1.png'),
    Title: 'Strategic Staffing for Distinct Industry Demands',
    MiniDesc: 'With over a decade of expertise, Global HR delivers comprehensive personnel management services. Our customized solutions help businesses overcome unique challenges, optimizing time and resources for better results.',
    BtnText: 'Get Connect With Us',
    PopUp: true,
  }

  return (
    <div>
      {/* Section 1 */}
      <PageStarter BodyData={PageStart} />
      <AS_2 />
      <AS_3 />
      <ContactCard CardData={Data}/>  
    </div>
  )
}

export default AboutUs