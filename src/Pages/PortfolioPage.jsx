import React from 'react'
import Header from '../Components/PortfolioPage/Header'
import FeaturedProjects from '../Components/PortfolioPage/ProjectSection'
import SkillShowcase from '../Components/PortfolioPage/SkillShows'
import JourneyTimeline from '../Components/PortfolioPage/JourneyTimeLine'
import SharePortfolio from '../Components/PortfolioPage/Export'

const PortfolioPage = () => {
  return (
    <div>
      <Header/>
      <FeaturedProjects/>
      <SkillShowcase/>
      <JourneyTimeline/>
      {/* <Testimonials/> */}
      <SharePortfolio/>
    </div>
  )
}

export default PortfolioPage