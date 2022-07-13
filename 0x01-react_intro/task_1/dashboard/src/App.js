import logo from './175b85183ecedb529e14.jpg';
import './App.css';
import {getFullYear, getFooterCopy} from './utils'

function App() {
  return (
    <div className='App'>
      <header className="App-header">
        <img src={logo} alt="">
        </img>
        <hl>
          School dashboard
        </hl>
      </header>
      <body class="App-body">
        <p>
          Login to access the full dashboard
        </p>
      </body>
      <footer className='App-footer'>
        <p>
          Copyright {getFullYear()} - {getFooterCopy()}
        </p>
      </footer>

    </div>

  );
}

export default App;
