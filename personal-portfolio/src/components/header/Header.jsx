import React, { useState } from 'react';
import "./header.css";

const Header = () => {
   // ============Toggle Menu==========
   const[Toggle, showMenu] = useState(false);
 
  return (
   <header className="header"> 
   <nav className='nav container'>
    <a href="index.html" className="nav__logo">Lynette</a>
   
     <div className={Toggle ? "nav__menu show-menu":
      "nav__menu"}>
        <ul className="nav__list grid">
             <li className="nav__item">
                <a href="#home" className="nav__link active-link">
                <i className="uil uil-estate nav__icon"></i>
                Home
               {/* <i class="uil uil-estate"></i> Home */}
               </a>
             </li>

               <li className="nav__item">
                <a href="#about" className="nav__link">
                <i className="uil uil-user nav__icon"></i>
                About
                {/* <i class="uil uil-user"></i> About */}
             </a>
             </li>

               <li className="nav__item">
                <a href="#skills" className="nav__link">
                <i className="uil uil-file-alt nav__icon"></i> 
                Skills
                {/* <i class="uil uil-file-alt"></i> Skills */}
             </a>
             </li>

               <li className="nav__item">
                <a href="#services" className="nav__link">
                <i className="uil uil-briefcase-alt nav__icon"></i>
                Services
                {/* <i class="uil uil-briefcase-alt"></i> Services */}

             </a>
             </li>

               <li className="nav__item">
                <a href="#portfolio" className="nav__link">
                <i className="uil uil-scenery nav__icon"></i>
                Portfolio
                {/* <i class="uil uil-scenery"></i> Portfolio */}
             </a>
             </li>


             <li className="nav__item">
                <a href="#contact" className="nav__link">
                <i className="uil uil-message nav__icon"></i>
                Contact
                {/* <i class="uil uil-message"></i> Contact */}
             </a>
             </li>   
        </ul>

       {/* <div className="uil uil-times nav__close"></div> */}
     {/* <div className="nav__close"> */}
       <i className="uil uil-times nav__close" onClick={() => showMenu
      (!Toggle)}></i>
        {/* </div> */}

     </div>

     <div className="nav__toggle" onClick={() => showMenu
      (!Toggle)}>
      <i class="uil uil-apps"></i>
     </div>
    </nav>
   </header>

  );
};

export default Header
