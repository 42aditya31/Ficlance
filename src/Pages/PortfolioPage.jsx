import React from 'react'
import Header from '../Components/PortfolioPage/Header'
import FeaturedProjects from '../Components/PortfolioPage/ProjectSection'
import SkillShowcase from '../Components/PortfolioPage/SkillShows'

const PortfolioPage = () => {
  return (
    <div>
      <Header/>
      <FeaturedProjects/>
      <SkillShowcase/>
    </div>
  )
}

export default PortfolioPage