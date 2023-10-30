import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import {textAnimation } from '../animation/animation';

const Home = () => {
    return (
        <motion.section 
        initial='hidden'
        whileInView='visible'
        name='home' 
        className='w-full h-screen'>

            {/** Container */ }
            <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
                <motion.p
                custom={1}
                variants={textAnimation}
                className='text-accentColor'>
                    Hi, my name is
                </motion.p>
                <motion.h1 
                custom={1}
                variants={textAnimation}
                className='text-4xl sm:text-7xl font-bold text-textMainColor'>
                    Arina Zinievych
                </motion.h1>
                <motion.h2 
                custom={2}
                variants={textAnimation}
                className='text-4xl sm:text-7xl font-bold text-gray-400'>
                    I`m a Front-end Developer.
                </motion.h2>
                <motion.p 
                custom={2}
                variants={textAnimation}
                className='text-gray-400 py-4 max-w-[700px]'>
                    I'm an aspiring frontend developer, passionate about web development and constantly learning to create new and innovative web solutions. My goal is to excel in this field and stay updated with the latest technologies.
                </motion.p>
                <motion.div
                custom={3}
                variants={textAnimation}
                >
                    <Link
                    to="work" 
                    smooth={true} 
                    duration={500} 
                    >
                        <button className='group text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-accentColor hover:border-accentColor'>
                            View Work 
                            <span className='group-hover:rotate-90 duration-300'>
                                <HiArrowNarrowRight className='ml-3' />
                            </span>
                        </button>
                    </Link>
                </motion.div>
            </div>
        </motion.section>
    );
}

export default Home;