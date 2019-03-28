import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header'
import Footer from './components/footer'
import Acupuncture from './components/main/acupuncture'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Acupuncture/>
        <Footer/>
      </div>
    );
  }
}

export default App;
