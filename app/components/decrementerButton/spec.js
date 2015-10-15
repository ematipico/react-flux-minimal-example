import DecrementerButton from './main.jsx';
import ReactTestUtils from 'react/lib/ReactTestUtils';
import React from 'react';
import ReactDOM from 'react-dom';
var button;

describe("Testing the decrementer button component", () => {


    beforeEach(() => {
        button = ReactTestUtils.renderIntoDocument( <DecrementerButton />);
    })

    afterEach(() => {
        if (button) {
            // Only components with a parent will be unmounted
            ReactDOM.unmountComponentAtNode(ReactDOM.findDOMNode(button).parentNode);
        }
    });

    it("it exists", () => {
        expect(button).toBeTruthy();
    });

    it("renders the button tag", () => {
        var buttonTag = ReactTestUtils.findRenderedDOMComponentWithTag(button, "button");
        expect(ReactDOM.findDOMNode(buttonTag)).toBeTruthy();
    });
});
