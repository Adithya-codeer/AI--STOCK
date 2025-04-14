import { NextResponse } from 'next/server';
import yahooFinance from 'yahoo-finance2';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const symbol = searchParams.get('symbol') || 'AAPL';

  try {
    const result = await yahooFinance.historical(symbol, {
      period1: new Date('2023-01-01'),
      interval: '1d',
    });

    const data = result.map((item: any) => ({
      timestamp: new Date(item.date).getTime(),
      price: item.close,
    }));

    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching stock data:', error);
    return NextResponse.json({ error: 'Failed to fetch stock data' }, { status: 500 });
  }
}
