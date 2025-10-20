import React from 'react';

interface SentimentWidgetProps {
  size?: 'small' | 'large';
}

export const SentimentWidget: React.FC<SentimentWidgetProps> = ({ size = 'large' }) => {
    const isSmall = size === 'small';

    const percentage = 72; // 72% Bullish
    const radius = isSmall ? 25 : 30;
    const strokeWidth = isSmall ? 4 : 5;
    const viewBox = isSmall ? "0 0 60 60" : "0 0 70 70";
    const center = isSmall ? 30 : 35;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (percentage / 100) * circumference;

    return (
        <div className={`bg-dark-secondary/50 backdrop-blur-sm border border-gray-700/50 flex items-center transition-all hover:border-sky-500/50 hover:-translate-y-1 ${isSmall ? 'rounded-lg p-3 gap-3' : 'rounded-xl p-4 gap-4'}`}>
            <div className={`relative flex-shrink-0 ${isSmall ? 'w-14 h-14' : 'w-20 h-20'}`}>
                <svg className="w-full h-full" viewBox={viewBox}>
                    <circle
                        className="text-gray-700"
                        strokeWidth={strokeWidth}
                        stroke="currentColor"
                        fill="transparent"
                        r={radius}
                        cx={center}
                        cy={center}
                    />
                    <circle
                        className="text-sky-400"
                        strokeWidth={strokeWidth}
                        strokeDasharray={circumference}
                        strokeDashoffset={offset}
                        strokeLinecap="round"
                        stroke="currentColor"
                        fill="transparent"
                        r={radius}
                        cx={center}
                        cy={center}
                        transform={`rotate(-90 ${center} ${center})`}
                    />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                    <span className={`font-bold text-white ${isSmall ? 'text-lg' : 'text-xl'}`}>{percentage}%</span>
                </div>
            </div>
            <div className="flex-1">
                <p className={`font-bold text-white ${isSmall ? 'text-sm' : 'text-lg'}`}>Market Sentiment</p>
                <p className={`text-sky-400 font-medium ${isSmall ? 'text-sm' : ''}`}>Strongly Bullish</p>
            </div>
        </div>
    );
};