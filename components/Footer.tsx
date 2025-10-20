import React from 'react';
import { LogoIcon } from './icons/LogoIcon';
import { TwitterIcon, LinkedinIcon, GithubIcon } from './icons/SocialIcons';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark-secondary border-t border-gray-700/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <a href="#" className="flex items-center gap-2 mb-4">
              <LogoIcon className="h-8 w-auto text-sky-400" />
              <span className="text-xl font-bold text-white">SashaTrades</span>
            </a>
            <p className="text-gray-400 text-sm">
              Building wealth through intelligent, managed investments.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-gray-400 hover:text-sky-400 transition-colors"><TwitterIcon /></a>
              <a href="#" className="text-gray-400 hover:text-sky-400 transition-colors"><LinkedinIcon /></a>
              <a href="#" className="text-gray-400 hover:text-sky-400 transition-colors"><GithubIcon /></a>
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">Solutions</h3>
            <ul className="mt-4 space-y-3">
              <li><a href="#fund-plans" className="text-base text-gray-400 hover:text-white">Managed Portfolios</a></li>
              <li><a href="#about" className="text-base text-gray-400 hover:text-white">AI-Driven Strategies</a></li>
              <li><a href="#" className="text-base text-gray-400 hover:text-white">Performance Reporting</a></li>
              <li><a href="#about" className="text-base text-gray-400 hover:text-white">Secure Investments</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">Support</h3>
            <ul className="mt-4 space-y-3">
              <li><a href="#fund-plans" className="text-base text-gray-400 hover:text-white">Fund Plans</a></li>
              <li><a href="#faq" className="text-base text-gray-400 hover:text-white">FAQs</a></li>
              <li><a href="#" className="text-base text-gray-400 hover:text-white">Knowledge Base</a></li>
              <li><a href="#contact" className="text-base text-gray-400 hover:text-white">Help Center</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">Legal</h3>
            <ul className="mt-4 space-y-3">
              <li><a href="#" className="text-base text-gray-400 hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="text-base text-gray-400 hover:text-white">Terms of Service</a></li>
              <li><a href="#" className="text-base text-gray-400 hover:text-white">Risk Disclosure</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 border-t border-gray-700/50 pt-8">
          <p className="text-sm text-gray-500 text-center">
            &copy; {new Date().getFullYear()} SashaTrades. All rights reserved. Investing in financial markets involves risk and may not be suitable for all investors. Past performance is not indicative of future results.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;