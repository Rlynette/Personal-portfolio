import React from 'react';
import "./footer.css";

const Footer = () => {
  return (
   <footer className="footer">
    <div className="footer__container container">
        <h1 className="footer__title">Lynette</h1>

        <ul className="footer__list">
            <li>
                <a href="#about" className="footer__link">About</a>
            </li>

              <li>
                <a href="#portfolio" className="footer__link">Projects</a>
            </li>

              <li>
                <a href="#testimonials" className="footer__link">Testimonials</a>
            </li>
        </ul>

        <div className="footer__social">

   <a href="https://twitter.com/RonnohLynette"
      className='footer__social-link' target="__blank">
      {/* <i class="uil uil-github"></i> */}
      <i class="bx bxl-twitter"></i>
      {/* <a href="https://iconscout.com/icons/twitter" target="_blank">Twitter Icon</a> by <a href="https://iconscout.com/contributors/icon-mafia">Icon Mafia</a> on <a href="https://iconscout.com">IconScout</a> */}
      </a>

   <a href="www.linkedin.com/in/lynette-ronnoh-3b35141b3"
      className='footer__social-link' target="__blank">
      <i class="bx bxl-linkedin-square"></i>
      </a>

   {/* <a href="https://github.com/Rlynette"
      className='home__social-icon' target="__blank">
      <i class="bx bxl-github"></i>
      </a> */}

        <a href="https://www.facebook.com/lynette.lyntwinstar/"
      className='footer__social-link' target="__blank">
     <i class="bx bxl-facebook"></i>
     </a>

    <a href="https://www.instagram.com/lynette_ronnoh/"
      className='footer__social-link' target="__blank">
     <i class="bx bxl-instagram"></i>
     </a>
        </div>

        <span className='footer__copy'>
           Copyright @2023. All Rights Reserved
        </span>
    </div>
   </footer>
  )
}

export default Footer
