'use client';

import { useEffect, useState } from 'react';
import React from 'react';


export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const viewportHeight = window.innerHeight;
            const threshold = viewportHeight * 1;
            const smallScreenThreshold = threshold * 0.95;
            setIsScrolled(scrollY >= threshold || (window.innerWidth <= 768 && scrollY >= smallScreenThreshold));
        };

        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll, { passive: true });
        };
    }, []);

    const getNavbarClass = () => {
        const classes = ['items-center', 'text-rose-700', 'text-base', 'p-[0.5rem]', 'shadow-drop', 'font-medium'];

        if (isScrolled) {
            classes.push('fixed', 'top-0', 'left-0', 'right-0', 'w-full', 'z-50', 'backdrop-blur-md', 'transition', 'ease-in-out', 'duration-300');
        } else {
            classes.push('bg-slate-700');
        }

        return classes.join(' ');
    };


    return (
        <nav className={getNavbarClass()}>
            <ul className='w-full mx-auto flex justify-center gap-[0.8rem] sm:gap-[3rem] md:gap-[5rem] xl:gap-[6rem] font-medium'>
                <li>
                    <a href="#home" className="group text-rose-700 transition duration-300">
                        Home
                        <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-indigo-600"></span>
                    </a>
                </li>

                <li>
                    <a href="#about" className="group text-rose-700 transition duration-300">
                        About
                        <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-indigo-600"></span>
                    </a>
                </li>

                <li>
                    <a href="#skills" className="group text-rose-700 transition duration-300">
                        Skills
                        <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-indigo-600"></span>
                    </a>
                </li>

                <li>
                    <a href="#projects" className="group text-rose-700 transition duration-300">
                        My Work
                        <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-indigo-600"></span>
                    </a>
                </li>

                <li>
                    <a href="#contact" className="group text-rose-700 transition duration-300">
                        Contact
                        <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-indigo-600"></span>
                    </a>
                </li>
            </ul>
        </nav>
    );
};
