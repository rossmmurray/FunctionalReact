import React, { useState } from 'react';
import './App.css';
import NewAnimal from './components/NewAnimal';

function App() {

  const defaultAnimals = ['Tiger', 'Dog', 'Cat']

  const [animals, setAnimals] = useState(defaultAnimals)

  const createAnimal = animal => event => {
    setAnimals([...animals, animal])
  }

  return (
    <div>
      <h1>Functional React Examples</h1>
      <NewAnimal createAnimal={createAnimal}/>
    </div>
  );
}

export default App;
