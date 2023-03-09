import React from 'react';
import "./skills.css";
import Frontend from "./Frontend";
import Backend from "./Backend";


const Skills = () => {
  return (
   <section className="skills section">
    <h1 className="section__title">Skills</h1>
    <span className="section__subtitle">My Technical Level</span>
  
  <div className="skills__container container grid">
    <Frontend />
    <Backend />
     </div>
   </section>
  )
}

export default Skills
