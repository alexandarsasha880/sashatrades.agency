
import React, { useState, useEffect } from 'react';

interface TickerItem {
  pair: string;
  price: number;
  change: number;
}

const initialData: TickerItem[] = [
  { pair: 'EUR/USD', price: 1.0725, change: 0.0012 },
  { pair: 'GBP/USD', price: 1.2589, change: -0.0005 },
  { pair: 'USD/JPY', price: 157.34, change: 0.25 },
  { pair: 'AUD/USD', price: 0.6651, change: 0.0009 },
  { pair: 'USD/CAD', price: 1.3678, change: -0.0011 },
  { pair: 'NZD/USD', price: 0.6133, change: 0.0007 },
  { pair: 'USD/CHF', price: 0.9145, change: 0.0015 },
  { pair: 'XAU/USD', price: 2325.50, change: -5.75 },
  { pair: 'BTC/USD', price: 67540.80, change: 1250.25 },
];

const MarketDataTicker: React.FC = () => {
  const [marketData, setMarketData] = useState<TickerItem[]>(initialData);

  useEffect(() => {
    const interval = setInterval(() => {
      setMarketData(prevData =>
        prevData.map(item => {
          const randomChange = (Math.random() - 0.5) * 0.001 * item.price;
          const newPrice = item.price + randomChange;
          return {
            ...item,
            price: newPrice,
            change: randomChange,
          };
        })
      );
    }, 2000);

    return () => clearInterval(interval);
  }, []);
  
  const tickerContent = marketData.map((item, index) => (
    <div key={index} className="flex items-center space-x-4 px-8 flex-shrink-0">
      <span className="font-medium text-gray-400">{item.pair}</span>
      <span className="font-mono font-semibold text-white">{item.price.toFixed(4)}</span>
      <span className={`font-mono font-semibold ${item.change >= 0 ? 'text-green-400' : 'text-red-400'}`}>
        {item.change >= 0 ? '▲' : '▼'} {Math.abs(item.change).toFixed(4)}
      </span>
    </div>
  ));

  return (
    <div className="bg-dark-secondary py-4 border-y border-gray-500/20 overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-r from-dark-secondary via-transparent to-dark-secondary z-10"></div>
      <div className="flex animate-ticker hover:animate-pause whitespace-nowrap">
        {tickerContent}
        {tickerContent} 
      </div>
    </div>
  );
};

export default MarketDataTicker;
