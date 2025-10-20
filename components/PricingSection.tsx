import React from 'react';

const CheckIcon = () => (
  <svg className="w-5 h-5 text-sky-400 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
  </svg>
);

interface Plan {
    icon: string;
    name: string;
    description: string;
    minInvestment: string;
    roi: string;
    strategy: string;
    risk: { level: string; icon: string; color: string };
    lockPeriod: string;
    features: string[];
    cta: string;
    isPopular?: boolean;
    theme: { border: string; button: string;};
}

const fundPlans: Plan[] = [
    {
        icon: '🌱',
        name: 'Starter Fund – Steady Growth',
        description: 'For new investors seeking consistent, low-risk returns.',
        minInvestment: '$500',
        roi: '5–8%',
        strategy: 'Diversified swing trading with major currency pairs.',
        risk: { level: 'Low', icon: '🔹', color: 'text-sky-400' },
        lockPeriod: '30 days',
        features: ['Capital protection focus', 'Weekly performance reports', 'Instant profit withdrawals'],
        cta: 'Invest Now',
        theme: {
            border: 'border-sky-500/50',
            button: 'bg-dark-tertiary hover:bg-gray-700 text-gray-200'
        }
    },
    {
        icon: '🚀',
        name: 'Pro Fund – Balanced Performance',
        description: 'For intermediate investors wanting solid growth with moderate risk.',
        minInvestment: '$2,000',
        roi: '10–15%',
        strategy: 'Forex + Commodity pairs (gold, GBP/USD)',
        risk: { level: 'Medium', icon: '⚖️', color: 'text-yellow-400' },
        lockPeriod: '60 days',
        features: ['Hybrid trading approach (manual + AI systems)', 'Priority reporting', 'Dedicated account manager'],
        cta: 'Join the Pro Fund',
        isPopular: true,
        theme: {
            border: 'border-brand-gold',
            button: 'bg-brand-gold hover:bg-yellow-500 text-dark-primary'
        }
    },
    {
        icon: '💎',
        name: 'Elite Fund – High-Yield Portfolio',
        description: 'For experienced investors aiming for premium returns.',
        minInvestment: '$10,000',
        roi: '20–25%',
        strategy: 'Aggressive multi-asset strategy with professional oversight.',
        risk: { level: 'High', icon: '🔺', color: 'text-red-400' },
        lockPeriod: '90 days',
        features: ['Private fund manager access', 'Custom strategy adjustments', 'Monthly performance meetings'],
        cta: 'Apply for Elite Access',
        theme: {
            border: 'border-purple-500/50',
            button: 'bg-dark-tertiary hover:bg-gray-700 text-gray-200'
        }
    }
];

const FundPlanCard: React.FC<{ plan: Plan }> = ({ plan }) => (
    <div className={`relative bg-dark-secondary rounded-xl p-8 border ${plan.isPopular ? plan.theme.border : 'border-gray-700/50'} flex flex-col transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-sky-500/10`}>
        {plan.isPopular && (
            <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-brand-gold text-dark-primary text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider">Most Popular</div>
        )}
        <div className="text-4xl mb-4">{plan.icon}</div>
        <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
        <p className="text-gray-400 mb-6 flex-grow">{plan.description}</p>
        
        <div className="grid grid-cols-2 gap-x-4 gap-y-6 mb-8 border-y border-gray-700/50 py-6">
            <div>
                <p className="text-sm text-gray-400">Min. Investment</p>
                <p className="text-xl font-semibold text-white">{plan.minInvestment}</p>
            </div>
            <div>
                <p className="text-sm text-gray-400">Expected Monthly ROI</p>
                <p className="text-xl font-semibold text-white">{plan.roi}</p>
            </div>
            <div>
                <p className="text-sm text-gray-400">Risk Level</p>
                <p className={`text-xl font-semibold ${plan.risk.color}`}>{plan.risk.level} {plan.risk.icon}</p>
            </div>
            <div>
                <p className="text-sm text-gray-400">Lock Period</p>
                <p className="text-xl font-semibold text-white">{plan.lockPeriod}</p>
            </div>
             <div className="col-span-2">
                <p className="text-sm text-gray-400">Strategy</p>
                <p className="font-medium text-gray-300">{plan.strategy}</p>
            </div>
        </div>

        <ul className="space-y-4 mb-8">
            {plan.features.map((feature, index) => (
                <li key={index} className="flex items-center">
                    <CheckIcon />
                    <span className="text-gray-300">{feature}</span>
                </li>
            ))}
        </ul>
        <a href="#" className={`w-full text-center font-bold py-3 px-6 rounded-lg transition-all duration-300 mt-auto ${plan.theme.button}`}>
            {plan.cta}
        </a>
    </div>
);

const PricingSection: React.FC = () => {
    const addOns = [
      'Live ROI tracking on your Performance Dashboard',
      'Fair Profit Split: 70% for the investor, 30% for the manager',
      'Earn commissions with our exclusive Referral Program'
    ]

    return (
        <section id="fund-plans" className="py-20 md:py-28 bg-dark-secondary/50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">Invest Smart. Let Our Expert Fund Managers Trade for You.</h2>
                    <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-400">Choose a portfolio plan that aligns with your goals and risk appetite — our professionals handle the rest.</p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
                    {fundPlans.map(plan => <FundPlanCard key={plan.name} plan={plan} />)}
                </div>

                <div className="mt-20 bg-dark-tertiary/50 rounded-xl p-8 md:p-10 border border-gray-700/50">
                     <h3 className="text-2xl font-bold text-white text-center mb-6">All Plans Include</h3>
                     <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                        <div className="bg-dark-secondary p-4 rounded-lg">
                            <h4 className="font-semibold text-sky-400">📊 Performance Dashboard</h4>
                            <p className="text-gray-300 mt-1">Live ROI tracking</p>
                        </div>
                         <div className="bg-dark-secondary p-4 rounded-lg">
                            <h4 className="font-semibold text-sky-400">🤝 Fair Profit Split</h4>
                            <p className="text-gray-300 mt-1">70% investor / 30% manager</p>
                        </div>
                         <div className="bg-dark-secondary p-4 rounded-lg">
                            <h4 className="font-semibold text-sky-400">💸 Referral Program</h4>
                            <p className="text-gray-300 mt-1">Earn % on new investors</p>
                        </div>
                     </div>
                </div>
            </div>
        </section>
    );
};

export default PricingSection;