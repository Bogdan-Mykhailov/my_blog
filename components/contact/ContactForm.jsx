import React, {useState} from 'react';
import s from './ContactForm.module.css';

const ContactForm = () => {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredName, setEnteredName] = useState('');
  const [enteredMessage, setEnteredMessage] = useState('');
  const handleSendMessageForm = (event) => {
    event.preventDefault();

    fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify({
        email: enteredEmail,
        name: enteredName,
        message: enteredMessage,
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }

  return (
    <section className={s.contact}>
      <h1>How can I help you?</h1>
      <form className={s.form} onSubmit={handleSendMessageForm}>
        <div className={s.controls}>
          <div className={s.control}>
            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              id='email'
              required
              value={enteredEmail}
              onChange={e => setEnteredEmail(e.target.value)}
            />
          </div>

          <div className={s.control}>
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              id='name'
              required
              value={enteredName}
              onChange={e => setEnteredName(e.target.value)}
            />
          </div>
        </div>

        <div className={s.control}>
          <label htmlFor="message">Your Message</label>
          <textarea
            id="message"
            rows="3"
            required
            value={enteredMessage}
            onChange={e => setEnteredMessage(e.target.value)}
          ></textarea>
        </div>

        <div className={s.actions}>
          <button>Send Message</button>
        </div>
      </form>
    </section>
  );
};

export default ContactForm;
