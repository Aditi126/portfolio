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
                        <a href='mailto:aditi.b1263@gmail.com'><img src="/src/resources/images/email.png" alt="aditi.b1263@gmail.com" id='img'/></a>
                    </div>
                    <div className="icon" id='linkedin'>
                        <a href='https://www.linkedin.com/in/aditi-bajpai/' target='blank'><img src="/src/resources/images/linkedin.png" alt="LinkedIn: aditi-bajpai" id='img'/></a>
                    </div>
                    <div className="icon" id='github'>
                        <a href="https://github.com/Aditi126" target='blank'><img src="/src/resources/images/github.png" alt="Github: Aditi126" id='img'/></a>
                    </div>
                </div>
            </div>
            <div className="right-of-page">
                <NavBar />
                <img src="/src/resources/images/Aditi-portfolio.png" alt="Aditi-img" id='aditi' />
            </div>
        </div>
    )
}

export default LandingPage
