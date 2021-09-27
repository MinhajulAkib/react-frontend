import React, {Component} from 'react';

const Cosmetic = (props) => {
    console.log(props.cosmetic);
    const {name, price, id} = props.cosmetic;
    const handlePurchase = id => {
        //set a local storage
        console.log(id);
    }
    return (
        <div>
            <h2>name: {name}</h2>
            <p>id:{id} price: ${price}</p>
            <button onClick ={handlePurchase(id)}>Purchase</button>
        </div>
    );
}

export default Cosmetic;