// import logo from './logo.svg';
import React, {useState} from 'react';
import './App.css';
import Btn from './components/Btns';
import Footer from './components/Footer';
import Nav from './components/nav';

function App() {
  const [count, setCount] = useState(0);
  function handleClick(){
    setCount(count + 1);
  }
  return (
    <div>
        <div>
          <Nav /> 
        </div>

        <div>
          <h5>Count: {count}</h5>
          <Btn onClick={handleClick} lable="Click this button"/>
        </div>

        <div><Footer /></div>

    </div>
   
  )
}

export default App;
