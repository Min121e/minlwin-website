import React from 'react'
import Navbar from '../../components/Navbar'
// import { Link } from 'react-scroll';
import Footer from '../../components/Footer'
import Backtotop from '../../assets/Backtotop.jsx'

import pic1 from './pic1.png'
import pic2 from './pic2.png'
import pic3 from './pic3.png'
import pic4 from './pic4.png'
import pic5 from './pic5.png'
import pic6 from './pic6.png'
import pic7 from './pic7.png'

const ThirteenProject = () => {
  return (
    <section>
        <div className='relative z-[2] project-bg-custom h-auto md:h-[300px] '>
            <Navbar />
            <div className='relative z-[2] text-white text-center pl-3 md:pl-6 mt-4 md:mt-9 lg:pl-28'>
                <h2 className='font-semibold text-4xl lg:text-5xl mb-6'>Photo Sharing Platform</h2>
                <p className='text-[16px] font-medium pb-8'>December 2019 - created by Min Lwin Kyaw</p>
            </div>
        </div>

        <section className='container mx-auto'>
        <div className='px-3 md:pl-6 mt-16 md:mt-20 lg:px-28 '>
            <h2 className='text-xl mb-text-2xl font-semibold text-[#1A2D2D] hover:text-green-500 duration-300 ease cursor-pointer'>Photo Sharing Platform</h2>
            <div className='flex gap-3 text-green-500 mt-3'>
                <a href='#' className='flex cursor-pointer'>
                    <i className="fa fa-tag text-[15px] pt-[5px] mr-1" aria-hidden="true"></i>
                    <span>PHP</span>
                </a>
                <a href='#' className='flex cursor-pointer'>
                    <i className="fa fa-tag text-[15px] pt-[5px] mr-1" aria-hidden="true"></i>
                    <span>Symphony</span>
                </a>
                <a href='#' className='flex cursor-pointer'>
                    <i className="fa fa-tag text-[15px] pt-[5px] mr-1" aria-hidden="true"></i>
                    <span>MySQL</span>
                </a>
                <a href='#' className='flex cursor-pointer'>
                    <i className="fa fa-tag text-[15px] pt-[5px] mr-1" aria-hidden="true"></i>
                    <span>JavaScript</span>
                </a>
                <a href='#' className='flex cursor-pointer'>
                    <i className="fa fa-tag text-[15px] pt-[5px] mr-1" aria-hidden="true"></i>
                    <span>HTML</span>
                </a>
                <a href='#' className='flex cursor-pointer'>
                    <i className="fa fa-tag text-[15px] pt-[5px] mr-1" aria-hidden="true"></i>
                    <span>CSS</span>
                </a>
            </div>


            <hr className='mr-3 lg:mr-[100px] mt-3 mb-12 h-[10px]' />
            <div className='mb-5'>
                <h1 className='text-[#1A2D2D] text-3xl md:text-4xl'>Project's Info</h1>
                <ul className='list-disc ml-6 mt-6'>
                    <li>Name: Photo Sharing Platform</li>
                    <li>Team Members : Min Lwin Kyaw</li>
                    <li>Duration :  5 Days</li>
                    <li>Programming Languages & Frameworks : Symfony, PHP, MySQL, HTML, CSS, JavaScript</li>
                    <li>Platforms : Web</li>
                    <li>Links : <a href='https://github.com/Minlwinkyaw307/st_1_project/' className='text-cyan-500 hover:text-teal-500 duration-300 ease cursor-pointer'>GitHub</a></li>
                </ul>
            </div>

            <div className='mb-5'>
                <h1 className='text-[#1A2D2D] text-3xl md:text-4xl mb-3'>Dashboard (Web)</h1>
                <p className='text-justify text-gray-600'>It is a web publish or share post or blog with customizable content for users. There are two different section for users, one is for normal users and another one is for admin. Included CMS for normal users and admin. Normal user can create and publish blog and post, like, comment and report other people post and comment on same platform and admin can do all the same things and management all the post from super CMS system. Project was done by using Symfony, php, HTML, CSS, and JavaScript for Computer Special Topic 1 Course (Extra).<br />Templates are downloaded from <a href="https://colorlib.com/" className='font-semibold text-black'>Colorlib</a></p>
            </div>


            
                <div className='mb-16 lg:grid grid-cols-3 gap-7'>
                    <img src={pic1} alt="pic1" />
                    <img src={pic2} alt="pic1" />
                    <img src={pic3} alt="pic1" />
                    <img src={pic4} alt="pic1" />
                    <img src={pic5} alt="pic1" />
                    <img src={pic6} alt="pic1" />
                    <img src={pic7} alt="pic1" />
                </div>
            
        </div>
        
    </section>
        <Footer />
        <Backtotop />
    </section>
  )
}

export default ThirteenProject