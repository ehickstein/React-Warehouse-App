import React from "react";
import "./Items.css";

const Items = props => (
  <div className="card">
    <div className="content">
      <ul>
        <li>
          <strong>Items:</strong> {props.Items}
        </li>
        </ul>
    </div>
  </div>
);

export default Items;