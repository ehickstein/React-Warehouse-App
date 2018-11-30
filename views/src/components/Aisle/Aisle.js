import React from "react";
import "./Aisle.css";

const Aisle = props => (
  <div className="card">
    <div className="content">
      <ul>
        <li>
          <strong>Aisle:</strong> {props.Aisle}
        </li>
        </ul>
    </div>
  </div>
);

export default Aisle;