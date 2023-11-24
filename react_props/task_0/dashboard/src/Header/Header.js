import React from 'react';
import './Header.css';
import HolbertonLogo from '../Holberton_Logo.jpg';

const Header = () => {
  return (
    <header className="App-header">
      <img src={HolbertonLogo} alt="Holberton-logo" />
      <h1>School dashboard</h1>
    </header>
  );
};

export default Header;
