import React from 'react';
import { PolarGrid, PolarAngleAxis, Radar, RadarChart } from 'recharts';

export default function CustomRadarChart({ perf }) {
  // Create Array to store the value in the correct format
  let dataSort = [perf.kind.length];
  perf.data.forEach((elem) => {
    let index = perf.data.indexOf(elem);
    let newElem = { value: elem.value, kind: perf.kind[index + 1] };
    dataSort[index] = newElem;
  });

  return (
    <RadarChart outerRadius={90} width={730} height={250} data={dataSort}>
      <PolarGrid />
      <PolarAngleAxis dataKey="kind" />
      <Radar
        dataKey="value"
        stroke="#8884d8"
        fill="#8884d8"
        fillOpacity={0.6}
      />
    </RadarChart>
  );
}
