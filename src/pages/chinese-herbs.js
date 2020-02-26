import React, { Component } from 'react';
import Layout from '../components/layout';
import { ChineseHerbs } from '../components/main';

class App extends Component {
  render() {
    return (
      <Layout>
        <ChineseHerbs />
      </Layout>
    );
  }
}

export default App;
