
import React from 'react';
import '../styles/styles.css'

interface TimeframeSelectorProps {
  onSelect: (timeframe: string) => void; // Callback function to handle timeframe selection
}

const TimeframeSelector: React.FC<TimeframeSelectorProps> = ({ onSelect }) => {
  const handleSelect = (timeframe: string) => {
    onSelect(timeframe); // Pass the selected timeframe to the parent component
  };

  return (
    <div className="timeframe-selector">
      <button onClick={() => handleSelect('daily')} aria-label="Select Daily">Daily</button>
      <button onClick={() => handleSelect('weekly')}>Weekly</button>
      <button onClick={() => handleSelect('monthly')}>Monthly</button>
    </div>
  );
};

export default TimeframeSelector;
