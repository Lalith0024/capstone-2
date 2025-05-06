function RecipeCard({ recipe }) {
    return (
      <div className="recipe-card">
        <img src={recipe.image} alt={recipe.name} />
        <h3>{recipe.name}</h3>
        <button>View Recipe</button>
      </div>
    );
  }
  
export default RecipeCard;
  