import { FiGithub, FiLinkedin } from 'react-icons/fi'

const Contact = () => {
    const socialLinks = [
        {
            name: 'GitHub',
            icon: FiGithub,
            url: 'https://github.com/YassTen',
            color: 'hover:text-white',
        },
        {
            name: 'LinkedIn',
            icon: FiLinkedin,
            url: 'https://www.linkedin.com/in/yassine-tenzekhti/',
            color: 'hover:text-blue-400',
        },
    ]

    return (
        <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
                {/* Section Title */}
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                    Contact
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-primary-400 rounded-full mx-auto mb-8"></div>

                {/* Contact Text */}
                <p className="text-gray-300 text-lg mb-10">
                    If you find my profile interesting, message me{' '}
                    <a
                        href="https://mail.google.com/mail/?view=cm&to=ytenzekhti@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary-400 hover:text-primary-300 underline transition-colors font-semibold"
                    >
                        here
                    </a>
                    !
                </p>

                {/* Social Links */}
                <div className="flex justify-center gap-6">
                    {socialLinks.map((social) => (
                        <a
                            key={social.name}
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`p-4 rounded-full bg-dark-card border border-primary-700/50 text-gray-400 transition-all duration-300 transform hover:scale-110 hover:border-primary-500 ${social.color}`}
                            aria-label={social.name}
                        >
                            <social.icon size={28} />
                        </a>
                    ))}
                </div>

                {/* Footer */}
                <div className="mt-16 pt-8 border-t border-primary-700/30">
                    <p className="text-gray-500 text-sm">
                        © {new Date().getFullYear()} Yassine TENZEKHTI. Tous droits réservés.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Contact
