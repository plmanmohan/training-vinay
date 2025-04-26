const Card = ({ children }) => {
  console.log("Card rendered");
  const num = 1;
  return (
    <div className="card">
      {num > 4 && children}
    </div>
  );
}

export default Card;