import React from 'react';
import moment from 'moment';
import {
  Bar,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

export default function CustomBarChart({ activity }) {
  return (
    <ResponsiveContainer height="100%" width="100%">
      <BarChart
        width={730}
        height={250}
        data={activity.sessions}
        title="Activité quotienne"
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <text x={20} y={20} fill="rgba(32, 37, 58, 1))">
          <tspan>Activité quotidienne</tspan>
        </text>
        <Legend
          verticalAlign="top"
          align="right"
          iconType="circle"
          iconSize={10}
          height={65}
        />
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
        <XAxis
          dataKey="day"
          tickLine={false}
          padding={{ left: -50, right: -50 }}
          dx={0}
          height={70}
          tickMargin={15.5}
          tickFormatter={(value) => moment(value).format('D')}
        />
        <YAxis
          dataKey="kilogram"
          yAxisId="kilogram"
          orientation="right"
          tickCount={3}
          tickLine={false}
          axisLine={false}
          width={50}
          tickMargin={16}
        />
        <YAxis dataKey="calories" yAxisId="calories" orientation="left" hide />
        <Tooltip offset={50} label={false} wrapperStyle={{ outline: 'none' }} />
        <Bar
          name="Poids (kg)"
          dataKey="kilogram"
          yAxisId="kilogram"
          barSize={7}
          radius={[20, 20, 0, 0]}
          fill="rgba(32, 37, 58, 1)"
        />
        <Bar
          name="Calories brûlées (kCal)"
          dataKey="calories"
          yAxisId="calories"
          barSize={7}
          radius={[20, 20, 0, 0]}
          fill="rgba(255, 1, 1, 1)"
        />
      </BarChart>
    </ResponsiveContainer>
  );
}
