import React, {useState} from 'react';
// import App from '../ReduxComponents/App.jsx'
// import {Provider} from 'react-redux'
// import {store} from '../ReduxComponents/counterSlice'; 
// import App from './App.jsx'
// import App2 from './App2.jsx'
// import ItemsAndGroups from './ItemsAndGroups'
import Calculator from './Calculator'
import '../styles.css';

function MainContainer () {
    let app = <Calculator />;
    return (
        <>
            {/* <Provider store={store}> */}
            {app}
            {/* </Provider> */}
        </>
    )
}

export default MainContainer;