'use client';

import React from 'react';
import './Contact.css';
import ContactForm from './ContactForm';
import { motion } from 'framer-motion';
import { MdPlace, MdEmail, MdLocalPhone } from 'react-icons/md';
import { TypingText } from '../CustomTexts/CustomTexts';
import { slide, staggerContainer } from '@/utils/motion';
import Toaster from '../Toaster';


export default function ContactSection() {
    return (
        <section id='contact' className='bg-primary-black pt-4 pb-12 lg:px-8'>

            <Toaster />

            <motion.div
                variants={staggerContainer}
                viewport={{ once: true }}
                initial='hidden'
                whileInView='show'
                className='pt-[2rem] lg:pt-[3rem] text-center max-w-[500px] xl:max-w-[1350px] mx-auto'>

                <TypingText title='CONTACT' className='text-2xl' />

                <motion.div
                    variants={slide('left')}
                    className="flex flex-col xl:flex-row px-6 mt-8 lg:gap-[3rem] xl:gap-[12rem] lg:mt-[5rem] xl:relative">

                    <div className="max-w-full lg:w-full lg:max-w-[500px] text-sm lg:text-lg">

                        <div className='p-4 md:p-6 bg-slate-700 flex items-center gap-4 sm:gap-8 rounded-lg mb-8 xl:mb-14 xl:mt-8 text-white'>
                            <div className='bg-violet-500 rounded-[50%] p-2 items-center'>
                                <MdLocalPhone className='text-[35px]' />
                            </div>
                            <p>+381659060296</p>
                        </div>

                        <div className='p-4 md:p-6 bg-slate-700 flex items-center gap-4 sm:gap-8 rounded-lg mb-8 xl:mb-16 xl:mt-8 text-white'>
                            <div className='bg-violet-500 rounded-[50%] p-2 items-center'>
                                <MdEmail className='text-[35px]' />
                            </div>
                            <p className='truncate'>mihajlospasicyolo@gmail.com</p>
                        </div>

                        <div className='p-4 md:p-6 bg-slate-700 flex items-center gap-4 sm:gap-8 rounded-lg mb-8 xl:mb-16 xl:mt-8 text-white'>
                            <div className='bg-violet-500 rounded-[50%] p-2 items-center'>
                                <MdPlace className='text-[35px]' />
                            </div>
                            <p>Odzaci,Serbia.</p>
                        </div>
                    </div>

                    <div className='xl:content-none xl:w-[4px] xl:h-[400px] xl: bg-slate-400 xl:mt-[5rem]' />

                    <motion.div
                        variants={slide('left')}
                        className="max-w-full pt-[4px] px-[2px] pb-[2px] lg:max-w-[500px] lg:w-full lg:rounded-xl">
                        <ContactForm />
                    </motion.div>

                </motion.div>
            </motion.div>
        </section>
    );
};

