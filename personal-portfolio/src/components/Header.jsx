import React from 'react'
import "./header.css";

const Header = () => {
  return (
   <header className="header"> 
   <nav className='nav container'>
    <a href="index.html" className="nav__logo">Lynette</a>
   
     <div className="nav__menu">
        <ul className="nav__list grid">
             <li className="nav__item">
                <a href="home" className="nav__link">
                {/* <i className="uil uil-estate nav__icon"></i> */}
               <i class="uil uil-estate"></i> Home
               </a>
             </li>

               <li className="nav__item">
                <a href="about" className="nav__link">
                {/* <i className="uil uil-user nav__icon"></i> */}
                <i class="uil uil-user"></i> About
             </a>
             </li>

               <li className="nav__item">
                <a href="skills" className="nav__link">
                {/* <i className="uil uil-file-alt nav__icon"></i> Skills */}
                <i class="uil uil-file-alt"></i> Skills
             </a>
             </li>

               <li className="nav__item">
                <a href="services" className="nav__link">
                {/* <i className="uil uil- nav__icon"></i> */}
                <i class="uil uil-briefcase-alt"></i> Services

             </a>
             </li>

               <li className="nav__item">
                <a href="portfolio" className="nav__link">
                {/* <i className="uil uil- nav__icon"></i> */}
                <i class="uil uil-scenery"></i> Portfolio
             </a>
             </li>


             <li className="nav__item">
                <a href="contact" className="nav__link">
                {/* <i className="uil uil- nav__icon"></i> */}
                <i class="uil uil-message"></i> Contact
             </a>
             </li>   
        </ul>

       {/* <div className="uil uil-times nav__close"></div> */}
     <div className="nav__close">
       <i class="uil uil-times"></i>
        </div>

     </div>

     <div className="nav__toggle">
        <i class="uil uil-apps"></i>
     </div>
   </nav>
   </header>

  )
}

export default Header
