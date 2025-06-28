import React from 'react'
import HeroSection from './HeroSection'
import About from './About'
import Stats from './Stats'
import ServiceSection from './ServiceSection'
import Clients from './Clients'
import Tastimonilas from './Tastimonilas'
import WorkSection from './WorkSection'
import FaqSection from './FaqSection'
import CallSection from './callSection'
import Contact from './Contact'
import Banner from './Banner'
import Steps from './Steps'

function Home() {
  return (
    <div>
        {/* <HeroSection/> */}
        <Banner/>
        <About/>
        <Stats/>
        <ServiceSection/>
        
        <Clients/>
        <Tastimonilas/>
        <WorkSection/>
        <FaqSection/>
        <Steps/>
        <CallSection/>
        <Contact/>
        
      
    </div>
  )
}

export default Home
