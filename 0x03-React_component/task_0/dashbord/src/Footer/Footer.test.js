import { shallow } from "enzyme";
import React from "react";
import Footer from "./Footer";

describe("<Footer />", () => {
  const wrapper = shallow(<Footer />);
  it("Footer renders without crashing", () => {
    
    expect(wrapper.exists());

  });
  // Verify that the components at the very least render the text “Copyright”
  it("Verify that the components at the very least render the text “Copyright”", ()=>{
    expect(wrapper.text().substring(0,9)).toBe('Copyright');
  })
});