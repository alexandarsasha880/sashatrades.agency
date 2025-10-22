
import React from 'react';
import { BookIcon } from './icons/BookIcon';

const EducationSection: React.FC = () => {
  return (
    <section id="education" className="py-20 md:py-28 bg-dark-primary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">Learn & Grow with SofiaTrades</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-400">Your journey to becoming a trading expert starts here. Access our exclusive resources.</p>
        </div>
        <div className="grid lg:grid-cols-5 gap-8 items-center">
            <div className="lg:col-span-3 bg-dark-secondary rounded-xl p-8 lg:p-12 border border-gray-700/50 flex flex-col md:flex-row items-center gap-8">
                <div className="flex-shrink-0 text-sky-400">
                    <BookIcon className="w-24 h-24" />
                </div>
                <div>
                    <h3 className="text-2xl font-bold text-white mb-3">Download Our Free Forex Strategy Guide</h3>
                    <p className="text-gray-400 mb-6">Get exclusive insights, tips, and strategies used by pro traders to maximize profits and minimize risks. Enter your email to get your copy instantly.</p>
                    <form className="flex flex-col sm:flex-row gap-3">
                        <input type="email" placeholder="your.email@example.com" className="flex-grow bg-dark-tertiary border border-gray-600 rounded-md px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-sky-500" required />
                        <button type="submit" className="bg-sky-500 hover:bg-sky-600 text-white font-semibold px-6 py-3 rounded-md transition-all duration-300 transform hover:-translate-y-0.5">
                            Download Now
                        </button>
                    </form>
                </div>
            </div>
             <div className="lg:col-span-2 space-y-6">
                <div className="bg-dark-secondary p-6 rounded-xl border border-gray-700/50 hover:border-sky-500/50 transition-colors">
                    <h4 className="font-bold text-white text-lg">Upcoming Webinar</h4>
                    <p className="text-gray-400 text-sm mb-3">Mastering Candlestick Patterns | June 28, 2024</p>
                    <a href="#" className="font-semibold text-sky-400 hover:text-sky-300 text-sm">Register Now &rarr;</a>
                </div>
                 <div className="bg-dark-secondary p-6 rounded-xl border border-gray-700/50 hover:border-sky-500/50 transition-colors">
                    <h4 className="font-bold text-white text-lg">Featured Article</h4>
                    <p className="text-gray-400 text-sm mb-3">The Psychology of Trading: How to Keep a Cool Head</p>
                    <a href="#" className="font-semibold text-sky-400 hover:text-sky-300 text-sm">Read More &rarr;</a>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
