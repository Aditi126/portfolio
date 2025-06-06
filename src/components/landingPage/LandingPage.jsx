import React from 'react'
import NavBar from '../navBar/NavBar'
import './LandingPage.css'

const LandingPage = () => {
    // const email = document.getElementById('email');
    // email.addEventListener('click', ()=>{
        
    // })
    return (
        <div className='landing-page'>
            <div className="left-of-page">
                <p id='p1'>Hola Visitor! This is</p>
                <br />
                <h1>Aditi Bajpai</h1>
                <p id='p2'>Front-End Developer | Problem Solver</p>
                <br />
                <div className="profile-icons">
                    <div className="icon" id='email'>
                        <img src="/src/resources/images/email.png" alt="" />
                    </div>
                    <div className="icon" id='linkedin'>
                        <img src="/src/resources/images/linkedin.png" alt="" />
                    </div>
                    <div className="icon" id='github'>
                        <img src="/src/resources/images/github.png" alt="" />
                    </div>
                </div>
            </div>
            <div className="right-of-page">
                <NavBar />
                <img src="/src/resources/images/Aditi-portfolio.png" alt="Aditi-img" />
            </div>
        </div>
    )
}

export default LandingPage
