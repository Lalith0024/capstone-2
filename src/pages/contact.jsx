import React from 'react';
import '../style/contact.css';
import BackgroundImage from '../../images/ChatGPT Image Jun 16, 2025, 03_32_27 PM.png';
import Header from '../components/header';
import Footer from '../components/footer';
import { toast } from 'react-toastify';

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success('Message sent successfully');
  };
  return (
    <>
    <Header/>
      <div className="fade-in">
        <section
          className="contact-container"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.7)), url(${BackgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="contact-wrapper">
            <h2 className="contact-title">Get in Touch</h2>
            <p className="contact-subtitle">We'd love to hear from you! Send us a message.</p>
            <form
              className="contact-form"
              onSubmit={handleSubmit}
            >
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
              />
              <textarea
                name="message"
                rows="6"
                placeholder="Your Message"
                required
              ></textarea>
              <button type="submit">Send Message</button>
            </form>
          </div>
          <div className="floating-food">🍝</div>
        </section>
      </div>
      <Footer/>
    </>
    
  );
}

export default Contact;