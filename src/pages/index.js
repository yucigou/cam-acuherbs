import React, { Component } from 'react';
import Layout from '../components/layout';
import { AboutDocter } from '../components/main';

class App extends Component {
  render() {
    return (
      <Layout>
        <AboutDocter />
      </Layout>
    );
  }
}

export default App;
