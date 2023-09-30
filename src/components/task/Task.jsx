import React from "react";
import imgRemove from "./../../img/cross.svg";
import imgDone from "./../../img/tick.svg";

function Task({ task, deleteTask, doneTask }) {
  return (
    <li className="list-group-item d-flex justify-content-between task-item">
      <span
        className={task.done ? "task-title task-title--done" : "task-title"}
      >
        {task.text}
      </span>
      <div className="task-item__buttons">
        <button
          onClick={() => {
            doneTask(task);
          }}
          type="button"
          data-action="done"
          className="btn-action"
        >
          <img src={imgDone} alt="Done" width="18" height="18" />
        </button>
        <button
          onClick={() => {
            deleteTask(task.id);
          }}
          type="button"
          data-action="delete"
          className="btn-action"
        >
          <img src={imgRemove} alt="Done" width="18" height="18" />
        </button>
      </div>
    </li>
  );
}

export default Task;
