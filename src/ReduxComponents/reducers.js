import {increment, decrement} from './actions';

export function counter (state = 0, action) {
    switch(action.type) {
        case increment.type:
            return state + 1;
        case decrement.type:
            return state - 1;
        default: 
            return state;
    }
}