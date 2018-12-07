import React from "react";

export const Input = props => (
  <div className="form-group">
    <input className="form-control" {...(() => {const {handleChange, ...otherProps} = props; return otherProps; })()} onChange={props.handleChange} />
  </div>
);
