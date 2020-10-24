import React, {useState} from 'react';
import '../styles.css';

function App2 () {
    const [count, setCount] = useState(0);
    const array = [1,2,3,4,5];
    const test = () => {
        const newCount = count + 1;
        setCount(newCount);
    };
    return (
        <>
            Count: {count}
            {array.map((element, index) => 
            <section className='card'>
                App 2! {element}
                <button onClick={test}>+</button>
            </section>)}
        </>
    )
}

export default App2;