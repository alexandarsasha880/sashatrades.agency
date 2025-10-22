import React from 'react';
import { TwitterIcon, LinkedinIcon, GithubIcon } from './icons/SocialIcons';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark-secondary border-t border-gray-700/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <a href="#" className="flex items-center gap-2 mb-4">
              <img 
                src="/logo.PNG" 
                alt="SofiaTrades Logo" 
                className="h-8 w-auto"
              />
              <span className="text-xl font-bold text-white ml-2">SofiaTrades</span>
            </a>
            <p className="text-gray-400 text-sm">
              Your trusted partner in forex trading and wealth creation.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="https://www.facebook.com/share/1F1iLquEip/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-sky-400 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="https://wa.me/13522019561" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-400 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M17.5 14.5c-.3-.1-1.8-.9-2.1-1-.3-.1-.5-.1-.7.1-.2.3-.7.9-.9 1.1-.2.2-.4.3-.7.1-.7-.3-1.4-.7-2-1.2-.5-.5-1-1.1-1.4-1.7-.1-.3 0-.5.1-.7.2-.2.5-.6.6-.8.1-.2.1-.4 0-.6-.1-.2-.6-1.4-.8-1.9-.2-.5-.4-.4-.6-.4h-.6c-.2 0-.5.1-.8.3-.3.3-1.1 1.1-1.1 2.7 0 1.6 1.2 3.1 1.4 3.4.2.2 2.6 4 6.3 5.5.9.4 1.6.6 2.2.8.9.2 1.7.2 2.4.1.7-.1 2.1-.9 2.4-1.7.3-.8.3-1.5.2-1.7-.1-.3-.5-.4-.7-.5z"/>
                  <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0zm5.4 17.9c-.2.6-.8 1.1-1.4 1.3-.6.2-3.1.5-6.1-1.7-3-2.2-3.7-4.8-3.8-5.1-.1-.3-.1-.6.1-.9.2-.3.5-.4.8-.4h.2c.3 0 .7.1 1.1.5.4.4 1.3 1.3 1.5 1.4.2.2.3.3.2.5 0 .2-.1.3-.2.5-.1.1-.3.3-.5.5-.2.2-.3.4-.2.6.1.2.5.9 1.1 1.5.7.6 1.3.8 1.5.9.2 0 .4 0 .6-.1.2-.1.4-.2.6-.3.2-.1 1.1-.7 1.2-.7.1-.1.3-.1.5 0 .2.1.7.3 1.3.5.2.1.3.1.4.2.1.1.1.3.1.5 0 .1-.1.3-.2.5z"/>
                </svg>
              </a>
              <a href="mailto:info@sashatrades.agency" className="text-gray-400 hover:text-red-400 transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">Solutions</h3>
            <ul className="mt-4 space-y-3">
              <li><a href="#fund-plans" className="text-base text-gray-400 hover:text-white">Investment Plans</a></li>
              <li><a href="#services" className="text-base text-gray-400 hover:text-white">Trading Services</a></li>
              <li><a href="#testimonials" className="text-base text-gray-400 hover:text-white">Success Stories</a></li>
              <li><a href="#events" className="text-base text-gray-400 hover:text-white">Upcoming Events</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">Support</h3>
            <ul className="mt-4 space-y-3">
              <li><a href="#how-it-works" className="text-base text-gray-400 hover:text-white">How It Works</a></li>
              <li><a href="#faq" className="text-base text-gray-400 hover:text-white">FAQs</a></li>
              <li><a href="#contact" className="text-base text-gray-400 hover:text-white">Contact Support</a></li>
              <li><a href="#" className="text-base text-gray-400 hover:text-white">Tutorials</a></li>
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
            &copy; {new Date().getFullYear()} SofiaTrades. All rights reserved. Forex trading involves substantial risk of loss and is not suitable for all investors. Past performance is not indicative of future results.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;