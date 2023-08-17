import React, {useEffect, useState} from 'react';
import s from './ContactForm.module.css';
import {sendContactData} from "@/helpers/helper";
import {STATUS} from "@/constants";
import Notification from '../Notification/Notification'

const ContactForm = () => {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredName, setEnteredName] = useState('');
  const [enteredMessage, setEnteredMessage] = useState('');
  const [requestStatus, setRequestStatus] = useState(STATUS.NULL);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (requestStatus === STATUS.SUCCESS || requestStatus === STATUS.ERROR) {
      const timer = setTimeout(() => {
        setRequestStatus(STATUS.NULL)
        setError(null)
      }, 3000);

      return () => {
        clearTimeout(timer);
      }
    }
  }, [requestStatus]);

  const handleSendMessageForm = async (event) => {
    event.preventDefault();

    setRequestStatus(STATUS.PENDING);

    try {
      await sendContactData({
        email: enteredEmail,
        name: enteredName,
        message: enteredMessage,
      });
      setRequestStatus(STATUS.SUCCESS);
      setEnteredEmail('');
      setEnteredName('');
      setEnteredMessage('');
    } catch (err) {
      setError(error.message)
      setRequestStatus(STATUS.ERROR);
    }
  }

  let notification;

  switch (requestStatus) {
    case STATUS.PENDING:
      notification = {
        status: STATUS.PENDING,
        title: 'Sending message...',
        message: 'Your message is on its way!'
      }
      break;

    case STATUS.SUCCESS:
      notification = {
        status: STATUS.SUCCESS,
        title: 'Success!',
        message: 'Your message send successfully!'
      }
      break;

    case STATUS.ERROR:
      notification = {
        status: STATUS.ERROR,
        title: 'Error!',
        message: error
      }
      break;
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

      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
    </section>
  );
};

export default ContactForm;
