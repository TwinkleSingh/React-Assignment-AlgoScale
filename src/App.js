// import logo from './logo.svg';
import './App.css';
import Login from './Login';

function App() {
  return (
    <div>
      <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}
        <a
          className="App-link"
          // href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Login/>
        </a>
      </header>
    </div>
    {/* <div>
      <Login/>
    </div> */}
    </div>
    
  );
}

export default App;
