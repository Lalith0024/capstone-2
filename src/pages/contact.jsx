import React from 'react';
import '../style/contact.css';
import BackgroundImage from '/Users/kasulalalithendra/Desktop/capstone-2/pages/ChatGPT Image Jun 16, 2025, 03_32_27 PM.png';
import Header from '../components/header';
import Footer from '../components/footer';
import { toast } from 'react-toastify';

function Contact() {
  return (
    <>
    <Header/>
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
          action="https://api.web3forms.com/submit"
          method="POST"
          onSubmit={() => toast.success('Message sent successfully')}
        >
          <input type="hidden" name="access_key" value="your-web3forms-access-key-here" />

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

      {/* Floating food emoji */}
      <div className="floating-food">🍝</div>
    </section>
    <Footer/>
    </>
  );
}

export default Contact;