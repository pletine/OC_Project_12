import React from 'react';
import {
  PolarGrid,
  PolarAngleAxis,
  Radar,
  RadarChart,
  ResponsiveContainer,
} from 'recharts';

/**
 * CustomRadarChart is a component that displays a radar chart
 * @param {Object} perf - Object containing the data to be displayed
 * @returns {JSX.Element} - Return the radar chart as ResponsiveContainer
 */
export default function CustomRadarChart({ perf }) {
  // Associate the kind name with the french word
  const kinds = {
    intensity: 'Intensité',
    cardio: 'Cardio',
    energy: 'Energie',
    endurance: 'Endurance',
    strength: 'Force',
    speed: 'Vitesse',
  };

  // Create Array to store the value in the correct format
  const titleRadar = perf.data.map((elem) => {
    return { value: elem.value, kind: kinds[perf.kind[elem.kind]] };
  });

  return (
    <ResponsiveContainer height="100%" width="100%">
      <RadarChart
        cx="50%"
        cy="50%"
        outerRadius="75%"
        startAngle={210}
        endAngle={570}
        data={titleRadar}
        fill="#FFFFFF"
      >
        <PolarGrid />
        <PolarAngleAxis dataKey="kind" tick={{ fill: '#FFF' }} />
        <Radar dataKey="value" fill="#FF0101" fillOpacity={0.7} />
      </RadarChart>
    </ResponsiveContainer>
  );
}
