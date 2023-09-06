import React from 'react';
import { RadialBarChart, RadialBar, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Data',
    per: 12,
    fill: 'red',
  },
  {
    name: 'Echelle',
    per: 100,
    fill: 'transparent',
  },
];

export default function RadialBarChartHome() {
  const graph = (
    <ResponsiveContainer>
      <RadialBarChart
        cx={150}
        cy={150}
        innerRadius={120}
        outerRadius={140}
        startAngle={180}
        endAngle={-180}
        data={data}
      >
        <RadialBar minAngle={10} cornerRadius={10} clockWise dataKey="per" />
      </RadialBarChart>
    </ResponsiveContainer>
  );

  return <div className="score">{graph}</div>;
}
