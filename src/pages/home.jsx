import React, { useState, useEffect } from 'react';
import '../style/home.css';
import Header from '/Users/kasulalalithendra/Desktop/capstone-2/src/components/header.jsx';
import Footer from '/Users/kasulalalithendra/Desktop/capstone-2/src/components/footer.jsx';

function Home() {
  const heroImages = [
    'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1523987355523-c7b5b0723c6a?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=1200&q=80',
  ];
  const [heroIndex, setHeroIndex] = useState(0);
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [searching, setSearching] = useState(false);
  const [modalLoading, setModalLoading] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setHeroIndex(i => (i + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    fetchRandomRecipes();
  }, []);

  function fetchRandomRecipes() {
    setLoading(true);
    fetch('https://api.spoonacular.com/recipes/random?number=12&apiKey=dc902937ed244bfbaa7961cc0e792d6a')
      .then(res => res.json())
      .then(data => {
        setRecipes(data.recipes || []);
        setLoading(false);
      });
  }

  function fetchSearchRecipes(query) {
    setLoading(true);
    fetch(`https://api.spoonacular.com/recipes/complexSearch?query=${encodeURIComponent(query)}&number=12&addRecipeInformation=true&apiKey=dc902937ed244bfbaa7961cc0e792d6a`)
      .then(res => res.json())
      .then(data => {
        setRecipes(data.results || []);
        setLoading(false);
      });
  }

  function handleSearch(e) {
    e.preventDefault();
    if (search.trim() === '') {
      fetchRandomRecipes();
      setSearching(false);
    } else {
      fetchSearchRecipes(search);
      setSearching(true);
    }
  }

  function openModal(recipe) {
    // If recipe has extendedIngredients, show directly
    if (recipe.extendedIngredients && recipe.instructions) {
      setSelectedRecipe(recipe);
      setModalOpen(true);
      setModalLoading(false);
    } else {
      // Fetch full info by ID
      setModalLoading(true);
      setModalOpen(true);
      fetch(`https://api.spoonacular.com/recipes/${recipe.id}/information?apiKey=dc902937ed244bfbaa7961cc0e792d6a`)
        .then(res => res.json())
        .then(data => {
          setSelectedRecipe(data);
          setModalLoading(false);
        });
    }
  }
  function closeModal() {
    setModalOpen(false);
    setSelectedRecipe(null);
    setModalLoading(false);
  }

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
            <h1 className="hero-title">Find Your Perfect Recipe</h1>
            <p className="hero-subtitle">
              Search thousands of recipes by name or tag
            </p>
          </div>
        </div>
      </section>
      <section className="featured-recipes">
        <div className="featured-recipes-inner">
          <form className="search-bar-group" onSubmit={handleSearch}>
            <input
              type="text"
              className="search-bar-input"
              data-mobile-placeholder="Search recipes"
              placeholder="Search recipes or ingredients..."
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
            <button className="search-bar-btn" type="submit">Search</button>
          </form>
          <h2 className="popular-heading">Popular Recipes</h2>
          <p className="popular-desc">{searching && search ? `Results for "${search}"` : 'Handpicked recipes just for you'}</p>
          {loading ? (
            <div className="loading-recipes">Loading recipes...</div>
          ) : (
            <div className="recipe-grid">
              {recipes.map(recipe => (
                <div className="recipe-card" key={recipe.id}>
                  <img src={recipe.image} alt={recipe.title} className="recipe-img" />
                  <div className="recipe-info">
                    <h3 className="recipe-title">{recipe.title}</h3>
                    <div className="recipe-meta">
                      <span>🕒 {recipe.readyInMinutes} min</span>
                      <span>{recipe.servings} servings</span>
                    </div>
                    <button className="view-recipe-btn" onClick={() => openModal(recipe)}>
                      View Recipe
                    </button>
                    {recipe.dishTypes && recipe.dishTypes.length > 0 && (
                      <span className="recipe-tag">{recipe.dishTypes[0]}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
      {modalOpen && (
        <div className="modal-bg" onClick={closeModal}>
          <div className="modal-box" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>&times;</button>
            {modalLoading || !selectedRecipe ? (
              <div className="modal-loading">Loading...</div>
            ) : (
              <>
                <img src={selectedRecipe.image} alt={selectedRecipe.title} className="modal-img" />
                <h2 className="modal-title">{selectedRecipe.title}</h2>
                <div className="modal-meta">
                  <span>{selectedRecipe.readyInMinutes} min</span>
                  <span>{selectedRecipe.servings} servings</span>
                </div>
                <div className="modal-section">
                  <h3>Ingredients</h3>
                  <ul className="modal-ingredients">
                    {selectedRecipe.extendedIngredients && selectedRecipe.extendedIngredients.length > 0 ? (
                      selectedRecipe.extendedIngredients.map((ing, idx) => (
                        <li key={idx}>{ing.original}</li>
                      ))
                    ) : (
                      <li>No ingredients available.</li>
                    )}
                  </ul>
                </div>
                <div className="modal-section">
                  <h3>Instructions</h3>
                  <div className="modal-instructions">
                    {selectedRecipe.instructions ? (
                      <p>{selectedRecipe.instructions}</p>
                    ) : selectedRecipe.analyzedInstructions && selectedRecipe.analyzedInstructions.length > 0 ? (
                      <ol>
                        {selectedRecipe.analyzedInstructions[0].steps.map((step, idx) => (
                          <li key={idx}>{step.step}</li>
                        ))}
                      </ol>
                    ) : (
                      <p>No instructions available.</p>
                    )}
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      )}
      <Footer/>
    </>
  );
}

export default Home;