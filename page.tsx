'use client';

import { useState } from "react";
import Hero from "./ui/hero";
import StockChartContainer from "./components/StockChartContainer";

export default function Home() {
  const [symbol, setSymbol] = useState("AAPL");
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim()) {
      setSymbol(inputValue.trim().toUpperCase());
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center p-24 font-sans">
      <Hero />

      {/* 🔍 Search Bar */}
      <section className="my-16 w-full max-w-xl">
        <form onSubmit={handleSubmit} className="flex items-center gap-4">
          <input
            type="text"
            placeholder="Enter stock symbol (e.g., AAPL)"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="flex-1 p-3 border border-gray-300 rounded-lg text-lg"
          />
          <button
            type="submit"
            className="px-4 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600"
          >
            Search
          </button>
        </form>
      </section>

      {/* 📈 Chart Section */}
      <section id="stock-visualization" className="my-16 w-full">
        <StockChartContainer symbol={symbol} />
      </section>


      <section id="why-choose-us" className="my-32">
        <h2 className="text-5xl font-semibold mb-5 text-center border-b border-b-green-300">
          Why Choose Our AI Chatbot?
        </h2>

        <ul className="text-xl md:text-3xl ">
          <li className="list-disc leading-loose">
            Data-Driven Insights: Leveraging vast amounts of historical stock data,
            our chatbot delivers data-driven predictions to guide your investment
            strategy.
          </li>
          <li className="list-disc leading-loose">
            Real-Time Predictions: Get instant predictions and market trends directly
            from our chatbot, allowing you to stay ahead of the curve.
          </li>
          <li className="list-disc leading-loose">
            User-Friendly Interface: Chat with our intuitive AI to receive
            easy-to-understand insights, whether you&apos;re a seasoned investor or
            just starting out.
          </li>
          <li className="list-disc leading-loose">
            Personalized Advice: Tailored recommendations based on your portfolio and
            investment goals.
          </li>
        </ul>
      </section>

      {/* Rest of the code */}
      <section id="how-it-works" className="my-32">
        <h2 className="text-5xl font-semibold mb-5 text-center border-b border-b-green-300">
          How It Works
        </h2>

        <ul className="text-xl md:text-3xl">
          <li className="list-decimal leading-loose">
            Connect: Simply start a conversation with our chatbot and input the stocks
            you&apos;re interested in.
          </li>
          <li className="list-decimal leading-loose">
            Analyze: Our AI analyzes the historical data and applies cutting-edge
            prediction models to forecast potential stock movements.
          </li>
          <li className="list-decimal leading-loose">
            User-Friendly Interface: Chat with our intuitive AI to receive
            easy-to-understand insights, whether you&apos;re a seasoned investor or
            just starting out.
          </li>
          <li className="list-decimal leading-loose">
            Predict: Receive real-time predictions and insights on stock performance,
            helping you make well-informed decisions.
          </li>
        </ul>
      </section>

      {/* Remaining sections */}
    </main>
  );
}
