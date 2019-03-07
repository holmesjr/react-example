import React from 'react';
import { connect } from 'react-redux'
import logo from './logo.svg';
import './App.css';


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
}

// the component I want to show or hide
const MyNewComponent = (props) => {
    return props.show ? <p>this is a thing</p> : null;
};

//the button that drives the component's visibility
const MyButton = (props) => {
    return <button onClick={e => {
        e.preventDefault();
        props.dispatch(show());
    }}>
        Activate Lasers
    </button>;
};

// convert state from redux to props for the component we want to alter
const mapStateToProps = state => {
    return {
        show: state.shown
    }
};

// the action creator
const show = () => {
    localStorage.setItem("shown", JSON.stringify(true));
    return { type: 'SHOW' }
}

const ShownOrHiddenMyNewComponent = connect(mapStateToProps)(MyNewComponent);
const ConnectedButton = connect()(MyButton);


export default App;
