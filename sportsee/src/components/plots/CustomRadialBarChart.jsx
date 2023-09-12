import React from 'react';
import { RadialBarChart, RadialBar, ResponsiveContainer } from 'recharts';

export default function CustomRadialBarChart({ score }) {
  const dataGraph = [
    {
      name: 'Value',
      uv: score * 100,
      fill: '#FF0000',
    },
    {
      name: 'Echelle',
      uv: 100,
      fill: 'transparent',
    },
  ];

  return (
    <ResponsiveContainer height="100%" width="75%">
      <RadialBarChart
        width={400}
        height={400}
        innerRadius="70%"
        outerRadius="120%"
        data={dataGraph}
        startAngle={180}
        endAngle={-180}
      >
        <RadialBar clockWise={true} dataKey="uv" />
        <text
          x="50%"
          y="50%"
          style={{
            fontFamily: 'Roboto',
            fontSize: 26,
            fontWeight: 700,
            fill: '#282D30',
          }}
          width={200}
          // scaleToFit={true}
          textAnchor="middle"
          // verticalAnchor="middle"
        >
          {(score * 100).toString()}%
        </text>
        <text
          x="50%"
          y="60%"
          style={{ fontSize: 16, fontWeight: 500, fill: '#74798C' }}
          width={200}
          // scaleToFit={true}
          textAnchor="middle"
          // verticalAnchor="middle"
        >
          de votre objectif
        </text>
      </RadialBarChart>
    </ResponsiveContainer>
  );
}
