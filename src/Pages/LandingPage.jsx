
import Feature from '../Components/Feature'
import Homepage from '../Components/HeroSection'
import HeroSection2 from '../Components/HeroSecton2'
import HowItWorks from '../Components/HowItWorks'
import Integrations from '../Components/Integrations'
import Nav from '../Components/Nav'
import RoleCards from '../Components/RoleSection'

const LandingPage = () => {
  return (
    <div>
      <Nav/>
      <HeroSection2/>
      <RoleCards/>
      <HowItWorks/>
      <Feature/>
      <Integrations/>
      {/* <Homepage/> */}
    </div>
  )
}

export default LandingPage