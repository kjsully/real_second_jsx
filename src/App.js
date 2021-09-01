import React from 'react';
import logo from './logo.svg';
import './App.css';
import Index from './components/Index';
import PropsComponent from './components/PropsComponent';

const message = "kyle is freakin awesome"
const animals = ["tiger ", "elephant ", "zebra"];
const person = {
  name: "kyle",
  favFood: "teriyaki",
  age: 28
}

function App() {
  return (
    <div className="App">
      <Index person={person}/>
      <hr/>
      <PropsComponent message={message} animals={animals}/>
    </div>
  );
}

export default App;