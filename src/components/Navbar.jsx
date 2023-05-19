// import { Link } from 'react-scroll';
import { Link } from 'react-router-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import React from 'react'
import { useState, useEffect } from 'react';
import About from './About';
import Edu from './Edu';
import Projects from './Projects';

import resume from '../assets/resume.pdf'

// import Approuter from './Approuter'



const Navbar = () => {

    useEffect(() => {
        const hash = window.location.hash.replace('#', '');
        if (hash) {
          setTimeout(() => {
            const element = document.getElementById(hash);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
          }, 0)
        }
      }, []);

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    const [open, setOpen] = useState(false)

  return (

    <section className='px-10 lg:px-32 py-10 lg:py-4 z-10 relative' id='home'>
    <div className='container 2xl:mx-auto lg:flex lg:justify-between -mx-7 -mt-2 md:px-[12px] lg:mx-[1px] xl:mx-16 lg:mt-[0.5px] text-white z-[2]'> 
            <ul>
                <li className='lg:pt-5'>
                    <a href="/" className='font-semibold text-4xl lg:mt-10 cursor-pointer'>Min Lwin</a>
                </li>
            </ul>
            <div onClick={() => setOpen(!open)} className='text-md absolute px-4 py-1 bg-green-600 rounded right-4 top-9 cursor-pointer lg:hidden'>
                <i className={open ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'}></i>
            </div>
            <ul className={`lg:flex lg:items-center absolute lg:static bg-[#1a1d2d] lg:bg-transparent md:mx-auto lg:-mx-8 rounded md:z- z-[3] w-[94%] lg:w-auto transition-all duration-500 ease-in ${open ? 'top-20 opacity-100' : 'top-[-250px] lg:opacity-100 opacity-0' }`}>
                <li className='mx-5 pt-5 lg:pt-0 hover:text-green-500 duration-300 ease cursor-pointer'>
                    <a href="/">Home</a>
                </li>
                <li className='mx-5 my-7 hover:text-green-500 duration-300 ease cursor-pointer'>
                    <a href="/#about">About</a>
                </li>
                <li className='mx-5 my-7 hover:text-green-500 duration-300 ease cursor-pointer'>
                    <a href="/#experience">Experience</a>
                </li>
                <li className='mx-5 my-7 hover:text-green-500 duration-300 ease cursor-pointer'>
                    <a href="/#projects">Projects</a>
                </li>
                <li className='font-normal mx-5  my-7 pb- md:pb-0 lg:pb-0  hover:text-green-500 duration-300 ease cursor-pointer'>
                    <a href={resume} target="_blank" >Resume</a>
                </li>
                {/* <HamburgerMenu /> */}
            </ul>
        </div>

        {/* <Approuter /> */}



        {/* <div className='flex justify-between -mx-7 -mt-2 md:px-[12px] lg:mx-[1px] xl:mx-16 lg:mt-[0.5px] text-white z-10'>
            <BrowserRouter>

            <Routes>
                <Route path="About" element={<About />} />
                <Route path="Edu" element={<Edu />} />
                <Route path="Projects" element={<Projects />} />
            </Routes>
            </BrowserRouter>
        </div> */}
        
                
    </section>
    
  )
}

export default Navbar