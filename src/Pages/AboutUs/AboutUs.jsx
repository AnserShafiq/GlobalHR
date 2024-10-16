import React from 'react'
import AS_1 from './Sections/AS_1'
import AS_2 from './Sections/AS_2'
import AS_3 from './Sections/AS_3'
import ContactCard from '../../Components/ContactCard'

const AboutUs = () => {
  const Data = {
      Tagline:'Get started and grow your business or career with us.',
      BtnText:'To hit your life target',
      BtnLink:'/contact-us',
      SidePic:require('../../Images/About/a-4.jpg'),
  }
  return (
    <div>
      <AS_1 />
      <AS_2 />
      <AS_3 />
      <ContactCard CardData={Data}/>  
    </div>
  )
}

export default AboutUs