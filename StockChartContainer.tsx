'use client';

import { useEffect, useState } from 'react';
import ChartComponent from '../ui/Chart';

interface StockData {
  timestamp: number;
  price: number;
}

const ChartContainer = ({ symbol }: { symbol: string }) => {
  const [stockData, setStockData] = useState<StockData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStockData = async () => {
      try {
        const res = await fetch(`/api/stock?symbol=${symbol}`);
        const data = await res.json();
        setStockData(data);
      } catch (err) {
        console.error('Error loading stock data:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchStockData();
  }, [symbol]);

  return (
    <div className="my-16">
      <h2 className="text-3xl font-bold text-center mb-4">{symbol} Stock Chart</h2>
      {loading ? (
        <p className="text-center">Loading...</p>
      ) : (
        <ChartComponent data={stockData} />
      )}
    </div>
  );
};

export default ChartContainer;
