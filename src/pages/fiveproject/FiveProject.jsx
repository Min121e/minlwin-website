import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Backtotop from '../../assets/Backtotop.jsx' 

import pic1 from './pic1.png'
import pic2 from './pic2.png'
import pic3 from './pic3.png'
import pic4 from './pic4.png'

const FiveProject = () => {
  return (
    <section>
        <div className='relative z-[2] project-bg-custom h-auto md:h-[300px] '>
            <Navbar />
            <div className='relative z-[2] text-white text-center pl-3 md:pl-6 mt-4 md:mt-9 lg:pl-28'>
                <h2 className='font-semibold text-4xl lg:text-5xl mb-6'>DorInsight Corporate Website</h2>
                <p className='text-[16px] font-medium pb-8'>September 2020 - created by Min Lwin Kyaw</p>
            </div>
        </div>

        <section className='container mx-auto'>
        <div className='px-3 md:pl-6 mt-16 md:mt-20 lg:px-28 mb-32'>
            
            <h2 className='text-xl md:text-2xl font-semibold text-[#1A2D2D] hover:text-green-500 duration-300 ease cursor-pointer'>DorInsight Corporate Website</h2>
            <hr className='mr-3 lg:mr-[100px] mt-16 mb-12 h-[10px]' />
            <div>
                <h1 className='text-[#1A2D2D] text-2xl md:text-4xl'>Project's Info</h1>
                <ul className='list-disc ml-6 mt-6'>
                    <li>Name: DorInsight</li>
                    <li>Team Members : Min Lwin Kyaw (Both Home Panel & Admin Panel)</li>
                    <li>Duration : 2.5 Weeks (Including Revisions)</li>
                    <li>Software for UI : None</li>
                    <li>Programming Languages & Frameworks : PHP, Laravel</li>
                    <li>Platforms : Corporate Website</li>
                    <li>Links : <a href='http://www.dorinsight.com/' className='text-cyan-500 hover:text-teal-500 duration-300 ease cursor-pointer'>Live Website</a></li>
                </ul>

                <h1 className='mt-6 mb-4 text-3xl lg:text-[42px]'>DorInsight</h1>
                <p className='text-justify text-gray-600'>This project is DorInsight Corporate website to show their works, projects, press releases and about their corporate.</p>
                
                <div className='mt-10 mb-16 flex flex-wrap justify-center'>
                    {/* <div className='w-full md:w-1/2 p-5'>
                        <img src={pic1} alt="pic4" />
                    </div>
                    <div className='w-full md:w-1/2 p-5'>
                        <img src={pic2} alt="pic4" />
                    </div>
                    <div className='w-full md:w-1/2 p-5'>
                        <img src={pic3} alt="pic4" />
                    </div>
                    <div className='w-full md:w-1/2 p-5'>
                        <img src={pic4} alt="pic4" />
                    </div> */}
                    <img src={pic1} alt="pic5" className='w-full md:w-1/2 p-5 ' />
                    <img src={pic2} alt="pic5" className='w-full md:w-1/2 p-5' />
                    <img src={pic4} alt="pic3" className='w-full md:w-1/2 p-5' />
                    <img src={pic3} alt="pic2" className='w-full md:w-1/2 p-5' />
                </div>
            </div>
            
        </div>
        </section>
        <Footer />
        <Backtotop />
    </section>
  )
}

export default FiveProject