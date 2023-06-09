'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { GrLinkedinOption } from 'react-icons/gr';
import { ImFacebook } from 'react-icons/im';
import { RxInstagramLogo } from 'react-icons/rx';
import { RxGithubLogo } from 'react-icons/rx';
import './Footer.css';


export default function Footer() {
    return (
        <footer id='footer' className='bg-footer py-12 px-10'>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
            >
                <ul className='flex flex-row gap-4 max-w-[300px] p-3 bg-red-600 justify-center mx-auto rounded-xl'>
                    <li className='hover:text-teal-700 ease-in-out duration-500'>
                        <Link target='_blank' href='https://www.facebook.com/mihajlo.spasic1' prefetch={false}>
                            <ImFacebook fontSize={25} />
                        </Link>
                    </li>
                    <li className='hover:text-indigo-600 ease-in-out duration-500'>
                        <Link target='_blank' href='https://www.instagram.com/mihajlospasic/' prefetch={false}>
                            <RxInstagramLogo fontSize={25} />
                        </Link>
                    </li>
                    <li className='hover:text-white ease-in-out duration-500'>
                        <Link target='_blank' href='https://www.linkedin.com/in/mihajlo-spasic/' prefetch={false}>
                            <GrLinkedinOption fontSize={25} />
                        </Link>
                    </li>
                    <li className=' hover:text-green-600 ease-in-out duration-500'>
                        <Link target='_blank' href='https://github.com/Spale96' prefetch={false}>
                            <RxGithubLogo fontSize={25} />
                        </Link>
                    </li>
                </ul>


                <p className='text-center mx-auto text-rose-600 text-sm mt-8'>
                    © 2023 - Present. Mihajlo S.
                    <br />
                    All rights reserved.
                </p>

            </motion.div>
        </footer >
    );
};
