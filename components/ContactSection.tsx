
import React from 'react';
import { WhatsappIcon } from './icons/MessagingIcons';

const ContactSection: React.FC = () => {
    return (
        <section id="contact" className="py-20 md:py-28 bg-dark-primary">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">Book a Free Consultation</h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-400">Have questions? Our experts are here to help you get started on the right foot. Reach out today.</p>
                </div>
                <div className="bg-dark-secondary rounded-2xl p-8 md:p-12 border border-gray-700/50">
                    <div className="grid md:grid-cols-2 gap-10">
                        <div className="text-center md:text-left">
                            <h3 className="text-2xl font-bold text-white mb-4">Get in Touch Directly</h3>
                            <p className="text-gray-400 mb-6">Prefer to chat? Connect with us on your favorite platform or send us an email.</p>
                            <div className="space-y-4">
                                <a href="https://wa.me/13522019561" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center md:justify-start gap-3 bg-dark-tertiary p-3 rounded-lg hover:bg-gray-700 transition-colors">
                                    <WhatsappIcon className="w-6 h-6 text-green-400"/>
                                    <span className="font-semibold text-white">Chat on WhatsApp</span>
                                </a>
                            </div>
                            <div className="mt-8 text-gray-400">
                                <span className="font-semibold">Support Email:</span>
                                <a href="mailto:info@sashatrades.agency" className="ml-2 hover:text-sky-400">info@sashatrades.agency</a>
                            </div>
                        </div>

                        <form>
                            <div className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Full Name</label>
                                    <input type="text" id="name" name="name" className="w-full bg-dark-tertiary border border-gray-600 rounded-md px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-sky-500" required />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
                                    <input type="email" id="email" name="email" className="w-full bg-dark-tertiary border border-gray-600 rounded-md px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-sky-500" required />
                                </div>
                                <div>
                                    <label htmlFor="interest" className="block text-sm font-medium text-gray-300 mb-2">Trading Interest</label>
                                    <select id="interest" name="interest" className="w-full bg-dark-tertiary border border-gray-600 rounded-md px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-sky-500">
                                        <option>Getting Started</option>
                                        <option>Managed Accounts</option>
                                        <option>Strategy Consultation</option>
                                        <option>Partnerships</option>
                                    </select>
                                </div>
                                <button type="submit" className="w-full bg-sky-500 hover:bg-sky-600 text-white font-bold px-8 py-3 rounded-lg transition-all duration-300 shadow-lg shadow-sky-500/20 hover:shadow-sky-500/40 transform hover:-translate-y-1">
                                    Book My Call
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
