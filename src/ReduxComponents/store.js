import {configureStore} from '@reduxjs/toolkit';
import {counter} from './reducers';

export const store = configureStore({
    reducer: counter
})