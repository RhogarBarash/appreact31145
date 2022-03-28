import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar.js';

const App = () => {
  const styles = {
    color: 'yellow',    
    fontSize: '70px'
  }
  return (
    
    <div className="App">
      <header className="App-header">
        <NavBar />
        <img src={logo} className="App-logo" alt="logo" />
        <h1 style={styles} className="Titulo">Bienvenidos a este proyecto de React</h1>         
        <button>Un botón</button>        
      </header>
    </div>
  );
}

export default App;
