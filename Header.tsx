
import React from 'react';
import { Language } from '../constants';
import { HeaderContent } from '../types';

interface HeaderProps extends HeaderContent {
    lang: Language;
    toggleLanguage: () => void;
}

const Header: React.FC<HeaderProps> = ({ lang, toggleLanguage, navLinks, logo }) => {
    return (
        <header className="sticky top-0 z-50 w-full bg-dark-primary/80 backdrop-blur-sm shadow-md">
            <nav className="container mx-auto flex items-center justify-between p-4 text-light-slate">
                <a href="#home" className="text-2xl font-bold text-white hover:text-tech-accent transition-colors">
                    {logo.startsWith('data:image') ? (
                        <img src={logo} alt="GIAR Logo" className="h-10 w-auto" />
                    ) : (
                        logo
                    )}
                </a>
                <div className="hidden md:flex items-center space-x-6">
                    {navLinks.map((link) => (
                        <a key={link.name} href={link.href} className="font-medium hover:text-tech-accent transition-colors">
                            {link.name}
                        </a>
                    ))}
                </div>
                <button
                    onClick={toggleLanguage}
                    className="border border-tech-accent text-tech-accent font-bold py-2 px-4 rounded hover:bg-tech-accent/10 transition-colors"
                    aria-label="Toggle language"
                >
                    {lang === 'es' ? 'EN' : 'ES'}
                </button>
            </nav>
        </header>
    );
};

export default Header;