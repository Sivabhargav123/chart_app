// src/components/Chart.tsx

import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  Brush, // Import Brush from Recharts for zooming functionality
} from 'recharts';

interface ChartProps {
  data: any[]; // Assuming your data structure matches
}

const Chart: React.FC<ChartProps> = ({ data }) => {
  return (
    <div className="chart-container">
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="timestamp" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="value" stroke="#8884d8" animationBegin={500}/>
          <Brush dataKey="timestamp" height={30} stroke="#8884d8" /> Brush component for zooming
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
