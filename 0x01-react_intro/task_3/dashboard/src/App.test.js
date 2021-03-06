import { shallow } from "enzyme";
import App from "./App";

describe("<App />", () => {
  it("Test 1 Renders App", () => {
    const wrapper = shallow(<App />);
    // eslint-disable-next-line jest/valid-expect
    expect(wrapper.exists());
  });
  it("Test 2 Renders App-header", () => {
    const wrapper = shallow(<App />);
    wrapper.update();
    expect(wrapper.find("div.App-header")).toHaveLength(1);
  });
  it("Test 3 Renders App-body", () => {
    const wrapper = shallow(<App />);
    wrapper.update();
    expect(wrapper.find("div.App-body")).toHaveLength(1);
  });
  it("Test 4 Renders App-footer", () => {
    const wrapper = shallow(<App />);
    wrapper.update();
    expect(wrapper.find("div.App-footer")).toHaveLength(1);
  });
});