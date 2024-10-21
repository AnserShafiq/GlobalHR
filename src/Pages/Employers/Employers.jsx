import React from 'react'
import PageStarter from '../../Components/PageStarter'
import ES_2 from './Sections/ES_2'

const Employers = () => {
  const SectionOneData = {
    Bg1: require('../../Images/home-bg-2.png'),
    Bg2: require('../../Images/home-bg-2-mobile.png'),
    Anime: require('../../Images/Employers/e-1.png'),
    Title: 'Drive Business Growth with Quality Workforce Solutions',
    MiniDesc: "We offer top-tier talent and expert workforce insights. Our reports help you make informed decisions that drive business growth. Every candidate is rigorously screened to meet your needs, and we quickly replace any who don’t fit.",
    BtnText: "To Get Candidates",
    BtnLink: '/contact-us',
  }
  return (
    <div>
      <PageStarter BodyData={SectionOneData}/>
      <ES_2 />

    </div>
  )
}

export default Employers