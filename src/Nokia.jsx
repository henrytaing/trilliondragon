import React, {useState} from 'react';
import '../src/styles.css';

function Nokia () {
    const map = {
        2 : 'abc',
        3: 'def',
        4: 'ghi',
        5: 'jkl',
        6: 'mno',
        7: 'pqrs',
        8: 'tuv',
        9: 'wxyz'
      };
    const numbers = [1,2,3,4,5,6,7,8,9];
    const [text, setText] = useState('');
    const [currentNumber, setCurrentNumber] = useState(0);
    const [currentLetter, setCurrentLetter] = useState('');
    const [timesClicked, setTimesClicked] = useState(0);
    const [lastClicked, setLastClicked] = useState(null);
    const whichLetter = (clickedNum) => {
        if(clickedNum === currentNumber && Date.now() - lastClicked < 2500) {
            setLastClicked(Date.now());
            setCurrentLetter(map[clickedNum][timesClicked % 3])
            setTimesClicked(timesClicked + 1);
        } else {
            setText(text + currentLetter);
            setLastClicked(Date.now());
            setCurrentLetter(map[clickedNum][0]);
            setTimesClicked(1);
            setCurrentNumber(clickedNum);
        }
    }
    const updateText = (num) => {
        switch(num) {
            case 1:
                const newText = text.split('');
                newText.pop();
                setText(newText.join(''));
                break;
            default:
                whichLetter(num);
                break;
        }
    }
    return (
        <>
            <div className="container">
                <span>Current Letter: {currentLetter}</span>
                <div className="text">Text: {text}</div>
                {numbers.map(number => {
                    return <button onClick={() => updateText(number)}>{number}</button>
                })}
            </div>
        </>
    )
}

export default Nokia;