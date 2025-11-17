import { useState } from "react";
import './Todo.css'

export default function Todo() {
  const [task, setTask] = useState("");
  //   task = "";
  const [list, setList] = useState([]);
  //   list = [];

  const addTask = () => {
    if (task.trim() === "") return;
    setList([...list, task]);
    console.log([...list, task]);
    setTask("");
  };

  return (
    <>
      <div className="todo">
        <h2>Todo App</h2>

        <input
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="enter your task"
        />
        <button onClick={addTask}>Add</button>

        <ul>
          {list.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
    </>
  );
}
