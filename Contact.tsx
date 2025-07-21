
import React from 'react';
import { ContactContent } from '../types';

interface ContactProps {
    content: ContactContent;
    isVisible: boolean;
}

const Contact: React.FC<ContactProps> = ({ content, isVisible }) => {
    
    const handleContactClick = () => {
        window.location.href = `mailto:${content.email}`;
    };

    return (
        <section id="contact" className={`py-20 md:py-28 text-center transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <h2 className="text-3xl md:text-4xl font-bold text-tech-accent mb-4">{content.title}</h2>
            <p className="max-w-2xl mx-auto text-lg text-slate mb-8">{content.description}</p>
            <button 
                onClick={handleContactClick}
                className="text-tech-accent font-bold text-lg border-2 border-tech-accent rounded-md py-3 px-8 hover:bg-tech-accent/10 transition-colors duration-300"
            >
                {content.ctaButton}
            </button>
        </section>
    );
};

export default Contact;
