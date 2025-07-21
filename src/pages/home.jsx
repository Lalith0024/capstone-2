// src/pages/home.jsx
import React, { useState, useEffect, useRef } from 'react';
import '../style/home.css';
import RecipeCard from '../components/recipiename';
import CuisineCard from '../components/CuisineCard';
import Header from '/Users/kasulalalithendra/Desktop/capstone-2/src/components/header.jsx';
import Footer from '/Users/kasulalalithendra/Desktop/capstone-2/src/components/footer.jsx';
import { toast } from 'react-toastify';

function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const [message, setMessage] = useState('');
  const [Recipies, setRecipes] = useState([]);
  const heroImages = [
    'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1523987355523-c7b5b0723c6a?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=1200&q=80',
  ];
  const [heroIndex, setHeroIndex] = useState(0);
  const heroTimer = useRef();

  useEffect(() => {
    heroTimer.current = setInterval(() => {
      setHeroIndex(i => (i + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(heroTimer.current);
  }, []);

  useEffect(() => {
    fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
      .then(res => res.json())
      .then(data => {
        if (data.meals) {
          const mapped = data.meals.slice(0, 6).map(meal => ({
            name: meal.strMeal,
            image: meal.strMealThumb
          }));
          setRecipes(mapped);
        }
      });
  }, []);

  const handleSearch = () => {
    if (searchTerm.trim() === '') {
      setMessage('Please enter a recipe or ingredient.');
      toast.error('Please enter a recipe or ingredient.');
    } else {
      setMessage(`Showing results for: "${searchTerm}"`);
      toast.info(`Searching for: ${searchTerm}`);
    }
  };

  return (
    <>
      <Header/>
      <section className="hero-section">
        <div className="hero-carousel">
          {heroImages.map((img, i) => (
            <img
              key={i}
              src={img}
              alt="hero"
              className={`hero-img${i === heroIndex ? ' active' : ''}`}
            />
          ))}
          <div className="hero-overlay"></div>
          <div className="hero-content">
            <h1 style={{ fontSize: '2.5rem', marginBottom: '10px' }}>Find Your Perfect Recipe</h1>
            <p style={{ fontSize: '18px', marginBottom: '20px' }}>
              Search thousands of recipes by name or tag
            </p>
            <div className="search-bar-group">
              <input
                type="text"
                placeholder="Enter recipe or ingredient..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-bar-input"
              />
              <button
                onClick={handleSearch}
                className="search-bar-btn"
              >
                Search
              </button>
            </div>
            {message && <p className='message'>{message}</p>}
          </div>
        </div>
      </section>
      <section className="featured-recipes">
        <h2 style={{ marginLeft: '20px' }}>Popular Recipes</h2>
        <p style={{ marginLeft: '20px' }}>Check out trending recipes loved by our users</p>
        <div className="recipes-scroll">
          <RecipeCard Recipes={Recipies} />
        </div>
      </section>
      <section className="trending-cuisines">
        <h2 style={{ marginTop: '60px', marginLeft: '20px' }}>Trending Cuisines Around the World</h2>
        <p style={{ marginLeft: '20px' }}>Discover flavors from every corner of the globe</p>
        <div className="recipes-scroll">
          <CuisineCard cuisineList={[]}/>
        </div>
      </section>
      <Footer/>
    </>
  );
}

export default Home;