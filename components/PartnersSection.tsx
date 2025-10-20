
import React from 'react';
import { PartnerLogoOne, PartnerLogoTwo, PartnerLogoThree, PartnerLogoFour, PartnerLogoFive, PartnerLogoSix } from './icons/PartnerLogos';

const PartnersSection: React.FC = () => {
  const partners = [
    <PartnerLogoOne />, <PartnerLogoTwo />, <PartnerLogoThree />,
    <PartnerLogoFour />, <PartnerLogoFive />, <PartnerLogoSix />
  ];

  return (
    <section id="partners" className="py-20 md:py-28 bg-dark-secondary/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">Our Trusted Partners & Affiliates</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-400">We collaborate with industry leaders to provide you with a world-class trading experience.</p>
        </div>
        <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {partners.map((Logo, index) => (
            <div key={index} className="flex justify-center text-gray-500 transition-all duration-300 hover:text-white filter grayscale hover:grayscale-0">
              {React.cloneElement(Logo, { className: "h-10 w-auto" })}
            </div>
          ))}
        </div>
        <div className="mt-20 bg-dark-tertiary rounded-xl p-8 md:p-12 border border-gray-700/50 text-center">
             <h3 className="text-2xl font-bold text-white mb-3">Become a SashaTrades Affiliate</h3>
            <p className="text-gray-400 max-w-xl mx-auto mb-6">Join our partner program and earn competitive commissions by referring new traders to our platform.</p>
             <a
                href="#"
                className="inline-block bg-sky-500 hover:bg-sky-600 text-white font-semibold px-8 py-3 rounded-md transition-all duration-300 shadow-lg shadow-sky-500/20 hover:shadow-sky-500/40 transform hover:-translate-y-0.5"
              >
                Join as a Partner
              </a>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
