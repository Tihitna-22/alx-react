import React from 'react';
import { shallow, mount } from 'enzyme';
import WithLogging from './WithLogging';

describe('Test WithLogging.js', () => {
    it('console.log was called on mount and on unmount with Component when the wrapped element is pure html', (done) => {
        const WrapElement = WithLogging(() => <a></a>);
        console.log = jest.fn();
        const wrapper = mount(<WrapElement />);
        expect(console.log).toHaveBeenCalled();
        expect(console.log).toHaveBeenCalledWith('Component Component is mounted');

        wrapper.unmount();
        expect(console.log).toHaveBeenCalled();
        expect(console.log).toHaveBeenCalledWith('Component Component is going to unmount');
        done();
    });

});