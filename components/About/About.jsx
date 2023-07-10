'use client';

import Image from 'next/image';
import React from 'react';
import myImg from '../../public/imgPortfolio.webp';
import StatueCanvas from '../canvas/Statue';
import { motion } from 'framer-motion';
import { slide, staggerContainer } from '@/utils/motion';


export default function About() {
    return (
        <section className=' bg-primary-black pt-16 pb-40 lg:pt-[15rem] lg:pb-[11rem] lg:px-8 relative z-40' id='about'>
            <div className='hidden md:display-block md:gradient-04 md:z-0' />

            <motion.div
                variants={staggerContainer}
                initial='hidden'
                whileInView='show'
                viewport={{ once: true }}
                className='flex flex-col mx-auto lg:flex-row lg:justify-evenly lg:gap-[6rem] max-w-[1600px]'
            >

                <motion.div
                    variants={slide('left')}
                >

                    <Image className='mx-auto rounded-[25%] border-solid border-4 border-violet-500 object-contain w-[119px] h-[156px] md:w-[151px] md:h-[198px] lg:w-[167px] lg:h-[220px]'
                        src={myImg}
                        quality={60}
                        loading='eager'
                        alt='portfolio-image'
                        placeholder='blur'
                    />

                    <p className='mt-[2rem] text-left sm:text-center mx-auto max-w-[310px] sm:max-w-[370px] lg:max-w-[506px] text-rose-600  lg:text-lg font-semibold'>
                        I'm a passionate and driven <span className='text-violet-500'>Front-End Developer</span>, with a keen eye for details.
                        I bring creativity,innovation and technical expertise to every project.Whether it's building a responsive
                        website from scratch or optimizing an existing application.
                    </p>

                </motion.div>

                <motion.div
                    variants={slide('right')}
                    className='h-[300px] mt-[5.5rem] lg:w-[33%] lg:mt-0 text-center'
                >

                    <StatueCanvas />

                    <span className='text-lg text-indigo-100 underline'>Marcus Aurelius</span><br />
                    <span className='max-w-[300px] inline-block leading-[1.3rem] w-[350px] text-red-100'>“You have power over your mind — not outside events. Realize this, and you will find strength.”</span>

                </motion.div>

            </motion.div>
            <div className='hidden md:display-block md:gradient-03 md:z-0' />
        </section>
    );
};
