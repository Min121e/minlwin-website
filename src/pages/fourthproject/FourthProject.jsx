import React from 'react'
import Navbar from '../../components/Navbar'
import { Link } from 'react-scroll';

import pic1 from './pic1.jpg'
import pic2 from './pic2.png'
import pic3 from './pic3.png'
import pic4 from './pic4.png'
import pic5 from './pic5.png'
import pic6 from './pic6.png'

import Footer from '../../components/Footer'
import Backtotop from '../../assets/Backtotop.jsx'  

const FourthProject = () => {
  return (
    <section>
        <div className='relative z-[2] project-bg-custom h-[300px] md:h-[300px]'>
            <Navbar />
            <div className='relative z-[2] text-white text-center pl-3 md:pl-6 mt-4 md:mt-9 lg:pl-28'>
                <h2 className='font-semibold text-4xl lg:text-5xl mb-6'>Ben de Burdayim Mobile Showcase</h2>
                <p className='text-[16px] font-medium'>December 2020 - created by Min Lwin Kyaw</p>
            </div>
        </div> 

        <section className='container mx-auto'>
            <div className='px-3 md:pl-6 mt-16 md:mt-20 lg:px-28 mb-32'>
            
                <img src={pic1} alt="pic1" className='mb-6' />
                <h2 className='text-xl md:text-2xl font-semibold text-[#1A2D2D] hover:text-green-500 duration-300 ease cursor-pointer'>Ben de Burdayim Mobile Showcase</h2>
                <hr className='mr-3 lg:mr-[100px] mt-16 mb-12 h-[10px]' />
                <div>
                    <h1 className='text-[#1A2D2D] text-2xl md:text-4xl'>Project's Info</h1>
                    <ul className='list-disc ml-6 mt-6'>
                        <li>Name: Ben de Burdayim Mobile App Showcase Website</li>
                        <li>Team Members : Min Lwin Kyaw (Solo)</li>
                        <li>Duration : 2 Weeks</li>
                        <li>Software for UI : None</li>
                        <li>Programming Languages & Frameworks : HTML, CSS(Bootstrap), JavaScript(jQuery), PHP, Laravel, MySQL</li>
                        <li>Platforms : Website</li>
                        <li>Links : <a href='#' className='text-cyan-500 hover:text-teal-500 duration-300 ease cursor-pointer'>Ben de Burdayim Mobile Showcase</a></li>
                    </ul>

                    <h1 className='mt-6 mb-4 text-3xl lg:text-[42px]'>What is Ben de Burdayim Mobile Application</h1>
                    <p className='text-justify text-gray-600'>Ben de Burdayim is event base social activity application to collect people together to work on eco-friendly activities and challenges.<br /> <br />
                    With the “Ben de Burdayim” application, you can find brief, clear and awareness-raising content on environmental issues, and participate in challenging and knowledge competitions that will make you take action. You can contribute to the improvement of living spaces with Garbage and Nature Explorers sections.<br /> <br />
                    I also worked on Management system for this application.
                    </p>

                    <h1 className='mt-6 mb-6 text-2xl'>Web pages</h1>
                    
                    <div className='mb-16 flex flex-wrap justify-center gap-5 md:gap-0'>
                        <img src={pic4} alt="pic4" className='w-full md:w-1/2 lg:w-1/3 p-2' />
                        <img src={pic5} alt="pic5" className='w-full md:w-1/2 lg:w-1/3 p-2' />
                        <img src={pic3} alt="pic3" className='w-full md:w-1/2 lg:w-1/3 p-2' />
                        <img src={pic2} alt="pic2" className='w-full md:w-1/2 lg:w-1/3 p-2' />
                        <img src={pic6} alt="pic6" className='w-full md:w-1/2 lg:w-1/3 p-2' />
                    </div>
                    
                </div>
                
            </div>
        </section>
        <Footer />
        <Backtotop />
    </section>
  )
}

export default FourthProject