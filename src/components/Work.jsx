import React from 'react';
import { data } from '../data/data';
import { motion } from 'framer-motion';
import {textAnimation } from '../animation/animation';

const Work = () => {
    const projects = data;

    return (
        <motion.section
        initial='hidden'
        whileInView='visible' 
        name='work' 
        className='w-full md:h-screen bg-mainColor text-textMainColor'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <motion.div
                custom={1}
                variants={textAnimation} 
                className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-accentColor'>Work</p>
                    <p className='py-6'>&frasl; &frasl; Check out some of my recent work</p>
                </motion.div>
                
                {/** Container */}
                <motion.div 
                custom={2}
                variants={textAnimation}
                className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'
                >
            
                    {/** Grid Item */}
                    {projects.map(project => (
                        <div 
                        key={project.id}
                        style={{backgroundImage: `url(${project.image})`}}
                        className='shadow-lg shadow-blue-900 group container rounded-md flex justify-center items-center mx-auto content-div'>

                            {/* Hover Effect */}
                            <div className='opacity-0 group-hover:opacity-100'>
                                <span className='text-2xl font-bold text-white tracking-wider'>
                                    {project.name}
                                </span>
                                <div className='pt-8 text-center'>
                                    <a 
                                    href={project.demo}
                                    target='_blank'
                                    rel="noreferrer"
                                    >
                                        <button
                                        className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                                            Demo
                                        </button>
                                    </a>
                                    <a 
                                    href={project.code}
                                    target='_blank'
                                    rel="noreferrer"
                                    >
                                        <button
                                        className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                                            Code
                                        </button>
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

export default Work;