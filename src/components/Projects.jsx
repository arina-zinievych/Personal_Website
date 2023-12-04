import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { GoProjectSymlink } from "react-icons/go";
import { data } from '../data/data';
import { motion } from 'framer-motion';
import {textAnimation } from '../animation/animation';

const Projects = () => {
    const projects = data;

    return (
        <motion.section
        initial='hidden'
        whileInView='visible' 
        name='projects' 
        className='w-full text-textMainColor py-32 md:py-60'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <motion.div
                custom={1}
                variants={textAnimation} 
                className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-accentColor'>Projects</p>
                    <p className='py-6'>&frasl; &frasl; Check out some of my recent projects</p>
                </motion.div>
                
                {/** Container */}
                <motion.div 
                custom={2}
                variants={textAnimation}
                className='grid grid-cols-1 gap-8'
                >
                   
                    {/** Grid Item */}
                    {projects.map(project => (
                        <div
                        key={project.id}
                        className='shadow-md shadow-gray-700 flex flex-col md:flex-row max-h-[650px] md:max-h-[420px]'
                        >
                            <div className='basis-full md:basis-1/2 h-full overflow-y-scroll'>
                                <img className='w-full object-cover' src={project.image} alt='screenshot' />
                            </div> 
                            <div className='basis-full md:basis-1/2 px-8 font-medium'>
                                <div>
                                    <h5 className='text-3xl font-bold text-textMainColor tracking-wider py-4'>
                                        {project.name}
                                    </h5>
                                    <p className='italic'>
                                        {project.date}
                                    </p>
                                    <p className='py-2 text-justify'>
                                        {project.desc}
                                    </p>
                                    <p className='text-lg'>
                                        <span className='font-bold'>Tech stack: </span>{project.techStack}
                                    </p>
                                </div>
                                <div className='py-8 flex justify-between text-2xl'>
                                    <a 
                                    className='group flex items-center hover:text-accentColor'
                                    href={project.demo}
                                    target='_blank'
                                    rel="noreferrer"
                                    >
                                        Demo
                                        <span>
                                            <GoProjectSymlink className='ml-2' />
                                        </span>
                                    </a>
                                    <a 
                                    className='group flex items-center hover:text-accentColor'
                                    href={project.code}
                                    target='_blank'
                                    rel="noreferrer"
                                    >
                                        Code
                                        <span>
                                            <FaGithub className='ml-2' />
                                        </span>
                                    </a>
                                </div>
                            </div> 
                        </div>
                    ))}
                </motion.div>
            </div>
        </motion.section>
    );
}

export default Projects;