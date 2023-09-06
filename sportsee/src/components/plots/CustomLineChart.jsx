import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, Tooltip } from 'recharts';

export default function CustomLineChart({ average }) {
  return (
    <LineChart
      width={600}
      height={300}
      data={average.sessions}
      margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
    >
      <Line type="monotone" dataKey="sessionLength" stroke="#8884d8" />
      <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
      <XAxis dataKey="day" />
      <Tooltip />
    </LineChart>
  );
}
