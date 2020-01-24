import React, { useState, useRef } from 'react';
import './App.css';
import romanNumeralsDecimal from './RomanToDecimal'
import decimalRoman from './DecimalToRoman'

function App() {
  const [res, setRes] = useState("");
  let input = "";
  let input1 = "";
  let input2 = "";
  let action = "";
  let calc = useRef();
  let cal = false;
  let error = "wrong input";
  let inOutPut = useRef()
  let display = useRef()

  const calculate = (a, b) => {
    let sum = a + b
    let res = decimalRoman(sum)

    setRes(res);
    if (res) {
      inOutPut.current.innerHTML = res;
      return;
    }
    inOutPut.current.innerHTML = error;
  }
  const checkInput = (toCheck) => {
    if (romanNumeralsDecimal(toCheck) == Number(romanNumeralsDecimal(toCheck))) {
      display.current.classList.remove("error")
      display.current.classList.add("right")
    } else {
      display.current.classList.remove("right")
      display.current.classList.add("error")
    }
  }


  const handleClick = (elem) => {

    if (elem.dataset.values === "value") {
      !action ? input1 += elem.innerHTML : input2 += elem.innerHTML;
      !action ? input = `${input1}` : input = `${input1}${action}${input2}`
      inOutPut.current.innerHTML = input;
      !action ? checkInput(input1) : checkInput(input2);
    }

    if (elem.dataset.action === "action") {
      action = elem.innerHTML;
      inOutPut.current.innerHTML = `${input}${action}`;
    }

    if (elem.dataset.reset === "=") {
      if (!action) {
        inOutPut.current.innerHTML = error;
        setTimeout(() => {
          inOutPut.current.innerHTML = input;
        }, 1000);
        return;
      }

      let one = romanNumeralsDecimal(input1);
      let two = romanNumeralsDecimal(input2);
      calculate(one, two);
    }

    if (elem.dataset.reset === "C") {
      let removed = input.split("").pop()
      !action && removed !== action ? input1 = input1.slice(0, input1.length - 1) : input2 = input2.slice(0, input2.length - 1);
      !action ? input = `${input1}` : input = `${input1}${action}${input2}`;
      if (removed === action) {
        action = "";
      }

      !action ? checkInput(input1) : checkInput(input2);
      inOutPut.current.innerHTML = input;
    }

    if (elem.dataset.reset === "reset") {
      inOutPut.current.innerHTML = "";
      input1 = "";
      input2 = "";
      action = "";
    }

    if (input2) {
      calc.current.classList.add("active")
      cal = true;
    } else {
      calc.current.classList.remove("active")
      cal = false;
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Roman Numerals</h1>
      </header>
      <section className="calculator">
        <div className="box">
          <div className="screen" ref={display}>
            <h1 ref={inOutPut}></h1>
          </div>
          <div className="keyboard">
            <div className="controlls-container">
              <button className="controll one active" data-reset="reset" onClick={(e) => handleClick(e.target)}>reset</button>
              <button className="controll two active" data-reset="C" onClick={(e) => handleClick(e.target)}>C</button>
              <button className="controll tree" data-reset="=" ref={calc} onClick={(e) => {
                if (cal) {
                  handleClick(e.target);
                }
              }}>=</button>
            </div>
            <div className="values-container">
              <div className="values">
                <button className="val-item active" data-values="value" onClick={(e) => handleClick(e.target)}>C</button>
                <button className="val-item active" data-values="value" onClick={(e) => handleClick(e.target)}>D</button>
                <button className="val-item active" data-values="value" onClick={(e) => handleClick(e.target)}>M</button>
                <button className="val-item active" data-values="value" onClick={(e) => handleClick(e.target)}>V</button>
                <button className="val-item active" data-values="value" onClick={(e) => handleClick(e.target)}>X</button>
                <button className="val-item active" data-values="value" onClick={(e) => handleClick(e.target)}>L</button>
                <button className="val-item active" data-values="value" onClick={(e) => handleClick(e.target)}>I</button>
                <button className="val-item">.</button>
                <button className="val-item">S</button>
              </div>
              <div className="calc-controlls-container">
                <button className="calc-item"></button>
                <button className="calc-item"></button>
                <button className="calc-item active" data-action="action" onClick={(e) => handleClick(e.target)}>+</button>
                <button className="calc-item active" data-action="action" onClick={(e) => handleClick(e.target)}>x</button>
                <button className="calc-item active" data-action="action" onClick={(e) => handleClick(e.target)}>-</button>
                <button className="calc-item active" data-action="action" onClick={(e) => handleClick(e.target)}>/</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer>
        <p> Design by: <a href="https://dribbble.com/shots/6487156-Lifelimitsart-058-Calculator-Update">Erik</a>
        </p>
      </footer>
    </div>
  );
}

export default App;
