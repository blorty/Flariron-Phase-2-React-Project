import React, {useState, useEffect } from "react";

function ContainerCard ({ id, type, title, director, year, rating, actors, image }) {
  const [isSeen, setIsSeen] = useState(false);
    
  const handleMarkAsSeen = () => {
    setIsSeen(!isSeen);
  }
    
  return (
    <div>
      <img className="cardImg" src={image} alt={title}/>
      <h3>{title}</h3>
      <p>{year} * {rating}</p>
      <p><strong>{`Director: ${director}`}</strong>
      </p>
      <p>{`Starring ${actors}`}</p>
      <button onClick={handleMarkAsSeen}>{isSeen ? "Already seen" : "Have not seen"}</button>
    </div>
  )
};
    

export default ContainerCard;
