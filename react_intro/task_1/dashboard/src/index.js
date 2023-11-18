import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Notifications from './Notifications';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// Render the Notifications component in a separate container
ReactDOM.render(
  <React.StrictMode>
    <Notifications />
  </React.StrictMode>,
  // Use a new container with the id 'root-notifications'
  document.getElementById('root-notifications')
);

reportWebVitals();
