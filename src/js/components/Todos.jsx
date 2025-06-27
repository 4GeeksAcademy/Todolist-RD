import React, { useState } from "react";

const Todos = () => {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  const handleKeyUp = (e) => { 
    if (e.key === "Enter" && input.trim() !== "") {
      setTasks([...tasks, { label: input.trim() }]);
      setInput("");
    }
  };

  const deleteTask = (indexToDelete) => {
    const newTasks = [];

    for (let i = 0; i < tasks.length; i++) {
      if (i !== indexToDelete) {
        newTasks.push(tasks[i]);
      }
     
    }

    setTasks(newTasks);
  };

  return (
    <div className="App mx-auto" style={{ maxWidth: "40rem" }}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyUp={handleKeyUp}
        placeholder="What needs to be done?"
        className="form-control mb-3 fs-5 py-2"
      />

      <ul id="taskdisplay" className="list-group">
        {tasks.length === 0 ? (
          <li className="list-group-item fs-5">No tasks, add a task</li>
        ) : (
          tasks.map((ele, index) => (
            <li
              key={index}
              className="list-group-item d-flex justify-content-between fs-5"
            >
              {ele.label}
              <button
                onClick={() => deleteTask(index)}
                className="btn btn-primary btn-sm"
              >
                X
              </button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default Todos;


/*
 const deleteTask = (indexToDelete) => {
    setTasks(tasks.filter((_, index) => index !== indexToDelete));
  };

  const deleteTask = (indexToDelete) => {
    let result = tasks.map((elem, index) => {
      if (index == 0)
    }
      
  
  */