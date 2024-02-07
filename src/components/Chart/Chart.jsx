import React from 'react';
import { Bar } from 'react-chartjs-2';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);


const DataVisualization = ({ csvData }) => {
  // Assuming csvData is an array of objects with `category` and `value` fields
  const data = {
    labels: csvData.map(row => row.category), // Extracting category names as labels
    datasets: [{
      label: 'Dataset Label', // You can customize this label
      data: csvData.map(row => row.value), // Extracting corresponding values
      backgroundColor: 'rgba(255, 99, 132, 0.5)', // Customize the bar color
      borderColor: 'rgba(255, 99, 132, 1)', // Border color of the bars
      borderWidth: 1,
    }]
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true, // Start scale from zero
      }
    },
    plugins: {
      legend: {
        display: true, // Set to false to hide the legend
      }
    }
  };

  return <Bar data={data} options={options} />;
};

export default DataVisualization;