import React from 'react';
import Header from './components/Header/Header'
import './App.css';
import {BtnWhite, BtnGreen} from './components/Btns/Btn'
import Story from './components/Story/Story';


function App() {
  return (
    <div className="App">
      <Header/>
      <Story/>
    </div>
  );
}

export default App;
