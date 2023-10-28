import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';

const Home = () => {
    return (
        <div name='home' className='w-full h-screen bg-mainColor'>

            {/* Container */}
            <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
                <p 
                className='text-accentColor'>
                    Hi, my name is
                </p>
                <h1 
                className='text-4xl sm:text-7xl font-bold text-textMainColor'>
                    Arina Zinievych
                </h1>
                <h2 
                className='text-4xl sm:text-7xl font-bold text-gray-400'>
                    I`m a Front-end Developer.
                </h2>
                <p className='text-gray-400 py-4 max-w-[700px]'>
                    I'm an aspiring frontend developer, passionate about web development and constantly learning to create new and innovative web solutions. My goal is to excel in this field and stay updated with the latest technologies.
                </p>
                <div>
                    <button className='group text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-accentColor hover:border-accentColor'>
                        View Work 
                        <span className='group-hover:rotate-90 duration-300'>
                            <HiArrowNarrowRight className='ml-3' />
                        </span>
                    </button>
                </div>
            </div>

        </div>
    );
}

export default Home;