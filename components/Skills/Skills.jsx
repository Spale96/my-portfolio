'use client';
import React from 'react';
import BallCanvas from '../canvas/Ball';
import { technologies } from '../../constants';
import { slideIn, staggerContainer, textVariant2 } from '@/utils/motion';
import { motion } from 'framer-motion';
import { TypingText } from '../CustomTexts/CustomTexts';


const Skills = () => {
    return (
        <section id='skills' className=' bg-primary-black relative'>
            <motion.div
                variants={staggerContainer}
                initial='hidden'
                whileInView='show'
                viewport={{ once: true }}
                className=' text-white text-center px-8 py-16'>

                <TypingText title='MY SKILLS' className='text-2xl' />

                <div className='md:text-xl mt-[2.5rem] lg:mt-[4rem] xl:mt-[4.5rem] mx-auto md:max-w-[600px] text-violet-500'>
                    <motion.h3
                        variants={textVariant2}
                        className='underline underline-offset-8'>Overview.</motion.h3>
                    <motion.p
                        variants={textVariant2}
                        className='mt-5 sm:mt-8 xl:mt-[4rem]'>Hello,my skills are based on <span className='text-rose-500'>Html,Css,JavaScript</span> and Frameworks
                        like <span className='text-rose-500'>React,Next.js and Three.js</span>, also <span className='text-rose-500'>UI/UX</span> designer and making user-interface very enjoyable.
                        I'm a very quick learner and open minded person with great ability to work in team environment.<span className='text-rose-500'>Coding</span> is my meditation.
                    </motion.p>
                </div>
                <motion.div
                    className='flex flex-row flex-wrap justify-center lg:gap-[2rem] gap-[1.5rem] sm:mt-16 mt-11 xl:mt-20 mx-auto md:w-[400px] lg:w-[545px] w-[300px]'>
                    {technologies.map((technology, index) => (
                        <motion.div
                            variants={slideIn('right', 'spring', index * 0.5)}
                            className='sm:w-[3.2rem] sm:h-[3.2rem] md:w-[3.9rem] md:h-[3.9rem] lg:w-[4rem] lg:h-[4rem] xl:w-[6rem] xl:h-[6rem] w-[3rem] h-[3rem]'
                            key={technology.name}>
                            <BallCanvas icon={technology.icon.src} />
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </section >
    );
};

export default Skills;


