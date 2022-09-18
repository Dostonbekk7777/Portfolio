import React from 'react'
import "./contact.css"
import {MdOutlineMail} from "react-icons/md"
import {BsTelegram} from "react-icons/bs"
import {ImWhatsapp} from "react-icons/im"
import { useRef } from 'react'
import emailjs from 'emailjs-com'

const Contact = () => {
const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_h5mqjbt', 'template_p9s2j2g', form.current, '0GfGOIo7FWuXYDTLS')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };
 
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact with Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
<article className='contact__option'>
  <MdOutlineMail className='contact__option-icon'/>
<h4>Email</h4>
<h5 className='email'>dostonorziyev7@gmail.com</h5>
<a href="mailto:dostonorziyev7@gmail.com">Send a message</a>
</article>
<article className='contact__option'>
  <BsTelegram className='contact__option-icon'/>
<h4>Telegram</h4>
<h5>Doston Orziev</h5>
<a href="https://t.me/ordoru12">Send a message</a>
</article>
<article className='contact__option'>
  <ImWhatsapp className='contact__option-icon'/>
<h4>WhatsApp</h4>
<h5>+998 88 007 43 03</h5>
<a href="https://wa.me/998880074303">Send a message</a>
</article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required/>
          <textarea name="message" id="" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
