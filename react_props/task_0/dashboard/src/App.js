import './App.css';
import React from 'react';
import Notifications from './Notifications';
import Login from './Login';
import Footer from './Footer';
import Header from './Header';

function App() {
  return (
    <React.Fragment>
      <Notifications />
      <div className="App">
        <Header />
        <div className="App-body">
          <Login />
        </div>
        <div className="App-footer">
          <Footer />
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
