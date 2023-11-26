import React from 'react';
import closeIcon from '../assets/close-icon.png'; // Importing the close icon image
import { getLatestNotification } from '../utils'; // Importing a utility function
import NotificationItem from './NotificationItem'; // Importing the NotificationItem component

function Notifications() {
  // Array containing notification objects
  const notifications = [
    { type: 'default', html: null, value: 'New course available' }, // Notification with type and value
    { type: 'urgent', html: null, value: 'New resume available' }, // Notification with type and value
    { type: 'urgent', html: { __html: getLatestNotification() }, value: '' }, // Notification with HTML content
  ];

  // Function to handle the click event on the close button
  const handleClick = () => {
    console.log('Close button has been clicked');
  };

  return (
    <div className="Notifications">
      {/* Close button */}
      <button
        style={{
          position: 'absolute',
          top: '10px',
          right: '10px',
          backgroundColor: 'transparent',
          border: 'none',
        }}
        aria-label="Close"
        onClick={handleClick}
      >
        {/* Close icon */}
        <img
          src={closeIcon}
          alt="Close"
          style={{
            width: '10px',
            height: '10px',
          }}
        />
      </button>

      {/* Notification list heading */}
      <p>Here is the list of notifications</p>

      {/* Rendering the list of notifications */}
      <ul>
        {/* Mapping through notifications to render NotificationItem components */}
        {notifications.map((notification, index) => (
          <NotificationItem
            key={index}
            type={notification.type}
            html={notification.html}
            value={notification.value}
          />
        ))}
      </ul>
    </div>
  );
}

export default Notifications;
