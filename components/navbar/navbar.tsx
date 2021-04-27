import React from 'react';
import styles from './navbar.module.css';

let toggle = false;

export default function Navbar() {
    const [menu, setMenu] = React.useState(toggle);
    const toggleMenu = (value: boolean) => {
        toggle = value;
        setMenu(toggle);
    };

    return (
        <nav className={`${styles.navbar} bg-black opacity-90`}>
            <div className="max-w-screen-xl mx-auto px-2 sm:px-6 lg:px-8">
                <div className="relative flex items-center justify-between h-16">
                    <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                        <button type="button" className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-black focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false" onClick={() => toggleMenu(!toggle)}>
                            <span className="sr-only">Open main menu</span>
                            <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                            <svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <div className="flex-1 flex items-center sm:items-stretch sm:justify-between">
                        <div className="flex-shrink-0 flex items-center">
                            <a href="#top" className="text-gray-300 hover:underline hover:text-white px-3 py-2 rounded-md text-sm font-medium" onClick={() => toggleMenu(false)}>
                                <img className="block lg:hidden h-12 w-auto" src="/logos/star.png" alt="Starpath Ventures" />
                                <img className="hidden lg:block h-12 w-auto" src="/logos/logo_light.png" alt="Starpath Ventures" />
                            </a>
                        </div>
                        <div className="hidden sm:block sm:ml-6">
                            <div className="flex space-x-4 pt-1">
                                <a href="#about" className="text-gray-300 hover:underline hover:text-white px-3 py-5 rounded-md text-sm font-medium">About</a>
                                <a href="#thesis" className="text-gray-300 hover:underline hover:text-white px-3 py-5 rounded-md text-sm font-medium">Thesis</a>
                                <a href="#portfolio" className="text-gray-300 hover:underline hover:text-white px-3 py-5 rounded-md text-sm font-medium">Portfolio</a>
                                <a href="#team" className="text-gray-300 hover:underline hover:text-white px-3 py-5 rounded-md text-sm font-medium">Team</a>
                                <a href="#contact" className="text-gray-300 hover:underline hover:text-white px-3 py-5 rounded-md text-sm font-medium">Contact</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`${menu ? 'h-60' : 'h-0'} overflow-hidden transition-all duration-500 sm:hidden`}>
                <div className="px-2 pt-2 pb-3 space-y-1">
                    <a href="#about" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium" onClick={() => toggleMenu(false)}>About</a>
                    <a href="#thesis" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium" onClick={() => toggleMenu(false)}>Thesis</a>
                    <a href="#portfolio" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium" onClick={() => toggleMenu(false)}>Portfolio</a>
                    <a href="#team" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium" onClick={() => toggleMenu(false)}>Team</a>
                    <a href="#contact" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium" onClick={() => toggleMenu(false)}>Contact</a>
                </div>
            </div>
        </nav>
    );
}