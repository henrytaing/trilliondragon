// import {increment, decrement} from './actions';
// import {createReducer} from '@reduxjs/toolkit';

// Regular Redux
// export function counter (state = 0, action) {
//     switch(action.type) {
//         case increment.type:
//             return state + 1;
//         case decrement.type:
//             return state - 1;
//         default: 
//             return state;
//     }
// }

// Redux Toolkit
// export const counter = createReducer(0, {
//     [increment.type]: state => state + 1,
//     [decrement.type]: state => state - 1
// })