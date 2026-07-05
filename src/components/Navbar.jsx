import { useState, useRef, useEffect } from 'react'
import { FiMenu, FiX, FiChevronDown } from 'react-icons/fi'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [showCvDropdown, setShowCvDropdown] = useState(false)
    const dropdownRef = useRef(null)

    // Fermer le dropdown si on clique en dehors
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setShowCvDropdown(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const navLinks = [
        { name: 'À propos', href: '#about' },
        { name: 'Projets', href: '#projects' },
        { name: 'Contact', href: '#contact' },
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
                                className="text-sm font-medium text-gray-300 hover:text-white hover:scale-105 transition-all duration-300"
                            >
                                {link.name}
                            </a>
                        ))}

                        {/* CV Dropdown Desktop */}
                        <div className="relative" ref={dropdownRef}>
                            <button
                                onClick={() => setShowCvDropdown(!showCvDropdown)}
                                className="text-sm font-medium text-primary-400 hover:text-primary-300 border border-primary-500 px-4 py-2 rounded-lg hover:bg-primary-500/20 flex items-center gap-1.5 transition-all duration-300"
                            >
                                CV <FiChevronDown size={14} className={`transition-transform duration-300 ${showCvDropdown ? 'rotate-180' : ''}`} />
                            </button>

                            {showCvDropdown && (
                                <div className="absolute right-0 mt-2 w-32 rounded-xl bg-gray-900/95 border border-primary-500/30 backdrop-blur-md overflow-hidden shadow-2xl py-1 z-50 animate-fadeIn">
                                    <a
                                        href="/CV-YassineTENZEKHTI.pdf"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        onClick={() => setShowCvDropdown(false)}
                                        className="block px-4 py-2.5 text-sm text-gray-300 hover:text-white hover:bg-primary-500/20 transition-all duration-200"
                                    >
                                        Français (FR)
                                    </a>
                                    <a
                                        href="/CV-YassineTENZEKHTI-EN.pdf"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        onClick={() => setShowCvDropdown(false)}
                                        className="block px-4 py-2.5 text-sm text-gray-300 hover:text-white hover:bg-primary-500/20 transition-all duration-200"
                                    >
                                        English (EN)
                                    </a>
                                </div>
                            )}
                        </div>
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
                                onClick={() => setIsOpen(false)}
                                className="block py-3 px-4 text-sm font-medium text-gray-300 hover:text-white transition-colors"
                            >
                                {link.name}
                            </a>
                        ))}

                        {/* CV choices in Mobile Menu */}
                        <div className="py-2 border-t border-primary-900/30 mt-2 px-4">
                            <span className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Mon CV</span>
                            <div className="flex gap-4">
                                <a
                                    href="/CV-YassineTENZEKHTI.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={() => setIsOpen(false)}
                                    className="text-sm font-medium text-primary-400 hover:text-primary-300 border border-primary-500/30 px-3.5 py-1.5 rounded-lg hover:bg-primary-500/10 transition-all"
                                >
                                    FR
                                </a>
                                <a
                                    href="/CV-YassineTENZEKHTI-EN.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={() => setIsOpen(false)}
                                    className="text-sm font-medium text-primary-400 hover:text-primary-300 border border-primary-500/30 px-3.5 py-1.5 rounded-lg hover:bg-primary-500/10 transition-all"
                                >
                                    EN
                                </a>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    )
}

export default Navbar
