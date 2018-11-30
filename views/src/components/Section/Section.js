import React from "react";
import "./Section.css";

const Section = props => (
  <div className="card">
    <div className="content">
      <ul>
        <li>
          <strong>Section:</strong> {props.Section}
        </li>
        </ul>
    </div>
  </div>
);

export default Section;