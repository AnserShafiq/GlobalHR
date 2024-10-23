import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home/Home'
// import Header from './Components/Header'
import AboutUs from './Pages/AboutUs/AboutUs'
import Talent from './Pages/Talent/Talent'
import Employers from './Pages/Employers/Employers'
import OurServices from './Pages/OurServices/Services'
import ContactUs from './Pages/ContactUs/ContactUs'
import Footer from './Components/Footer'

const App = () => {
  return (
    <Router>
      {/* <Header /> */}
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about-us' element={<AboutUs/>} />
        <Route path='/for-talent' element={<Talent/>} />
        <Route path='/for-employers' element={<Employers/>} />
        <Route path='/our-services' element={<OurServices/>} />
        <Route path='/contact-us' element={<ContactUs />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App