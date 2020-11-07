import React, {useState} from 'react';
import {connect} from 'react-redux';
import {increment, decrement} from './counterSlice'
import '../styles.css';

function App ({onIncrement, onDecrement, counter}) {
    return (
        <>
            <span>Character count: {counter}</span> 
            <button onClick={onIncrement}>Increment</button>
            <button onClick={onDecrement}>Decrement</button>
        </>
    )
}

function mapStateToProps(state) {
    return { counter: state }
}

function mapDispatchToProps(dispatch, ownProps) {
    return {
        onIncrement: () => { dispatch(increment())},
        onDecrement: () => { dispatch(decrement())}
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);