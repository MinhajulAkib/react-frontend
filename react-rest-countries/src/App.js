import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <Countries></Countries>
    </div>
  );
}
function Countries(){
  const[countries, setCountries] = useState([]);
  useEffect(() => {
     fetch('https://restcountries.eu/rest/v2/all')
     .then(res => res.json())
     .then(data => setCountries(data))
  }, [])
  return (
    <div>
      <h2>Travelling around the World</h2>
      <h4>Contries availabe: {countries.length}</h4>
    </div>
  );
}
export default App;