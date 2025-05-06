import React from 'react';

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

