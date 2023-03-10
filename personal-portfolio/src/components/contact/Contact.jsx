import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "./contact.css";

const Contact = () => {
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
    .sendForm(
        "service_tgo8os6", 
         "template_oaesrcu", 
         form.current, 
         'YOUR_PUBLIC_KEY'
         )
        .then(
            (result) => {
          console.log(result.text);
      }, 
        (error) => {
          console.log(error.text);
      }
      );
  };

  return (
   <section className="contact section" id="contact">
     <h1 className="section__title">Get In Touch</h1>
     <span className="section__subtitle">Contact Me</span>

     <div className="contact__container container grid">
        <div className="contact__content">
            <h3 className="contact__title">Talk To Me</h3>

            <div className="contact__info">
                <div className="contact__card">
                    <i className="bx bx-mail-send contact__card-icon"></i>


                    <h3 className="contact__card-title">Email</h3>
                    <span className="contact__card-data">user@gmail.com</span>

                    <a href="mailto:lynetteronnoh86@gmail.com"
                     className="contact__button">Write me{" "}
                    <i className="bx bx-right-arrow-alt 
                       contact__button-icon"></i></a>
                </div>

                <div className="contact__card">
                    <i className="bx bxl-whatsapp contact__card-icon"></i>


                    <h3 className="contact__card-title">Whatsapp</h3>
                    <span className="contact__card-data">999-888-777</span>

                    <a href="https://api.whatsapp.com/send?
                    phone=254740359539&text=Hello, more information!"
                     className="contact__button">Write me {" "}
                    <i className="bx bx-right-arrow-alt 
                       contact__button-icon"></i></a>
                </div>

                <div className="contact__card">
                    <i className="bx bxl-twitter contact__card-icon"></i>


                    <h3 className="contact__card-title">Twitter</h3>
                    <span className="contact__card-data">user.twitter123</span>

                    <a href="https://twitter.com/RonnohLynette"
                    className="contact__button">Write me{" "}
                    <i className="bx bx-right-arrow-alt 
                       contact__button-icon"></i></a>
                </div>

            </div>
        </div>

        <div className="contact__content">
            <h3 className="contact__title">Write Me Project Details</h3>

            <form  ref={form} onSubmit={sendEmail}
            className="contact__form">
            <div className="contact__form-div">
                <label className="contact__form-tag">Name</label>
                <input 
                    type="text"
                    name="name"
                    className="contact__form-input"
                    placeholder="Insert your name" 
                  />
            </div>

            <div className="contact__form-div">
                <label className="contact__form-tag">Mail</label>
                <input 
                    type="email"
                    name="email"
                    className="contact__form-input"
                    placeholder="Insert your email" 
                  />
            </div>

            <div className="contact__form-div contact__form-area">
                <label className="contact__form-tag">Project</label>
              <textarea 
                 name="project" 
                 cols="30" 
                 rows="10" 
                 className="contact__form-input" 
                 placeholder="Write your project"
               ></textarea>
            </div>
 
           <button className="button button--flex">
            Send Message
            {/* <svg
            </svg> */}
           </button>
        </form>
     </div>

     </div>
   </section>
  )
}

export default Contact
