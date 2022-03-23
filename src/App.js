import logo from './logo.svg';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Editar <code>src/App.js</code> para mostrar cambios en esta pagina de inicio.
        </p>
        <button>Un botón</button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Curso React CHouse
        </a>
      </header>
    </div>
  );
}

export default App;
