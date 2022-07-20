import React from 'react';
// import { getLatestNotification }  from '../utils/utils'



export function NotificationItem({type, html, value}){
        if (html === undefined)
            return (
                <li data-priority={type}>
                    {value}
                </li>
            );
        return (
                <li data-priority={type} dangerouslySetInnerHTML={html}></li>
            );
    };

export default NotificationItem;