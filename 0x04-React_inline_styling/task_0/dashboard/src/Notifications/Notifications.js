import React from 'react';
import './Notifications.css';
import close_icon from '../assets/close-icon.png';
import { getLatestNotification } from '../utils/utils';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types'; // ES6
import NotificationItemShape from './NotificationItemShape';


export default class Notifications extends React.Component {
  constructor(probs) {
    super(probs)
    this.markAsRead = this.markAsRead.bind(this)
  }


  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`)
  }

  render() {

    const btnStyle = {
      top: '1em',
      right: '1em',
      background: 'transparent',
      border: 'none',
      display: 'flex',
      width: '100%',
      justifyContent: 'flex-end'
    };

    const imgStyle = {
      width: '20px',
      height: '20px',
    }



    return (
      <div className="notification-container">
        <div className="menuItem">Your notifications</div>
        {this.props.displayDrawer ?
          (<div className="Notifications">
            <button style={btnStyle} aria-label='Close' onClick={() => console.log('Close button has been clicked')}>
              <img src={close_icon} style={imgStyle} />
            </button>
            <p>Here is the list of notifications</p>
            <ul>
              {this.props.listNotifications.length === 0 ? (<NotificationItem value="No new notification for now" type='no-new' />) : <></>}
              {this.props.listNotifications.map((list) => (<NotificationItem key={list.id} type={list.type} value={list.value} html={list.html} markAsRead={this.props.markAsRead} />))}
            </ul>
          </div>)
          : <></>
        }
      </div>
    )
  }
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape)

};

Notifications.defaultProps = {
  displayDrawer: true,
  listNotifications: []
};




// import PropTypes from 'prop-types'
// import React, { Component } from 'react'

// export default class Notifications extends Component {
//   static propTypes = {second: third}

//   render() {
//     return (
//       <div>Notifications</div>
//     )
//   }
// }
