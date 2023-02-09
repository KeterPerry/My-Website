import React from 'react'
import "./about.css"
import { FaNodeJs, FaReact, FaHtml5} from 'react-icons/fa';
import { SiTypescript, SiCss3,SiJavascript,SiMongodb } from 'react-icons/si';


const About:React.FC = () => {
  return (
    <div className="about-container">
    <div className="About-section1"></div>
    <div className="section-2">
    <div className="left-about">
      <h1>Hi,</h1>
      <p>My name is Keter Perry and I&apos;m a Full Stack programmer,
        I like to program, design and in my free time read dictionaries and astrophysics news.
        on this site, you can find several projects I have generated and my contact info.
        Feel free to reach out at any time.
      </p>
    </div>
    <div className="right-about">
    <div className="circle"></div>
     <img src="./assets/me.jpg" alt="" >
     </img>
    </div>
    </div>

    <div className="section3">
      <h1>Technologies stuck</h1>
      <div className="tech-grid">
      <FaNodeJs/>
      <FaReact/>
      <SiTypescript/>
      <FaHtml5/>
      <SiCss3/>
      <SiJavascript/>
      <SiMongodb/>
      </div>
   
    </div>
    </div>
    
  )
}

export default About