import React from 'react'
import Navbar from '../../components/Navbar'
import { Link } from 'react-scroll';
import Footer from '../../components/Footer'
import Backtotop from '../../assets/Backtotop.jsx'

const TwelveProject = () => {
  return (
    <section>
        <div className='relative z-[2] project-bg-custom h-auto md:h-[300px] '>
            <Navbar />
            <div className='relative z-[2] text-white text-center pl-3 md:pl-6 mt-4 md:mt-9 lg:pl-28'>
                <h2 className='font-semibold text-4xl lg:text-5xl mb-6'>Mouse Controller By Color Segmentation</h2>
                <p className='text-[16px] font-medium pb-8'>December 2018 - created by Min Lwin Kyaw</p>
            </div>
        </div>

        <section className='container mx-auto'>
        <div className='px-3 md:pl-6 mt-16 md:mt-20 lg:px-28 '>
            <h2 className='text-xl mb-text-2xl font-semibold text-[#1A2D2D] hover:text-green-500 duration-300 ease cursor-pointer'>Mouse Controller By Color Segmentation</h2>
            <div className='flex gap-3 text-green-500 mt-3'>
                <Link to='#' className='flex cursor-pointer'>
                    <i className="fa fa-tag text-[15px] pt-[5px] mr-1" aria-hidden="true"></i>
                    <span>Python</span>
                </Link>
                <Link to='#' className='flex cursor-pointer'>
                    <i className="fa fa-tag text-[15px] pt-[5px] mr-1" aria-hidden="true"></i>
                    <span>OpenCV</span>
                </Link>
            </div>


            <hr className='mr-3 lg:mr-[100px] mt-3 mb-12 h-[10px]' />
            <div className='mb-5'>
                <h1 className='text-[#1A2D2D] text-3xl md:text-4xl'>Project's Info</h1>
                <ul className='list-disc ml-6 mt-6'>
                    <li>Name: Mouse Controller By Color Segmentation</li>
                    <li>Team Members : Min Lwin Kyaw</li>
                    <li>Duration : 2.5 Days</li>
                    <li>Software for UI : Figma</li>
                    <li>Programming Languages & Frameworks : Python, OpenCV(python)</li>
                    <li>Platforms : Cross-Platform</li>
                    <li>Links : <Link to='https://onedrive.live.com/?cid=38da8fbf846af5e7&id=38DA8FBF846AF5E7%2122058&authkey=%21AF4ZjZdk3el2HdY' className='text-cyan-500 hover:text-teal-500 duration-300 ease cursor-pointer'>One Drive(Source Code, Presentation, Video)</Link></li>
                </ul>
            </div>

            <div className='lg:grid grid-cols-3 mb-10'>
                <div className='col-span-2 mb-10 lg:mb-0'>
                    {/* <video className="w-full" src={<iframe width="700" height="350" src="https://www.youtube.com/embed/v9uTasDRL7k" title="Mouse Controller By Color Segmentation" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>} controls /> */}
                    <iframe width="700" height="350" src="https://www.youtube.com/embed/v9uTasDRL7k" title="Mouse Controller By Color Segmentation" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </div>

                <div className='col-span-1'>
                <h1 className='font-semibold'>Video</h1>
                    <p className='text-gray-600 text-justify'>Video of how program works. Because of presentation's video, video is quite short and straight forward.</p>
                </div>

            </div>

            <div className='mb-20'>
                <p>A cross-platform application control mouse and mouse click by using hand gesture with color segmentation. In program user can move, left click, right click, double click, and dragging without using mouse. Project was done by using python, and OpenCV.<br />This project was created by using course materials like masking, contouring, opening, closing, color segmentation, and color conversion. I used phone camera as input over local network. If you are going to use by computer web cam, receiving video data implementation will be different.<br />This project is for Image Processing course's 10 Points Presentation Project.</p>
            </div>

            
        </div>
        
    </section>
        <Footer />
        <Backtotop />
    </section>
  )
}

export default TwelveProject