import { shallow } from 'enzyme';
import React from "react";
import App from './App';

describe("test App", () => {
    //test that App renders without crashing
    it("renders without crashing", () => {
        shallow(<App />);
    });
    const wrapper = shallow(<App />);
    
    //checks  App renders a div with the class App-body
    it("checks App renders a div with the class App-body", () => {
        expect(wrapper.find('div.App-body').exists()).toEqual(true);
    });
    //checks that App renders a div with the class App-footer
    it("checks that App renders a div with the class App-footer", () => {
        expect(wrapper.find('div.App-footer').exists()).toEqual(true);
    });
}); 