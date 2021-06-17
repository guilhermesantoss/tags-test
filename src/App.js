import BUTTON from './components/Button';

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Código cagado */}
      <header className="App-cagado">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <a
          className="App-link-node"
          href="https://nodejs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Node.js
        </a>
        <br />
        <BUTTON 
          type="submit"
          nome="guilhermesantoss"
        />
        <br />
        <BUTTON 
          type="button"
          nome="FernandoLucius"
        />
      </header>
    </div>
  );
}

export default App;
