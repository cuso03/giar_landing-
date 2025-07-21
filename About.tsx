
import React from 'react';
import { AboutContent } from '../types';
import { RobotIcon, BrainIcon, EyeIcon } from './icons/Icons';

interface AboutProps {
    content: AboutContent;
    isVisible: boolean;
}

const iconMap: Record<string, React.ReactNode> = {
    "Robótica Autónoma": <RobotIcon className="w-8 h-8 text-tech-accent" />,
    "Autonomous Robotics": <RobotIcon className="w-8 h-8 text-tech-accent" />,
    "Visión por Computadora": <EyeIcon className="w-8 h-8 text-tech-accent" />,
    "Computer Vision": <EyeIcon className="w-8 h-8 text-tech-accent" />,
    "Aprendizaje Automático": <BrainIcon className="w-8 h-8 text-tech-accent" />,
    "Machine Learning": <BrainIcon className="w-8 h-8 text-tech-accent" />,
};

const About: React.FC<AboutProps> = ({ content, isVisible }) => {
    return (
        <section id="about" className={`py-20 md:py-28 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <h2 className="text-3xl md:text-4xl font-bold text-center text-light-slate mb-12">{content.title}</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6 text-lg text-slate">
                    <p>{content.p1}</p>
                    <p>{content.p2}</p>
                </div>
                <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-light-slate mb-4">{content.researchAreasTitle}</h3>
                    <ul className="space-y-4">
                        {content.researchAreas.map((area) => (
                           <li key={area.name} className="flex items-start space-x-4 p-4 bg-dark-secondary rounded-lg">
                               <div className="flex-shrink-0 mt-1">{iconMap[area.name]}</div>
                               <div>
                                   <h4 className="font-bold text-white">{area.name}</h4>
                                   <p className="text-sm">{area.description}</p>
                               </div>
                           </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default About;
