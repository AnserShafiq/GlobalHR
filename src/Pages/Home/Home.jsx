import React from 'react'
import HS_2 from './Sections/HS_2'
import HS_3 from './Sections/HS_3'
import HS_4 from './Sections/HS_4'
import HS_5 from './Sections/HS_5'
import HS_6 from './Sections/HS_6'
import PageStarter from '../../Components/PageStarter'

const Home = () => {

  const SectionData = {
    Bg1: require('../../Images/home-bg-2.png'),
    Bg2: require('../../Images/home-bg-2-mobile.png'),
    Anime: require('../../Images/Home/anime-home.png'),
    Title: 'Your Partner in Talent & Opportunity',
    MiniDesc: 'We simplify the job search for individuals, empowering them to find the right opportunities that align with their skills and aspirations. At the same time, we provide businesses with highly qualified and well-matched candidates, ensuring they have the right talent to drive their success and achieve their goals.',
    BtnText: 'To Explore Options',
    BtnLink: '/contact-us',
  }

  return (
    <div>
        {/* Section 1 */}
        <PageStarter BodyData={SectionData} />
        <HS_2 />
        <HS_3 />
        <HS_4 />
        <HS_5 />
        <HS_6 />
    </div>
  )
}

export default Home