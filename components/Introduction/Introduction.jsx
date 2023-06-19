'use client';

import React, { useRef, useEffect, useState } from 'react';
import videoUrl from '@/public/video.mp4';
import { motion } from 'framer-motion';

export default function Introduction() {
    const videoRef = useRef(null);
    const [viewportHeight, setViewportHeight] = useState(0);

    useEffect(() => {
        const handleResize = () => {
            setViewportHeight(window.innerHeight);
        };

        if (typeof window !== 'undefined') {
            // Access window only on the client-side
            setViewportHeight(window.innerHeight);
            window.addEventListener('resize', handleResize);
        }

        return () => {
            if (typeof window !== 'undefined') {
                // Remove the resize event listener on cleanup
                window.removeEventListener('resize', handleResize);
            }
        };
    }, []);


    useEffect(() => {
        const video = videoRef.current;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    video.play();
                } else {
                    video.pause();
                }
            });
        });
        observer.observe(video);

        return () => {
            observer.unobserve(video);
        };
    }, []);


    const videoContainerStyle = {
        height: viewportHeight || '100vh'
    };


    return (
        <header id="home">
            <div className="w-full" style={videoContainerStyle}>
                <div className="absolute bg-[rgba(0,0,0,.3);] top-0 left-0 w-full h-full"></div>

                <video
                    preload="metadata"
                    ref={videoRef}
                    src={videoUrl}
                    type="video/mp4"
                    className="w-full h-[100%] object-cover"
                    playsInline
                    autoPlay
                    loop
                    muted
                ></video>

                <div className="absolute w-full h-[100%] flex flex-col text-center items-center justify-center top-0 left-0">
                    <h1 className="text-white sm:text-3xl text-2xl">
                        Hi, I'm <span className="sm:text-3xl text-2xl text-rose-600">Mihajlo Spasić.</span>
                        <br />
                        I'm a<span className=" text-violet-700"> Front-End Developer.</span>
                    </h1>

                    <motion.div
                        className="text-center text-zinc-900 mx-auto mt-7 flex justify-center align-middle max-w-[140px]"
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <a
                            className="py-2 px-6 rounded-md text-slate-300 bg-gradient-to-r from-purple-600 to-pink-600 hover:bg-gradient-to-l hover:from-pink-6n00 hover:to-purple-400"
                            href="/my-resume.pdf"
                            download
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            My Resume
                        </a>
                    </motion.div>
                </div>
            </div>
        </header>
    );
}
