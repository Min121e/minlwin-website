import React from 'react'
import { Link } from 'react-scroll';
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Backtotop from '../../assets/Backtotop.jsx'

import pic1 from './pic1.png'
import pic2 from './pic2.png'

const ElevenProject = () => {
  return (
    <section>
        <div className='relative z-[2] project-bg-custom h-auto md:h-[300px] '>
            <Navbar />
            <div className='relative z-[2] text-white text-center pl-3 md:pl-6 mt-4 md:mt-9 lg:pl-28'>
                <h2 className='font-semibold text-4xl lg:text-5xl mb-6'>Steganography For Images</h2>
                <p className='text-[16px] font-medium pb-8'>May 2020 - created by Min Lwin Kyaw</p>
            </div>
        </div>

        <section className='container mx-auto'>
        <div className='px-3 md:pl-6 mt-16 md:mt-20 lg:px-28'>
            <img src={pic1} alt="pic1" className='mb-6' />
            <h2 className='text-xl mb-text-2xl font-semibold text-[#1A2D2D] hover:text-green-500 duration-300 ease cursor-pointer'>Steganography For Images</h2>
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
                    <li>Name: Steganography For Images</li>
                    <li>Team Members : Min Lwin Kyaw</li>
                    <li>Duration : 2 days</li>
                    <li>Programming Languages & Frameworks : Python</li>
                    <li>Platforms : Cross-Platform</li>
                    <li>Links : <Link to='https://github.com/Minlwinkyaw307/steganography_with_image' className='text-cyan-500 hover:text-teal-500 duration-300 ease cursor-pointer'>GitHub</Link></li>
                </ul>
            </div>

            <div className='mb-5'>
                <p className='text-justify text-gray-600'>A cross-platform application to hide one small image to another big image to by using bit level data encryption or password base encryption on bit level encrypted image. Project was done by using python, and image processing.</p>
            </div>

            <div className="lg:grid grid-cols-3 gap-8 mb-20">
                <div className='col-span-2'>
                    <img src={pic2} alt="pic2" />
                </div>
                <div className='col-span-1'>
                    <h1 className='font-semibold'>Main Page</h1>
                    <p className='text-gray-600 text-justify'>In the application, user can insert one image as base image(bigger image that big enough to hide small one) and secret image(small image that small enough to hide inside base image). User can use reversed XOR(encryption method that I created) or plain to hide image.<br />Support three different output image types - png, tiff, bmp (jpg will compress the image before saving it, so, it will break stored bit values and result will be different. That's why I used these formats for save image).<br />To reversed secret image from steganography image, if image used reversed XOR encryption, then need to select reversed XOR encryption, if not just select none and decrypt image from it.</p>
                </div>
            </div>
            
        </div>
        
    </section>
        <Footer />
        <Backtotop />
    </section>
  )
}

export default ElevenProject