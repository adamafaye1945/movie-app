const Rating = ({ rating }: { rating: number }) => {
    
  const starsArray = Array.from({ length: rating }, () => "⭐️");
  return (
    <div>
      {starsArray.map((star, index) => (
        <span key={index}>{star}</span>
      ))}
    </div>
  );
};
export {Rating}