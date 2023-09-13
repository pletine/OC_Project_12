import React from 'react';
import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer } from 'recharts';

export default function CustomLineChart({ average }) {
  return (
    <ResponsiveContainer height="100%" width="100%">
      <LineChart width={600} height={300} data={average.sessions}>
        <Line type="monotone" dataKey="sessionLength" stroke="#FFFFFF" />
        <XAxis dataKey="day" />
        <Tooltip />
      </LineChart>
    </ResponsiveContainer>
  );
}
