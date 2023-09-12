import React from 'react';
import {
  Bar,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

export default function CustomBarChart({ activity }) {
  return (
    <ResponsiveContainer height="100%" width="100%">
      <BarChart width={730} height={250} data={activity.sessions}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="day" />
        <YAxis
          orientation="right"
          dataKey="kilogram"
          domain={[70, 85]}
          tickCount="3"
        />
        <Tooltip />
        <Bar dataKey="kilogram" fill="#282D30" />
        <Bar dataKey="calories" fill="#E60000" />
      </BarChart>
    </ResponsiveContainer>
  );
}
