import React from 'react'
import './NavBar.css'

const NavBar = () => {
  return (
    <div className='nav-bar-div'>
        <div className="div1 about">
            <p>About</p>
        </div>
        <div className="div2 skills">
            <p>Skills</p>
        </div>
        {/* <div className="div3 profiles">
            <p>Profiles</p>
        </div> */}
        <div className="div4 contact">
            <button id='contact-button'>Contact me</button>
        </div>
    </div>
  )
}

export default NavBar
