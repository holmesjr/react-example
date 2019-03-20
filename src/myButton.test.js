import React from 'react';
import {mapDispatchToProps, MyButton} from "./myButton";
import 'jest';

describe('The button', () => {
    const props = { buttonClicked: () => {} }
    const result = MyButton(props);

    it('Renders the button', function () {
        expect(result).toEqual(<button onClick={props.buttonClicked}>
            Activate Lasers
        </button>);
    });
});

describe('mapDispatchToProps', () => {

    const dispatch = jest.fn();

    const result = mapDispatchToProps(dispatch);

    describe('when the button is clicked', () => {
        result.buttonClicked()

        it('dispatches the BUTTON_CLICKED event', () => {
            expect(dispatch).toBeCalledWith({type: "BUTTON_CLICKED"});
        });
    });

});
