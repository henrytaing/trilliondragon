import React, {useState} from 'react';
import '../styles.css';

function Calculator () {
    const [count, setCount] = useState(0);
    const buttons = ['AC', '+/-', '%', '÷', '7', '8', '9', 'x', '4', '5', '6', '-', '1', '2', '3', '+'
, '0', '.', '='];
    const createButton = (contents) => {
        if(contents === '0') return (
            <button className="calculator-button-0">{contents}</button>
        )
        return (
            <button className="calculator-button">{contents}</button>
        )
    }
    return (
        <>
            <div className="container">
                <span id="title">Calculator</span>
                <div class="calculator-container">
                    <div class="numbers-display">
                        
                    </div>
                    <div class="buttons-container">
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