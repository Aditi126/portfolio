import React from 'react'
import './NavBar.css'

const NavBar = () => {
  return (
    <div className='nav-bar-div'>
        <div className="div about">
            <a>About</a>
        </div>
        <div className="div skills">
            <a href=''>Skills</a>
        </div>
        {/* <div className="div3 profiles">
            <p>Profiles</p>
        </div> */}
        <div className="div contact">
            <button id='contact-button'>Contact me</button>
        </div>
    </div>
  )
}

export default NavBar
