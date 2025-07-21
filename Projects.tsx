
import React from 'react';
import { ProjectsContent, Project } from '../types';

interface ProjectCardProps {
    project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
    return (
        <div className="bg-dark-secondary rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 group">
            <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover" />
            <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-tech-accent transition-colors">{project.title}</h3>
                <p className="text-slate mb-4 text-sm">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                        <span key={tag} className="text-xs font-mono bg-dark-primary text-tech-accent px-2 py-1 rounded">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};


interface ProjectsProps {
    content: ProjectsContent;
    isVisible: boolean;
}

const Projects: React.FC<ProjectsProps> = ({ content, isVisible }) => {
    return (
        <section id="projects" className={`py-20 md:py-28 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <h2 className="text-3xl md:text-4xl font-bold text-center text-light-slate mb-12">{content.title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {content.projects.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))}
            </div>
        </section>
    );
};

export default Projects;
