import React, { useState, useRef } from 'react';
import emailjs from 'emailjs-com';

const EmailPopup = () => {
  const [showPopup, setShowPopup] = useState(false);
  const formRef = useRef();

  const handleOpen = () => setShowPopup(true);
  const handleClose = () => setShowPopup(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'mjrpasia_portfolio1',
      'template_j21mcq7',
      formRef.current,
      'ueD535RriWVpgq9xu'
    )
    .then((result) => {
      console.log('Email sent:', result.text);
      alert('Message successfully sent!');
      setShowPopup(false);
    })
    .catch((error) => {
      console.error('Error sending email:', error.text);
      alert('Oops, something went wrong. Please try again.');
    });
  };

  return (
    <div>
      <button
        type="button"
        className="floating-email"
        onClick={handleOpen}
        aria-label="Send me an email"
      >
        💬
      </button>

      {showPopup && (
        <div className="email-popup-overlay" onClick={handleClose}>
          <div className="email-popup" onClick={e => e.stopPropagation()}>
            <button className="close-btn" onClick={handleClose}>
              ✕
            </button>
            <form ref={formRef} onSubmit={handleSubmit}>
              <label>
                Your Email:
                <input type="email" name="user_email" required />
              </label>
              <label>
                Message:
                <textarea name="message" required rows={4} />
              </label>
              <button type="submit">Send</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default EmailPopup;