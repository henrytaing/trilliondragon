import React, {useState} from 'react';
import '../styles.css';

function Calculator () {
    const [number, setNumber] = useState('0');
    const buttons = ['AC', '+/-', '%', '÷', '7', '8', '9', 'x', '4', 
                    '5', '6', '-', '1', '2', '3', '+', '0', '.', '='];
    const updateNum = (symbol) => {
        if(number === '0' && !Number.isNaN(Number(symbol))) setNumber(symbol);
        else {
            switch(symbol) {
                case 'AC':
                    setNumber('0');
                    break;
                case '+/-':
                    if(number[0] === '-') {
                        const newNum = number.slice().split('');
                        newNum.shift();
                        setNumber(newNum.join(''));
                        break;
                    }
                    const newNum = number.slice().split('');
                    newNum.unshift('-');
                    setNumber(newNum.join(''));
                    break;
                case '%':
                    setNumber(number / 100);
                    break;
                default:
                    setNumber(number + symbol);
            }
        }
    }
    const createButton = (contents) => {
        const orange =  <button className="calculator-button-orange" onClick={() => updateNum(contents)}>{contents}</button>
        const lightgray = <button className="calculator-button-lightgray" onClick={() => updateNum(contents)}>{contents}</button>
        switch(contents) {
            case '0':
                return (
                    <button className="calculator-button-0" onClick={() => updateNum(contents)}>{contents}</button>
                );
            case '÷':
                return orange;
            case 'x':
                return orange;
            case '-':
                return orange;
            case '+':
                return orange;
            case '=':
                return orange;
            case 'AC':
                return lightgray;
            case '+/-':
                return lightgray;
            case '%':
                return lightgray;
            default: 
                return (
                    <button className="calculator-button" onClick={() => updateNum(contents)}>{contents}</button>
                )
        }
    }
    return (
        <>
            <div className="container">
                <span id="title">Calculator</span>
                <div className="calculator-container">
                    <div className="numbers-display">
                        <span id="number">{number}</span>
                    </div>
                    <div className="buttons-container">
                        {buttons.map(button => {
                            return createButton(button);
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Calculator;