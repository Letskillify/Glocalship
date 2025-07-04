import React from 'react'
import HeroSection from './HeroSection'
import About from './About'
import Stats from './Stats'
import ServiceSection from './ServiceSection'
import Clients from './Clients'
import Testimonials from './Testimonials'
import WorkSection from './WorkSection'
import WhyShopWithUs from './WhyShopWithUs'
import FaqSection from './FaqSection'
import CallSection from './callSection'
import Contact from './Contact'
import Banner from './Banner'
import Steps from './Steps'
import Login from '../../pages/Login'
import Signup from '../../pages/Signup'

function Home() {
  return (
    <div>
      {/* <HeroSection/> */}
      {/* <Login/>   */}
      {/* <Signup/> */}
      <Banner />
      <About />
      <Stats />
      <ServiceSection />
      <Clients />
      <Testimonials />
      <WorkSection />
      <WhyShopWithUs />
      <FaqSection />
      <Steps />
      <CallSection />
      <Contact />
    </div>
  )
}

export default Home
