import logo from './logo.svg';
import { Greeting } from './Greeting'
import './App.css';




function App() {


  let adjective = 'cool';
  let url = "https://reactjs.org";
  return (
    <div className="App">
      <header className="App-header">
        <Greeting/>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         This is so {adjective}!
        </p>
        
        <a
          className="App-link"
          href={url}
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
