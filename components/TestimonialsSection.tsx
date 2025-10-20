
import React from 'react';

const QuoteIcon = () => (
    <svg className="absolute top-0 left-0 w-16 h-16 text-dark-tertiary transform -translate-x-6 -translate-y-6" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
        <path d="M9.333 8h-2.667c-1.473 0-2.667 1.194-2.667 2.667v8c0 1.473 1.194 2.667 2.667 2.667h5.333v-8c0-4.418-2.883-8-5.333-8zm16 0h-2.667c-1.473 0-2.667 1.194-2.667 2.667v8c0 1.473 1.194 2.667 2.667 2.667h5.333v-8c0-4.418-2.883-8-5.333-8z"></path>
    </svg>
);


const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      quote: "The analytics on SashaTrades are a game-changer. I'm making more informed decisions, and my profitability has increased by over 20% since I switched.",
      name: 'Kenji Tanaka',
      title: 'Full-Time Trader, Tokyo',
      avatar: 'https://picsum.photos/id/1005/100/100',
    },
    {
      quote: "As a beginner, I was intimidated by forex. AuraTrade's platform is intuitive, and their support team has been incredibly helpful. I feel confident growing my portfolio here.",
      name: 'Sarah Jenkins',
      title: 'Part-Time Investor, London',
      avatar: 'https://picsum.photos/id/1027/100/100',
    },
    {
      quote: "Execution speed is everything. The low latency at AuraTrade is unmatched. I've seen a significant reduction in slippage on my high-frequency trades.",
      name: 'Carlos Gomez',
      title: 'Algorithmic Trader, New York',
      avatar: 'https://picsum.photos/id/1011/100/100',
    },
  ];

  return (
    <section id="testimonials" className="py-20 md:py-28 bg-dark-primary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">Trusted by Traders Worldwide</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-400">Discover why thousands of traders choose SashaTrades as their trusted partner.</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="flex flex-col bg-dark-secondary rounded-xl p-8 border border-gray-700/50">
                <div className="relative flex-grow">
                    <QuoteIcon />
                    <p className="relative text-gray-300 text-lg">"{testimonial.quote}"</p>
                </div>
                <div className="flex items-center mt-8">
                    <div>
                    <div className="text-base font-bold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.title}</div>
                    </div>
                </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
