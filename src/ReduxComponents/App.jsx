import React, {useState} from 'react';
import '../styles.css';
// import {increment, decrement} from './actions'
import {counterSlice} from './counterSlice'
import {store} from './store'

function App () {
    const incrementCount = () => {
        store.dispatch(counterSlice.actions.increment());
    }
    const decrementCount = () => {
        store.dispatch(counterSlice.actions.decrement());
    }
    return (
        <>
            <span>Character count: </span> 
            <button onClick={incrementCount}>Increment</button>
            <button onClick={decrementCount}>Decrement</button>
        </>
    )
}

export default App;