import React from 'react';

const Emojis = props => {
    return (
        <div >
            Matching Emojis:  
            {props.animals.includes("Sheep") && <span role="img" aria-label="sheep">🐑</span>}
            {props.animals.includes("Dog") && <span role="img" aria-label="dog">🐶</span>}
            {props.animals.includes("Cat") && <span role="img" aria-label="cat">😸</span>}
            {props.animals.includes("Lion") && <span role="img" aria-label="lion">🦁</span>}
            {props.animals.includes("Tiger") && <span role="img" aria-label="tiger">🐅</span>}
        </div>
    )
}

export default Emojis;