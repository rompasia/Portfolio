import React, { useState, useRef } from 'react';

const EmailPopup = () => {
  const [showPopup, setShowPopup] = useState(false);
  const formRef = useRef();

  const handleOpen = () => setShowPopup(true);
  const handleClose = () => setShowPopup(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = formRef.current;

    try {
      const response = await fetch(
        'https://formspree.io/f/xblyezwp',  // ← your Form ID
        {
          method: 'POST',
          headers: { 'Accept': 'application/json' },
          body: new FormData(form)
        }
      );

      if (response.ok) {
        alert('Message successfully sent!');
        form.reset();
        setShowPopup(false);
      } else {
        const errorData = await response.json();
        console.error('Formspree error:', errorData);
        alert('Oops, something went wrong. Please try again.');
      }
    } catch (err) {
      console.error('Submission error:', err);
      alert('Oops, something went wrong. Please try again.');
    }
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
            <button className="close-btn" onClick={handleClose}>✕</button>
            <form ref={formRef} onSubmit={handleSubmit}>
              
              {/* Optional: disable Formspree’s CAPTCHA */}
              <input type="hidden" name="_captcha" value="false" />

              {/* Optional: custom email subject */}
              {/* <input type="hidden" name="_subject" value="New portfolio message!" /> */}

              <label>
                Your Name:
                <input
                  type="text"
                  name="name"
                  placeholder="Rom Pasia"
                  required
                />
              </label>

              <label>
                Your Email:
                <input
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  required
                />
              </label>

              <label>
                Message:
                <textarea
                  name="message"
                  rows={4}
                  placeholder="Your message..."
                  required
                />
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