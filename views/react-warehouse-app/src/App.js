import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Warehouse from './components/Warehouse';
import Section from './components/Section';
import Aisle from './components/Aisle';
import Items from './components/Items';


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Route exact path='/' component={Login} />
          <Route exact path='/warehouses' component={Warehouse} />
          <Route exact path='/sections' component={Section} />
          <Route exact path='/aisles' component={Aisle} />
          <Route exact path='/items' component={Items} />
          <Route path='/items/:id' component={Items} />
        </div>
      </Router>
    );
  }
}

export default App;
