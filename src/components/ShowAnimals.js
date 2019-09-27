import React from "react";

const ShowAnimals = props => {
  return (
    <ul>
      {props.animals.map((animal, index) => (
        <li key={animal}>
          {animal}
          <button onClick={event => props.deleteAnimal(index, event)}>X</button>
        </li>
      ))}
    </ul>
  );
};

export default ShowAnimals;
