import React, { useState } from 'react';

const NewAnimal = props => {

    const [newAnimal, setAnimal] = useState('')

    return (
        <div>
            <label>
                Enter Animal Name:
                <input name='newAnimal' value={newAnimal} onChange={e => setAnimal(e.currentTarget.value)} />
            </label>
            <input type='button' value='Add' onClick={props.createAnimal(newAnimal)} />
        </div>
    )
}

export default NewAnimal;