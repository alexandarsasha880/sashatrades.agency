import React from 'react';
import { TrendUpIcon } from './icons/ArrowIcons';
import { FireIcon } from './icons/FireIcon';

interface TopMoverWidgetProps {
  size?: 'small' | 'large';
}

export const TopMoverWidget: React.FC<TopMoverWidgetProps> = ({ size = 'large' }) => {
  const isSmall = size === 'small';
  
  return (
    <div className={`bg-dark-secondary/50 backdrop-blur-sm border border-gray-700/50 flex flex-col justify-center transition-all hover:border-green-500/50 hover:-translate-y-1 ${isSmall ? 'rounded-lg p-3 gap-1 h-28' : 'rounded-xl p-4 gap-2'}`}>
        <div className="flex items-center justify-between">
            <span className={`font-bold text-white ${isSmall ? 'text-xs' : 'text-sm'}`}>TOP MOVER</span>
            <FireIcon className={`text-green-400 ${isSmall ? 'w-4 h-4' : 'w-5 h-5'}`} />
        </div>
      <div className="flex flex-col items-start">
        <span className={`font-bold text-white ${isSmall ? 'text-lg' : 'text-xl'}`}>GBP/JPY</span>
        <div className={`flex items-center gap-2 font-mono font-bold text-green-400 ${isSmall ? 'text-2xl' : 'text-3xl'}`}>
            <TrendUpIcon className={isSmall ? 'w-5 h-5' : 'w-6 h-6'} />
            <span>+1.25%</span>
        </div>
      </div>
    </div>
  );
};
