import React from 'react';
import renderer from 'react-test-renderer';
import TodoTextEntry from '../TodoTextEntry';

describe('TodoTextEntry', () => {
    let component: any;

    //setup
    beforeEach(() => {
        component = (<TodoTextEntry value='' onChangeText={() => { }} onPressAddItem={() => { }} />);
    });

    it('should render component and match snapshot', () => {
        expect(component).toBeDefined();
        expect(component.toJSON()).toMatchSnapshot();
    });
});