import React from 'react';
import '/Users/kasulalalithendra/Desktop/capstone-2/src/style/CuisineCard.css';

const CuisineCard = ({ cuisine }) => {
  return (
    <div className="recipe-card">
      <img src={cuisine.image} alt={cuisine.name} />
      <h3>{cuisine.name}</h3>
      <button>Explore</button>
    </div>
  );
};

export default CuisineCard;
