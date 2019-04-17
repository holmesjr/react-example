import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ConnectedButton } from './myButton'
import { ShownOrHiddenMyNewComponent } from './myNewComponent'
import SimpleRadialChart from './donut'
import SimpleRadialChart2 from './donut-old'

const App = (props) => {

    const chartV = {
        angle: 0.6731984257692414,
        angle0: 1.5707963267948966,
        className: "custom-class",
        color: 4,
        radius: 1,
        radius0: 0,
        theta: 2,
        x: 0.7818314824680298,
        y: 0.6234898018587335
    };

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>This is edited.</p>
                <ConnectedButton />
                <ShownOrHiddenMyNewComponent />
                <SimpleRadialChart value={chartV} />
                <SimpleRadialChart2 />
            </header>
        </div>
    );
};

export default App;
