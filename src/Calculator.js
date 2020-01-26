import React, { useState } from 'react';
import romanNumeralsDecimal from './RomanToDecimal'
import decimalRoman from './DecimalToRoman'
import deleteIcon from './images/delete.png'

function Calculator() {
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
    let errorMsg = "wrong input";
    let error = false;

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
            setResult(errorMsg);
        if (result < 4000 && result > 0) {
            setLeftNum(decimalRoman(result));
        } else {
            setLeftNum("");
        }
        setRightNum("");
        setOperationSign({
            label: "",
            value: ""
        });
    }

    const checkInput = () => {
        let isCorrect = (romanNumeralsDecimal(leftNum) === Number(romanNumeralsDecimal(leftNum)));
        if (rightNum) {
            isCorrect = (romanNumeralsDecimal(leftNum) === Number(romanNumeralsDecimal(leftNum))) &&
                (romanNumeralsDecimal(rightNum) === Number(romanNumeralsDecimal(rightNum)));
        }
        error = !isCorrect;
        return isCorrect;
    }

    const handleClick = (elem) => {
        if (result) {
            resetResult();
        }
        if (!operationSign.value) {
            let leftNumTemp = leftNum + elem.val;
            setLeftNum(leftNumTemp);
        } else {
            let rightNumTemp = rightNum + elem.val;
            setRightNum(rightNumTemp);
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

    const resetResult = () => {
        setResult("");
    }

    return (
        <section className="calculator" data-testid="calculator">
            <div className="box">
                <div className={`screen ${leftNum && (checkInput() ? `` : `error`)}`}>
                    <h1 dangerouslySetInnerHTML={
                        { __html: `${!result ? `${leftNum}${operationSign.label}${rightNum}` : result}` }
                    }></h1>
                </div>
                <div className="keyboard">
                    <div className="controls-container">
                        <button className="control one" onClick={reset}>reset</button>
                        <button className="control two img-container"><img src={deleteIcon} onClick={backspace} /></button>
                        <button className={`control tree`} disabled={!rightNum || error} onClick={(e) => {
                            if (rightNum && !error) {
                                calculate();
                            }
                        }}>=</button>
                    </div>
                    <div className="values-container">
                        <div className="values">
                            {romanLettersList.map((romanLetter) => {
                                return <button className="val-item" disabled={error} onClick={() => {
                                    handleClick(romanLetter);
                                }} key={romanLetter.id}>{romanLetter.val}</button>
                            })}
                            <button className="val-item" disabled={error}>.</button>
                            <button className="val-item" disabled={error}>S</button>
                        </div>
                        <div className="calc-controls-container">
                            <button className="calc-item"></button>
                            <button className="calc-item"></button>
                            {
                                operationsList.map((operation) => {
                                    return (
                                        <button className={`calc-item`} disabled={error || rightNum} onClick={() => {
                                            if (result) {
                                                resetResult();
                                            }
                                            if (leftNum && !rightNum) {
                                                setOperationSign(operation);
                                            }
                                        }}
                                            dangerouslySetInnerHTML={{ __html: operation.label }} key={operation.id}></button>)
                                })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Calculator;