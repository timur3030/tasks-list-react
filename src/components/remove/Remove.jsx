import React from "react";
import "./remove.css";

function Remove({ removeDone }) {
  return (
    <div className="remove">
      <div className="container">
        <button
          onClick={() => removeDone()}
          id="removeDoneTasks"
          className="btn btn-secondary mt-4"
        >
          Удалить выполненные задачи
        </button>
      </div>
    </div>
  );
}

export default Remove;
