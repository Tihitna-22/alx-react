import { shallow } from "enzyme";
import Notifications from "./Notifications";

describe("Test Suite - <Notifications />", () => {
  it("Test 1 Renders", () => {
    const wrapper = shallow(<Notifications />);
    // eslint-disable-next-line jest/valid-expect
    expect(wrapper.exists());
  });
  it("Test 2 renders three list items", () => {
    const wrapper = shallow(<Notifications />);
    wrapper.update();
    expect(wrapper.find("li")).toHaveLength(3);
  });
  it("Test 3 renders the text Here is the list of notifications", () => {
    const text = "Here is the list of notifications";
    const wrapper = shallow(<Notifications />);
    wrapper.update();
    expect(wrapper.find(".Notifications p").text()).toEqual(text);
  });
});