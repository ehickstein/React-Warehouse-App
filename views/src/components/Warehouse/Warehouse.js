import React from "react";
import "./Warehouse.css";

const Warehouse = props => (
  <div className="card">
    <div className="content">
      <ul>
        <li>
          <strong>Warehouse:</strong> {props.Warehouse}
        </li>
      </ul>
    </div>
  </div>
);

export default Warehouse;