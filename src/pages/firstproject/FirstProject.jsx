import React from 'react'
import Navbar from '../../components/Navbar'
import { Link } from 'react-scroll';

import 'lightbox2/dist/css/lightbox.css'    
import 'lightbox2/dist/js/lightbox-plus-jquery'

import original from './original.jpg'
import blusher from './blusher.jpg'
import eyebrow from './eyebrow.jpg'
import eyeliner from './eyeliner.jpg'
import foundation from './foundation.jpg'
import haircoloring from './haircoloring.jpg'
import Lipstick from './Lipstick.jpg'
import eyeshadow from './eyeshadow.jpg'

import Footer from '../../components/Footer'
import Backtotop from '../../assets/Backtotop.jsx'

const FirstProject = () => {
  return (

    <section id='home'>
        <div className='relative z-[2] project-bg-custom h-[250px] md:h-[300px]'>
            <Navbar />
            <div className='relative z-[2] text-white text-center pl-3 md:pl-6 mt-4 md:mt-9 lg:pl-28'>
                <h2 className='font-semibold text-4xl lg:text-5xl mb-6'> Virtual Makeup Try-On</h2>
                <p className='text-[16px] font-medium'>July 2020 - created by Min Lwin Kyaw</p>
            </div>
        </div>

        <section className='container mx-auto'>
            <div className='px-3 md:pl-6 mt-16 md:mt-20 lg:px-28'>
                <h2 className='text-xl mb-text-2xl font-semibold text-[#1A2D2D] hover:text-green-500 duration-300 ease cursor-pointer'>Virtual Makeup Try-On</h2>
                <hr className='mr-3 lg:mr-[100px] mt-16 mb-12 h-[10px]' />
                <div>
                    <h1 className='text-[#1A2D2D] text-2xl md:text-4xl'>Project's Info</h1>
                    <ul className='list-disc ml-6 mt-6'>
                        <li>Name: Virtual Makeup Try-on For Images</li>
                        <li>Team Members : Min Lwin Kyaw (Solo)</li>
                        <li>Duration : 1.5 Months</li>
                        <li>Software for UI : None</li>
                        <li>Programming Languages & Frameworks : Python, OpenCV, NumPy, Keras and Django</li>
                        <li>Platforms : Cross Platform, Web Service</li>
                        <li>Links : Because of Company Policy, I can't share service link</li>
                    </ul>

                    <h1 className='mt-6 mb-4 text-3xl lg:text-[42px]'>What is Virtual Makeup Try-On</h1>
                    <p className='text-justify text-gray-600'>Virtual MakeUp Try-On is most demanded application current for E-commerce to sell the project physically trying on it but using virtual try on before purchasing. In my application, it received an image with a face or multiple faces in it (currently disabled for multiple) and apply more than one make up filter to feel the real try on makeup experience.</p>

                    <h1 className='mt-6 mb-6 text-2xl'>Here are list of feature available in my application:</h1>
                    <ul className='ml-5 list-disc'>
                        <li><Link className='text-cyan-500 hover:text-teal-500 duration-300 ease cursor-pointer' smooth={true} to="lipstick">LipStick</Link></li>
                        <li><Link className='text-cyan-500 hover:text-teal-500 duration-300 ease cursor-pointer' smooth={true} to="eyeliner">Eyeliner</Link></li>
                        <li><Link className='text-cyan-500 hover:text-teal-500 duration-300 ease cursor-pointer' smooth={true} to="eyeshadow">Eyeshadow</Link></li>
                        <li><Link className='text-cyan-500 hover:text-teal-500 duration-300 ease cursor-pointer' smooth={true} to="eyebrowliner">Eyebrow Liner</Link></li>
                        <li><Link className='text-cyan-500 hover:text-teal-500 duration-300 ease cursor-pointer' smooth={true} to="blusher">Blusher</Link></li>
                        <li><Link className='text-cyan-500 hover:text-teal-500 duration-300 ease cursor-pointer' smooth={true} to="foundation">Foundation (Make Up)</Link></li>
                        <li><Link className='text-cyan-500 hover:text-teal-500 duration-300 ease cursor-pointer' smooth={true} to="haircoloring">Hair Coloring</Link></li>
                    </ul>
                
                    <div id='lipstick' className='mb-16'>
                        <h1 className='mt-7 mb-5 text-3xl md:text-4xl'>Lip Stick</h1>
                        <div className='md:grid md:grid-cols-2 md:w-[90%] gap-8 '>
                            <a href={original} data-lightbox="image-1" className='w-full mb-5'><img src={original} className='w-full mb-5' alt=""/></a>
                            <a href={Lipstick} data-lightbox="image-1" className='w-full'><img src={Lipstick} className='w-full' alt=""/></a>
                        </div>
                    </div>

                    <div id='eyeliner' className='mb-16'>
                        <h1 className='mt-7 mb-5 text-3xl md:text-4xl'>Eyeliner</h1>
                        <div className='md:grid md:grid-cols-2 data-lightbox="image-1" md:w-[90%] gap-8 '>
                            <a href={original} data-lightbox="image-2" className='w-full mb-5'><img src={original} className='w-full mb-5' alt=""/></a>
                            <a href={eyeliner} data-lightbox="image-2" className='w-full'><img src={eyeliner} className='w-full' alt=""/></a>
                        </div>
                    </div>

                    <div id='eyeshadow' className='mb-16'>
                        <h1 className='mt-7 mb-5 text-3xl md:text-4xl'>Eyeshadow</h1>
                        <div className='md:grid md:grid-cols-2 md:w-[90%] gap-8 '>
                            <a href={original} data-lightbox="image-3" className='w-full mb-5'><img src={original} className='w-full mb-5' alt=""/></a>
                            <a href={eyeshadow} data-lightbox="image-3" className='w-full'><img src={eyeshadow} className='w-full' alt=""/></a>
                        </div>
                    </div>

                    <div id='eyebrowliner' className='mb-16'>
                        <h1 className='mt-7 mb-5 text-3xl md:text-4xl'>Eyebrow Liner</h1>
                        <div className='md:grid md:grid-cols-2 md:w-[90%] gap-8 '>
                            <a href={original} data-lightbox="image-4" className='w-full mb-5'><img src={original} className='w-full mb-5' alt=""/></a>
                            <a href={eyebrow} data-lightbox="image-4" className='w-full'><img src={eyebrow} className='w-full' alt=""/></a>
                        </div>
                    </div>

                    <div id='blusher' className='mb-16'>
                        <h1 className='mt-7 mb-5 text-3xl md:text-4xl'>Blusher</h1>
                        <div className='md:grid md:grid-cols-2 md:w-[90%] gap-8 '>
                            <a href={original} data-lightbox="image-5" className='w-full mb-5'><img src={original} className='w-full mb-5' alt=""/></a>
                            <a href={blusher} data-lightbox="image-5" className='w-full'><img src={blusher} className='w-full' alt=""/></a>
                        </div>
                    </div>

                    <div id='lipstick' className='mb-16'>
                        <h1 className='mt-7 mb-5 text-3xl md:text-4xl'>Foundation (Make Up)</h1>
                        <div className='md:grid md:grid-cols-2 md:w-[90%] gap-8 '>
                            <a href={original} data-lightbox="image-6" className='w-full mb-5'><img src={original} className='w-full mb-5' alt=""/></a>
                            <a href={foundation} data-lightbox="image-6" className='w-full'><img src={foundation} className='w-full' alt=""/></a>
                        </div>
                    </div>

                    <div id='haircoloring' className='mb-16'>
                        <h1 className='mt-7 mb-5 text-3xl md:text-4xl'>Hair Coloring</h1>
                        <div className='md:grid md:grid-cols-2 md:w-[90%] gap-8 '>
                            <a href={original} data-lightbox="image-7" className='w-full mb-5'><img src={original} className='w-full mb-5' alt=""/></a>
                            <a href={haircoloring} data-lightbox="image-7" className='w-full'><img src={haircoloring} className='w-full' alt=""/></a>
                        </div>
                    </div>
                    
                    
                </div>
                
            </div>

            
        </section>
            <Footer />
            <Backtotop />
    </section>
    
    
  )
}

export default FirstProject