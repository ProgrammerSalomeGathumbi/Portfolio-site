import React from 'react';
import Footer from './Footer';
import './Contact.css';
import Header from './Header';

const Contact = () => {
  return (
    <div>
      <Header />
      <main className="contact-main">
        <section className="contact-section">
          <h2>Contact Me</h2>
          <p>Feel free to reach out through the following channels:</p>
          <ul className="contact-links">
            <li>
              <span className="contact-icon">🔗</span>
              <a href="https://www.linkedin.com/in/salome-gathumbi" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </li>
            <li>
              <span className="contact-icon">✉️</span>
              <a href="mailto:salomegathumbi@gmail.com">Email</a>
            </li>
            <li>
              <span className="contact-icon">📌</span>
              <a href="https://github.com/programmersalomegathumbi" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </li>
          </ul>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
