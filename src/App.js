import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Nayok name="Shuvo"></Nayok>
        <Nayok name="Siam"></Nayok>
        <Nayok name="Sakib"></Nayok>
      </header>
    </div>
  );
}
function Nayok(props) {
  console.log(props);
  return (
    <div>
      <h1>Ami Nayok {props.name}</h1>
      <p>I have done 5 movie</p>
    </div>
  );
  
}

export default App;
