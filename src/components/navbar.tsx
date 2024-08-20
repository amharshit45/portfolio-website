"use client"

import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
        console.log(isOpen);
    }

    const logoPageUp = () => {
        window.scrollTo({ top: 100, left: 100, behavior: "smooth" })
    }

    return <div>
        <nav className="fixed w-full h-auto top-0 left-0 z-40 bg-white shadow-nav items-center flex justify-between py-[1.2rem] px-[2rem] md:py-[1.2rem] md:pl-[2.5rem] md:pr-[4rem]">
            <h3 onClick={logoPageUp} className="text-[1.5rem] font-extrabold cursor-pointer text-[#2d2e32]">harshit.dev</h3>
            <ul className='md:flex text-[1.1rem] gap-x-8 font-semibold'>
                <li><a className='hidden md:flex hover:text-blue-400' href="#home">Home</a></li>
                <li><a className='hidden md:flex hover:text-blue-400' href="#about">About</a></li>
                {/* <li><a className='hidden md:flex hover:text-blue-400' href="#coding-stats">Coding Stats</a></li> */}
                <li><a className='hidden md:flex hover:text-blue-400' href="#projects">Projects</a></li>
                <li><a className='hidden md:flex hover:text-blue-400' href="#contact">Contact</a></li>
                <li className="flex md:hidden" onClick={toggleMenu}>
                    <MenuIcon fontSize='large'className="text-[2.3rem] cursor-pointer hover:text-blue-400"></MenuIcon>
                </li>
            </ul>
        </nav>
        { isOpen ? (
            <div className={`flex w-full h-screen z-40 bg-white fixed top-0 left-0 items-center text-center justify-center transition-all duration-300 ease-in-out
 ${isOpen ? "left-[0 !important]" : "left-[-100% !important]"}`}> 
                <span className="hover:text-blue-400 cursor-pointer text-[2rem] absolute top-4 right-8" onClick={toggleMenu}>
                    <CloseIcon fontSize='large'/>
                </span>
                <ul className='flex flex-col gap-y-8 text-[1.5rem]'>
                    <li><a onClick={toggleMenu} className='font-medium hover:text-blue-400' href="#home">Home</a></li>
                    <li><a onClick={toggleMenu} className='font-medium hover:text-blue-400' href="#about">About</a></li>
                    <li><a onClick={toggleMenu} className='font-medium hover:text-blue-400' href="#coding-stats">Coding Stats</a></li>
                    <li><a onClick={toggleMenu} className='font-medium hover:text-blue-400' href="#projects">Projects</a></li>
                    <li><a onClick={toggleMenu} className='font-medium hover:text-blue-400' href="#contact">Contact</a></li>
                </ul>
            </div>
        ) : null}
    </div>
}