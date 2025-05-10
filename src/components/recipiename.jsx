function RecipeCard({ Recipes }) {
  const duplicated = [...Recipes, ...Recipes]; // For seamless looping
  return (
    <div className="auto-scroll-container">
      <div className="auto-scroll-track">
        {duplicated.map((recipe, i) => (
          <div key={i} className="card_box">
            <img src={recipe.image} alt={recipe.name} />
            <h3>{recipe.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
export default RecipeCard;