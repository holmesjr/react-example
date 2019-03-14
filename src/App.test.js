import React from 'react';
import {mapStateToProps, MyNewComponent} from './App';

describe('MyNewComponent', () => {

    let props;
    let result;

    beforeEach(() => {
        result = MyNewComponent(props);
    });

    describe('When shown ', () => {

        beforeAll(()=>{
            props = { show: true };
        });

        it('displays a paragraph', () => {
            expect(result).toEqual(<p>this is a thing</p>);
        });

    });

    describe('When hidden ', () => {

        beforeAll(()=>{
            props = { show: false };
        });

        it('returns null', () => {
            expect(result).toBeNull();
        });

    });

});

describe('mapStateToProps', () => {

    const result = mapStateToProps({ shown: "SOME_BOOLEAN_HERE"});

    it('maps the shown state to the show prop ', () => {
        expect(result).toEqual({ show: "SOME_BOOLEAN_HERE" });
    });

});
