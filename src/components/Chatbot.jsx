import React, { useState } from "react";

export default function Chatbot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const sendMessage = async () => {
    if (!input.trim()) return;
    const userMsg = { role: "user", content: input };
    setMessages([...messages, userMsg]);
    setInput("");

    const res = await fetch("http://localhost:5000/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: input }),
    });
    const data = await res.json();
    const botMsg = { role: "bot", content: data.reply };
    setMessages((prev) => [...prev, botMsg]);
  };

  return (
    <div className="flex flex-col gap-2">
      <div className="flex-1 overflow-y-auto border p-2 rounded">
        {messages.map((msg, i) => (
          <div key={i} className={msg.role === "user" ? "text-blue-500" : "text-green-500"}>
            <strong>{msg.role}:</strong> {msg.content}
          </div>
        ))}
      </div>
      <div className="flex gap-2">
        <input
          className="flex-1 border rounded px-2"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className="bg-indigo-600 text-white px-4 rounded" onClick={sendMessage}>
          Send
        </button>
      </div>
    </div>
  );
}
