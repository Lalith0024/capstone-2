import React from 'react';
import  '../App.css' ;

function CuisineCard({cuisineList}) {
  return (
    <div style={{display:"flex", gap:"20px", overflowX:"scroll", padding:"20px"}}>
      {cuisineList.map((cuisine,i) => (
        <div key={i} className="card_box">
          <img src={cuisine.image} alt={cuisine.name} />
          <h3>{cuisine.name}eufge</h3>
        </div>
      ))}
    </div>
  );
}

export default CuisineCard;
