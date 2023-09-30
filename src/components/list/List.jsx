import React from "react";

import Empty from "../empty/Empty";
import Task from "../task/Task";

function List({ tasks, deleteTask, doneTask }) {
  return (
    <div className="list">
      <div className="container">
        <div className="card mb-4">
          <ul id="tasksList" className="list-group list-group-flush">
            <Empty tasks={tasks} />
            {tasks.map((task) => (
              <Task
                task={task}
                deleteTask={deleteTask}
                doneTask={doneTask}
                key={task.id}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default List;
