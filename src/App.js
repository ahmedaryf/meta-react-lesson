// import logo from './logo.svg';
import React, {useState} from 'react';
import './App.css';
import Card from './Card';
import Btn from './components/Btns';
import DarkMode from './components/DarkMode';
import Footer from './components/Footer';
import InputComponent from './components/InputComponent';
import Intro1 from './components/Intro1';
import Nav from './components/nav';
import Profile from './components/Profile';
import Promo from './components/Promo';
import TestStateComponent from './components/TestStateComponent';
import TestTextComponent from './components/TestTextComponent';
import TimeComponent from './components/TimeComponent';
import WalletComponent from './components/WalletComponent';
import Intro from './Intro';
import ModeTogle from './ModeTogler';
import image from "./images/keyodhoo-drone-13-7-m.jpg"
import image2 from "./images/underwater1-m.jpg"
import CardTwo from './components/CardTwo';


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
    <DarkMode />
    <br />
    <ModeTogle />
    <br />
    <InputComponent />
    <br />
    <TestStateComponent />
    <br />
    <TestTextComponent />
    <br />
    <WalletComponent />
    <br />
    <TimeComponent />
    <br />
    <Profile />
    <Profile width={50} height={50}/>
    <br />
    <Card image={image} width={70} height={70} title="This is card title" body="This is card body with some text"/>
    <br />
    <Card image={image2} title="This is card title 2" body="This is card body with different text"/>

      <CardTwo width={150} height={150}/>
   
   
      <div><Footer /></div>

       
    </div>
   
  )
}

export default App;
