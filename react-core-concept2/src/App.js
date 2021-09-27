import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <Counter></Counter>
      <ExternalUsers></ExternalUsers>
    </div>
  ); 
}
function ExternalUsers(){
  const [users, setUsers] = useState([]); 
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  }, [])
  return (
    <div>
      <h1>ExternalUsers</h1>
      {
        users.map(user => <User name= {user.name} email={user.email}></User>)
      }
    </div>
  )
}
function User(props){
  const UserStyle = {
    border:'3px solid blue',
    borderRadius:'10px',
    margin:'10px',
    padding:'10px',
    backgroundColor:'white'
  }
  return(
    <div className="User" style={UserStyle}>
      <h2>name:{props.name}</h2>
      <p>Email:{props.email}</p>
    </div>
  )
}

function Counter(){
  const [count, setCount] = useState(0);
  const handleIncrease = () =>  setCount(count +1);
  const handleDecrease = () =>  setCount(count -1);
  return (
    <div>
      <h1>count: {count}</h1>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Decrease</button>
    </div>
  )
}

export default App;
