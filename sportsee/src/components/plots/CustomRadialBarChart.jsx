import React from 'react';
import { RadialBarChart, RadialBar } from 'recharts';

export default function CustomRadialBarChart() {
  const dataGraph = [
    {
      name: 'Value',
      uv: 12,
      fill: 'red',
    },
    {
      name: 'Echelle',
      uv: 100,
      fill: 'transparent',
    },
  ];

  return (
    <RadialBarChart
      width={730}
      height={250}
      innerRadius="50%"
      outerRadius="80%"
      data={dataGraph}
      startAngle={180}
      endAngle={-180}
    >
      <RadialBar
        minAngle={15}
        clockWise={true}
        dataKey="uv"
      />
    </RadialBarChart>
  );
}
