import { FiGithub, FiExternalLink } from 'react-icons/fi'
import { SiNotion } from 'react-icons/si'

const ProjectCard = ({ project, delay = 0 }) => {
    return (
        <div
            className="group glass rounded-2xl overflow-hidden transform transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-primary-500/20"
            style={{ animationDelay: `${delay}ms` }}
        >
            {/* Project Image */}
            <div className="relative h-48 overflow-hidden">
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/90 to-transparent"></div>

                {/* Tags overlay */}
                <div className="absolute bottom-3 left-3 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                        <span
                            key={tag}
                            className="text-xs px-2 py-1 bg-primary-600/80 text-white rounded-full backdrop-blur-sm"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>

            {/* Project Content */}
            <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary-300 transition-colors">
                    {project.title}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                    {project.description}
                </p>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-3">
                    <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white text-sm font-medium rounded-lg transition-all duration-300 hover:scale-105"
                    >
                        <FiGithub size={16} />
                        Voir le code (GitHub)
                    </a>

                    <a
                        href={project.notionUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-primary-600 hover:bg-primary-500 text-white text-sm font-medium rounded-lg transition-all duration-300 hover:scale-105"
                    >
                        <SiNotion size={16} />
                        Lire le rapport (Notion)
                    </a>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard
