import { useState } from "react";
import Backdrop from "../Backdrop/Backdrop";
import Modal from "../Modal/Modal";

import "./Todo.css";

const Todo = (props) => {
  const [openModal, setModal] = useState(false);

  const deleteTrigger = () => {
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };

  return (
    <div className="todo-body">
      <h3 className="td-title">{props.title}</h3>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus, in?
      </p>
      <button className="btn delete-btn" onClick={deleteTrigger}>
        Delete
      </button>
      {openModal && <Modal onCancel={closeModal} onConfirm={closeModal} />}
      {openModal && <Backdrop onCancel={closeModal} />}
    </div>
  );
};

export default Todo;
