import React, { useState } from 'react';
import Chart from './componentss/Chart';
import TimeframeSelector from './componentss/TimeframeSelector'; 
import './App.css'; 
import  data  from './data/data.json'; // Adjust the path as project structure

const App: React.FC = () => {
  const [timeframe, setTimeframe] = useState<string>('daily');

  // Function to filter data based on timeframe
  const filterData = (data: any[], timeframe: string) => {
    switch (timeframe) {
      case 'daily':
        return data; // Display all data for daily view
      case 'weekly':
        return data.filter((item, index) => index % 7 === 0); // Display weekly data (every 7th day)
      case 'monthly':
        return data.filter((item) => new Date(item.timestamp).getDate() === 1); // Display monthly data (first day of each month)
      default:
        return data;
    }
  };


  return (
    <div className="App">
      <header className="App-header">
        <h1>Chart Application</h1>
        <TimeframeSelector onSelect={(value: string) => setTimeframe(value as 'daily' | 'weekly' | 'monthly')} />
        <Chart data={filterData(data, timeframe)} />
      </header>
    </div>
  );
};

export default App;
