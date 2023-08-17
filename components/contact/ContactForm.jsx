import React from 'react';
import s from './ContactForm.module.css';

const ContactForm = () => {
  return (
    <section className={s.contact}>
      <h1>How can I help you?</h1>
      <form className={s.form}>
        <div className={s.controls}>
          <div className={s.control}>
            <label htmlFor="email">Your Email</label>
            <input type="email" id='email' required />
          </div>

          <div className={s.control}>
            <label htmlFor="name">Your Name</label>
            <input type="text" id='name' required />
          </div>
        </div>

        <div className={s.control}>
          <label htmlFor="message">Your Message</label>
          <textarea id="message" rows="3"></textarea>
        </div>

        <div className={s.actions}>
          <button>Send Message</button>
        </div>
      </form>
    </section>
  );
};

export default ContactForm;
