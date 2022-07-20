import './App.css';
import Login from '../Login/Login'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Notifications from '../Notifications/Notifications';
import React from 'react';
import CourseList from '../CourseList/CourseList';


function App() {
  var logged = (!isLoggedIn) ? <Login /> : <CourseList />;

  return (
    <div>
      <Notifications />
      <div className="App">
        <Header />
        <div className="App-body">
          {/* {logged} */}
        </div>
        <div className="App-footer">
          <Footer />
        </div>

      </div>
    </div>

  );
}

export default App;