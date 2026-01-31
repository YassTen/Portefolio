import { useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    const navLinks = [
        { name: 'À propos', href: '#about' },
        { name: 'Projets', href: '#projects' },
        { name: 'Contact', href: '#contact' },
        { name: 'CV', href: '/CV_Yassine_TENZEKHTI.pdf', isHighlighted: true, isExternal: true },
    ]

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 glass">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <a
                        href="#"
                        className="text-lg font-bold text-primary-400 hover:text-primary-300 transition-colors"
                    >
                        Home
                    </a>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                target={link.isExternal ? '_blank' : undefined}
                                rel={link.isExternal ? 'noopener noreferrer' : undefined}
                                className={`text-sm font-medium transition-all duration-300 ${link.isHighlighted
                                    ? 'text-primary-400 hover:text-primary-300 border border-primary-500 px-4 py-2 rounded-lg hover:bg-primary-500/20'
                                    : 'text-gray-300 hover:text-white hover:scale-105'
                                    }`}
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>

                    {/* Mobile menu button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden text-gray-300 hover:text-white p-2"
                    >
                        {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isOpen && (
                    <div className="md:hidden py-4 border-t border-primary-700/50">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                target={link.isExternal ? '_blank' : undefined}
                                rel={link.isExternal ? 'noopener noreferrer' : undefined}
                                onClick={() => setIsOpen(false)}
                                className={`block py-3 px-4 text-sm font-medium transition-colors ${link.isHighlighted
                                    ? 'text-primary-400'
                                    : 'text-gray-300 hover:text-white'
                                    }`}
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>
                )}
            </div>
        </nav>
    )
}

export default Navbar
