import React, { useState, useEffect } from "react";

export default function FocusMode() {
  const [breath, setBreath] = useState("Inhale");

  useEffect(() => {
    const interval = setInterval(() => {
      setBreath((prev) => (prev === "Inhale" ? "Exhale" : "Inhale"));
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-96">
      <div className="w-40 h-40 rounded-full bg-indigo-500 animate-pulse flex items-center justify-center text-white text-xl font-bold">
        {breath}
      </div>
    </div>
  );
}
