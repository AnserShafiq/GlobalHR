import React from 'react'
import PageStarter from '../../Components/PageStarter'
import SS_2 from './Sections/SS_2'
import SS_3 from './Sections/SS_3'
import ContactCard from '../../Components/ContactCard'

const OurServices = () => {
  const SectionOne = {
    Bg1: require('../../Images/home-bg-2.png'),
    Bg2: require('../../Images/home-bg-2-mobile.png'),
    Anime: require('../../Images/Services/s-1.png'),
    Title: 'Revolutionize your workforce with our innovative staffing services',
    MiniDesc: "We are reshaping the staffing industry through our innovative solutions and unwavering commitment to clients and candidates alike. With years of experience, we specialize in connecting exceptional talent with leading organizations, fostering shared success & growth.",
    BtnText: "Discuss to explore",
    // BtnLink: '/contact-us',
    PopUp:true,
  }

  const ContactData = {
    Tagline:'Elevate Your Operations with Talent Perfectly Suited to Your Business.',
    BtnText:'Connect With Global HR',
    // BtnLink:'/contact-us',
    SidePic:require('../../Images/Services/s-5.jpg'),
    PopUp:true,
  }


  return (
    <div>
      <PageStarter BodyData={SectionOne} />
      <SS_2 />
      <SS_3 />
      <ContactCard CardData={ContactData} />

    </div>
  )
}

export default OurServices