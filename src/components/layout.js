import React, { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import './layout.css';
import Header from './header';
import Footer from './footer';
import Side from './side';

const theme = {
  mobileBreakpoint: '768px'
};

const Body = styled.div`
  max-width: 1366px;
  margin: 0 auto;
`;

const Main = styled.div`
  @media (min-width: ${() => theme.mobileBreakpoint}) {
    &:after {
      content: '';
      clear: both;
      display: table;
    }
  }
`;

class Layout extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Body>
          <Header />
          <Main>
            {this.props.children}
            <Side />
          </Main>
          <Footer />
        </Body>
      </ThemeProvider>
    );
  }
}

export default Layout;
