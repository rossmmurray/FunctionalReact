import React from "react";

const Emojis = props => {
  return (
    <h1>
      {props.animals.includes("Dog") && (
        <span role="img" aria-label="dog">
          🐶
        </span>
      )}
      {props.animals.includes("Cat") ? (
        <span role="img" aria-label="cat">
          😸
        </span>
      ) : null}
    </h1>
  );
};

export default Emojis;
