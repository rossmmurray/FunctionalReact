import React, { useState } from "react";
import "./App.css";
import NewAnimal from "./components/NewAnimal";
import ShowAnimals from "./components/ShowAnimals";
import Emojis from "./components/Emojis";

function App() {
  const [animals, setAnimals] = useState(["Tiger", "Dog", "Cat"]);

  // uses currying
  const createAnimal = animal => event => {
    setAnimals([...new Set([...animals, animal])]); // Set() ensures uniqueness
    console.log("Mouse click at: " + event.clientX + ", " + event.clientY);
  };

  // example calling curried function
  const _ignoreCallCurriedFunctionExample = () => {
    const someAnimal = "Snake";
    const someEvent = { clientX: "X", clientY: "Y" };
    createAnimal(someAnimal)(someEvent);
  };

  // uses multiple parameters
  const deleteAnimal = (animalToDelete, event) => {
    const animalsTemp = animals.filter(animal => animal !== animalToDelete);
    setAnimals(animalsTemp);
    console.log("Mouse click at: " + event.clientX + ", " + event.clientY);
  };

  return (
    <div>
      <h1>Functional React Example</h1>
      <NewAnimal createAnimal={createAnimal} />
      <ShowAnimals animals={animals} deleteAnimal={deleteAnimal} />
      <Emojis animals={animals} />

      {/* Example of short-circuit evaluation */}
      {false && Array(1 / 0)}
    </div>
  );
}

export default App;
