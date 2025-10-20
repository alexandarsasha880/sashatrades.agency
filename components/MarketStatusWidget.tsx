import React, { useState, useEffect } from 'react';

interface MarketStatusWidgetProps {
  size?: 'small' | 'large';
}

interface Market {
  name: string;
  openUtc: number;
  closeUtc: number;
}

const markets: Market[] = [
  { name: 'LDN', openUtc: 8, closeUtc: 16 }, // London
  { name: 'NYC', openUtc: 13, closeUtc: 21 }, // New York
  { name: 'TKY', openUtc: 0, closeUtc: 8 }, // Tokyo
];

const MarketStatusPill: React.FC<{ market: Market; isOpen: boolean, isSmall: boolean }> = ({ market, isOpen, isSmall }) => (
  <div className="flex items-center gap-1.5">
    <span className={`w-2 h-2 rounded-full ${isOpen ? 'bg-green-400 animate-pulse' : 'bg-red-500'}`}></span>
    <span className={`font-mono font-medium text-gray-300 ${isSmall ? 'text-xs' : 'text-sm'}`}>{market.name}</span>
  </div>
);


export const MarketStatusWidget: React.FC<MarketStatusWidgetProps> = ({ size = 'large' }) => {
  const isSmall = size === 'small';
  const [marketStatuses, setMarketStatuses] = useState<{ [key: string]: boolean }>({});

  useEffect(() => {
    const checkStatus = () => {
      const currentUtcHour = new Date().getUTCHours();
      const newStatuses = markets.reduce((acc, market) => {
        acc[market.name] = currentUtcHour >= market.openUtc && currentUtcHour < market.closeUtc;
        return acc;
      }, {} as { [key: string]: boolean });
      setMarketStatuses(newStatuses);
    };

    checkStatus();
    const interval = setInterval(checkStatus, 60000); // Check every minute

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`bg-dark-secondary/50 backdrop-blur-sm border border-gray-700/50 flex flex-col justify-center transition-all hover:border-blue-500/50 hover:-translate-y-1 ${isSmall ? 'rounded-lg p-3 gap-2' : 'rounded-xl p-4 gap-2'}`}>
        <div className="flex items-center justify-between">
            <span className={`font-bold text-white ${isSmall ? 'text-sm' : 'text-base'}`}>Market Hours</span>
        </div>
        <div className={`flex justify-between items-center ${isSmall ? 'gap-2' : 'gap-4'}`}>
          {markets.map(market => (
            <MarketStatusPill key={market.name} market={market} isOpen={!!marketStatuses[market.name]} isSmall={isSmall} />
          ))}
        </div>
    </div>
  );
};
