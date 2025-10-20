import React, { useState, useEffect } from 'react';
import { CalendarIcon, ClockIcon, LocationPinIcon, MentorshipIcon, WebinarIcon, GiveawayIcon } from './icons/EventIcons';

interface TimeLeft {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}

const CountdownTimer: React.FC<{ targetDate: string }> = ({ targetDate }) => {
    const calculateTimeLeft = (): TimeLeft => {
        const difference = +new Date(targetDate) - +new Date();
        let timeLeft: TimeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        }
        
        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, [targetDate]);

    return (
        <div className="bg-dark-tertiary/60 border border-sky-500/30 rounded-lg p-2 text-center mt-auto">
            <p className="text-xs text-sky-300 mb-1">Enrollment closes in:</p>
            <div className="grid grid-cols-4 divide-x divide-gray-700">
                <div className="px-1">
                    <span className="text-xl font-bold text-white">{String(timeLeft.days).padStart(2, '0')}</span>
                    <span className="block text-xs text-gray-400">Days</span>
                </div>
                <div className="px-1">
                    <span className="text-xl font-bold text-white">{String(timeLeft.hours).padStart(2, '0')}</span>
                    <span className="block text-xs text-gray-400">Hours</span>
                </div>
                <div className="px-1">
                    <span className="text-xl font-bold text-white">{String(timeLeft.minutes).padStart(2, '0')}</span>
                    <span className="block text-xs text-gray-400">Mins</span>
                </div>
                <div className="px-1">
                    <span className="text-xl font-bold text-white">{String(timeLeft.seconds).padStart(2, '0')}</span>
                    <span className="block text-xs text-gray-400">Secs</span>
                </div>
            </div>
        </div>
    );
};


const EventsSection: React.FC = () => {
  return (
    <section id="events" className="py-20 md:py-28 bg-dark-primary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-4">
          <span className="inline-block bg-dark-tertiary text-sky-400 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            🎯 Upcoming Opportunities — Don’t Miss Out!
          </span>
        </div>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">Learn. Connect. Win — Join Our Upcoming Forex Events!</h2>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-400">From expert mentorships to live webinars and exclusive giveaways — there’s always something happening in our trading community.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1: Mentorship */}
          <div className="bg-dark-secondary rounded-xl p-8 border border-gray-700/50 flex flex-col transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-sky-500/10">
            <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-bold text-sky-400">MENTORSHIP</span>
                <MentorshipIcon className="w-6 h-6 text-sky-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Next Batch Starts Soon!</h3>
            <p className="text-gray-400 text-sm flex-grow mb-4">Join our intensive mentorship designed to take you from beginner to confident trader in 4 weeks. Includes one-on-one coaching, live trading sessions, and more.</p>
            <div className="text-sm text-gray-300 mb-4 space-y-2">
                <p className="flex items-center gap-2"><CalendarIcon className="w-4 h-4 text-gray-500"/> Start Date: <span className="font-semibold">November 5, 2025</span></p>
                <p className="flex items-center gap-2"><LocationPinIcon className="w-4 h-4 text-gray-500"/> Mode: <span className="font-semibold">Hybrid (Online)</span></p>
            </div>
            <CountdownTimer targetDate="2025-11-05T00:00:00" />
          </div>

          {/* Card 2: Webinar */}
           <div className="bg-dark-secondary rounded-xl p-8 border border-gray-700/50 flex flex-col transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-yellow-500/10">
            <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-bold text-yellow-400">LIVE WEBINAR</span>
                <WebinarIcon className="w-6 h-6 text-yellow-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Cracking the Forex Market</h3>
            <p className="text-gray-400 text-sm flex-grow">Learn advanced techniques directly from professional traders in our free monthly webinar. Includes Q&A sessions and psychology insights.</p>
            <div className="flex items-center gap-4 my-4 bg-dark-tertiary/60 p-3 rounded-lg">
                <img src="https://picsum.photos/id/1011/100/100" alt="Carlos Gomez" className="w-12 h-12 rounded-full" />
                <div>
                    <p className="font-bold text-white">Carlos Gomez</p>
                    <p className="text-xs text-gray-400">Host & Pro Trader</p>
                </div>
            </div>
            <div className="text-sm text-gray-300 space-y-2">
                <p className="flex items-center gap-2"><CalendarIcon className="w-4 h-4 text-gray-500"/> Next Session: <span className="font-semibold">October 27, 2025</span></p>
                <p className="flex items-center gap-2"><ClockIcon className="w-4 h-4 text-gray-500"/> Time: <span className="font-semibold">7:00 PM (WAT)</span></p>
            </div>
             <button disabled className="w-full text-center font-bold py-3 px-6 rounded-lg transition-all duration-300 mt-6 bg-yellow-500/50 text-dark-primary/70 cursor-not-allowed">
                Coming Soon
             </button>
          </div>

          {/* Card 3: Giveaways */}
          <div className="bg-dark-secondary rounded-xl p-8 border border-gray-700/50 flex flex-col transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/10">
            <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-bold text-purple-400">COMMUNITY REWARDS</span>
                <GiveawayIcon className="w-6 h-6 text-purple-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Win Exclusive Rewards!</h3>
            <p className="text-gray-400 text-sm mb-4 flex-grow">Participate in our community challenges to win branded merchandise and trading gadgets.</p>
            <ul className="text-sm text-gray-300 space-y-1 list-disc list-inside mb-4">
                <li>Forex-branded hoodies</li>
                <li>Bluetooth speakers & Journals</li>
                <li>1-month mentorship access</li>
            </ul>
             <div className="text-sm text-gray-300 space-y-2 mt-auto">
                <p className="flex items-center gap-2"><CalendarIcon className="w-4 h-4 text-gray-500"/> Next Giveaway: <span className="font-semibold">November 10, 2025</span></p>
                <p className="flex items-center gap-2"><LocationPinIcon className="w-4 h-4 text-gray-500"/> Announced in: <span className="font-semibold">Facebook Community</span></p>
            </div>
             <a href="#" className="w-full text-center font-bold py-3 px-6 rounded-lg transition-all duration-300 mt-6 bg-purple-500 hover:bg-purple-600 text-white">
                Join the Family
            </a>
          </div>
        </div>
        
        <div className="mt-20 text-center">
            <p className="text-lg text-gray-300">Join over 3,000 traders already learning and earning with us.</p>
            <p className="text-gray-400">Follow our social channels to get notified about our next event.</p>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;