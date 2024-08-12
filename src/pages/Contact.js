import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    const templateParams = {
      name,
      email,
      message,
    };

    emailjs.send('service_6uhcg8q', 'template_2hpflsq', templateParams, 'r9HJ3vrWN89RCB7cE')
      .then((response) => {
        console.log('Email sent successfully!', response.status, response.text);
        setSuccessMessage('Your message has been sent successfully!');
        setErrorMessage('');
        setName('');
        setEmail('');
        setMessage('');
      }, (error) => {
        console.error('Failed to send your message. Please try again later.', error);
        setErrorMessage('Failed to send your message. Please try again later.');
        setSuccessMessage('');
      });
  };

  return (
    <div className="contact-container">
      <h1>Contact Me</h1>
      <form onSubmit={sendEmail} className="contact-form">
        <input 
          type="text" 
          placeholder="Your Name" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          required 
          className="input-field"
        />
        <input 
          type="email" 
          placeholder="Your Email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required 
          className="input-field"
        />
        <textarea 
          placeholder="Your Message" 
          value={message} 
          onChange={(e) => setMessage(e.target.value)} 
          required 
          className="textarea-field"
        ></textarea>
        <button type="submit" className="submit-button">Send Message</button>
      </form>
      {successMessage && <p className="success-message">{successMessage}</p>}
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </div>
  );
}

export default Contact;
