import React, { useState } from 'react';
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import Resume from '../assets/resume/CV Arina Zinievych_Frontend_developer.pdf';
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
            <div className='hidden lg:flex flex-col fixed top-[35%] left-0'>
                <ul>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
                        <a 
                        className='flex justify-between items-center w-full'
                        href='https://www.linkedin.com/in/arina-zinievych/'
                        target='_blank'
                        rel="noreferrer">
                            Linkedin <FaLinkedin size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gray-700'>
                        <a 
                        className='flex justify-between items-center w-full'
                        href='https://github.com/arina-zinievych'
                        target='_blank'
                        rel="noreferrer">
                            Github <FaGithub size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-teal-500'>
                        <a 
                        className='flex justify-between items-center w-full'
                        href='mailto: kirakisel555@gmail.com'
                        >
                            Email <HiOutlineMail size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-red-400'>
                        <a 
                        className='flex justify-between items-center w-full'
                        href={Resume}
                        download
                        >
                            Resume <BsFillPersonLinesFill size={30} />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default NavBar;