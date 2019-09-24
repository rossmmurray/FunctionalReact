import React, { useState } from "react";
import "./App.css";
import NewAnimal from "./components/NewAnimal";
import ShowAnimals from "./components/ShowAnimals";
import Emojis from "./components/Emojis";

function App() {
  const [animals, setAnimals] = useState(["Tiger", "Dog", "Cat"]);

  // uses currying
  const createAnimal = animal => event => {
    setAnimals([...animals, animal]);
    console.log("Mouse click at: " + event.clientX + ", " + event.clientY);
  };

  // uses multiple parameters
  const deleteAnimal = (index, event) => {
    const animalsTemp = [...animals];
    animalsTemp.splice(index, 1);
    setAnimals(animalsTemp);
    console.log("Mouse click at: " + event.clientX + ", " + event.clientY);
  };

  return (
    <div>
      <h1>Functional React Example</h1>
      <NewAnimal createAnimal={createAnimal} />
      <ShowAnimals animals={animals} deleteAnimal={deleteAnimal} />
      <Emojis animals={animals} />
    </div>
  );
}

export default App;
