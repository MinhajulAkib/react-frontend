import React from 'react';

const Cosmetic = (props) => {
    console.log(props.cosmetic);
    const {name, price} = props.cosmetic;
    return (
        <div>
            <h2>name: {name}</h2>
            <p>price: ${price}</p>
        </div>
    );
}

export default Cosmetic;