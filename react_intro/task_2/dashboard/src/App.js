import HolbertonLogo from './Holberton_Logo.jpg';
import './App.css';
import { getFullYear, getFooterCopy } from './utils';

function App() {
  const isIndex = true;

  const selectInput = (id) => {
    document.getElementById(id).focus(); // Function to focus the input when clicking on the label
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={HolbertonLogo} alt="Holberton-logo" />
        <h1>School dashboard</h1>
      </header>
      <div className="App-body">
        <p>Login to access the full dashboard</p>
        {/* Add input and label for the email */}
        <label htmlFor="email" onClick={() => selectInput('email')}>Email</label>
        <input type="email" id="email" />

        {/* Add input and label for password */}
        <label htmlFor="password" onClick={() => selectInput('password')}>Password</label>
        <input type="password" id="password" />

        {/* Add the "OK" button */}
        <button>OK</button>
      </div>
      <footer className="App-footer">
        <p>Copyright { getFullYear()} - {getFooterCopy('isIndex')}</p>
      </footer>
    </div>
  );
}

export default App;

