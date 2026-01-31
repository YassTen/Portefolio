import { FaPython, FaLinux, FaNodeJs } from 'react-icons/fa'
import { SiWireshark, SiCisco, SiPostgresql, SiVmware, SiTypescript } from 'react-icons/si'
import { VscTerminalBash } from 'react-icons/vsc'
import { BiNetworkChart } from 'react-icons/bi'

const About = () => {
    const technologies = [
        { name: 'Python', icon: FaPython, color: '#3776ab' },
        { name: 'Bash', icon: VscTerminalBash, color: '#4eaa25' },
        { name: 'Linux', icon: FaLinux, color: '#fcc624' },
        { name: 'Wireshark', icon: SiWireshark, color: '#1679a7' },
        { name: 'Nmap', icon: BiNetworkChart, color: '#00b4d8' },
        { name: 'Cisco Packet Tracer', icon: SiCisco, color: '#1ba0d7' },
        { name: 'Node.js', icon: FaNodeJs, color: '#339933' },
        { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169e1' },
        { name: 'VMware', icon: SiVmware, color: '#607078' },
        { name: 'TypeScript', icon: SiTypescript, color: '#3178c6' },
    ]

    return (
        <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
                {/* Section Title */}
                <div className="mb-12">
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                        About me
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-primary-400 rounded-full"></div>
                </div>

                {/* About Text */}
                <div className="mb-16">
                    <p className="text-gray-300 text-lg leading-relaxed max-w-4xl">
                        Passionné par la sécurité offensive et défensive, j'ai construit mon propre laboratoire
                        pour comprendre les attaques et les contrer. Je me forme actuellement sur les outils
                        d'audit et les architectures sécurisées.
                    </p>
                </div>

                {/* Technologies */}
                <div className="text-center">
                    <h3 className="text-xl font-semibold text-gray-200 mb-8">
                        Technologies I've worked with
                    </h3>

                    <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
                        {technologies.map((tech) => (
                            <div
                                key={tech.name}
                                className="tech-icon group flex flex-col items-center gap-2 p-4 rounded-xl bg-dark-card/50 hover:bg-dark-card border border-primary-800/30 hover:border-primary-500/50 cursor-pointer min-w-[80px]"
                            >
                                <tech.icon
                                    size={36}
                                    style={{ color: tech.color }}
                                    className="transition-all duration-300"
                                />
                                <span className="text-xs text-gray-400 group-hover:text-white transition-colors text-center">
                                    {tech.name}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Decorative line */}
                <div className="mt-20 border-t border-primary-700/50"></div>
            </div>
        </section>
    )
}

export default About
