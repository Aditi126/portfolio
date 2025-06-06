import React from 'react'
import './About.css'

const About = () => {
    return (
        <div className='about-div'>
            <header>
                <h1>About Me</h1>
            </header>
            <div className="about-section">

                <p className="description">
                    I'm Aditi Bajpai, a frontend developer and software engineering student passionate about building elegant UIs, solving real-world problems,
                    and working with cloud-native technologies.
                </p>

                <button className="explore-button">EXPLORE</button>

                <div className="about-container">
                    <div className="about-box">
                        <h3>PROBLEM SOLVING</h3>
                        <p>
                            With strong foundations in Data Structures and Algorithms, I enjoy approaching challenges logically and efficiently.
                            My problem-solving skills are reflected in my LeetCode practice with 350+ questions solved on LeetCode in Java.
                        </p>
                    </div>
                    <div className="about-box">
                        <h3>DEVELOPMENT</h3>
                        <p>
                            As a front-end developer, I design clean user interfaces using React.js, HTML, and CSS.
                            I've built full UI projects like a blog site and a LeetCode metrics app using real-time APIs. My understanding in Node.js and MongoDB make me efficient for backend development as well.
                        </p>
                    </div>
                    <div className="about-box">
                        <h3>DEVOPS</h3>
                        <p>
                            I'm experienced with Azure fundamentals, Docker, and version control systems.
                            I focus on optimizing deployment pipelines, cloud compatibility, and scalable tech practices in my work.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
