import React from 'react';
import closeIcon from './close-icon.png'; // Import the image close-icon.png
import { getLatestNotification } from './utils'; // Import the getLatestNotification function

function Notifications() {
  // Function to be executed when the button is clicked
  const handleClick = () => {
    console.log('Close button has been clicked'); // Show message in console on click
  };

  return (
    <div className="Notifications">
      {/* Button with inline styles */}
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
        {/* Image on button */}
        <img 
          src={closeIcon}
          alt="Close"
          style={{
            width:'10px',
            height:'10px',
          }} 
        />
      </button>

      <p>Here is the list of notifications</p>

      {/* Notification list */}
      <ul>
        {/* First item in the list */}
        <li data-priority="default">New course available</li>
        {/* Second item on the list */}
        <li data-priority="urgent">New resume available</li>
        {/* Third item in the list showing the content of getLatestNotification */}
        <li data-priority="urgent" dangerouslySetInnerHTML={{ __html: getLatestNotification() }} />
      </ul>
    </div>
  );
}

export default Notifications;
