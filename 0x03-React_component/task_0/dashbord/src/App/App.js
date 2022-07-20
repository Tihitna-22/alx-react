import React from 'react';
import './App.css';
import Login from '../Login/Login'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Notifications from '../Notifications/Notifications';

import CourseList from '../CourseList/CourseList';

const listCourses = [
  { id: 1, name: 'ES6', credit: 60 },
  { id: 2, name: 'Webpack', credit: 20 },
  { id: 3, name: 'React', credit: 40 }
];
const listNotifications = [
  { id: 1, type: 'default', value: 'New course available' },
  { id: 2, type: 'urgent', value: 'New resume available' },
  { id: 3, type: 'urgent', html: { __html: '<strong>Urgent requirement</strong> - complete by EOD' } }
];

class App extends React.component {
  render() {

    var logged = (!isLoggedIn) ? <Login /> : <CourseList />;

    return (
      <React.Fragment>
        <Notifications listNotifications={listNotifications}></Notifications>
        <div className='App'>
          <Header></Header>
          {this.props.isLoggedIn ? <CourseList listCourses={listCourses} ></CourseList> : <Login></Login>}
          <Footer></Footer>
        </div>
      </React.Fragment>
    );
  }

}

App.propTypes = {
  isLoggedIn: PropTypes.bool
};

App.defaultProps = {
  isLoggedIn: false
};

export default App;