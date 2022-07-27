import React from 'react'

function NotificationItem(prop) {
  if (prop.value) return (<li onClick={() => markAsRead(props.id)} data-notification-type={prop.type}>{prop.value}</li>);
  else return (<li onClick={() => markAsRead(props.id)} data-notification-type={prop.type} dangerouslySetInnerHTML={prop.html}></li>);
}

export default NotificationItem;
