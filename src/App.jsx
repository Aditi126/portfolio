import React from 'react'
import LandingPage from './components/landingPage/LandingPage'
import './App.css'
import About from './components/about/About'
import SkillSection from './components/skill/SkillSection'

const App = () => {
  return (
    <div className='app-div'>
      <LandingPage />
      <About />
      <SkillSection />
    </div>
  )
}

export default App
