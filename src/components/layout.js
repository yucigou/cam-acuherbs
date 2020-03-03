import React, { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Helmet } from 'react-helmet';
import '../css/layout.css';
import '../css/menu.css';
import '../css/youtube.css';
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
        <Helmet>
          <meta charSet="utf-8" />
          <link
            rel="shortcut icon"
            href="images/cropped-Acupuncture-1-620x340-2-32x32.png"
            sizes="32x32"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Neuton|Playfair+Display"
            rel="stylesheet"
          />
          <link rel="manifest" href="/manifest.webmanifest" />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
          />
          <title>Cambridge Chinese Acupuncture & Herbs</title>
          <meta
            name="description"
            content="Cambridge Chinese Acupuncture & Herbs is member of the Association of Traditional Chinese Medicine in the UK. Dr Li ZHANG has many years of clinical experiences both in China and the UK. You can contact us on +44(0)1223-412216, or visit us at 238 Mill Road, Cambridge, CB1 3NF, UK"
          />

          {/* ios support */}
          <link
            rel="apple-touch-icon"
            href="/images/cropped-Acupuncture-1-620x340-2-144x144.png"
          />
          <meta name="apple-mobile-web-app-status-bar" content="#000000"></meta>
        </Helmet>
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
