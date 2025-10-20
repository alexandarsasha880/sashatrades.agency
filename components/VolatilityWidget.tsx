import React from 'react';
import { GaugeIcon } from './icons/GaugeIcon';

interface VolatilityWidgetProps {
  size?: 'small' | 'large';
}

export const VolatilityWidget: React.FC<VolatilityWidgetProps> = ({ size = 'large' }) => {
    const isSmall = size === 'small';

    const level: 'Low' | 'Medium' | 'High' = 'High';
    
    const rotationMap = {
        Low: -60,
        Medium: 0,
        High: 60,
    };
    const colorMap = {
        Low: 'text-sky-400',
        Medium: 'text-yellow-400',
        High: 'text-orange-400',
    };
    const rotation = rotationMap[level];
    const color = colorMap[level];

    return (
        <div className={`bg-dark-secondary/50 backdrop-blur-sm border border-gray-700/50 flex flex-col justify-center transition-all hover:border-orange-500/50 hover:-translate-y-1 ${isSmall ? 'rounded-lg p-3 gap-1 h-28 text-center' : 'rounded-xl p-4 gap-3 flex-row items-center'}`}>
            <div className={`relative ${isSmall ? 'w-16 h-8 mx-auto' : 'w-20 h-10'}`}>
                <svg viewBox="0 0 100 50" className="w-full h-full">
                    {/* Background Arc */}
                    <path d="M10 45 A 40 40 0 0 1 90 45" strokeWidth="8" strokeLinecap="round" className="stroke-current text-gray-700" fill="none" />
                    {/* Labels */}
                    {!isSmall && (
                        <>
                        <text x="5" y="35" className="text-[8px] font-semibold fill-current text-gray-400">Low</text>
                        <text x="40" y="10" className="text-[8px] font-semibold fill-current text-gray-400">Med</text>
                        <text x="75" y="35" className="text-[8px] font-semibold fill-current text-gray-400">High</text>
                        </>
                    )}
                    {/* Needle */}
                    <line x1="50" y1="45" x2="50" y2="15" strokeWidth="3" strokeLinecap="round" className="stroke-current text-white transition-transform duration-500" style={{ transformOrigin: '50px 45px', transform: `rotate(${rotation}deg)` }} />
                    <circle cx="50" cy="45" r="4" className="fill-current text-white" />
                </svg>
            </div>
            <div className={isSmall ? '' : 'flex-1'}>
                <p className={`font-bold text-white ${isSmall ? 'text-xs mt-1' : 'text-sm'}`}>VOLATILITY</p>
                <p className={`font-semibold ${color} ${isSmall ? 'text-lg' : 'text-xl'}`}>{level}</p>
            </div>
        </div>
    );
};