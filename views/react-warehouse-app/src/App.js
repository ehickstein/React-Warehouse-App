import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import AdminWarehouse from './components/AdminComponents/Warehouse';
import AdminSection from './components/AdminComponents/Section';
import AdminItems from './components/AdminComponents/Items';
import UserWarehouse from './components/UserComponents/Warehouse';
import UserSection from './components/UserComponents/Section';
import UserItems from './components/UserComponents/Items';
import store from './redux/store';
import { admin } from './redux/constants/action-types';


let adminState = () => {
  if (store.getState() === admin){
    return(
      <div>
        <Route exact path='/warehouses/:warehouseId' component={AdminWarehouse} />
        <Route exact path='/sections/:sectionId' component={AdminSection} />
        <Route exact path='/items' component={AdminItems} />
        <Route path='/items/:id' component={AdminItems} />
      </div>
    )
  }
  else {
    return(
      <div>
        <Route exact path='/warehouses/:warehouseId' component={UserWarehouse} />
        <Route exact path='/sections/:sectionId' component={UserSection} />
        <Route exact path='/items' component={UserItems} />
        <Route path='/items/:id' component={UserItems} />
      </div>
    )
  }
}
const App = () => {
  return (
    <Router>
      <div>
        <Route exact path='/' component={Login} />
        ${adminState()}
      </div>
    </Router>
  )
}

export default App;
