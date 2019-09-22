import React, { useState } from 'react';
import './App.css';
import NewAnimal from './components/NewAnimal';
import ShowAnimals from './components/ShowAnimals';
import Emojis from './components/Emojis';

function App() {

  const defaultAnimals = ['Tiger', 'Dog', 'Cat']

  const [animals, setAnimals] = useState(defaultAnimals)

  const createAnimal = animal => event => {
    setAnimals([...animals, animal])
  }

  const deleteAnimal = index => event => {
    const animalsTemp = [...animals]
    animalsTemp.splice(index, 1)
    setAnimals(animalsTemp)
  }

  return (
    <div>
      <h1>Functional React Examples</h1>
      <NewAnimal createAnimal={createAnimal} />
      <ShowAnimals animals={animals} deleteAnimal={deleteAnimal} />
      <Emojis animals={animals} />
    </div>
  );
}

export default App;
