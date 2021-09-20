import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";

const todoTitle ="Call Family";
const todoDesc = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea laudantium est alias, iure consequatur eum nobis ipsam nihil nam atque?";
const date =new Date();
const dateName = date.getDate();
const monthName = date.getMonth();
const yearName = date.getFullYear();

// const headingStyle ={
//   backgroundColor:'purple',
//   color:'white',
//   textAlign:'center',
//   padding:'15px'
// }

ReactDOM.render(
  <div>
    <h1 className="headingStyle">Todo App</h1>
    <h3>{todoTitle}</h3>
    <p>{todoDesc}</p>
    <p>{dateName + " /" + monthName + " /" + yearName}</p>
  </div>,
document.getElementById('root')
);

