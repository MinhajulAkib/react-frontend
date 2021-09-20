import React from 'react';
import './Country.css'

const Country = (props) => {

    const {name, flag, capital, population} = props.country;
    console.log(props.country);
    return (
        <div className="country">
            <h1>This is : {name}</h1>
            <h3> capital: {capital}</h3>
            <img src={flag} alt="" />
            <h4>population:{population}</h4>
        </div>
    );
};



export default Country;