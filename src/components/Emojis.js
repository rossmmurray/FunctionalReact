import React from "react";
import { animals } from "../types/all";

const Emojis = props => {
  return (
    <h1>
      {props.animals.includes("Dog") && (
        <span role="img" aria-label="dog">
          🐶
        </span>
      )}
      {props.animals.includes("Cat") && (
        <span role="img" aria-label="cat">
          😸
        </span>
      )}
    </h1>
  );
};

Emojis.propTypes = {
  animals: animals
};

export default Emojis;
