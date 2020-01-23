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
          
        {res && <h2> this is the res: {res} </h2>} */}

        <div className="box">
          <div className="screen">
            <h1 ref={inOutPut}></h1>
          </div>
          <div className="keyboard">
            <div className="controlls-container">
              <button className="controll one active" id="reset" data-value="reset" onClick={(e) => handleClick(e.target)}>reset</button>
              <button className="controll two active" id="reset" data-value="C" onClick={(e) => handleClick(e.target)}>C</button>
              <button className="controll tree active" id="reset" data-value="=" onClick={(e) => handleClick(e.target)}>=</button>
            </div>
            <div className="values-container">
              <div className="values">
                <button className="val-item active" id="value" data-value="C" onClick={(e) => handleClick(e.target)}>C</button>
                <button className="val-item active" id="value" data-value="D" onClick={(e) => handleClick(e.target)}>D</button>
                <button className="val-item active" id="value" data-value="M" onClick={(e) => handleClick(e.target)}>M</button>
                <button className="val-item active" id="value" data-value="V" onClick={(e) => handleClick(e.target)}>V</button>
                <button className="val-item active" id="value" data-value="X" onClick={(e) => handleClick(e.target)}>X</button>
                <button className="val-item active" id="value" data-value="L" onClick={(e) => handleClick(e.target)}>L</button>
                <button className="val-item active" id="value" data-value="I" onClick={(e) => handleClick(e.target)}>I</button>
                <button className="val-item">.</button>
                <button className="val-item">S</button>
              </div>
              <div className="calc-controlls-container">
                <button className="calc-item"></button>
                <button className="calc-item"></button>
                <button className="calc-item active" id="action" data-value="+" onClick={(e) => handleClick(e.target)}>+</button>
                <button className="calc-item active" id="action" data-value="x" onClick={(e) => handleClick(e.target)}>x</button>
                <button className="calc-item active" id="action" data-value="-" onClick={(e) => handleClick(e.target)}>-</button>
                <button className="calc-item active" id="action" data-value="/" onClick={(e) => handleClick(e.target)}>/</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
