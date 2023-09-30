import React, { useRef, useState } from "react";
import "./form.css";

function Form({ addTasks }) {
  const [text, setText] = useState("");
  const input = useRef();

  return (
    <div className="form">
      <div className="container">
        <div className="card bg-light">
          <div className="card-header">Добавить новую задачу</div>
          <div className="card-body">
            <form id="form">
              <div className="form-group">
                <input
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  type="text"
                  className="form-control"
                  id="taskInput"
                  placeholder="Текст задачи"
                  required
                  ref={input}
                />
                <small id="emailHelp" className="form-text text-muted">
                  Что делаем, сколько времени тратим, какой результат получаем.
                </small>
              </div>
              <button
                type="submit"
                className="btn btn-primary btn-lg active"
                onClick={(event) => {
                  event.preventDefault();
                  if (text === "") {
                    input.current.style.border = "1px solid red";
                    setTimeout(() => {
                      input.current.style.border = "";
                    }, 300);
                    return;
                  } else {
                    addTasks({
                      id: Date.now(),
                      text: text,
                      done: false,
                    });
                    setText("");
                  }
                }}
              >
                Добавить
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form;
