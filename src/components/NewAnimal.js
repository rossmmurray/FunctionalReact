import React, { useState } from "react";

const NewAnimal = props => {
  const [newAnimal, setAnimal] = useState("");

  const handleChange = event => {
    setAnimal(event.currentTarget.value);
  };

  return (
    <div>
      <label>
        Enter Animal Name:
        <input value={newAnimal} onChange={handleChange} />
      </label>
      {/* pass curried function */}
      <button onClick={props.createAnimal(newAnimal)}>Add</button>
    </div>
  );
};

export default NewAnimal;
