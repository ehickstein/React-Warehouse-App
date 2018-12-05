import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {
  <div className="row">
    <div className="col s12">
      <ul className="tabs">
        <li className="tab col s3">
          <Link
            to="/warehouses"
              className={
                window.location.pathname === "/warehouses" ? "active" : ""
              }
            >Warehouses
          </Link>
        </li>
        <li className="tab col s3">
          <Link
            to="/tasks"
              className={
                window.location.pathname === "/tasks" ? "active" : ""
              }
            >Tasks
          </Link>
        </li>
        <li className="tab col s3">
          <Link
            to="/login"
              className={
                window.location.pathname === "/" ? "active" : ""
              }
            >Login
          </Link>
        </li>
      </ul>
    </div>
  </div>
}

export default Navbar;