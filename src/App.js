import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Nayok></Nayok>
      </header>
    </div>
  );
}
function Nayok() {
  return <h1>Hello</h1>
  
}

export default App;
