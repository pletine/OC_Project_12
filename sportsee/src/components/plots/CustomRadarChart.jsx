import React from 'react';
import {
  PolarGrid,
  PolarAngleAxis,
  Radar,
  RadarChart,
  ResponsiveContainer,
} from 'recharts';

export default function CustomRadarChart({ perf }) {
  // Create Array to store the value in the correct format
  let lengthArray = Object.keys(perf.kind).length;
  let dataSort = [lengthArray];
  perf.data.forEach((elem) => {
    let index = perf.data.indexOf(elem);
    let newElem = { value: elem.value, kind: perf.kind[index + 1] };
    dataSort[index] = newElem;
  });

  return (
    <ResponsiveContainer height="100%" width="100%">
      <RadarChart
        cx="50%"
        cy="50%"
        outerRadius="75%"
        startAngle={210}
        endAngle={570}
        data={dataSort}
        fill="#FFFFFF"
      >
        <PolarGrid />
        <PolarAngleAxis dataKey="kind" tick={{ fill: '#FFF' }} />
        <Radar dataKey="value" fill="#FF0101" fillOpacity={0.7} />
      </RadarChart>
    </ResponsiveContainer>
  );
}
