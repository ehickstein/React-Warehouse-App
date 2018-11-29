import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import Product from '../components/Product';
import Row from '../components/Row';
import Section from '../components/Section';
import Warehouse from '../components/Warehouse';

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar></Navbar>
        <Product></Product>
        <Row></Row>
        <Section></Section>
        <Warehouse></Warehouse>
      </div>
    );
  }
}

export default App;
