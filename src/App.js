// import logo from './logo.svg';
import React, {useState} from 'react';
import './App.css';
import Btn from './components/Btns';
import Footer from './components/Footer';
import Intro1 from './components/Intro1';
import Nav from './components/nav';
import Promo from './components/Promo';
import Intro from './Intro';
import ModeTogle from './ModeTogler';


function App() {
  const [count, setCount] = useState(0);
  function handleClick(){
    setCount(count + 1);
  }
  return (
    <div>
      <div><Nav /></div>
      <div><Promo /></div>
      <div><Intro1 name="John" textColor="purple" text="Hello world recieved from props"/></div>
<div className='flex-item'>
      <div><Intro color="#eeeeff" compHeading="Why I love front-end web development" compText="In this blog post, I'll list 10 reasons why I love to work as a front-end developer." /></div>

      <div><Intro compHeading="What's the best way to style your React apps?" compText="There are so many options to choose from. Here's a high-level overview of the popular ones." /></div>

      <div><Intro compHeading="What's the best way to style your React apps?" compText="There are so many options to choose from. Here's a high-level overview of the popular ones." /></div>

      <div><Intro color="#eeeeff" compHeading="Why I love front-end web development" compText="In this blog post, I'll list 10 reasons why I love to work as a front-end developer." /></div>
</div>
  <div>
    <h5>Count: {count}</h5>
    <Btn onClick={handleClick} lable="Click this button"/>
  </div>
    <br />
    <ModeTogle />
      <div><Footer /></div>

       
    </div>
   
  )
}

export default App;
