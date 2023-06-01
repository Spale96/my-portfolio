'use client';

import { motion } from 'framer-motion';
import { textContainer, textVariant2 } from '../../utils/motion';

export const TypingText = ({ title }) => (
    <motion.h2
        variants={textContainer}
        className='text-white sm:text-3xl text-2xl  text-center mx-auto'
    >
        {Array.from(title).map((letter, index) => (
            <motion.span variants={textVariant2} key={index}>
                {letter === ' ' ? '\u00A0' : letter}
            </motion.span>
        ))}
    </motion.h2>
);
