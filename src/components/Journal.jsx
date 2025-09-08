import React, { useState } from "react";

export default function Journal() {
  const [entries, setEntries] = useState([]);
  const [input, setInput] = useState("");

  const addEntry = () => {
    if (!input.trim()) return;
    setEntries([...entries, { text: input, date: new Date().toLocaleDateString() }]);
    setInput("");
  };

  return (
    <div>
      <h2 className="text-lg font-bold mb-2">Daily Journal</h2>
      <textarea
        className="w-full border rounded p-2"
        rows="3"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button className="mt-2 bg-indigo-600 text-white px-4 rounded" onClick={addEntry}>
        Save Entry
      </button>
      <ul className="mt-4">
        {entries.map((e, i) => (
          <li key={i} className="border-b py-1">
            <strong>{e.date}:</strong> {e.text}
          </li>
        ))}
      </ul>
    </div>
  );
}
