import React, { useState } from 'react';

const NewAnimal = props => {

    const [newAnimal, setAnimal] = useState('')

    return (
        <div >
            <label>
                Enter Animal Name:
                <input autoComplete="off" value={newAnimal} onChange={e => setAnimal(e.currentTarget.value)} />
            </label>
            <button onClick={props.createAnimal(newAnimal)}>Add</button>
        </div>
    )
}

export default NewAnimal;