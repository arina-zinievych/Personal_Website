import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import Resume from '../assets/resume/CV Arina Zinievych_Frontend_developer.pdf';
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
                className='text-accentColor mt-24 sm:mt-0'>
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
                className='text-4xl sm:text-7xl font-bold text-[#90ADAC] mb-4'>
                    I`m a Front-end Developer.
                </motion.h2>
                <motion.ul 
                custom={2}
                variants={textAnimation}
                className='text-white flex lg:hidden'>
                    <li className='w-[40px] h-[40px] flex justify-center items-center bg-blue-500'>
                        <a 
                        className='flex justify-center items-center'
                        href='https://www.linkedin.com/in/arina-zinievych/'
                        target='_blank'
                        rel="noreferrer">
                            <FaLinkedin size={28} />
                        </a>
                    </li>
                    <li className='w-[40px] h-[40px] flex justify-center items-center bg-gray-500'>
                        <a 
                        className='flex justify-center items-center'
                        href='https://github.com/arina-zinievych'
                        target='_blank'
                        rel="noreferrer">
                            <FaGithub size={28} />
                        </a>
                    </li>
                    <li className='w-[40px] h-[40px] flex justify-center items-center  bg-teal-500'>
                        <a 
                        className='flex justify-center items-center'
                        href='mailto: kirakisel555@gmail.com'
                        >
                            <HiOutlineMail size={28} />
                        </a>
                    </li>
                    <li className='w-[40px] h-[40px] flex justify-center items-center bg-red-400'>
                        <a 
                        className='flex justify-between items-center'
                        href={Resume}
                        download
                        >
                            <BsFillPersonLinesFill size={28} />
                        </a>
                    </li>
                </motion.ul>
                <motion.p 
                custom={2}
                variants={textAnimation}
                className='text-gray-500 py-4 max-w-[700px]'>
                    I'm an aspiring frontend developer, passionate about web development and constantly learning to create new and innovative web solutions. My goal is to excel in this field and stay updated with the latest technologies.
                </motion.p>
              
                <motion.div
                custom={3}
                variants={textAnimation}
                >
                    <Link
                    to="projects" 
                    smooth={true} 
                    duration={500} 
                    >
                        <button className='group text-textMainColor border-2 border-textMainColor px-6 py-3 my-2 flex items-center hover:bg-accentColor hover:border-accentColor hover:text-white'>
                            View Projects 
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