import React, { useState } from 'react';

const EmailPopup = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleOpen = () => setShowPopup(true);
  const handleClose = () => setShowPopup(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.href = `mailto:mjrpasia@tip.edu.ph?subject=Message from ${email}&body=${encodeURIComponent(message)}`;
    setShowPopup(false);
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
            <form onSubmit={handleSubmit}>
              <label>
                Your Email:
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  required
                />
              </label>
              <label>
                Message:
                <textarea
                  value={message}
                  onChange={e => setMessage(e.target.value)}
                  required
                  rows={4}
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
