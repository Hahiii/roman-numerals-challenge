import React from 'react';
import './App.css';
import Calculator from './Calculator'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Roman Numerals</h1>
      </header>
      <Calculator />
      <footer>
        <p>
          Design by: <a href="https://dribbble.com/shots/6487156-Lifelimitsart-058-Calculator-Update" target="_blank" rel="noopener noreferrer">Erik</a>
        </p>
      </footer>
    </div >
  );
}

export default App;
