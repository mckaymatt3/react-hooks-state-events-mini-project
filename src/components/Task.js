import React from "react";

function Task({task, onDelete}) {
  //need to pass onDelete up to parent function through callback 
  // can first check the basics of the function and then pass it up
  
  function handleDelete() {
    onDelete(task.text)
  }

  return (
    <div className="task">
      <div className="label">{task.category}</div>
      <div className="text">{task.text}</div>
      <button className="delete" onClick={handleDelete}>X</button>
    </div>
  );
}

export default Task;
