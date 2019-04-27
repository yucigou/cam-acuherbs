import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import styled, { ThemeProvider } from 'styled-components'
import logo from './logo.svg';
import './App.css';
import Header from './components/header'
import Footer from './components/footer'
import Side from './components/side'
import { Acupuncture, AboutDocter, ChineseHerbs, Contact, Cupping, Testimonials, OpeningHours } from './components/main'

const theme = {
  mobileBreakpoint: '768px'
}

const Main = styled.div`
  @media (min-width: ${() => theme.mobileBreakpoint}) {
    &:after {
      content: "";
      clear: both;
      display: table;
    }
  }
`

class App extends Component {
  render() {
    return (
      <Router>
        <ThemeProvider theme={theme}>
          <div className="App">
            <Header/>
            <Main>
              <Route exact path="/acupuncture" component={Acupuncture} />
              <Route exact path="/" component={AboutDocter} />
              <Route path="/about-doctor" component={AboutDocter} />
              <Route path="/chinese-herbs" component={ChineseHerbs} />
              <Route path="/testimonials" component={Testimonials} />
              <Route path="/contact" component={Contact} />
              <Route path="/cupping" component={Cupping} />
              <Route path="/opening-hours" component={OpeningHours} />
              <Side/>
            </Main>
            <Footer/>
          </div>
        </ThemeProvider>
      </Router>
    );
  }
}

export default App;
