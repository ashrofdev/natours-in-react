import React from 'react';
import Header from './components/Header/Header'
import './App.css';
import {BtnWhite, BtnGreen} from './components/Btns/Btn'
import Story from './components/Story/Story';
import Features from './components/features/Features';
import Tours from './components/tours/Tours';
import Testi from './components/testi/testi';
import Booking from './components/booking/Booking';
import Footer from './components/footer/Footer';


function App() {
  return (
    <div className="App">
      <Header/>
      <Story/>
      <Features/>
      <Tours/>
      <Testi/>
      <Booking/>
      <Footer/>
    </div>
  );
}

export default App;
