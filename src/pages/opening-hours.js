import React, { Component } from 'react';
import Layout from '../components/layout';
import { OpeningHours } from '../components/main';

class App extends Component {
  render() {
    return (
      <Layout>
        <OpeningHours />
      </Layout>
    );
  }
}

export default App;
