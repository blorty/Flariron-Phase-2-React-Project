import React from "react";
import ContainerCard from "./ContainerCard";

function Container ({ batData }) {

    const batCards = batData.map((batItem) => {
        const { id, type, title, director, year, rating, actors, image } = batItem;
        return (
          <li key={id}>
            <ContainerCard title={title} director={director} year={year} rating={rating} actors={actors} image={image} />
          </li>
        );
      });
    
      return <ul className="cards">{batCards}</ul>;
};

export default Container;