import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import AdminWarehouse from './components/AdminComponents/Warehouse';
import AdminSection from './components/AdminComponents/Section';
import AdminItems from './components/AdminComponents/Items';
import UserWarehouse from './components/UserComponents/UserWarehouse';
import UserSection from './components/UserComponents/UserSection';
import UserItems from './components/UserComponents/UserItems';
import store from './redux/store';
import { admin } from './redux/constants';


const App = () => {
  if (store.getState() == admin){
    return (
      <Router>
        <div>
          <Route exact path='/' component={Login} />
          <Route exact path='/warehouses/:warehouseId' component={AdminWarehouse} />
          <Route exact path='/sections/:sectionId' component={AdminSection} />
          <Route exact path='/items' component={AdminItems} />
          <Route path='/items/:id' component={AdminItems} />
        </div>
      </Router>
    )
  }
  else {
    return (
      <Router>
        <div>
          <Route exact path='/' component={Login} />
          <Route exact path='/warehouses/:warehouseId' component={UserWarehouse} />
          <Route exact path='/sections/:sectionId' component={UserSection} />
          <Route exact path='/items' component={UserItems} />
          <Route path='/items/:id' component={UserItems} />
        </div>
      </Router>
    )
  }
}

export default App;
