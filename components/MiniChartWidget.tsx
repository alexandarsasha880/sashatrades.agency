import React from 'react';

interface MiniChartWidgetProps {
  size?: 'small' | 'large';
}

export const MiniChartWidget: React.FC<MiniChartWidgetProps> = ({ size = 'large' }) => {
    const isSmall = size === 'small';
    const points = "0,20 10,25 20,15 30,20 40,10 50,15 60,5 70,10 80,0 90,5 100,10";

    return (
        <div className={`bg-dark-secondary/50 backdrop-blur-sm border border-gray-700/50 flex flex-col transition-all hover:border-red-500/50 hover:-translate-y-1 ${isSmall ? 'rounded-lg p-3 gap-1' : 'rounded-xl p-4 gap-2'}`}>
            <div className="flex justify-between items-center">
                <span className={`font-bold text-white ${isSmall ? 'text-sm' : 'text-lg'}`}>XAU/USD</span>
                 <span className={`font-mono bg-red-500/10 text-red-400 rounded-full ${isSmall ? 'text-xs px-1.5 py-0.5' : 'text-sm px-2 py-0.5'}`}>-0.21%</span>
            </div>
            <div className={`flex items-end ${isSmall ? 'gap-2' : 'gap-4'}`}>
                <div className="flex-1">
                     <p className={`font-mono font-semibold text-white ${isSmall ? 'text-xl' : 'text-2xl'}`}>2320.50</p>
                     <p className={`text-red-400 ${isSmall ? 'text-xs' : 'text-sm'}`}>-4.95</p>
                </div>
                <div className={isSmall ? 'w-20 h-8' : 'w-24 h-10'}>
                    <svg viewBox="0 0 100 40" className="w-full h-full">
                        <defs>
                            <linearGradient id="sparkline-gradient-red" x1="0%" y1="0%" x2="0%" y2="100%">
                                <stop offset="0%" stopColor="#f87171" stopOpacity="0.4" />
                                <stop offset="100%" stopColor="#f87171" stopOpacity="0" />
                            </linearGradient>
                        </defs>
                        <polyline
                            fill="url(#sparkline-gradient-red)"
                            points="0,20 10,25 20,15 30,20 40,10 50,15 60,5 70,10 80,0 90,5 100,10 100,40 0,40"
                        />
                        <polyline
                            fill="none"
                            stroke="#f87171"
                            strokeWidth="2"
                            points={points}
                        />
                    </svg>
                </div>
            </div>
        </div>
    );
};