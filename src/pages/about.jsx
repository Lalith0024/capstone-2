import React from 'react';
import '../style/about.css';
import Header from '../components/header';
import Footer from '../components/footer';

function About() {
  return (
    <>
    <Header/>
    <div className="about-wrapper">
      <section className="hero fade-in-up">
        <div className="hero-content-centered">
          <h1>Discover the Taste of Home</h1>
          <p>
            At RecipeFinder, we're not just about food—we're about memories. Our mission is to
            bring flavors from around the world to your kitchen with love, accuracy, and ease.
          </p>
        </div>
      </section>
      <section className="about-content fade-in">
        <div className="text-block">
          <h2>Why RecipeFinder?</h2>
          <p>
            Because food isn't just fuel, it's an experience. Whether you're experimenting or
            reviving your grandma's forgotten curry, we're here to help.
          </p>
        </div>
      </section>
      <section className="faq-section fade-in">
        <h3>Frequently Asked Questions</h3>
        <div className="faq-item">
          <details>
            <summary>Are your recipes accurate and tested?</summary>
            <p>Absolutely. We curate recipes that are tested by our team and contributed by a trusted community of food enthusiasts. We also use AI to improve results.</p>
          </details>
        </div>
        <div className="faq-item">
          <details>
            <summary>Can I submit my own recipes?</summary>
            <p>
              Yes, we welcome it! Registered users can submit their own recipes and even get
              featured on the homepage.
            </p>
          </details>
        </div>
        <div className="faq-item">
          <details>
            <summary>How often is the recipe database updated?</summary>
            <p>
              We update our database weekly with fresh content based on user feedback, seasonal
              trends, and global cuisine popularity.
            </p>
          </details>
        </div>
        <div className="faq-item">
          <details>
            <summary>Is there a mobile version available?</summary>
            <p>
              Yes! Our platform is fully responsive and mobile-optimized for seamless use on any
              device.
            </p>
          </details>
        </div>
        <div className="faq-item">
          <details>
            <summary>What if I can  t find a recipe I want?</summary>
            <p>
              You can request custom recipes by ingredients or cuisines, and we  ll generate them
              for you using our AI.
            </p>
          </details>
        </div>
      </section>
    </div> 
    <Footer/>
    </>
  );
}

export default About;