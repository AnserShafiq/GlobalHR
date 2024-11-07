import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Header from './Components/Header'
import AboutUs from './Pages/AboutUs/AboutUs'
import Talent from './Pages/Talent/Talent'
import Employers from './Pages/Employers/Employers'
import OurServices from './Pages/OurServices/Services'
import ContactUs from './Pages/ContactUs/ContactUs'
import Footer from './Components/Footer'
import JobForTalent from './Pages/Applications/JobseekersForm'
import ReactLoading from 'react-loading';
import EmployersForm from './Pages/Applications/EmployersForm'

const AppContent = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, [location]);

  if (loading) return (
    <div className='h-[100vh] w-[100vw] flex justify-center flex-col text-center items-center bg-[#f9f1f1]'>
      <ReactLoading type={'spinningBubbles'} color={'#88171f'} height={4+'rem'} width={4+'rem'} />
      {/* <h3 className='text-[1.3rem] font-semibold text-logo-red mt-4'>Loading...</h3> */}
    </div>
  );

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about-us' element={<AboutUs />} />
        <Route path='/for-talent' element={<Talent />} />
        <Route path='/for-talent/application/' element={<JobForTalent />} />
        <Route path='/for-employers' element={<Employers />} />
        <Route path='/for-employers/application/' element={<EmployersForm />} />
        <Route path='/our-services' element={<OurServices />} />
        <Route path='/contact-us' element={<ContactUs />} />
      </Routes>
      <Footer />
    </>
  );
};

const App = () => (
  <Router>
    <AppContent />
  </Router>
);

export default App;
