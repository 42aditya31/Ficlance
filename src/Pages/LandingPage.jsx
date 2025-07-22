
import FreelanceCTA from '../Components/CallToAction'
import Feature from '../Components/Feature'
import Footer from '../Components/Footer'
import Homepage from '../Components/HeroSection'
import HeroSection2 from '../Components/HeroSecton2'
import HowItWorks from '../Components/HowItWorks'
import Integrations from '../Components/Integrations'
import Nav from '../Components/Nav'
import RoleCards from '../Components/RoleSection'
import Testimonials from '../Components/Testimonials'

const LandingPage = () => {
  return (
    <div>
      <Nav/>
      <HeroSection2/>
      <RoleCards/>
      <HowItWorks/>
      <Feature/>
      <Integrations/>
      <FreelanceCTA/>
      <Testimonials/>
      <Footer/>
      {/* <Homepage/> */}
    </div>
  )
}

export default LandingPage