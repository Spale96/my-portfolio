'use client';

import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function ContactForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_5ihwwjq', 'template_3p4ocbo', form.current, 'e3Z1qTtwdo5HHmq0B')
            .then(() => {
                setName('')
                setEmail('')
                setMessage('')
            }, (error) => {
                console.log(error.text);
            });
        toast.success('Successfully sent Email!')
    };

    return (
        <>
            <form className='w-full text-md md:text-lg xl:text-xl' ref={form} onSubmit={sendEmail}>
                <div className="w-full mb-8">
                    <label className=' text-red-700' htmlFor="name">
                        Your Name
                        <input
                            className='w-full text-[1rem] lg:text-[1.5rem] p-[1.2rem] bg-slate-700 text-gray-300 outline-none border-none rounded-lg mt-4 caret-violet-500'
                            type="text"
                            id="name"
                            name="user_name"
                            value={name}
                            required
                            onChange={(e) => setName(e.target.value)}
                        />
                    </label>
                </div>
                <div className="w-full mb-8">
                    <label className=' text-red-700' htmlFor="email">
                        Your Email
                        <input
                            className='w-full text-[1rem] lg:text-[1.5rem] p-[1.2rem] bg-slate-700 text-gray-300 outline-none border-none rounded-lg mt-4 caret-violet-500'
                            type="email"
                            id="email"
                            name="user_email"
                            value={email}
                            required
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </label>
                </div>
                <div className="w-full mb-8">
                    <label className=' text-red-700' htmlFor="message">
                        Your message
                        <textarea
                            className='w-full text-[1rem] lg:text-[1.5rem] p-[1.2rem] bg-slate-700 text-gray-300 outline-none border-none rounded-lg mt-4 min-h-[250px] resize-y caret-violet-500'
                            type="text"
                            id="message"
                            name="message"
                            value={message}
                            required
                            onChange={(e) => setMessage(e.target.value)}
                        />
                    </label>
                </div>
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className=' text-black bg-red-600 text-[1.5rem] inline-block outline-none border-none py-2 px-9 md:py-3 md:px-12 rounded-lg cursor-pointer'
                    type="submit" value='Send'>
                    Send
                </motion.button>
            </form>
        </>
    );
};
