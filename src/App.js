import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Warehouse from './components/Warehouse';
import Section from './components/Section';
import Row from './components/Row';
import Product from './components/Product';


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Route exact path='/' component={Login} />
          <Route exact path='/warehouses' component={Warehouse} />
          <Route exact path='/sections' component={Section} />
          <Route exact path='/rows' component={Row} />
          <Route exact path='/products' component={Product} />
          <Route path='/products/:id' component={Product} />
        </div>
      </Router>
    );
  }
}

export default App;
