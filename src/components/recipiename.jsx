import React from 'react';
import '/Users/kasulalalithendra/Desktop/capstone-2/src/App.css';

function RecipeCard({ Recipes }) {
  return (
    <div className="card-scroll">
      {Recipes.map((recipe, i) => (
        <div key={i} className="card_box">
          <img src={recipe.image} alt={recipe.name} />
          <h3>{recipe.name}</h3>
        </div>
      ))}
    </div>
  );
}

export default RecipeCard;

