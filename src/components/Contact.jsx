import React from 'react';
import { motion } from 'framer-motion';
import {textAnimation } from '../animation/animation';

const Contact = () => {
    return (
        <motion.section 
        initial='hidden'
        whileInView='visible'
        name='contact' 
        className='w-full flex justify-center items-center p-4 py-32 md:py-60'>
            <form 
            method='POST'
            action='https://getform.io/f/3e300990-7bcf-49e4-9361-9ba934bc2735'
            className='flex flex-col max-w-[600px] w-full'>
                <motion.div 
                custom={1}
                variants={textAnimation}
                className='pb-8'>
                    <p className='text-4xl font-bold text-textMainColor inline border-b-4 border-accentColor'>Contact</p>
                    <p className='text-textMainColor py-4'>&frasl; &frasl; Submit the form below or shoot me an email - kirakisel555@gmail.com</p>
                </motion.div>
                <motion.input
                custom={2}
                variants={textAnimation} 
                type='text' 
                placeholder='Name' 
                name='name' 
                className='bg-gray-100 p-2'
                />
                <motion.input
                custom={2}
                variants={textAnimation}  
                type='email' 
                placeholder='Email' 
                name='email' 
                className='my-4 p-2 bg-gray-100'
                />
                <motion.textarea 
                custom={2}
                variants={textAnimation} 
                name='message' 
                placeholder='Message'
                rows='10'
                className='bg-gray-100 p-2'
                >
                </motion.textarea>
                <motion.button
                custom={3}
                variants={textAnimation}  
                className='text-textMainColor border-2 border-textMainColor hover:bg-accentColor hover:border-accentColor hover:text-white px-4 py-3 my-8 mx-auto flex ite'>
                    Let`s Collaborate
                </motion.button>
            </form>
        </motion.section>
    );
}

export default Contact;