
import React from 'react';
import { TimelineContent, TimelineEvent } from '../types';

interface TimelineProps {
    content: TimelineContent;
    isVisible: boolean;
}

const TimelineItem: React.FC<{ event: TimelineEvent, index: number }> = ({ event, index }) => {
    const isEven = index % 2 === 0;
    return (
        <div className="relative mb-8 flex justify-between items-center w-full">
            <div className={`hidden md:block w-5/12 ${isEven ? 'order-1 text-right' : 'order-3 text-left'}`}></div>
            <div className="z-10 flex items-center justify-center w-12 h-12 bg-tech-accent text-dark-primary rounded-full font-bold shadow-lg">
                {event.year}
            </div>
            <div className={`w-full md:w-5/12 p-4 bg-dark-secondary rounded-lg shadow-xl ${isEven ? 'order-3' : 'order-1 text-right md:text-left'}`}>
                <h3 className="mb-2 font-bold text-white text-lg">{event.title}</h3>
                <p className="text-sm leading-snug tracking-wide text-slate">{event.description}</p>
            </div>
        </div>
    );
};

const Timeline: React.FC<TimelineProps> = ({ content, isVisible }) => {
    return (
        <section id="timeline" className={`py-20 md:py-28 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-light-slate mb-16">{content.title}</h2>
                <div className="relative wrap overflow-hidden">
                    <div className="absolute border-opacity-20 border-slate h-full border" style={{ left: '50%' }}></div>
                    <div className="md:hidden absolute border-opacity-20 border-slate h-full border" style={{ left: '24px' }}></div>
                     {content.events.map((event, index) => (
                        <TimelineItem key={index} event={event} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Timeline;
