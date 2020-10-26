import React, {useState} from 'react';
import App from './App.jsx'
import App2 from './App2.jsx'
import ItemsAndGroups from './ItemsAndGroups'
import '../styles.css';

function MainContainer () {
    let app = <ItemsAndGroups />;
    // app = (Math.floor(Math.random() * 99) % 2 === 0) ? <App /> : <App2 />
    return (
        <>
            {app}
        </>
    )
}

export default MainContainer;