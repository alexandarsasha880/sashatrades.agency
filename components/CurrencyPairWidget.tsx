import React from 'react';
import { TrendUpIcon, TrendDownIcon } from './icons/ArrowIcons';

interface CurrencyPairWidgetProps {
  size?: 'small' | 'large';
}

export const CurrencyPairWidget: React.FC<CurrencyPairWidgetProps> = ({ size = 'large' }) => {
  const isSmall = size === 'small';

  const pair = "EUR/USD";
  const price = "1.0728";
  const change = "+0.0015";
  const changePercentage = "+0.14%";
  const isPositive = true;
  const colorClass = isPositive ? 'text-green-400' : 'text-red-400';
  
  return (
    <div className={`bg-dark-secondary/50 backdrop-blur-sm border border-gray-700/50 flex flex-col transition-all hover:border-sky-500/50 hover:-translate-y-1 ${isSmall ? 'rounded-lg p-3 gap-1' : 'rounded-xl p-4 gap-2'}`}>
      <div className="flex justify-between items-center">
        <span className={`font-bold text-white ${isSmall ? 'text-sm' : 'text-lg'}`}>{pair}</span>
        {isPositive ? <TrendUpIcon className={`${colorClass} ${isSmall ? 'w-5 h-5' : 'w-6 h-6'}`} /> : <TrendDownIcon className={`${colorClass} ${isSmall ? 'w-5 h-5' : 'w-6 h-6'}`} />}
      </div>
      <div>
        <p className={`font-mono font-semibold text-white ${isSmall ? 'text-xl' : 'text-2xl'}`}>{price}</p>
      </div>
      <div className={`flex items-baseline ${isSmall ? 'gap-1.5 text-xs' : 'gap-2 text-sm'}`}>
        <span className={colorClass}>{change}</span>
        <span className={`${colorClass} font-mono`}>({changePercentage})</span>
      </div>
    </div>
  );
};