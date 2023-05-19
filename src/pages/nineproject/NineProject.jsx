import React from 'react'
import { Link } from 'react-scroll';
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Backtotop from '../../assets/Backtotop.jsx'

import pic1 from './pic1.png'
import pic2 from './pic2.png'
import pic3 from './pic3.png'
import pic4 from './pic4.png'
import pic5 from './pic5.png'
import pic6 from './pic6.png'
import pic7 from './pic7.png'
import pic8 from './pic8.png'

const NineProject = () => {
  return (
    <section>
        <div className='relative z-[2] project-bg-custom h-auto md:h-[300px] '>
            <Navbar />
            <div className='relative z-[2] text-white text-center pl-3 md:pl-6 mt-4 md:mt-9 lg:pl-28'>
                <h2 className='font-semibold text-4xl lg:text-5xl mb-6'>Brain Teaser Game</h2>
                <p className='text-[16px] font-medium pb-8'>May 2019 - created by Min Lwin Kyaw, Managed By Khin Nu, Min Thant Oo</p>
            </div>
        </div>

        <section className='container mx-auto'>
        <div className='px-3 md:pl-6 mt-16 md:mt-20 lg:px-28'>
            <img src={pic8} alt="pic1" className='mb-6' />
            <h2 className='text-xl mb-text-2xl font-semibold text-[#1A2D2D] hover:text-green-500 duration-300 ease cursor-pointer'>Brain Teaser Game</h2>
            <div className='flex gap-3 text-green-500 mt-3'>
                <Link to='#' className='flex cursor-pointer'>
                    <i className="fa fa-tag text-[15px] pt-[5px] mr-1" aria-hidden="true"></i>
                    <span>C#</span>
                </Link>
                <Link to='#' className='flex cursor-pointer'>
                    <i className="fa fa-tag text-[15px] pt-[5px] mr-1" aria-hidden="true"></i>
                    <span>C#(Unity)</span>
                </Link>
            </div>


            <hr className='mr-3 lg:mr-[100px] mt-3 mb-12 h-[10px]' />
            <div className='mb-5'>
                <h1 className='text-[#1A2D2D] text-3xl md:text-4xl'>Project's Info</h1>
                <ul className='list-disc ml-6 mt-6'>
                    <li>Name: Brain Teaser Game</li>
                    <li>Team Members : Min Lwin Kyaw</li>
                    <li>Duration : 2 Weeks</li>
                    <li>Programming Languages & Frameworks : Unity Engine, C#, PhotoShop</li>
                    <li>Platforms : Android</li>
                    <li>Links : <Link to='https://play.google.com/store/apps/details?id=com.OnesAndZeros.BrainTeaser&hl=en' className='text-cyan-500 hover:text-teal-500 duration-300 ease cursor-pointer'>Figma</Link>, <Link to='#' className='text-cyan-500 hover:text-teal-500 duration-300 ease cursor-pointer'>PlayStore</Link></li>
                </ul>
            </div>

            <div className='mb-5'>
                <p className='text-justify text-gray-600'>An offline Math base game. Players can solve brain teasing riddle question using beautiful UI design mobile game. Project was done by using Unity Engine and all the questions were done in Adobe Photoshop</p>
            </div>

                {/* <div className='mb-16'>
                    <div className='grid gap-2 md:grid-cols-3 md:gap-x-7 lg:grid-cols-6 mb-2'>
                        <img src={pic2} alt="pic1" />
                        <img src={pic1} alt="pic1" />
                        <img src={pic3} alt="pic1" />
                        <img src={pic4} alt="pic1" />
                    </div>
                    
                    <div className='grid lg:pl-40 gap-2 md:grid-cols-3 md:gap-x-7 lg:grid-cols-6'>
                        <img src={pic5} alt="pic1" />
                        <img src={pic6} alt="pic1" />                    
                    </div>
                    <img src={pic7} alt="pic1" />
                    <img src={pic8} alt="pic1" />
                    <img src={pic9} alt="pic1" />
                    <img src={pic10} alt="pic1" />
                    <img src={pic11} alt="pic1" />
                </div> */}

                <div className="mb-7">
                    <div className="flex flex-wrap justify-center gap-5 md:gap-0">
                        <img src={pic1} alt="pic1" className='w-full md:w-1/2 lg:w-1/4 p-4' />
                        <img src={pic2} alt="pic1" className='w-full md:w-1/2 lg:w-1/4 p-4' />
                        <img src={pic3} alt="pic1" className='w-full md:w-1/2 lg:w-1/4 p-4' />
                        <img src={pic4} alt="pic1" className='w-full md:w-1/2 lg:w-1/4 p-4' />
                        <img src={pic5} alt="pic1" className='w-full md:w-1/2 lg:w-1/4 p-4' />
                        <img src={pic6} alt="pic1" className='w-full md:w-1/2 lg:w-1/4 p-4' />
                        <img src={pic7} alt="pic1" className='w-full md:w-1/2 lg:w-1/4 p-4' />
                    </div>
                </div>

                <div className='mb-16'>
                    <p>
                    Train Your Brain with 90+ Levels and different type of Math Questions in your Free Time.<br /><br /> 
                    
                    Recover your math and thinking skills by playing math logical, patterns, sequences, shapes match, logical equation and more different type of questions.<br /><br />
                    
                    Questions are more like IQ question for Most of the math exam questions. So, if you are about to take math exam. Here you get fun questions before real one. <br /><br />
                    
                    Type of Questions<br /><br />

                    - Sequences<br />
                    - Patterns<br />
                    - Logical Equations<br />
                    - Logic<br />
                    - Shapes Matching<br />
                    - Shapes and Arithmetic<br />
                    - Shape Base Number<br />
                    - Alphabets Substitution<br /><br />

                    There are more than 90+ questions in the game now and more questions will be add on update.<br /><br />
                    
                    How to play?<br /><br />

                    In every question, there is question mark sign in it and other numbers, shapes or alphabets are also in the question. These other things will help you to find the "Question Mark" value. Question Mark is always a number.<br /><br />

                    For those who like to play in night, there is Dark Theme for Mr and Mrs Owl.<br />
                    For those who like to play in bright scree, there is Light Theme for you.
                    </p>
                </div>
            
        </div>
        
    </section>
        <Footer />
        <Backtotop />
    </section>
  )
}

export default NineProject