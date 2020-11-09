import React, {useState} from 'react';
import '../styles.css';

function App () {
    const [count, setCount] = useState(0);
    return (
        <>
            Count: {count}
        </>
    )
}

export default App;