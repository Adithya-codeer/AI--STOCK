'use client';

import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend } from 'chart.js';

// Registering the required chart.js components
ChartJS.register(CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend);

interface StockChartProps {
  stockData: { timestamp: number; price: number }[];
}

const StockChart = ({ stockData }: StockChartProps) => {
  // Prepare data for the chart
  const chartData = {
    labels: stockData.map((data) => new Date(data.timestamp).toLocaleDateString()),
    datasets: [
      {
        label: 'Stock Price',
        data: stockData.map((data) => data.price),
        borderColor: 'rgba(75, 192, 192, 1)',
        fill: false,
      },
    ],
  };

  return <Line data={chartData} />;
};

export default StockChart;
