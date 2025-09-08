import React, { useState } from "react";

export default function TaskManager() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (!newTask.trim()) return;
    setTasks([...tasks, { text: newTask, done: false }]);
    setNewTask("");
  };

  const toggleTask = (index) => {
    const updated = [...tasks];
    updated[index].done = !updated[index].done;
    setTasks(updated);
  };

  return (
    <div>
      <h2 className="text-lg font-bold mb-2">Your Tasks</h2>
      <div className="flex gap-2 mb-2">
        <input
          className="border rounded px-2 flex-1"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button className="bg-indigo-600 text-white px-4 rounded" onClick={addTask}>
          Add
        </button>
      </div>
      <ul>
        {tasks.map((task, i) => (
          <li
            key={i}
            className={`cursor-pointer ${task.done ? "line-through text-gray-500" : ""}`}
            onClick={() => toggleTask(i)}
          >
            {task.text}
          </li>
        ))}
      </ul>
    </div>
  );
}
