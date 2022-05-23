import React from "react";

function Task({text, category, onDeleteTask}) {

  function toHandleClick() {
    onDeleteTask(text);
  }


  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={toHandleClick}>X</button>
    </div>
  );
}

export default Task;
