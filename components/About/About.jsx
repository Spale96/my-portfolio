'use client';

import Image from 'next/image';
import React from 'react';
import myImg from '../../public/imgPortfolio.jpg';
import StatueCanvas from '../canvas/Statue';
import { motion } from 'framer-motion';
import './About.css';
import { slide, staggerContainer } from '@/utils/motion';


export default function About() {
    return (
        <section className=' bg-primary-black pt-16 pb-40 lg:pt-[15rem] lg:pb-[11rem] lg:px-8 relative z-40' id='about'>
            <div className='gradient-04 z-0' />
            <div className='gradient-03 z-0' />
            <motion.div
                variants={staggerContainer}
                initial='hidden'
                whileInView='show'
                viewport={{ once: true }}
                className='flex flex-col mx-auto lg:flex-row  lg:justify-evenly lg:gap-[6rem]  max-w-[1600px]'
            >

                <motion.div
                    variants={slide('left')}
                >


                    <Image className='mx-auto rounded-[25%] border-solid border-4 border-violet-500 object-contain md:w-[170px] md:h-[198px] lg:w-[189px] lg:h-[220px] w-[120px] h-[138px] '
                        src={myImg}
                        quality={100}
                        alt='portfolio-image' />

                    <p className='mt-[2rem] text-center mx-auto max-w-[310px] sm:max-w-[430px] lg:max-w-[500px] text-rose-500  lg:text-lg '>
                        I'm a passionate and driven <span className='text-violet-500'>Front-End Developer</span>, with a keen eye for details.
                        I bring creativity,innovation and technical expertise to every project.Whether it's building a responsive
                        website from scratch or optimizing an existing application.
                    </p>

                </motion.div>

                <motion.div
                    variants={slide('right')}
                    className='h-[300px] mt-[3.2rem] lg:w-[33%] lg:mt-0 text-center'
                >

                    <StatueCanvas />

                    <span className='statue-span text-lg text-indigo-100 underline'>Marcus Aurelius</span><br />
                    <span className='max-w-[300px] inline-block leading-[1.3rem] :w-[350px] text-red-100'>“You have power over your mind — not outside events. Realize this, and you will find strength.”</span>

                </motion.div>

            </motion.div>
        </section>
    );
};
