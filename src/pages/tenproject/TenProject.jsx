import React from 'react'
import { Link } from 'react-scroll';
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Backtotop from '../../assets/Backtotop.jsx'

import pic1 from './pic1.jpg'
import pic2 from './pic2.jpg'
import pic3 from './pic3.jpg'
import pic4 from './pic4.jpg'
import pic5 from './pic5.jpg'
import pic6 from './pic6.jpg'
import pic7 from './pic7.jpg'
import pic8 from './pic8.png'

const TenProject = () => {
  return (
    <section>
        <div className='relative z-[2] project-bg-custom h-auto md:h-[300px] '>
            <Navbar />
            <div className='relative z-[2] text-white text-center pl-3 md:pl-6 mt-4 md:mt-9 lg:pl-28'>
                <h2 className='font-semibold text-4xl lg:text-5xl mb-6'>Dots and Boxes</h2>
                <p className='text-[16px] font-medium pb-8'>February 2019 - created by Min Lwin Kyaw</p>
            </div>
        </div>

        <section className='container mx-auto'>
        <div className='px-3 md:pl-6 mt-16 md:mt-20 lg:px-28'>
            <img src={pic8} alt="pic1" className='mb-6' />
            <h2 className='text-xl mb-text-2xl font-semibold text-[#1A2D2D] hover:text-green-500 duration-300 ease cursor-pointer'>Dots and Boxes</h2>
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
                    <li>Name: Dots and Boxes(Game)</li>
                    <li>Team Members : Min Lwin Kyaw</li>
                    <li>Duration : 4 Months</li>
                    <li>Programming Languages & Frameworks : Unity Engine, C#, PhotoShop</li>
                    <li>Platforms : Android</li>
                    <li>Links : <Link to='https://play.google.com/store/apps/details?id=com.ProgrammingMM.DotsAndBoxes&hl=en&pli=1' className='text-cyan-500 hover:text-teal-500 duration-300 ease cursor-pointer'>PlayStore</Link></li>
                </ul>
            </div>

            <div className='mb-5'>
                <p className='text-justify text-gray-600'>An online multi-player mobile game to play old classic dots and boxes game. Project was done by using Unity Engine, cloud functions using node.js and firebase real-time database.</p>
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
                        <img src={pic2} alt="pic1" className='w-full md:w-1/2 lg:w-1/4 p-4' />
                    </div>
                </div>

                <div className='mb-16'>
                    <p>
                        Joint Dots, Make boxes, Use Power-Ups and Beat the Opponents From All Around The World.<br /><br /> 
                        
                        Try to joint twos, then with four joints make a box before opponent gets a chance. Find Power-Ups that are hidden in the square by making boxes. Use them and beat your opponents in unexpected way.<br /><br />
                        
                        Now, you can play in 2 Players or 4 Players mode and 5x5, 6x6 or 7x7. Select your desired option and start your game.<br /><br />
                        
                        Dots And Boxes : Online Multiplayer - What are included?<br /><br />

                        - Tutorial For Beginner<br />
                        - Two Different Player Modes in Match (2 Players, 4 Players)<br />
                        - Three Different Match Sizes (5x5, 6x6, 7x,7)<br />
                        - Change Your Name and Profile Icon (10 Beautiful Icons Included)<br />
                        - Thinking Time is included (10 Seconds Default)<br />
                        - Four Different Power-Ups<br />
                        - Plus 5 Seconds Thinking Time For You<br />
                        - Reduce 5 Seconds Thinking Time From Next Player<br />
                        - Change Match Direction (Only in 4 Player Mode)<br />
                        - Skip Your Turn<br /><br /><br />

                        Play your traditional board game with other players from all around the world. Show you ability and beat them. Hit install and start your challenge.
                    </p>
                </div>
            
        </div>
        
    </section>
        <Footer />
        <Backtotop />
    </section>
  )
}

export default TenProject