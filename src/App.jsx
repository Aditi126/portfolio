import React from 'react'
import LandingPage from './components/landingPage/LandingPage'
import './App.css'
import About from './components/about/About'

const App = () => {
  return (
    <div className='app-div'>
      <LandingPage />
      <About />
    </div>
  )
}

export default App
