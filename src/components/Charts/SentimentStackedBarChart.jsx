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

import data2_sample from '../../data/data2_sample';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Gucci Sentiment Analysis Over Years',
      font: {
        size: 30,
      }
    },
  },
  scales: {
    x: {
      stacked: true,
    },
    y: {
      stacked: true,
    },
  },
};

// Function to transform imported data into chart's data format
const transformData = (importedData) => {
  const labels = importedData.map(item => item[0].toString());
  const negativeData = importedData.map(item => item[1]);
  const naturalData = importedData.map(item => item[2]);
  const positiveData = importedData.map(item => item[3]);

  return {
    labels,
    datasets: [
      {
        label: 'Negative',
        data: negativeData,
        backgroundColor: 'rgb(255, 99, 132)',
      },
      {
        label: 'Natural',
        data: naturalData,
        backgroundColor: 'rgb(255, 205, 86)',
      },
      {
        label: 'Positive',
        data: positiveData,
        backgroundColor: 'rgb(75, 192, 192)',
      },
    ],
  };
};

export function SentimentStackedBarChart() {
  const chartData = transformData(data2_sample);
  return (
    <div className="flex justify-center p-7">
      <div className="card shadow-xl bg-base-200 w-3/4">
        <div className="card-body">
          <Bar options={options} data={chartData} />
        </div>
      </div>
    </div>
  );
}
