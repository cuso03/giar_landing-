
import React, { useState, useEffect } from 'react';
import { HeroContent } from '../types';

interface HeroProps {
    content: HeroContent;
}

const Hero: React.FC<HeroProps> = ({ content }) => {
    const [taglineIndex, setTaglineIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTaglineIndex(prevIndex => (prevIndex + 1) % content.dynamicTaglines.length);
        }, 3000);

        return () => clearInterval(intervalId);
    }, [content.dynamicTaglines.length]);
    
    return (
        <section id="home" className="relative h-screen -mt-20 flex items-center justify-center text-center text-white overflow-hidden">
            <div 
                className="absolute top-0 left-0 w-full h-full bg-cover bg-center hero-animated-bg"
                style={{ 
                    backgroundImage: `url(https://imgur.com/MrNfz7G.jpg)`,
                }}
            />
            <div className="absolute top-0 left-0 w-full h-full bg-dark-primary/80"></div>
            <div className="relative z-10 max-w-4xl mx-auto px-4">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 animate-fade-in-down">
                    {content.title}
                </h1>
                <p className="text-lg md:text-xl lg:text-2xl text-slate mb-6 animate-fade-in-up">
                    {content.subtitle}
                </p>
                <div className="h-10 text-tech-accent text-xl md:text-2xl font-mono transition-opacity duration-500">
                   {content.dynamicTaglines[taglineIndex]}
                </div>
            </div>
        </section>
    );
};

export default Hero;