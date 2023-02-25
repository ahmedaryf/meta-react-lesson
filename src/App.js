// import logo from './logo.svg';
import React from 'react';
import './App.css';
import Footer from './components/Footer';
import Intro1 from './components/Intro1';
import Intro2 from './components/Intro2';
import Intro3 from './components/Intro3';
import Nav from './components/nav';
import Promo from './components/Promo';


function App() {
  return (
    <div>
      <div><Nav /></div>
      <div><Promo /></div>
      <div><Intro1 /></div>
      <div><Intro2 /></div>
      <div><Intro3 /></div>
      <div><Footer /></div>
       
    </div>
   
  )
}

export default App;
