import React from 'react';
import ReactDOM from 'react-dom';

const todoTitle ="Call Family";
const todoDesc = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea laudantium est alias, iure consequatur eum nobis ipsam nihil nam atque?";
const date =new Date();
const dateName = date.getDate();
const monthName = date.getMonth();
const yearName = date.getFullYear();

ReactDOM.render(
  <div>
    <h1>Todo App</h1>
    <h3>{todoTitle}</h3>
    <p>{todoDesc}</p>
    <p>{dateName + " /" + monthName + " /" + yearName}</p>
  </div>,
document.getElementById('root')
);

