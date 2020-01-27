
import React from 'react';
import Button from './Button';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

configure({adapter: new Adapter()});

describe('Button', () => {
    describe('Rendering', () => {
        it('should match to snapshot', () => {
            const component = shallow(<Button label="test label" />)
            expect(component).toMatchSnapshot()
        });
    });
});