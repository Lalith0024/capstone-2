import React, { useState } from 'react';
import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import BackgroundImage from '/var/folders/23/tz9v24v10v7dk3_ff4vmpzfh0000gn/T/TemporaryItems/NSIRD_screencaptureui_aB4twu/Screenshot 2025-05-06 at 10.00.47 PM.png';
import RecipeCard from './components/recipiename';


function App() {
  const recipes = [
    {
      name: "Margherita Pizza",
      image: "https://www.themealdb.com/images/media/meals/x0lk931587671540.jpg",
    },
    {
      name: "Chicken Biryani",
      image: "https://www.themealdb.com/images/media/meals/wyxwsp1486979827.jpg",
    },
    {
      name: "Sushi",
      image: "https://www.themealdb.com/images/media/meals/g046bb1663960946.jpg",
    },
    {
      name: "Pasta Alfredo",
      image: "https://www.themealdb.com/images/media/meals/syqypv1486981727.jpg",
    },
    {
      name: "Veg Manchurian",
      image: "https://www.themealdb.com/images/media/meals/1525876468.jpg",
    },
    {
      name: "Pancakes",
      image: "https://www.themealdb.com/images/media/meals/rwuyqx1511383174.jpg",
    },
  ];
  
  const [searchTerm, setSearchTerm] = useState('');
  const [message, setMessage] = useState('');

  const handleSearch = () => {
    if (searchTerm.trim() === '') {
      setMessage('Please enter a recipe or ingredient.');
    } else {
      setMessage(`Showing results for: "${searchTerm}"`);
    }
  };

  return (
    <div className="page-container">
      <main className="main-content">
        <Header />

        <section
          className="hero-section"
          style={{
            position: 'relative',
            backgroundImage: `url(${BackgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '300px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            color: 'white',
            textShadow: '1px 1px 4px black',
            padding: '40px 20px',
          }}
        >
          <h1 style={{ fontSize: '2.5rem', marginBottom: '10px' }}>Find Your Perfect Recipe 🍲</h1>
          <p style={{ fontSize: '18px', marginBottom: '20px' }}>
            Search thousands of recipes by name or tag
          </p>

          <div style={{ display: 'flex', gap: '10px' }}>
            <input
              type="text"
              placeholder="Enter recipe or ingredient..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                padding: '12px',
                fontSize: '16px',
                borderRadius: '8px',
                border: 'none',
                width: '280px',
              }}
            />
            <button
              onClick={handleSearch}
              style={{
                padding: '12px 20px',
                fontSize: '16px',
                backgroundColor: '#ff7043',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
              }}
            >
              Search
            </button>
          </div>

          {message && (
            <p
              style={{
                marginTop: '15px',
                fontSize: '16px',
                background: 'rgba(0,0,0,0.5)',
                padding: '8px 16px',
                borderRadius: '6px',
              }}
            >
              {message}
            </p>
          )}
        </section>

        <section className="featured-recipes">
      <h2>Popular Recipes</h2>
      <p>Check out trending recipes loved by our users</p>
      <div className="recipes-grid">
        {recipes.map((r, i) => <RecipeCard key={i} recipe={r} />)}
      </div>
    </section>

        {/* Later sections like Featured, Filters, Testimonials, etc. go here */}
        </main>

        <Footer />
      
    </div>
  );
}

export default App;
