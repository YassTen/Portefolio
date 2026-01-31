import { useState } from 'react'
import { FiChevronLeft, FiChevronRight, FiGithub } from 'react-icons/fi'
import { SiNotion } from 'react-icons/si'

const Projects = () => {
    const [currentIndex, setCurrentIndex] = useState(0)

    const projects = [
        {
            id: 1,
            title: 'Architecture de Sécurité & Hardening (Home Lab)',
            description: 'Déploiement d\'un environnement virtuel isolé (VMware LAN Segments) pour simuler des attaques, auditer un poste Windows avec Nmap et Wireshark, et implémenter des mesures de défense (Pare-feu).',
            image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop',
            tags: ['VMware', 'Nmap', 'Wireshark', 'Firewall'],
            githubUrl: '#',
            notionUrl: '#',
        },
        {
            id: 2,
            title: 'Scanner de vulnérabilités SSL/TLS',
            description: 'Développement d\'un outil en Python pour automatiser l\'audit des configurations HTTPS, détectant les protocoles obsolètes et les suites de chiffrement faibles.',
            image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=400&fit=crop',
            tags: ['Python', 'SSL/TLS', 'Security Audit'],
            githubUrl: '#',
            notionUrl: '#',
        },
        {
            id: 3,
            title: 'ATS Web Application',
            description: 'Full-stack Applicant Tracking System with secure authentication (BCrypt, JWT), RBAC access control, file upload validation, and OWASP-compliant security. Built with Vue.js, Node.js/Express, and PostgreSQL.',
            image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop',
            tags: ['Vue.js', 'Node.js', 'PostgreSQL', 'JWT', 'OWASP'],
            githubUrl: 'https://github.com/YassTen/ATS-WebApp',
            notionUrl: 'https://www.notion.so/Audit-et-D-veloppement-de-l-ATS-WebApp-2ebe1deddfbb80f5b806f04f74b3482d',
        }
    ]

    const nextProject = () => {
        setCurrentIndex((prev) => (prev + 1) % projects.length)
    }

    const prevProject = () => {
        setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length)
    }

    const currentProject = projects[currentIndex]

    return (
        <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
                {/* Section Title */}
                <div className="flex justify-between items-center mb-12">
                    <div>
                        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                            Projects
                        </h2>
                        <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-primary-400 rounded-full"></div>
                    </div>

                    {/* Project Counter */}
                    <div className="text-gray-400 text-sm">
                        <span className="text-primary-400 font-bold text-2xl">{currentIndex + 1}</span>
                        <span className="mx-2">/</span>
                        <span>{projects.length}</span>
                    </div>
                </div>

                {/* Project Carousel */}
                <div className="relative px-16 sm:px-20">
                    {/* Main Project Card */}
                    <div className="glass rounded-2xl overflow-hidden transition-all duration-500">
                        {/* Project Image */}
                        <div className="relative h-64 sm:h-80 overflow-hidden">
                            <img
                                src={currentProject.image}
                                alt={currentProject.title}
                                className="w-full h-full object-cover transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-dark-bg/50 to-transparent"></div>

                            {/* Tags */}
                            <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
                                {currentProject.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="text-xs px-3 py-1.5 bg-primary-600/80 text-white rounded-full backdrop-blur-sm font-medium"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Project Content */}
                        <div className="p-6 sm:p-8">
                            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                                {currentProject.title}
                            </h3>

                            <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-8">
                                {currentProject.description}
                            </p>

                            {/* Action Buttons */}
                            <div className="flex flex-wrap gap-4">
                                <a
                                    href={currentProject.githubUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white font-medium rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg"
                                >
                                    <FiGithub size={20} />
                                    Voir le code (GitHub)
                                </a>

                                <a
                                    href={currentProject.notionUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 hover:bg-primary-500 text-white font-medium rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg"
                                >
                                    <SiNotion size={20} />
                                    Lire le rapport (Notion)
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Navigation Arrows - positionnées en dehors du cadre */}
                    <button
                        onClick={prevProject}
                        className="absolute left-0 top-1/2 -translate-y-1/2 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-dark-card border border-primary-500/50 text-white flex items-center justify-center hover:bg-primary-600 hover:border-primary-400 transition-all duration-300 hover:scale-110 shadow-lg"
                        aria-label="Projet précédent"
                    >
                        <FiChevronLeft size={24} />
                    </button>

                    <button
                        onClick={nextProject}
                        className="absolute right-0 top-1/2 -translate-y-1/2 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-dark-card border border-primary-500/50 text-white flex items-center justify-center hover:bg-primary-600 hover:border-primary-400 transition-all duration-300 hover:scale-110 shadow-lg"
                        aria-label="Projet suivant"
                    >
                        <FiChevronRight size={24} />
                    </button>
                </div>

                {/* Dots Navigation */}
                <div className="flex justify-center gap-3 mt-8">
                    {projects.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex
                                ? 'bg-primary-500 w-8'
                                : 'bg-gray-600 hover:bg-gray-500'
                                }`}
                            aria-label={`Aller au projet ${index + 1}`}
                        />
                    ))}
                </div>

                {/* Decorative line */}
                <div className="mt-20 border-t border-primary-700/50"></div>
            </div>
        </section>
    )
}

export default Projects
