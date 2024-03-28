import React from 'react';
import { Line } from 'react-chartjs-2';

function LineChart() {
  const data = {
    labels: ['JAN', 'FEB', 'MAR', 'APR', 'MAY'],
    datasets: [
      {
        label: 'SALES FOR 2020',
        data: [3, 2, 4, 5, 6],
      },
    ],
  };

  const options = {
    scales: {
      x: {
        type: 'category', // Ensure the x-axis scale type is set to 'category'
      },
    },
  };

  return (
    <div>
      <h2>Line Chart</h2>
      <Line data={data} options={options} />
    </div>
  );
}

export default LineChart;
