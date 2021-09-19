import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <LoadUsers></LoadUsers>
      <MyComponent brand='apple' price ='50000'></MyComponent>
      <MyComponent brand='Microsoft' price ='40000'></MyComponent>
      <MyComponent brand='nokia' price ='10000'></MyComponent>
      <MyComponent brand='lg' price ='0'></MyComponent>
    </div>
  );
}
function LoadUsers(){
  const [users, setUsers] = useState([])

  useEffect (() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  }, [])
    
  return(
    <div>
      <h1>User Loaded:{users.length}</h1>
      {
        users.map(user => <User name={user.name} phone={user.phone}></User>)
      }
    </div>
  )
}
function User(props){
  return(
    <div className="user">
      <h2>Name:{props.name}</h2>
      <h3>Phone number:{props.phone}</h3>
    </div>
  )
}

function MyComponent (props){
  const[points, setPoints] =useState(1)
  const myStyle = {
    backgroundColor:'lightblue',
    border:'5px solid blue',
    margin: '10px',
    padding:'10px',
    borderRadius: '10px'
}
const handleAddPoints = () => {
  const newPoints = points * 2;
  setPoints(newPoints);
}
  return (
    <div style ={myStyle}>
      <h2>Yo Yo mama! {props.brand}</h2>
      <h4 style={{ color:'red', fontWeight:'bold'}}>Asking Mooney,Price:{props.price}, I have points: {points}</h4>
      <button onClick={handleAddPoints}>Add Points</button>
      <p>Yo, I can write your own companyl!!!</p>
    </div>
  )
}

export default App;
