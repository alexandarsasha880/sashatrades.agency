import React from 'react';
import { GlobeIcon } from './icons/GlobeIcon';
import { CurrencyPairWidget } from './CurrencyPairWidget';
import { MiniChartWidget } from './MiniChartWidget';
import { SentimentWidget } from './SentimentWidget';
import { TopMoverWidget } from './TopMoverWidget';
import { VolatilityWidget } from './VolatilityWidget';
import { MarketStatusWidget } from './MarketStatusWidget';


const HeroSection: React.FC = () => {
  return (
    <section className="relative pt-20 pb-10 md:py-32 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid lg:grid-cols-5 gap-10 items-center">
          <div className="lg:col-span-3 text-center md:text-left animate-fade-in-up">
            <span className="inline-block bg-dark-tertiary text-sky-400 text-sm font-semibold px-4 py-1 rounded-full mb-4">
              Professional Fund Management
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tighter mb-6">
              Grow Your Capital, Hands-Free with{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-blue-500">
                SashaTrades
              </span>
            </h1>
            <p className="max-w-xl mx-auto md:mx-0 text-lg md:text-xl text-gray-400 mb-8">
              Invest with confidence. Our team of professional traders, powered by proprietary AI, works to deliver consistent returns. We handle the complexity of the market so you can focus on your financial goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a
                href="#fund-plans"
                className="inline-block bg-sky-500 hover:bg-sky-600 text-white font-bold px-8 py-4 rounded-lg transition-all duration-300 shadow-lg shadow-sky-500/20 hover:shadow-sky-500/40 transform hover:-translate-y-1"
              >
                Explore Investment Plans
              </a>
              <a
                href="#process"
                className="inline-block bg-dark-secondary hover:bg-dark-tertiary text-gray-200 font-bold px-8 py-4 rounded-lg transition-all duration-300 border border-gray-700 hover:border-gray-500"
              >
                Learn How It Works
              </a>
            </div>
          </div>
          
          {/* Right Column: Globe & Widgets */}
          <div className="lg:col-span-2 relative flex items-center justify-center h-[400px] sm:h-[450px] lg:h-full lg:min-h-[450px]">
            <div className="absolute w-[550px] h-[450px] scale-[0.6] sm:scale-[0.85] lg:scale-100">
              <GlobeIcon className="w-full h-full object-contain max-w-md mx-auto opacity-90" />
              
              <div className="absolute top-10 left-0 w-48 animate-fade-in-up" style={{ animationDelay: '400ms', animationFillMode: 'backwards' }}>
                <CurrencyPairWidget size="small" />
              </div>

               <div className="absolute top-1/2 -translate-y-1/2 -left-8 w-44 animate-fade-in-up" style={{ animationDelay: '500ms', animationFillMode: 'backwards' }}>
                <TopMoverWidget size="small" />
              </div>

              <div className="absolute bottom-10 right-0 w-52 animate-fade-in-up" style={{ animationDelay: '600ms', animationFillMode: 'backwards' }}>
                <MiniChartWidget size="small" />
              </div>

              <div className="absolute top-1/2 -translate-y-1/2 -right-8 w-48 animate-fade-in-up" style={{ animationDelay: '700ms', animationFillMode: 'backwards' }}>
                 <VolatilityWidget size="small" />
              </div>

              <div className="absolute bottom-4 left-4 w-60 animate-fade-in-up" style={{ animationDelay: '800ms', animationFillMode: 'backwards' }}>
                 <SentimentWidget size="small" />
              </div>

              <div className="absolute top-10 -right-4 w-48 animate-fade-in-up" style={{ animationDelay: '900ms', animationFillMode: 'backwards' }}>
                 <MarketStatusWidget size="small" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;