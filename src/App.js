import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar.js';
import Button from './components/Button/Button.js';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.js';

const App = () => {  
  const styles = {
    color: 'yellow',    
    fontSize: '70px'
  }

  const myFunction = () =>{
    console.log('se ha hecho click en el boton')
  }

  return (
    
    <div className="App">
      <ItemListContainer greeting={'Hola cliente'}/>     
      <header className="App-header">
        <NavBar/>        
        <img src={logo} className="App-logo" alt="logo" />
        <h1 style={styles} className="Titulo">Bienvenidos a este proyecto de React</h1>         
        <Button callbak={myFunction} Label="Un botón"/>        
      </header>
    </div>
  );
}

export default App;
