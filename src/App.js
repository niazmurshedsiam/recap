import './App.css';
import { useState } from 'react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <Nayok name="Shuvo"></Nayok>
        <Nayok name="Siam"></Nayok>
        <Nayok name="Sakib"></Nayok>
        <MovieCounter></MovieCounter>
        <Product></Product>
        
      </header>
    </div>
  );
}
function MovieCounter(){
  const [count,setCount] = useState(0);
  const handleClick = ()=> setCount(count + 1);
  
  // console.log(count,setCount);
  return(
    <div>
      <button onClick={handleClick}>Add Movie</button>
      <h1>Nunber of movie : {count}</h1>
      <Display display={count}></Display>
    </div>
  )
}
function Display(props){
  return(
    <h1>Display : {props.display}</h1>
  )
}


function Product(){
  const [count,setCount] = useState(0);
  const handleAddProduct = () => setCount(count + 1);
  const handleSubProduct = () => setCount(count - 1);

  return(
    <div>
      <button onClick={handleAddProduct}>Add Product</button>
      <button onClick={handleSubProduct}>Sub Product</button>
      <h1>Number of Product : {count}</h1>
      
    </div>
  )
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
