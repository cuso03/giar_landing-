
import { AppContent } from './types';

export type Language = 'en' | 'es';

const giarLogoBase64 = 'data:image/png;base64,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';

export const content: Record<Language, AppContent> = {
    es: {
        header: {
            logo: giarLogoBase64,
            navLinks: [
                { name: "Sobre Nosotros", href: "#about" },
                { name: "Hitos", href: "#timeline" },
                { name: "Proyectos", href: "#projects" },
                { name: "Contacto", href: "#contact" },
            ],
        },
        hero: {
            title: "Grupo de Investigación en IA y Robótica",
            subtitle: "Pioneros en investigación y desarrollo desde 1986.",
            dynamicTaglines: ["Innovando el Futuro.", "Excelencia en Robótica.", "Inteligencia Artificial Aplicada."],
        },
        about: {
            title: "Sobre GIAR",
            p1: "Fundado en 1986, el Grupo de Investigación en Inteligencia Artificial y Robótica (GIAR) es un laboratorio de I+D de la Universidad Tecnológica Nacional (UTN) en Buenos Aires, Argentina. Durante más de tres décadas, hemos estado a la vanguardia de la investigación en IA y robótica en América Latina.",
            p2: "Nuestra misión es avanzar en el conocimiento científico, desarrollar tecnologías innovadoras y formar a la próxima generación de ingenieros e investigadores. Colaboramos con la industria y el mundo académico para resolver desafíos complejos y generar un impacto significativo.",
            researchAreasTitle: "Áreas de Investigación",
            researchAreas: [
                { name: "Robótica Autónoma", description: "Sistemas robóticos capaces de operar en entornos complejos sin intervención humana." },
                { name: "Visión por Computadora", description: "Análisis y comprensión de imágenes y videos para la toma de decisiones." },
                { name: "Aprendizaje Automático", description: "Desarrollo de algoritmos que permiten a los sistemas aprender de los datos." },
            ],
        },
        timeline: {
            title: "Nuestros Hitos",
            events: [
                { year: "1986", title: "Fundación de GIAR", description: "Se establece el laboratorio en la UTN Buenos Aires para impulsar la investigación en IA." },
                { year: "1995", title: "Primer Robot Móvil Autónomo", description: "Desarrollo del primer prototipo de robot móvil con capacidades de navegación autónoma." },
                { year: "2008", title: "Colaboración Internacional", description: "Inicio de proyectos de investigación conjunta con universidades europeas." },
                { year: "2018", title: "Premio a la Innovación", description: "Reconocimiento nacional por nuestro trabajo en robótica industrial aplicada." },
                { year: "2023", title: "Expansión a Deep Learning", description: "Creación de una nueva división enfocada en investigación de redes neuronales profundas." },
            ],
        },
        projects: {
            title: "Proyectos Destacados",
            projects: [
                { title: "Navegación Robótica en Interiores", description: "Un sistema de SLAM para que los robots mapeen y naveguen de forma autónoma en edificios.", imageUrl: "https://picsum.photos/seed/project1/400/300", tags: ["Robótica", "SLAM", "C++"] },
                { title: "Control de Calidad por Visión", description: "Sistema de IA que utiliza cámaras para detectar defectos en líneas de producción.", imageUrl: "https://picsum.photos/seed/project2/400/300", tags: ["Visión por Computadora", "IA", "Python"] },
                { title: "Brazo Robótico Asistencial", description: "Diseño de un brazo robótico de bajo costo para asistir a personas con movilidad reducida.", imageUrl: "https://picsum.photos/seed/project3/400/300", tags: ["Robótica", "Hardware", "ROS"] },
                { title: "Predicción de Demanda Energética", description: "Modelo de machine learning para predecir el consumo de energía en redes inteligentes.", imageUrl: "https://picsum.photos/seed/project4/400/300", tags: ["Machine Learning", "Big Data"] },
                { title: "Análisis de Imágenes Médicas", description: "Algoritmos de Deep Learning para la detección temprana de patologías en imágenes médicas.", imageUrl: "https://picsum.photos/seed/project5/400/300", tags: ["Deep Learning", "Salud", "TensorFlow"] },
                { title: "Agente de Diálogo Conversacional", description: "Desarrollo de un chatbot para la atención al estudiante en la universidad.", imageUrl: "https://picsum.photos/seed/project6/400/300", tags: ["NLP", "IA Conversacional"] },
            ],
        },
        contact: {
            title: "Colaboremos",
            description: "¿Interesado en trabajar con nosotros? ¿Tienes alguna pregunta sobre nuestros proyectos o quieres unirte al equipo? Nos encantaría saber de ti.",
            ctaButton: "Contáctanos",
            email: "contacto.giar@frba.utn.edu.ar"
        },
        footer: {
            copy: "© 2024 GIAR - UTN. Todos los derechos reservados.",
            utnLink: "Sitio Oficial UTN",
        }
    },
    en: {
        header: {
            logo: giarLogoBase64,
            navLinks: [
                { name: "About Us", href: "#about" },
                { name: "Milestones", href: "#timeline" },
                { name: "Projects", href: "#projects" },
                { name: "Contact", href: "#contact" },
            ],
        },
        hero: {
            title: "AI & Robotics Research Group",
            subtitle: "Pioneering research and development since 1986.",
            dynamicTaglines: ["Innovating the Future.", "Excellence in Robotics.", "Applied Artificial Intelligence."],
        },
        about: {
            title: "About GIAR",
            p1: "Founded in 1986, the Artificial Intelligence and Robotics Research Group (GIAR) is an R&D laboratory at the National Technological University (UTN) in Buenos Aires, Argentina. For over three decades, we have been at the forefront of AI and robotics research in Latin America.",
            p2: "Our mission is to advance scientific knowledge, develop innovative technologies, and train the next generation of engineers and researchers. We collaborate with industry and academia to solve complex challenges and create a significant impact.",
            researchAreasTitle: "Research Areas",
            researchAreas: [
                { name: "Autonomous Robotics", description: "Robotic systems capable of operating in complex environments without human intervention." },
                { name: "Computer Vision", description: "Analyzing and understanding images and videos for decision-making." },
                { name: "Machine Learning", description: "Developing algorithms that allow systems to learn from data." },
            ],
        },
        timeline: {
            title: "Our Milestones",
            events: [
                { year: "1986", title: "GIAR Foundation", description: "The laboratory is established at UTN Buenos Aires to promote research in AI." },
                { year: "1995", title: "First Autonomous Mobile Robot", description: "Development of the first prototype of a mobile robot with autonomous navigation capabilities." },
                { year: "2008", title: "International Collaboration", description: "Start of joint research projects with European universities." },
                { year: "2018", title: "Innovation Award", description: "National recognition for our work in applied industrial robotics." },
                { year: "2023", title: "Expansion into Deep Learning", description: "Creation of a new division focused on deep neural network research." },
            ],
        },
        projects: {
            title: "Featured Projects",
            projects: [
                { title: "Indoor Robot Navigation", description: "A SLAM-based system for robots to autonomously map and navigate inside buildings.", imageUrl: "https://picsum.photos/seed/project1/400/300", tags: ["Robotics", "SLAM", "C++"] },
                { title: "Vision-Based Quality Control", description: "An AI system that uses cameras to detect defects on production lines.", imageUrl: "https://picsum.photos/seed/project2/400/300", tags: ["Computer Vision", "AI", "Python"] },
                { title: "Assistive Robotic Arm", description: "Design of a low-cost robotic arm to assist people with reduced mobility.", imageUrl: "https://picsum.photos/seed/project3/400/300", tags: ["Robotics", "Hardware", "ROS"] },
                { title: "Energy Demand Forecasting", description: "A machine learning model to predict energy consumption in smart grids.", imageUrl: "https://picsum.photos/seed/project4/400/300", tags: ["Machine Learning", "Big Data"] },
                { title: "Medical Image Analysis", description: "Deep Learning algorithms for the early detection of pathologies in medical images.", imageUrl: "https://picsum.photos/seed/project5/400/300", tags: ["Deep Learning", "Healthcare", "TensorFlow"] },
                { title: "Conversational Dialogue Agent", description: "Development of a chatbot for student support at the university.", imageUrl: "https://picsum.photos/seed/project6/400/300", tags: ["NLP", "Conversational AI"] },
            ],
        },
        contact: {
            title: "Let's Collaborate",
            description: "Interested in working with us? Have a question about our projects or want to join the team? We would love to hear from you.",
            ctaButton: "Contact Us",
            email: "contact.giar@frba.utn.edu.ar"
        },
        footer: {
            copy: "© 2024 GIAR - UTN. All rights reserved.",
            utnLink: "Official UTN Site",
        }
    }
};