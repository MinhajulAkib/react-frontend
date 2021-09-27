import React from 'react';
import Card from './components/Card';
import Data from './data.json';

const App = () => {
       
    return (
        <div>
            <h1 className="headingStyle">Todo App</h1>
            <Card todoTitle = {Data[0].title} todoDesc = {Data[0].desc}></Card>
            <Card todoTitle = {Data[1].title} todoDesc = {Data[1].desc}></Card>
            <Card todoTitle = {Data[2].title} todoDesc = {Data[2].desc}></Card>
            <Card todoTitle = {Data[3].title} todoDesc = {Data[3].desc}></Card>
            <Card todoTitle = {Data[4].title} todoDesc = {Data[4].desc}></Card>
        </div>
    );
};

export default App;