import React from 'react';

// the component I want to show or hide
import {connect} from "react-redux";

export const MyNewComponent = (props) => {
    return props.show ? <p>this is a thing</p> : null;
};

// convert state from redux to props for the component we want to alter
export const mapStateToProps = (state) => {
    return {
        show: state.shown
    }
};

export const ShownOrHiddenMyNewComponent = connect(mapStateToProps)(MyNewComponent);