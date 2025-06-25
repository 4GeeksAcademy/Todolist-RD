import React, { useState } from "react";

const Todos = () => {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState(""); 

  const handleKeyUp = (e) => {
    if (e.key === "Enter" && input.trim() !== "") {
      setTasks(tasks.concat({ label: input.trim(), done: false }));
      setInput(""); 
    }
  };

  return (
    <div className="mx-auto" style={{ maxWidth: "40rem" }}>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyUp={handleKeyUp}
        placeholder="What needs to be done?"
        className="form-control mb-3 fs-5 py-2"
      />
      <ul className="list-group">
        {tasks.length === 0 ? (
          <li className="list-group-item fs-5">No tasks, add a task</li>
        ) : (
          tasks.map((t, index) => (
            <li
              key={index}
              className="list-group-item d-flex justify-content-between fs-5"
            >
              {t.label}
              <span className="badge bg-secondary">
                {t.done ? "done" : "not done"}
              </span>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default Todos;
