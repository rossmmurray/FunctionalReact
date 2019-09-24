import React from "react";

const Emojis = props => {
  return (
    <h1>
      {/* Lazy evaluation example*/}
      {props.animals.includes("Dog") && (
        <span role="img" aria-label="dog">
          🐶
        </span>
      )}

      {/* If statement example*/}
      {props.animals.includes("Cat") ? (
        <span role="img" aria-label="cat">
          😸
        </span>
      ) : null}
    </h1>
  );
};

export default Emojis;
