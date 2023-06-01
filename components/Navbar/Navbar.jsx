'use client';

import { useEffect, useState } from 'react';
import React from 'react';


export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const viewportHeight = window.innerHeight;
            const threshold = viewportHeight * 1; // 50% threshold
            const smallScreenThreshold = threshold * 1; // 90% threshold for small screens

            if (scrollY >= threshold || (window.innerWidth <= 600 && scrollY >= smallScreenThreshold)) {
                setIsScrolled(true)
            } else {
                setIsScrolled(false)
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const getNavbarClass = () => {
        let classes = 'items-center text-rose-600 text-lg p-[0.5rem] shadow-drop';

        if (isScrolled) {
            classes += 'fixed top-0 left-0 right-0 w-full z-50 bg-[rgba(0, 0, 0, 0.5)] transition ease-in-out duration-300';
        } else {
            classes += 'bg-slate-700';
        }

        return classes;
    };

    return (
        <nav className={getNavbarClass()}>
            <ul className='w-full mx-auto  flex justify-center sm:gap-[3rem] md:gap-[5rem] xl:gap-[6rem] gap-[1.3rem]'>
                <li>
                    <a href="#home" className="group text-rose-600 transition duration-300">
                        Home
                        <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-indigo-600"></span>
                    </a>
                </li>

                <li>
                    <a href="#about" className="group text-rose-600 transition duration-300">
                        About
                        <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-indigo-600"></span>
                    </a>
                </li>

                <li>
                    <a href="#skills" className="group text-rose-600 transition duration-300">
                        Skills
                        <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-indigo-600"></span>
                    </a>
                </li>

                <li>
                    <a href="#projects" className="group text-rose-600 transition duration-300">
                        My Work
                        <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-indigo-600"></span>
                    </a>
                </li>

                <li>
                    <a href="#contact" className="group text-rose-600 transition duration-300">
                        Contact
                        <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-indigo-600"></span>
                    </a>
                </li>
            </ul>
        </nav>
    );
};