import React from 'react';

const HowItWorksSection: React.FC = () => {
  return (
    <section id="process" className="py-20 md:py-28 bg-dark-secondary/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">Start Investing in 3 Simple Steps</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-400">Begin your journey towards automated portfolio growth with our straightforward and secure process.</p>
        </div>
        <div className="relative">
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-700/50 -translate-y-1/2"></div>
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5">
              <div className="absolute top-0 left-1/2 w-1/3 h-full bg-gradient-to-r from-sky-500/0 via-sky-500 to-sky-500/0 animate-pulse"></div>
          </div>
          
          <div className="relative grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="relative inline-block">
                <div className="w-24 h-24 flex items-center justify-center bg-dark-tertiary border-2 border-sky-500 rounded-full text-sky-400 text-3xl font-bold mb-6 shadow-lg shadow-sky-500/20">
                  1
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Choose Your Plan</h3>
              <p className="text-gray-400">Explore our fund management plans and select the one that best fits your financial goals and risk tolerance.</p>
            </div>
            
            <div className="text-center">
              <div className="relative inline-block">
                <div className="w-24 h-24 flex items-center justify-center bg-dark-tertiary border-2 border-sky-500 rounded-full text-sky-400 text-3xl font-bold mb-6 shadow-lg shadow-sky-500/20">
                  2
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Fund Your Portfolio</h3>
              <p className="text-gray-400">Make a secure deposit to fund your chosen investment plan. We support various methods for your convenience.</p>
            </div>
            
            <div className="text-center">
              <div className="relative inline-block">
                <div className="w-24 h-24 flex items-center justify-center bg-dark-tertiary border-2 border-sky-500 rounded-full text-sky-400 text-3xl font-bold mb-6 shadow-lg shadow-sky-500/20">
                  3
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Track Your Growth</h3>
              <p className="text-gray-400">Our expert managers handle the trading. Simply monitor your portfolio's performance and watch your investment grow.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;