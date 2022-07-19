import { shallow } from 'enzyme';
import React from "react";
import Header from './Header';

describe("test Header", () => {
    it("renders without crashing", () => {
        shallow(<Header />);
    });
    const wrapper = shallow(<Header />);
  
    // Verify that the components render img and h1 tags
    it("Verify that the components render img tag", ()=>{
        expect(wrapper.find('img').exists()).toEqual(true);
        expect(wrapper.find('h1').exists()).toEqual(true);
    })

}); 