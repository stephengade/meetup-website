import React from "react";
import './Backdrop.css';

const Backdrop = (props) => {
 
  return <div className="overlay" onClick={props.onCancel}/>;
};

export default Backdrop;
