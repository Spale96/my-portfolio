'use client';

import React from 'react';
import Image from 'next/image';
import { projects } from '@/constants';
import { fadeIn, staggerContainer } from '@/utils/motion';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import './Projects.css';
import { RxGithubLogo } from 'react-icons/rx';
import { SiNetlify } from 'react-icons/si';
import { TypingText } from '../CustomTexts/CustomTexts';



const ProjectCard = ({ index, title, icon, about, url, github }) => (
    <Tilt className='w-full'>
        <motion.div
            id='projects'
            variants={fadeIn("right", "spring", index * 0.5, 0.75)}
            initial='hidden'
            whileInView='show'
            viewport={{ once: true }}
            className='w-[210px] sm:w-[270px] p-[1.5px] green-pink-gradient rounded-[20px] shadow-card mx-auto mb-8 mt-4 relative'>
            <div
                options={{
                    max: 35,
                    scale: 1,
                    speed: 450,
                }}
                className='bg-tertiary rounded-[20px] animated-card py-5  px-1 flex justify-evenly items-center flex-col sm:py-7 lg:py-[2rem]'
            >
                <span className="top"></span>
                <span className="right"></span>
                <span className="bottom"></span>
                <span className="left"></span>

                <Image
                    width={150}
                    height={150}
                    quality={100}
                    src={icon.src}
                    alt='project'
                    className='w-[12rem] h-[3.5rem] sm:w-[14rem] sm:h-[6rem]  lg:h-[7rem] object-contain'
                />


                <h3 className='text-white text-[15px] lg:text-[20px] font-bold text-center mt-2 lg:mt-[1rem]'>
                    {title}
                </h3>
                <div className='flex justify-center my-2 gap-4'>
                    <a href={github} target='_blank' rel="noopener noreferrer">
                        <RxGithubLogo fontSize={17} />
                    </a>
                    <a href={url} target='_blank' rel="noopener noreferrer">
                        <SiNetlify fontSize={17} />
                    </a>
                </div>

                <p className='text-[12px] lg:text-[16px] font-semibold text-center text-white underline mt-[1px] lg:mt-[10px]'>{about}</p>

            </div>
        </motion.div>
    </Tilt>
);


export default function Projects() {
    return (
        <section id='projects' className='bg-primary-black  pt-9 pb-7 relative'>
            <div className='gradient-05 z-0' />
            <div className='gradient-06 z-0' />
            <motion.div
                variants={staggerContainer}
                viewport={{ once: true }}
                initial='hidden'
                whileInView='show'
                className='text-white text-center px-6'>
                <TypingText title='MY PROJECTS' className='text-2xl' />
            </motion.div>

            <div className='w-[300px] lg:w-[978px] mt-[3.5rem] lg:mt-[4.5rem] xl:mt-[5.5rem] mx-auto lg:gap-2 xl:gap-5 lg:grid lg:grid-cols-2  overflow-hidden'>
                {projects.map((project, index) => (
                    <ProjectCard key={project.title} index={index} {...project} />
                ))}
            </div>
        </section>
    );
};
