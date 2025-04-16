import React, { useState, useEffect } from "react";

function Card({ name, onDelete }) {
  const [todo, setTodo] = useState([]);
  const [task, setTask] = useState("");

  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem(name));
    if (savedTodos) setTodo(savedTodos);
  }, [name]);

  useEffect(() => {
    localStorage.setItem(name, JSON.stringify(todo));
  }, [todo, name]);

  const addTask = () => {
    if (task.trim()) {
      setTodo([...todo, task]);
      setTask("");
    }
  };

  const deleteTask = (index) => {
    setTodo(todo.filter((_, i) => i !== index));
  };

  return (
    <div className="card">
      <h2>{name}</h2>
      <button className="delete-card" onClick={onDelete}>
        Delete Card
      </button>
      <div className="input-container">
        <input
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Add task"
        />
        <button onClick={addTask}>Add</button>
      </div>
      <ul className="task-list">
        {todo.map((item, index) => (
          <li key={index} className="task-item">
            <span>{item}</span>
            <button className="delete-task" onClick={() => deleteTask(index)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Card;
