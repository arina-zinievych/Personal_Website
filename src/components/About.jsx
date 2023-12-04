import React from 'react';
import { motion } from 'framer-motion';
import {textAnimation } from '../animation/animation';
import Avatar from '../assets/avatar.png';

const About = () => {
    return (
        <motion.section 
        initial='hidden'
        whileInView='visible'
        name='about' 
        className='w-full text-textMainColor py-32 md:py-60'>
            <motion.div
            custom={1}
            variants={textAnimation} 
            className='flex flex-col justify-center items-center w-full h-full'>
                <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                    <div className='sm:text-right pb-8 pl-4'>
                        <p className='text-4xl font-bold inline border-b-4 border-accentColor'>About</p>
                    </div>
                    <div>
                    </div>
                </div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                    <div className='sm:text-right text-3xl font-bold'>
                        <div className='w-[200px] h-[200px] mx-auto'>
                            <img className='w-full h-full object-cover' src={Avatar} alt='avatar' />
                        </div>
                        <p>Hi. I`m Arina, nice to meet you. Please take a look around.</p>
                    </div>
                    <div className='place-self-center'>
                        <p>
                        I specialize in creating software for clients ranging from individuals and small-businesses all the way to large enterprise corporations. In my free time, I avidly explore new web development technologies. I'm also a nature enthusiast, finding inspiration through hiking and trekking. In essence, I'm a frontend developer on a continuous learning journey, driven by a love for both web development and outdoor adventures.
                        </p>
                    </div>
                </div>
            </motion.div>
        </motion.section>
    );
}

export default About;