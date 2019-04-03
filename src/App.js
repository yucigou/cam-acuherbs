import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Header from './components/header'
import Footer from './components/footer'
import { Acupuncture, AboutDocter, ChineseHerbs, Contact, Cupping, OpeningHours } from './components/main'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header/>
          <Route exact path="/acupuncture" component={Acupuncture} />
          <Route exact path="/" component={Acupuncture} />
          <Route path="/about-doctor" component={AboutDocter} />
          <Route path="/chinese-herbs" component={ChineseHerbs} />
          <Route path="/contact" component={Contact} />
          <Route path="/cupping" component={Cupping} />
          <Route path="/opening-hours" component={OpeningHours} />
          <Footer/>
        </div>
      </Router>
    );
  }
}

export default App;
