import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Notifications from './Notifications';
import reportWebVitals from './reportWebVitals';

// Create a root to render the application
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render App and Notifications components in root
root.render(
  <React.StrictMode>
    <Notifications />
    <App />
  </React.StrictMode>
);

reportWebVitals(); // Report web metrics
