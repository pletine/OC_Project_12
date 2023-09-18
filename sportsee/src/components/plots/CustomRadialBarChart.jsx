import React from 'react';
import { RadialBarChart, RadialBar, ResponsiveContainer } from 'recharts';

/**
 * CustomRadialBarChart is a component that displays a radial bar chart
 * @param {Object} score - Object containing the data to be displayed
 * @returns {JSX.Element} - Return the radial bar chart as ResponsiveContainer
 */
export default function CustomRadialBarChart({ score }) {
  // Create Array to store the value in the correct format
  // Use a second value to specify the scale
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
    <ResponsiveContainer height="100%" width="100%">
      <RadialBarChart
        width={400}
        height={400}
        innerRadius="80%"
        outerRadius="100%"
        data={dataGraph}
        startAngle={180}
        endAngle={-180}
      >
        <circle cx="50%" cy="50%" fill="white" r="35%"></circle>
        <RadialBar dataKey="uv" cornerRadius={10} />
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
          textAnchor="middle"
        >
          {(score * 100).toString()}%
        </text>
        <text
          x="50%"
          y="60%"
          style={{ fontSize: 16, fontWeight: 500, fill: '#74798C' }}
          width={200}
          textAnchor="middle"
        >
          de votre objectif
        </text>
      </RadialBarChart>
    </ResponsiveContainer>
  );
}
