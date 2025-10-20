import React from 'react';
import { TransparencyIcon, PartnershipIcon } from './icons/ValueIcons';
import { ManagedAccountsIcon } from './icons/ServiceIcons';

const StatCard: React.FC<{ value: string; label: string }> = ({ value, label }) => (
    <div className="text-center">
        <span className="text-4xl font-bold text-sky-400 tracking-tighter">{value}</span>
        <p className="text-sm text-gray-400 mt-1">{label}</p>
    </div>
);

const ValueCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => (
    <div className="flex items-start gap-4">
        <div className="flex-shrink-0 bg-dark-tertiary text-sky-400 p-3 rounded-lg">
            {icon}
        </div>
        <div>
            <h4 className="font-semibold text-white">{title}</h4>
            <p className="text-gray-400 text-sm">{description}</p>
        </div>
    </div>
);

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-dark-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="animate-fade-in-up">
             <span className="inline-block bg-dark-tertiary text-sky-400 text-sm font-semibold px-4 py-1 rounded-full mb-4">
              The SashaTrades Difference
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-6">
              Pioneering the Future of Managed Investments
            </h2>
            <p className="text-lg text-gray-400 mb-6">
              SashaTrades was founded on a simple principle: to provide intelligent, accessible, and transparent investment solutions. We bridge the gap between retail investors and institutional-grade fund management, leveraging a powerful synergy of seasoned financial experts and proprietary AI technology.
            </p>
            <p className="text-lg text-gray-400">
              Our mission is to empower you to achieve your financial goals through meticulously managed portfolios. We handle the market's complexity, so you can enjoy the benefits of strategic, hands-free growth.
            </p>
          </div>

          <div className="bg-dark-secondary rounded-xl p-8 border border-gray-700/50 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            <div className="grid grid-cols-2 gap-8 mb-8 pb-8 border-b border-gray-700/50">
                <StatCard value="10+" label="Years of Experience" />
                <StatCard value="$50M+" label="Assets Managed" />
                <StatCard value="98%" label="Client Satisfaction" />
                <StatCard value="15+" label="Expert Fund Managers" />
            </div>
            <div className="space-y-6">
                <ValueCard 
                    icon={<TransparencyIcon />} 
                    title="Radical Transparency" 
                    description="Clear, concise reporting and a fee structure with no surprises. You always know where your investment stands."
                />
                <ValueCard 
                    icon={<ManagedAccountsIcon className="w-6 h-6" />} 
                    title="Expert-Led Management" 
                    description="Our team of seasoned fund managers applies decades of market experience to navigate complex markets and achieve your growth targets."
                />
                <ValueCard 
                    icon={<PartnershipIcon />} 
                    title="Client-Centric Partnership" 
                    description="Your success is our benchmark. We provide dedicated support and strategies tailored to your financial journey."
                />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;