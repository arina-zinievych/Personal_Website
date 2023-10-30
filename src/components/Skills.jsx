import React from 'react';
import HtmlImg from '../assets/html.png';
import CssImg from '../assets/css.png';
import GitImg from '../assets/git.png';
import SassImg from '../assets/sass.png';
import ReactImg from '../assets/react.png';
import JavascriptImg from '../assets/javascript.png';
import TypescriptImg from '../assets/typescript.png';
import BootstrapImg from '../assets/bootstrap.png';
import TailwindImg from '../assets/tailwindcss.png';
import { motion } from 'framer-motion';
import {textAnimation } from '../animation/animation';

const Skills = () => {
    return (
        <motion.section 
        initial='hidden'
        whileInView='visible'
        name='skills' 
        className='w-full h-screen bg-mainColor text-textMainColor'>
            {/* Container */}
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <motion.div
                custom={1}
                variants={textAnimation}
                >
                    <p className='text-4xl font-bold inline border-b-4 border-accentColor'>Skills</p>
                    <p className='py-4'>&frasl; &frasl; These are the technologies I`ve worked with</p>
                </motion.div>

                <motion.div 
                custom={2}
                variants={textAnimation}
                className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                    <div className='shadow-md shadow-blue-900 hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={HtmlImg} alt='html icon' />
                        <p className='my-4'>HTML</p>
                    </div>
                    <div className='shadow-md shadow-blue-900 hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={CssImg} alt='css icon' />
                        <p className='my-4'>CSS</p>
                    </div>
                    <div className='shadow-md shadow-blue-900 hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={SassImg} alt='sass icon' />
                        <p className='my-4'>SASS</p>
                    </div>
                    <div className='shadow-md shadow-blue-900 hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={BootstrapImg} alt='bootstrap icon' />
                        <p className='my-4'>Bootstrap</p>
                    </div>
                    <div className='shadow-md shadow-blue-900 hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={JavascriptImg} alt='javascript icon' />
                        <p className='my-4'>JavaScript</p>
                    </div>
                    <div className='shadow-md shadow-blue-900 hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={ReactImg} alt='reactjs icon' />
                        <p className='my-4'>ReactJS</p>
                    </div>
                    <div className='shadow-md shadow-blue-900 hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={TailwindImg} alt='tailwind icon' />
                        <p className='my-4'>TailwindCSS</p>
                    </div>
                    <div className='shadow-md shadow-blue-900 hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={TypescriptImg} alt='typescript icon' />
                        <p className='my-4'>Typescript</p>
                    </div>
                    <div className='shadow-md shadow-blue-900 hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={GitImg} alt='git icon' />
                        <p className='my-4'>Git</p>
                    </div>
                </motion.div>
            </div>
        </motion.section>
    );
}

export default Skills;