import React from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import NewsEventsSection from '../components/NewsEvent'
import DepartmentsSection from '../components/Department'
import Gallery from '../components/Gallery'
import Committees from '../components/Committees'
import InfoSections from '../components/Section1'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <HeroSection/>
        <NewsEventsSection/>
        <DepartmentsSection/>
        <Gallery/>
        <Committees/>
        <InfoSections/>
    </div>
  )
}

export default Home