function CuisineCard({ cuisineList }) {
  const duplicated = [...cuisineList, ...cuisineList]; // For seamless loop
  return (
    <div className="auto-scroll-container">
      <div className="auto-scroll-track">
        {duplicated.map((cuisine, i) => (
          <div key={i} className="card_box">
            <img src={cuisine.image} alt={cuisine.name} />
            <h3>{cuisine.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
export default CuisineCard;
