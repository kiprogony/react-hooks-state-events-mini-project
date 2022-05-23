import React from "react";
import Task from "./Task";

function TaskList({ tasks, onDeleteTask }) {
  const tasklist = tasks.map((task) => {
    <Task
      key={task.text}
      category={task.category}
      text={task.text}
      onDeleteTask={onDeleteTask}
    />
  });
  
  return <div className="tasks"> {tasklist} </div>
}
      // {/* display a list of tasks using Task component */}
export default TaskList;
