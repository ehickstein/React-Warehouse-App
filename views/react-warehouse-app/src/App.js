import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Warehouse from './components/Warehouse';
import Section from './components/Section';
import Items from './components/Items';


const App = () => {
  return (
    <Router>
      <div>
        <Route exact path='/' component={Login} />
        <Route exact path='/warehouses/:warehouseId' component={Warehouse} />
        <Route exact path='/sections/:sectionId' component={Section} />
        <Route exact path='/items' component={Items} />
        <Route path='/items/:id' component={Items} />
      </div>
    </Router>
  )

}

export default App;
