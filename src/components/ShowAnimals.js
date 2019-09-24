import React from "react";

const ShowAnimals = props => {
  return (
    <ul>
      {props.animals.map((animal, index) => (
        <li key={index}>
          {animal}
          <button onClick={props.deleteAnimal(index)}>X</button>
        </li>
      ))}
    </ul>
  );
};

export default ShowAnimals;
