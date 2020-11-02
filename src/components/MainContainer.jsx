import React, {useState} from 'react';
import App from '../ReduxComponents/App.jsx'
// import App from './App.jsx'
// import App2 from './App2.jsx'
// import ItemsAndGroups from './ItemsAndGroups'
import '../styles.css';

function MainContainer () {
    let app = <App />;
    return (
        <>
            {app}
        </>
    )
}

export default MainContainer;