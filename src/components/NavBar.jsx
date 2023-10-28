import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import Logo from '../assets/logo.png';

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const handleClick = () => setIsOpen(!isOpen);

    return (
        <div className='fixed w-full h-20 flex justify-between items-center px-4 bg-mainColor text-textMainColor'>
            <div>
                <img src={Logo} alt='logo' className='w-[50px]' />
            </div>

            {/* menu */}
            <ul className='hidden md:flex'>
                <li>Home</li>
                <li>About</li>
                <li>Skills</li>
                <li>Work</li>
                <li>Contact</li>
            </ul>

            {/* burger */}
            <div 
            onClick={handleClick} 
            className='md:hidden z-10'>
                {!isOpen ? 
                <FaBars className='cursor-pointer' /> : <FaTimes className='cursor-pointer' />}
            </div>

            {/* mobile menu */}
            <ul 
            className={!isOpen ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-mainColor flex flex-col justify-center items-center'}
            >
                <li className='py-6 text-4xl'>Home</li>
                <li className='py-6 text-4xl'>About</li>
                <li className='py-6 text-4xl'>Skills</li>
                <li className='py-6 text-4xl'>Work</li>
                <li className='py-6 text-4xl'>Contact</li>
            </ul>

            {/* social icons */}
            <div className='hidden'>
                
            </div>
        </div>
    );
}

export default NavBar;