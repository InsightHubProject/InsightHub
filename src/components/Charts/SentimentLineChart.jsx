import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import data2_sample from '../../data/data2_sample';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
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
      },
    },
  },
};

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
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Natural',
        data: naturalData,
        borderColor: 'rgb(255, 205, 86)',
        backgroundColor: 'rgba(255, 205, 86, 0.5)',
      },
      {
        label: 'Positive',
        data: positiveData,
        borderColor: 'rgb(75, 192, 192)',
        backgroundColor: 'rgba(75, 192, 192, 0.5)',
      },
    ],
  };
};

export function SentimentLineChart() {
  const chartData = transformData(data2_sample);
  return (
  <div className="flex justify-center p-7">
    <div className="card shadow-xl bg-base-200 w-3/4">
      <div className="card-body">
        <Line options={options} data={chartData} />
      </div>
    </div>
  </div>
  );
}
