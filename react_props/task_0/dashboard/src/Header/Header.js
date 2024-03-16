import React from 'react';
import logo from '../holberton-logo.jpg';

function Header() {
  return (
    <div className="App-header">
      <img src={logo} alt="logo" />
      <h1>School dashboard</h1>
    </div>
  );
}

export default Header;
