import { shallow } from 'enzyme';
import React from "react";
import App from './App';
import Notification from '../Notifications/Notifications'
import Header from '../Header/Header'
import Login from '../Login/Login'
import Footer from '../Footer/Footer'


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
    it(' if it Contains the Notification component', ()=>{
        shallow(<Notification />)
    });
    it(' if it Contains the Header component', ()=>{
        shallow(<Header />)
    });
    it(' if it Contains the Login component', ()=>{
        shallow(<Login />)
    });
    it(' if it Contains the Footer component', ()=>{
        shallow(<Footer />)
    });

}); 