import React from 'react';

const CtaSection: React.FC = () => {
  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <div className="relative bg-gradient-to-br from-sky-500/80 to-blue-600/80 rounded-2xl p-8 md:p-12 text-center overflow-hidden">
          <div className="absolute inset-0 bg-dark-primary/20 opacity-50"></div>
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-4">
              Ready to Grow Your Capital?
            </h2>
            <p className="max-w-2xl mx-auto text-lg text-gray-200 mb-8">
              Discover our expert-managed investment funds and start your journey towards automated returns today.
            </p>
            <a
              href="#fund-plans"
              className="inline-block bg-white hover:bg-gray-200 text-dark-primary font-bold px-8 py-4 rounded-lg transition-all duration-300 shadow-2xl transform hover:-translate-y-1"
            >
              Explore Our Funds
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;