
export interface HeroContent {
    title: string;
    subtitle: string;
    dynamicTaglines: string[];
}

export interface AboutContent {
    title: string;
    p1: string;
    p2: string;
    researchAreasTitle: string;
    researchAreas: { name: string; description: string }[];
}

export interface TimelineEvent {
    year: string;
    title: string;
    description: string;
}

export interface TimelineContent {
    title: string;
    events: TimelineEvent[];
}

export interface Project {
    title: string;
    description: string;
    tags: string[];
    imageUrl: string;
}

export interface ProjectsContent {
    title: string;
    projects: Project[];
}

export interface ContactContent {
    title: string;
    description: string;
    ctaButton: string;
    email: string;
}

export interface HeaderContent {
    logo: string;
    navLinks: { name: string; href: string }[];
}

export interface FooterContent {
    copy: string;
    utnLink: string;
}

export interface AppContent {
    header: HeaderContent;
    hero: HeroContent;
    about: AboutContent;
    timeline: TimelineContent;
    projects: ProjectsContent;
    contact: ContactContent;
    footer: FooterContent;
}
