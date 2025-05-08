import logo from './logo.svg';
// import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  // const [data, setData] = useState(null);



//   useEffect(() => {
//     fetch('http://localhost:5000/api')
//       .then(response => response.json())
//       .then(data => setData(data))
//       .catch(error => console.error('Error:', error));
//   }, []);
// console.log(data);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
        
<div>
{/*       {data ? <pre>{JSON.stringify(data.message, null, 2)}</pre> : 'Loading...'} */}
Updated
    </div>
      </header>
    </div>
  );
}

export default App;
