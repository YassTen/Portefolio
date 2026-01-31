import { FiChevronDown } from 'react-icons/fi'

const Hero = () => {
    const scrollToProjects = () => {
        document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
            {/* Background decoration */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-600/20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary-500/10 rounded-full blur-3xl"></div>
            </div>

            <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <div className="animate-fade-in-up">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
                        <span className="text-white">Hi, I'm </span>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 via-primary-300 to-primary-500 animate-pulse-glow inline-block">
                            Yassine TENZEKHTI
                        </span>
                        <span className="text-white">!</span>
                    </h1>

                    <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
                        Étudiant en cybersécurité passionné, à la recherche d'une alternance en{' '}
                        <span className="text-primary-400 font-semibold">SOC</span>,{' '}
                        <span className="text-primary-400 font-semibold">Pentest</span> ou{' '}
                        <span className="text-primary-400 font-semibold">GRC</span> (Gouvernance).
                    </p>

                    <button
                        onClick={scrollToProjects}
                        className="group inline-flex items-center gap-2 bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-500 hover:to-primary-400 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-primary-500/30"
                    >
                        Voir mes projets
                        <FiChevronDown className="group-hover:translate-y-1 transition-transform" />
                    </button>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                <div className="w-6 h-10 border-2 border-primary-400/50 rounded-full flex justify-center pt-2">
                    <div className="w-1 h-3 bg-primary-400 rounded-full animate-pulse"></div>
                </div>
            </div>
        </section>
    )
}

export default Hero
