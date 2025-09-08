import React, { useState } from "react";
import Chatbot from "./components/Chatbot";
import TaskManager from "./components/TaskManager";
import Journal from "./components/Journal";
import FocusMode from "./components/FocusMode";
import Dashboard from "./components/Dashboard";

export default function App() {
  const [page, setPage] = useState("chat");

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white flex flex-col">
      <header className="p-4 bg-indigo-600 text-white flex justify-between">
        <h1 className="text-xl font-bold">NeuroNudge+</h1>
        <nav className="flex gap-4">
          <button onClick={() => setPage("chat")}>Chat</button>
          <button onClick={() => setPage("tasks")}>Tasks</button>
          <button onClick={() => setPage("journal")}>Journal</button>
          <button onClick={() => setPage("focus")}>Focus</button>
          <button onClick={() => setPage("dashboard")}>Dashboard</button>
        </nav>
      </header>

      <main className="flex-1 p-4">
        {page === "chat" && <Chatbot />}
        {page === "tasks" && <TaskManager />}
        {page === "journal" && <Journal />}
        {page === "focus" && <FocusMode />}
        {page === "dashboard" && <Dashboard />}
      </main>
    </div>
  );
}
