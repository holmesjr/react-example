//the button that drives the component's visibility
import React from 'react';
import {connect} from "react-redux";

export const MyButton = (props) => {
    return <button onClick={props.buttonClicked}>
        Activate Lasers
    </button>;
};

export const mapDispatchToProps = (dispatch) => ({
    buttonClicked: () => dispatch({type: "BUTTON_CLICKED"})
});

export const ConnectedButton = connect(null, mapDispatchToProps)(MyButton);