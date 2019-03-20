import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ConnectedButton } from './myButton'
import { ShownOrHiddenMyNewComponent } from './myNewComponent'

const App = (props) => {

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>This is edited.</p>
                <ConnectedButton />
                <ShownOrHiddenMyNewComponent />
            </header>
        </div>
    );
};

export default App;
