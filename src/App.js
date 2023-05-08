import logo from './logo.svg';
import './App.css';
import HolaMundo from './components/HolaMundo';
import Saludar from './components/Saludar';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <Saludar name='CARLOS CUPUL'></Saludar>
        <Saludar name='jajaj'></Saludar>

      </header>
    </div>
  );
}

export default App;
