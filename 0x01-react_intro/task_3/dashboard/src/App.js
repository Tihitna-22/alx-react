import logo from './175b85183ecedb529e14.jpg';
import './App.css';

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
        <label for='email'>Email:</label>
        <input id='email' type='text'></input>
        <label for='password'>Password:</label>
        <input id='password' type='Password'></input>
        <button>OK</button>
      </body>
      <footer className='App-footer'>
        <p>
          Copyright 2020 - holberton School
        </p>
      </footer>

    </div>

  );
}

export default App;
