
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Timeline from './components/Timeline';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { content, Language } from './constants';

const App: React.FC = () => {
    const [lang, setLang] = useState<Language>('es');
    const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());

    const toggleLanguage = () => {
        setLang(prevLang => (prevLang === 'es' ? 'en' : 'es'));
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setVisibleSections((prev) => new Set(prev).add(entry.target.id));
                    }
                });
            },
            { threshold: 0.1 }
        );

        const sections = document.querySelectorAll('section');
        sections.forEach((section) => observer.observe(section));

        return () => sections.forEach((section) => observer.unobserve(section));
    }, []);

    const currentContent = content[lang];

    return (
        <div className="flex flex-col min-h-screen">
            <Header
                lang={lang}
                toggleLanguage={toggleLanguage}
                {...currentContent.header}
            />
            <main className="container mx-auto px-6 md:px-12 lg:px-20 py-12 flex-grow">
                <Hero content={currentContent.hero} />
                <About content={currentContent.about} isVisible={visibleSections.has('about')} />
                <Timeline content={currentContent.timeline} isVisible={visibleSections.has('timeline')} />
                <Projects content={currentContent.projects} isVisible={visibleSections.has('projects')} />
                <Contact content={currentContent.contact} isVisible={visibleSections.has('contact')} />
            </main>
            <Footer content={currentContent.footer}/>
        </div>
    );
};

export default App;