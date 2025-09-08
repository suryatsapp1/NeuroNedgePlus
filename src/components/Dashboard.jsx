import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";

const data = [
  { day: "Mon", tasks: 3, focus: 2 },
  { day: "Tue", tasks: 4, focus: 3 },
  { day: "Wed", tasks: 2, focus: 1 },
  { day: "Thu", tasks: 5, focus: 4 },
  { day: "Fri", tasks: 3, focus: 2 },
  { day: "Sat", tasks: 6, focus: 5 },
  { day: "Sun", tasks: 4, focus: 3 },
];

export default function Dashboard() {
  return (
    <div>
      <h2 className="text-lg font-bold mb-4">Weekly Productivity</h2>
      <LineChart width={600} height={300} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="day" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="tasks" stroke="#8884d8" />
        <Line type="monotone" dataKey="focus" stroke="#82ca9d" />
      </LineChart>
    </div>
  );
}
