
import React from 'react';
import { ConsultationIcon, ManagedAccountsIcon, SignalsIcon, TrainingIcon, CopyTradingIcon, RiskManagementIcon } from './icons/ServiceIcons';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => (
  <div className="bg-dark-secondary p-8 rounded-xl border border-gray-700/50 transition-all duration-300 hover:border-sky-500/50 hover:-translate-y-2 hover:shadow-2xl hover:shadow-sky-500/10 text-center">
    <div className="mb-6 inline-block bg-dark-tertiary p-4 rounded-full text-sky-400">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </div>
);

const ServicesSection: React.FC = () => {
  const services = [
    { icon: <ConsultationIcon />, title: 'Forex Consultation', description: 'Personalized 1-on-1 guidance from our market experts to refine your trading strategy.' },
    { icon: <ManagedAccountsIcon />, title: 'Managed Accounts', description: 'Let our professional traders manage your portfolio to meet your financial goals.' },
    { icon: <SignalsIcon />, title: 'Market Signals & Analysis', description: 'Receive real-time, high-probability trade signals and in-depth market reports.' },
    { icon: <TrainingIcon />, title: 'Training & Webinars', description: 'Upskill your trading knowledge with our exclusive courses and live expert-led webinars.' },
    { icon: <CopyTradingIcon />, title: 'Copy Trading Support', description: 'Automatically replicate the trades of proven, successful traders in our community.' },
    { icon: <RiskManagementIcon />, title: 'Risk Management Advisory', description: 'Protect your capital with our bespoke risk assessment and management strategies.' },
  ];

  return (
    <section id="services" className="py-20 md:py-28 bg-dark-secondary/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">Our Professional Services</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-400">A comprehensive suite of solutions designed to empower every type of trader.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
