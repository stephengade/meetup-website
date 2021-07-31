import React from "react";
import "./Modal.css";

const Modal = (props) => {
  return (
    <div className="modal">
      <h4>Are you sure you want to delete this?</h4>
      <div className="modal-buttons">
        <button className="btn btn-cancel" onClick={props.onCancel}>No! Cancel</button>
        <button className="btn btn-confirm" onClick={props.onConfirm}>Yes, Delete!</button>
      </div>
    </div>
  );
};

export default Modal;
