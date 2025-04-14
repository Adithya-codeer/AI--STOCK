'use client';

import React, { useEffect, useRef } from 'react';
import { Chart, registerables } from 'chart.js';
import 'chartjs-adapter-date-fns';

Chart.register(...registerables);

const ChartComponent = ({ data }: { data: { timestamp: number; price: number }[] }) => {
  const chartRef = useRef<HTMLCanvasElement | null>(null);
  const chartInstanceRef = useRef<Chart | null>(null);

  useEffect(() => {
    if (chartRef.current) {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }

      const chartData = {
        labels: data.map((d) => new Date(d.timestamp)),
        datasets: [
          {
            label: 'Stock Price',
            data: data.map((d) => d.price),
            borderColor: 'rgba(75, 192, 192, 1)',
            fill: false,
          },
        ],
      };

      chartInstanceRef.current = new Chart(chartRef.current, {
        type: 'line',
        data: chartData,
        options: {
          responsive: true,
          scales: {
            x: {
              type: 'time',
              time: {
                unit: 'day',
              },
              title: {
                display: true,
                text: 'Date',
              },
            },
            y: {
              title: {
                display: true,
                text: 'Price',
              },
              beginAtZero: false,
            },
          },
        },
      });
    }

    return () => {
      chartInstanceRef.current?.destroy();
    };
  }, [data]);

  return <canvas ref={chartRef} />;
};

export default ChartComponent;
