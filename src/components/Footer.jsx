import React from 'react';

const Footer = () => {
    return (
        <footer className='w-full h-32 flex justify-center items-center bg-accentColor text-textMainColor'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div className='text-center'>
                    <h3 className='text-lg md:text-2xl font-bold'>Created by Arina Zinievych in 2023</h3>
                </div>
            </div>
        </footer>
    );
}

export default Footer;