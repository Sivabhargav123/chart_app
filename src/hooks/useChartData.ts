import { useState, useEffect } from 'react';

const useChartData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('/data.json')
      .then(response => response.json())
      .then(setData);
  }, []);

  return data;
};

export default useChartData;
