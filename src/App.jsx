import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import HeroCollection from './components/Hero-collection'
import ReviewCarousel from './components/ReviewCarousel'
import DancingOverlay from './components/DancingOverlay'

function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <HeroCollection/>
      <DancingOverlay/>
      <ReviewCarousel/>

    </>
  )
}

export default App
