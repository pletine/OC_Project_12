import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Rectangle,
} from 'recharts';

export default function CustomLineChart({ average }) {
  const styleToolTip = {
    backgroundColor: '#FFFFFF',
    color: '#020203',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '60px',
    height: '40px',
    fontSize: '12px',
    fontWeight: '700',
  };

  const CustomToolTip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div style={styleToolTip}>
          <p>{`${payload[0].value} min`}</p>
        </div>
      );
    }
    return null;
  };

  function CustomCursor(props) {
    if (props) {
      const { points, width, height } = props;
      const { x, y } = points[0];

      return (
        <Rectangle
          fill="#000000"
          fillOpacity="0.2"
          x={x}
          y={y - 30}
          width={width}
          height={height * 2}
        />
      );
    }
    return <div>waiting for data</div>;
  }

  const writeWeekDay = (numDay) => {
    const dayList = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];
    return dayList[numDay - 1];
  };

  return (
    <ResponsiveContainer height="100%" width="100%">
      <LineChart
        data={average.sessions}
        margin={{
          top: 30,
          right: 0,
          left: 0,
          bottom: 40,
        }}
      >
        <Line
          type="natural"
          dataKey="sessionLength"
          stroke="#FFFFFF"
          strokeWidth={1}
          dot={false}
          activeDot={{
            fill: '#FFF',
            r: 5,
            strokeWidth: '10',
            strokeOpacity: '0.5',
          }}
        />
        <XAxis
          dataKey="day"
          opacity="0.5"
          axisLine={false}
          tickLine={false}
          tickMargin={10}
          tickCount={7}
          tick={{ fill: '#fff', fontSize: 20 }}
          padding={{ left: 30, right: 30 }}
          minTickGap={1}
          tickFormatter={(numDay) => writeWeekDay(numDay)}
          interval="preserveStartEnd"
        />
        <YAxis
          hide="true"
          axisLine={false}
          tickLine={false}
          type="number"
          domain={['dataMin-10', 'dataMax + 10']}
        />
        <Tooltip content={<CustomToolTip />} cursor={<CustomCursor />} />
      </LineChart>
    </ResponsiveContainer>
  );
}
