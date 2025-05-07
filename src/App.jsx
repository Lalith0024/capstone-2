import React, { useState, useEffect } from 'react';
import './style/App.css';
import Header from './components/Header';
import Footer from '/src/components/footer.jsx';
import RecipeCard from './components/RecipeName';
import CuisineCard from './components/CuisineCard';
import BackgroundImage from '/var/folders/23/tz9v24v10v7dk3_ff4vmpzfh0000gn/T/TemporaryItems/NSIRD_screencaptureui_aB4twu/Screenshot 2025-05-06 at 10.00.47 PM.png';

function App() {
  const trendingCuisines = [
    {
      name: "Italian",
      image: "https://www.themealdb.com/images/category/pasta.png"
    },
    {
      name: "Mexican",
      image: "https://www.themealdb.com/images/category/miscellaneous.png"
    },
    {
      name: "Indian",
      image: "https://www.themealdb.com/images/category/beef.png"
    },
    {
      name: "Japanese",
      image: "https://www.themealdb.com/images/category/chicken.png"
    },
    {
      name: "Chinese",
      image: "https://www.themealdb.com/images/category/lamb.png"
    },
    {
      name: "French",
      image: "https://www.themealdb.com/images/category/dessert.png"
    }
  ];
  const [searchTerm, setSearchTerm] = useState('');
  const [message, setMessage] = useState('');
  const [recipes, setRecipes] = useState([]);

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

          {message && (<p className='message'>{message}</p>)}
        </section>

        <section className="featured-recipes">
          <h2>Popular Recipes</h2>
          <p>Check out trending recipes loved by our users</p>
          
          <div className="recipes-scroll">
            {recipes.map((r, i) => <RecipeCard key={i} recipe={r} />)}
          </div>
        </section>

        <section className="trending-cuisines">
          <h2 style={{ marginTop: '60px' }}>Trending Cuisines Around the World 🌍</h2>
          <p>Discover flavors from every corner of the globe</p>

          <div className="recipes-scroll">
            {trendingCuisines.map((cuisine, i) => (
              <CuisineCard key={i} cuisine={cuisine} />
            ))}
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}

export default App;
