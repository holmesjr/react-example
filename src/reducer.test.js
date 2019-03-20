import {theApp} from "./reducer";

describe('The reducer', () => {

    describe('when the app starts with no state', () => {

        const theInitialState = theApp(undefined, { type: undefined });

        it('hides the text', function () {
            expect(theInitialState).toEqual({ shown : false });
        });

    });

    describe('when there is state but no valid action', () => {

        const theCurrentState = { someOtherThing: 'fred' };
        const theInvalidAction = { type: null };
        const theRetainedState = theApp(theCurrentState, theInvalidAction);

        it('preserves the state', function () {
            expect(theRetainedState).toEqual({ someOtherThing: 'fred' });
        });

    });

    describe('when the SHOW action is dispatched', () => {

        describe('and the text is hidden', () => {

            const theCurrentState = { shown : false };
            const theAction = { type: "SHOW" };

            const theNewState = theApp(theCurrentState, theAction);

            it('shows the text', function () {
                expect(theNewState).toEqual({ shown : true });
            });
        });

        describe('and there is other state present', () => {
            const theCurrentState = { shown : false, someOtherThing: 'fred' };
            const theAction = { type: "SHOW" };

            const theNewState = theApp(theCurrentState, theAction);

            it('shows the text but leaves the other state alone', function () {
                expect(theNewState).toEqual({ shown : true, someOtherThing: 'fred' });
            });
        });

    });

});