import React from 'react'
import "./about.css";
import AboutImg from "../../assets/about.jpg";
// import CV from "../../assets/Lynette-CV.pdf";
import CV from "../../assets/Lynette-Cv.pdf"
import Info from './Info';

const About = () => {
  return (
  <section className="about section" id="about">
    <h2 className="section__title">About Me</h2>
    <span className="section__subtitle">Introduction</span>
  
  <div className="about__container container grid">
     <img src={AboutImg} alt="" className="about__img" />
  
  <div className="about__data">
    <Info />

   <p className="about__description">
     I am a web developer. I create web pages and functional applications with UI/UX user interfaces.
     <br>I am happy with my projects so far.</br>
   </p>

  </div>
  <a download="" href={CV} className="button button__flex">
    Download CV</a>
  
  </div>
  </section>
  )
}

export default About
