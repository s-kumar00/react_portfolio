import React from 'react'
import { HiOutlineMail } from "react-icons/hi";
import {BsMessenger} from 'react-icons/bs'
import {IoLogoWhatsapp} from 'react-icons/io'
import './Contact.css'
import { useRef } from 'react';
import emailjs from 'emailjs-com'


const Contact = () => {

  const form = useRef();
    const sendEmail = (e) => {
      e.preventDefault();

      emailjs.sendForm('service_e03e1jj', 'template_6zc8kno', form.current, 'UyNxu8xbimbevbJb4')
        e.target.reset();
    };


  return (
    <section id='contact'>
      <h5 className='con'>Get in touch</h5>
      <h2 className='con'>Contact me</h2>


      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <HiOutlineMail className='contact__icons'/>
            <h4>Email</h4>
            <h5>sikandarsahilkumar@gmail.com</h5>
            <a href='mailto:sikandarsahilkumar@gmail.com' target="_blank" rel='noreferrer'>Send A message</a>
          </article>
          <article className='contact__option'>
            <BsMessenger className='contact__icons'/>
            <h4>Messanger</h4>
            <h5>sahilsikku</h5>
            <a href='http://m.me/sikandar.raj.986/' target="_blank" rel='noreferrer'>Send A message</a>
          </article>
          <article className='contact__option'>
            <IoLogoWhatsapp className='contact__icons'/>
            <h4>Whatsapp</h4>
            <h5>+91-8406807131</h5>
            <a href='https://wa.me/+918406807131' target="_blank" rel='noreferrer'>Send A message</a>
          </article>
        </div>



        <form ref={form} onSubmit={sendEmail}>
            <input type='text' name='name' placeholder='Your Full Name' required />
            <input type='email' name='email' placeholder='Your Email' required />
            <textarea name='message' rows="7" placeholder='Your Message' required />
            <button type='submit' className='btn btn-primary'>Send message</button>
        </form>
      </div>

    </section>
  )
}

export default Contact
