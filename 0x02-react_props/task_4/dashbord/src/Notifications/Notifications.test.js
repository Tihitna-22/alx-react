import { shallow } from 'enzyme';
import React from "react";
import Notifications from './Notifications';


describe("test Notificacions", () => {
    //test that Notifications renders without crashing
    it("renders without crashing", () => {
        shallow(<Notifications />);
    });
    const wrapper = shallow(<Notifications />);
    //verify that Notifications renders three list items
    it("verify that Notifications renders three list items", () => {
        expect(wrapper.find('ul').children().length).toEqual(3);
    });
});
//verify that Notifications renders the text Here is the list of notifications
it("verify that Notifications renders the text Here is the list of notifications", () => {
    expect(wrapper.containsMatchingElement(<p>Here is the list of notifications</p>)).toEqual(true);
});
describe("Test Suite displayDrawer is false", () => {
    const wrapper = shallow(<Notifications displayDrawer={false} />);
    it("check that the menu item is being displayed when displayDrawer is false", () => {
        const menuItem = wrapper.find('.menuItem');
        expect(menuItem.length).toEqual(1);
        expect(wrapper.exists());
    });

    it("check that the div.Notifications is not being displayed when displayDrawer is false", () => {
        expect(wrapper.find('div.Notifications').length).toEqual(0);

    });
});

describe("Test Suite displayDrawer is true", () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    it("check that the menu item is being displayed when displayDrawer is true", () => {
        const menuItem = wrapper.find('.menuItem');
        expect(menuItem.length).toEqual(1);
        expect(wrapper.exists());
    });

    it("check that the div.Notifications is being displayed when displayDrawer is true", () => {
        expect(wrapper.find('div.Notifications').length).toEqual(1);

    });

}); 