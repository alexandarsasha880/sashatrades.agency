import React, { useState, useRef, useEffect } from 'react';
import { LogoIcon } from './icons/LogoIcon';

const faqData = {
    'Getting Started': [
        { 
            q: "What is SashaTrades?",
            a: "At SashaTrades, we're not just another trading platform - we're your partners in wealth creation. I've spent over a decade in the markets, and I've built this firm to bring institutional-grade trading strategies to individual investors. We combine deep market analysis with disciplined risk management to help our clients navigate the complexities of the financial markets."
        },
        { 
            q: "Who can trade with SashaTrades?",
            a: "I personally work with a select group of clients who are serious about growing their capital. Whether you're just starting your investment journey or you're an experienced trader, what matters most is that we align on strategy and risk tolerance. I take the time to understand each client's financial goals before we begin working together."
        },
        {
            q: "How do I open an account?",
            a: "The process is straightforward but thorough. After you express interest, we'll schedule a consultation to discuss your investment goals and risk tolerance. Once we determine if we're a good fit, my team will guide you through the onboarding process. I believe in complete transparency, so you'll have direct access to me for any questions throughout your journey with us."
        },
    ],
    'Accounts & Funding': [
        { 
            q: "What funding methods do you accept?",
            a: "I understand that flexibility is important. We accept various funding methods including bank transfers and major credit cards. For larger investments, I recommend direct bank transfers as they're more cost-effective. My team will work with you to find the most convenient and secure funding solution for your needs."
        },
        {
            q: "Are there any deposit or withdrawal fees?",
            a: "We keep our fee structure simple and transparent. There are no hidden charges - what you see is what you get. While we don't charge deposit fees, some banks or payment processors might. I always advise my clients to check with their financial institutions to avoid any surprises."
        },
        {
            q: "How long do withdrawals take?",
            a: "I know how important liquidity is to my clients. E-wallet withdrawals are typically processed within 24 hours, while bank transfers might take 1-3 business days. For urgent withdrawals, my team is available to expedite the process whenever possible. We value your trust and aim to make every transaction as smooth as possible."
        },
    ],
    'Security & Regulation': [
        {
            q: "How are my funds protected?",
            a: "Your security is my top priority. I've implemented multiple layers of protection, including segregated accounts at top-tier banks and advanced encryption. I personally review all security protocols regularly because I believe your peace of mind is just as important as your returns."
        },
        {
            q: "Is SashaTrades regulated?",
            a: "Absolutely. I've built SashaTrades on a foundation of trust and compliance. We operate under strict regulatory oversight, and I take our compliance obligations extremely seriously. I'm committed to maintaining the highest standards of financial regulation and transparency."
        },
        {
            q: "What security measures are in place?",
            a: "We use bank-level security measures including 256-bit encryption and two-factor authentication. But beyond the technology, I've implemented strict internal controls and regular security audits. I personally oversee our security protocols because I understand that your trust is hard-earned and easily lost."
        }
    ],
    'Trading': [
        {
            q: "What trading platforms do you offer?",
            a: "I personally prefer and recommend MetaTrader 4 for its reliability and comprehensive toolset. It's what I've used throughout my career, and I find it offers the best combination of functionality and ease of use. My team and I can provide personalized guidance on how to make the most of its features."
        },
        {
            q: "What are your spreads like?",
            a: "We've negotiated some of the tightest spreads in the industry, starting from 0.0 pips on major pairs. But more importantly, I focus on the quality of execution. A tight spread means nothing if you can't get your orders filled at the right price. That's why we've invested in top-tier liquidity providers to ensure optimal trade execution."
        },
        {
            q: "What assets can I trade?",
            a: "I've carefully curated a selection of over 2,000 instruments that I believe offer the best opportunities in today's markets. From major forex pairs to select cryptocurrencies, each asset has been vetted by my team. I don't believe in overwhelming clients with choices - I focus on quality over quantity."
        },
        {
            q: "Do you offer leverage?",
            a: "Yes, but I always advise caution with leverage. While we offer up to 1:500 for qualified clients, I work closely with each investor to determine an appropriate level based on their experience and risk tolerance. Remember, my goal isn't just to see your account grow, but to help you preserve and build wealth over the long term."
        }
    ]
};

type Category = keyof typeof faqData;

const FaqSection: React.FC = () => {
    const [messages, setMessages] = useState<{ sender: 'manager' | 'user'; text: string; isTyping?: boolean }[]>([
        { 
            sender: 'manager', 
            text: "Hello, I'm Alex, your dedicated fund manager at SashaTrades. I'm here to personally address any questions you have about our investment strategies, portfolio performance, or market insights. What would you like to discuss?",
            isTyping: false
        }
    ]);
    const [activeCategory, setActiveCategory] = useState<Category | null>(null);
    const [isAnswered, setIsAnswered] = useState(false);
    const [isTyping, setIsTyping] = useState(false);
    const chatEndRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages, isTyping]);

    const handleCategorySelect = (category: Category) => {
        setActiveCategory(category);
    };

    const handleQuestionSelect = (q: string, a: string) => {
        // Add user question
        setMessages(prev => [...prev, { sender: 'user', text: q }]);
        setActiveCategory(null);
        setIsAnswered(true);
        
        // Add typing indicator
        const typingMessageId = Date.now();
        setMessages(prev => [...prev, { sender: 'bot', text: '', isTyping: true }]);
        
        // Simulate typing delay
        const typingDelay = 800 + Math.random() * 800; // Random delay between 800-1600ms
        
        setTimeout(() => {
            // Remove typing indicator and add bot response
            setMessages(prev => [
                ...prev.filter(msg => !msg.isTyping),
                { sender: 'bot', text: a }
            ]);
            
            // Auto-scroll to bottom
            setTimeout(() => {
                chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
            }, 100);
        }, typingDelay);
    };
    
    const handleReset = () => {
        setIsAnswered(false);
        setActiveCategory(null);
        setMessages(prev => [...prev, { 
            sender: 'manager', 
            text: "Is there anything else you'd like me to clarify about our investment approach or the markets?" 
        }]);
    };

    return (
        <section id="faq" className="py-20 md:py-28 bg-dark-secondary/50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">Frequently Asked Questions</h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-400">Get personal responses from our fund management team</p>
                </div>

                <div className="bg-dark-primary/50 border border-gray-700/50 rounded-2xl shadow-2xl shadow-sky-500/5 overflow-hidden">
                    <div className="p-4 sm:p-6 h-96 overflow-y-auto space-y-6">
                        {messages.map((msg, index) => (
                            <div key={index} className={`flex items-end gap-3 ${msg.sender === 'user' ? 'justify-end' : ''}`}>
                                {msg.sender === 'manager' && !msg.isTyping && (
                                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-sky-500 to-blue-600 flex items-center justify-center text-white font-medium">
                                        AM
                                    </div>
                                )}
                                {msg.isTyping ? (
                                    <div className="flex items-center gap-1.5 px-4 py-3 rounded-2xl bg-dark-secondary rounded-bl-none">
                                        <span className="w-2 h-2 bg-sky-400 rounded-full animate-pulse" style={{animationDelay: '0ms'}}></span>
                                        <span className="w-2 h-2 bg-sky-400 rounded-full animate-pulse" style={{animationDelay: '200ms'}}></span>
                                        <span className="w-2 h-2 bg-sky-400 rounded-full animate-pulse" style={{animationDelay: '400ms'}}></span>
                                    </div>
                                ) : (
                                    <div className={`max-w-sm md:max-w-md px-4 py-3 rounded-2xl ${msg.sender === 'manager' ? 'bg-dark-secondary rounded-bl-none' : 'bg-sky-500 text-white rounded-br-none'}`}>
                                        <p className="text-sm">{msg.text}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                        <div ref={chatEndRef} />
                    </div>
                    <div className="p-4 border-t border-gray-700/50 bg-dark-secondary/50">
                        <div className="flex flex-wrap gap-2 justify-center">
                            {!activeCategory && !isAnswered && !isTyping && Object.keys(faqData).map(cat => (
                                <button key={cat} onClick={() => handleCategorySelect(cat as Category)} className="bg-dark-tertiary hover:bg-gray-700 text-gray-200 font-medium px-4 py-2 rounded-lg transition-colors text-sm">
                                    {cat}
                                </button>
                            ))}
                             {activeCategory && faqData[activeCategory].map(item => (
                                <button key={item.q} onClick={() => handleQuestionSelect(item.q, item.a)} className="bg-dark-tertiary hover:bg-gray-700 text-gray-200 font-medium px-4 py-2 rounded-lg transition-colors text-sm text-left">
                                    {item.q}
                                </button>
                            ))}
                            {isAnswered && !isTyping && (
                                <button onClick={handleReset} className="bg-sky-500 hover:bg-sky-600 text-white font-semibold px-5 py-2 rounded-lg transition-all duration-300">
                                    Ask Another Question
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FaqSection;