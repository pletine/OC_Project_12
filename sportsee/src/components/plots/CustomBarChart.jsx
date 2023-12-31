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

/**
 * CustomBarChart is a component that displays a bar chart
 * @param {Object} activity - Object containing the data to be displayed
 * @returns {JSX.Element} - Return the bar chart as ResponsiveContainer
 */
export default function CustomBarChart({ activity }) {
  // Adapt the style of the legend
  const renderColorfulLegendText = (value, entry) => {
    return (
      <span style={{ color: '#74798C', paddingRight: '50px' }}>{value}</span>
    );
  };

  // Style for the tooltip
  const styleToolTip = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FF0101',
    fontSize: '14px',
    fontWeight: '500',
    color: '#FFFFFF',
    width: '80px',
    height: '65px',
  };

  // Custom tooltip to adapt to the specific format
  const CustomToolTip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div>
          <p style={styleToolTip}>{`${payload[0].value}kg`}</p>
          <p style={styleToolTip}>{`${payload[1].value}Kcal`}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <ResponsiveContainer height="100%" width="100%">
      <BarChart
        width={730}
        height={250}
        data={activity.sessions}
        title="Activité quotienne"
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <Legend
          verticalAlign="top"
          align="right"
          iconType="circle"
          iconSize={10}
          height={65}
          wrapperStyle={{
            fontSize: '14px',
          }}
          formatter={renderColorfulLegendText}
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
        <Tooltip content={<CustomToolTip />} />
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
