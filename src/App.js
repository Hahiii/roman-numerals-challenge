import React, { useRef, useState } from 'react';
import './App.css';
import romanNumeralsDecimal from './RomanToDecimal'
import decimalRoman from './DecimalToRoman'
import deleteIcon from './images/delete.png'


function App() {
  const romanLettersList = [
    {
      id: 1,
      val: 'C'
    },
    {
      id: 2,
      val: 'D'
    },
    {
      id: 3,
      val: 'M'
    },
    {
      id: 4,
      val: 'V'
    },
    {
      id: 5,
      val: 'X'
    },
    {
      id: 6,
      val: 'L'
    },
    {
      id: 7,
      val: 'I'
    }
  ];
  const operationsList = [
    {
      id: 1,
      label: "&#43;",
      value: "add"
    },
    {
      id: 2,
      label: "&#8722;",
      value: "subtract"
    },
    {
      id: 3,
      label: "&#215;",
      value: "multiplication"
    },
    {
      id: 4,
      label: "&#247;",
      value: "division"
    }
  ];
  let [result, setResult] = useState('');
  let [leftNum, setLeftNum] = useState('');
  let [rightNum, setRightNum] = useState('');
  let [operationSign, setOperationSign] = useState({
    label: "",
    value: ""
  });
  let error = "wrong input";
  let inOutPut = useRef();
  let display = useRef();

  const calculate = () => {
    let leftNumDecimal = romanNumeralsDecimal(leftNum);
    let rightNumDecimal = romanNumeralsDecimal(rightNum);

    let result = 0;
    switch (operationSign.value) {
      case "add":
        result = leftNumDecimal + rightNumDecimal;
        break;
      case "subtract":
        result = leftNumDecimal - rightNumDecimal;
        break;
      case "multiplication":
        result = leftNumDecimal * rightNumDecimal;
        break;
      case "division":
        result = leftNumDecimal / rightNumDecimal;
        break;
    }

    decimalRoman(result) && result < 4000 && result > 0 ?
      setResult(decimalRoman(result)) :
      setResult(error);
    setLeftNum("");
    setRightNum("");
    setOperationSign({
      label: "",
      value: ""
    });
  }

  //-------- still to fix
  const checkInput = (arg) => {
    if (leftNum) {
      if (romanNumeralsDecimal(arg) === Number(romanNumeralsDecimal(arg))) {
        display.current.classList.remove("error");
        display.current.classList.add("right");
      } else {
        display.current.classList.remove("right");
        display.current.classList.add("error");
      }
    }
  }
//--------- 
  const handleClick = (elem) => {
    if (result) {
      setResult("");
    }
    if (!operationSign.value) {
      setLeftNum(leftNum + elem.val);
      checkInput(leftNum)
    } else {
      setRightNum(rightNum + elem.val);
      checkInput(rightNum);
    }
  }

  const backspace = () => {
    if (leftNum && !operationSign.label) {
      setLeftNum(leftNum.slice(0, leftNum.length - 1));
    }
    if (operationSign.label && !rightNum) {
      setOperationSign({
        label: "",
        value: ""
      });
    }
    if (rightNum) {
      setRightNum(rightNum.slice(0, rightNum.length - 1));
    }
  }

  const reset = () => {
    setLeftNum('');
    setRightNum('');
    setResult("");
    setOperationSign({
      label: "",
      value: ""
    });
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Roman Numerals</h1>
      </header>
      <section className="calculator" data-testid="calculator">
        <div className="box">
          <div className="screen" ref={display}>
            <h1 ref={inOutPut} dangerouslySetInnerHTML={
              { __html: `${!result ? `${leftNum}${operationSign.label}${rightNum}` : result}` }
            }></h1>
          </div>
          <div className="keyboard">
            <div className="controls-container">
              <button className="control one active" onClick={reset}>reset</button>
              <button className="control two active img-container"><img src={deleteIcon} onClick={backspace} /></button>
              <button className={`control tree ${rightNum ? "active" : ""}`} onClick={(e) => {
                if (rightNum) {
                  calculate();
                }
              }}>=</button>
            </div>
            <div className="values-container">
              <div className="values">
                {romanLettersList.map((romanLetter) => {
                  return <button className="val-item active" onClick={() => {
                    handleClick(romanLetter)
                  }} key={romanLetter.id}>{romanLetter.val}</button>
                })}
                <button className="val-item">.</button>
                <button className="val-item">S</button>
              </div>
              <div className="calc-controls-container">
                <button className="calc-item"></button>
                <button className="calc-item"></button>
                {
                  operationsList.map((operation) => {
                    return (
                      <button className={`calc-item ${leftNum ? "active" : ""}`} onClick={() => {
                        setOperationSign(operation);
                        if (result) {
                          setLeftNum(result);
                          setResult("");
                        }
                      }}
                        dangerouslySetInnerHTML={{ __html: operation.label }} key={operation.id}></button>)
                  })}
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer>
        <p>
          Design by: <a href="https://dribbble.com/shots/6487156-Lifelimitsart-058-Calculator-Update" target="_blank" rel="noopener noreferrer">Erik</a>
        </p>
      </footer>
    </div >
  );
}

export default App;
