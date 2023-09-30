import { useEffect, useState } from "react";
import Footer from "./components/footer/Footer";
import Form from "./components/form/Form";
import Header from "./components/header/Header";
import List from "./components/list/List";
import Remove from "./components/remove/Remove";

function App() {
  const [tasks, setTasks] = useState(
    localStorage.getItem("tasks")
      ? JSON.parse(localStorage.getItem("tasks"))
      : []
  );

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTasks = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id) => {
    setTasks(
      tasks.filter((task) => {
        return task.id !== id;
      })
    );
  };

  const doneTask = (doneTask) => {
    setTasks(
      tasks.map((task) => {
        if (task.id !== doneTask.id) {
          return task;
        } else {
          return { id: doneTask.id, text: doneTask.text, done: !doneTask.done };
        }
      })
    );
  };

  const removeDone = () => {
    setTasks(
      tasks.filter((task) => {
        return task.done === false;
      })
    );
  };

  return (
    <div className="App">
      <Header />
      <List tasks={tasks} deleteTask={deleteTask} doneTask={doneTask} />
      <Form addTasks={addTasks} />
      <Remove removeDone={removeDone} />
      <Footer />
    </div>
  );
}

export default App;
