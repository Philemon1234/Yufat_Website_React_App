import React from 'react'
import Banner from './Banner'
import Services from '../services/Services'
import Causes from './Causes'
import Testimonials from './Testimonials'
import Services_section from './Services_section'

const Home = () => {
  return (
    <main>
      <Banner/>
      <Services_section/>
      <Causes/>
      <Testimonials/>
    </main>
  )
}

export default Home
