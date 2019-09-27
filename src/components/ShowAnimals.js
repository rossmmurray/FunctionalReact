import React from "react";

const ShowAnimals = props => {
  return (
    <ul>
      {props.animals.map(animal => (
        <li key={animal}>
          {animal}
          <button onClick={event => props.deleteAnimal(animal, event)}>
            X
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ShowAnimals;
