
import React from 'react';
import { AnalyticsIcon } from './icons/AnalyticsIcon';
import { SecurityIcon } from './icons/SecurityIcon';
import { SpeedIcon } from './icons/SpeedIcon';
import { SupportIcon } from './icons/SupportIcon';
import { ToolsIcon } from './icons/ToolsIcon';
import { WalletIcon } from './icons/WalletIcon';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => (
  <div className="bg-dark-secondary p-8 rounded-xl border border-gray-700/50 transition-all duration-300 hover:border-sky-500/50 hover:-translate-y-2 hover:shadow-2xl hover:shadow-sky-500/10">
    <div className="mb-6 inline-block bg-dark-tertiary p-4 rounded-lg text-sky-400">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </div>
);

const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: <AnalyticsIcon className="w-8 h-8" />,
      title: 'AI-Powered Analytics',
      description: 'Gain a competitive edge with our predictive market analysis and automated pattern recognition.',
    },
    {
      icon: <SpeedIcon className="w-8 h-8" />,
      title: 'Ultra-Low Latency',
      description: 'Execute trades in microseconds with our global server infrastructure, ensuring minimal slippage.',
    },
    {
      icon: <SecurityIcon className="w-8 h-8" />,
      title: 'Institutional Security',
      description: 'Your funds are protected with multi-layered security, cold storage, and advanced encryption.',
    },
    {
      icon: <ToolsIcon className="w-8 h-8" />,
      title: 'Advanced Trading Tools',
      description: 'Access a full suite of professional-grade charting tools, indicators, and risk management features.',
    },
    {
      icon: <SupportIcon className="w-8 h-8" />,
      title: '24/7 Expert Support',
      description: 'Our dedicated team of market experts is available around the clock to assist you.',
    },
    {
      icon: <WalletIcon className="w-8 h-8" />,
      title: 'Flexible Funding Options',
      description: 'Deposit and withdraw funds seamlessly with a wide range of supported payment methods.',
    },
  ];

  return (
    <section id="features" className="py-20 md:py-28 bg-dark-primary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">The Ultimate Trading Toolkit</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-400">Everything you need to succeed in the fast-paced world of forex trading.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
