import React, { useState } from 'react';
import './App.css';
import romanNumeralsDecimal from './RomanToDecimal'
import decimalRoman from './DecimalToRoman'

function App() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [res, setRes] = useState("");


  const handleChange = (elem) => {
    if (elem.id === "x") {
      setX(romanNumeralsDecimal(elem.value));
    } else {
      setY(romanNumeralsDecimal(elem.value));
    }
  }

  const calculate = () => {
    let sum = Number(x) + Number(y);
    setRes(decimalRoman(sum));
  }


  return (
    <div className="App">
      <header className="App-header">
        <h1>Roman Numerals</h1>
      </header>
      <section className="calculator">
        <form>
          <input type="text" name="" className="screen" id="x" onChange={(e) => handleChange(e.target)} />
          <input type="text" name="" className="screen" id="y" onChange={(e) => handleChange(e.target)} />
        </form>
        <button onClick={() => calculate()}>
          Click
        </button>
        
        {res && <h2> this is the res: {res} </h2>}
      </section>
    </div>
  );
}

export default App;
