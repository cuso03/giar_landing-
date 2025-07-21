
import React from 'react';
import { FooterContent } from '../types';
import { UtnIcon } from './icons/Icons';

interface FooterProps {
    content: FooterContent;
}

const Footer: React.FC<FooterProps> = ({ content }) => {
    return (
        <footer className="bg-dark-secondary text-slate py-6">
            <div className="container mx-auto text-center flex flex-col sm:flex-row justify-between items-center px-6">
                <p className="text-sm mb-4 sm:mb-0">{content.copy}</p>
                <a 
                    href="https://www.utn.edu.ar/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center gap-2 hover:text-tech-accent transition-colors"
                >
                    <UtnIcon className="w-6 h-6" />
                    <span>{content.utnLink}</span>
                </a>
            </div>
        </footer>
    );
};

export default Footer;
