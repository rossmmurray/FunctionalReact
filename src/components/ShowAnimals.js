import React from 'react';

const ShowAnimals = props => {
    return (
        <div >
            <ul>
                {props.animals.map((animal, index) =>
                    <div key={index}>
                        <li>{animal} <button onClick={props.deleteAnimal(index)}>X</button></li>  
                    </div>
                )}
            </ul>
        </div>
    )
}

export default ShowAnimals;