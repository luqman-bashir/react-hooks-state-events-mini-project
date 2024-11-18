import React from "react";
import Task from "./Task";

function TaskList({ tasks = [], onDeleteTask }) {
  return (
    <ul className="tasks">
      {tasks.map((task) => (
        <li key={task.text} className="task">
          <Task
            text={task.text}
            category={task.category}
            onDelete={() => onDeleteTask(task.text)}
          />
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
