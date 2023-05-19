import React from 'react'
import Navbar from '../../components/Navbar'
import { Link } from 'react-scroll';
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
import pic9 from './pic9.png'
import pic10 from './pic10.png'

const EightProject = () => {
  return (
    <section>
        <div className='relative z-[2] project-bg-custom h-auto md:h-[300px] '>
            <Navbar />
            <div className='relative z-[2] text-white text-center pl-3 md:pl-6 mt-4 md:mt-9 lg:pl-28'>
                <h2 className='font-semibold text-4xl lg:text-5xl mb-6'>Job Posting Website</h2>
                <p className='text-[16px] font-medium pb-8'>February 2020 - created by Min Lwin Kyaw</p>
            </div>
        </div>

        <section className='container mx-auto'>
        <div className='px-3 md:pl-6 mt-16 md:mt-20 lg:px-28 mb-32'>
            
            <h2 className='text-xl md:text-2xl font-semibold text-[#1A2D2D] hover:text-green-500 duration-300 ease cursor-pointer'>Job Posting Website</h2>
            <hr className='mr-3 lg:mr-[100px] mt-16 mb-12 h-[10px]' />
            <div>
                <h1 className='text-[#1A2D2D] text-2xl md:text-4xl'>Project's Info</h1>
                <ul className='list-disc ml-6 mt-6'>
                    <li>Name: Job Posting Website</li>
                    <li>Team Members : Min Lwin Kyaw</li>
                    <li>Duration : 1 Month</li>
                    <li>Programming Languages & Frameworks : Django, Python, HTML, CSS, JavaScript</li>
                    <li>Platforms : Web</li>
                    <li>Links : <a href='https://github.com/Minlwinkyaw307/job_posting_site/' className='text-cyan-500 hover:text-teal-500 duration-300 ease cursor-pointer'>GitHub(Source Code)</a></li>
                </ul>

                <p className='text-justify text-gray-600 mt-5'>It is a web application for posting jobs and allow people who are looking for job to apply. Included CMS for client and developer in project. Project was done by using Django, python, HTML, CSS and JavaScript for Computer Special Topic 2 Course.<br />Because of course project, there are some limitation to follow to get perfect point.<br />Template is download from <a href="https://colorlib.com/" className='font-semibold text-black'>Colorlib</a></p>

                <div className='mt-9 mb-8 lg:grid lg:grid-cols-3 gap-x-7'>
                    <div className='max-w-4xl col-span-2'>
                        <img src={pic10} alt="pic1" />
                    </div>
                    <div className='mt-7 lg:mt-0 lg:ml- col-span-1'>
                        <h1 className='font-semibold'>Home Page - 1</h1>
                        <p className='text-gray-600 text-justify'>Because of course limitation, in home page it must have slider for recent added jobs, few recently added jobs list and some content for website.<br />In menu, there are home, jobs(list of jobs), about us, contact us, FAQ, sign in and sign up menu.</p>
                    </div>
                </div>

                <div className='mt-9 mb-8 lg:grid lg:grid-cols-3 gap-x-7'>
                    <div className='max-w-4xl col-span-2'>
                        <img src={pic3} alt="pic1" />
                    </div>
                    <div className='mt-7 lg:mt-0 lg:ml- col-span-1'>
                        <h1 className='font-semibold'>Home Page - 2</h1>
                        <p className='text-gray-600 text-justify'>In this part of the home page, it list few(5 jobs and in database there are only 5 jobs as well) jobs.</p>
                    </div>
                </div>

                <div className='mt-9 mb-8 lg:grid lg:grid-cols-3 gap-x-7'>
                    <div className='max-w-4xl col-span-2'>
                        <img src={pic1} alt="pic1" />
                    </div>
                    <div className='mt-7 lg:mt-0 lg:ml- col-span-1'>
                        <h1 className='font-semibold'>Jobs</h1>
                        <p className='text-gray-600 text-justify'>In jobs page, at the top of the page there is search and filter option to search job or filter jobs base of region or type of job which user is looking for. That's part is done by AJAX.</p>
                    </div>
                </div>

                <div className='mt-9 mb-8 lg:grid lg:grid-cols-3 gap-x-7'>
                    <div className='max-w-4xl col-span-2'>
                        <img src={pic8} alt="pic1" />
                    </div>
                    <div className='mt-7 lg:mt-0 lg:ml- col-span-1'>
                        <h1 className='font-semibold'>Jobs (Job List)</h1>
                        <p className='text-gray-600 text-justify'>In this section of the jobs page, it list the jobs the same way as home page job list but it include category filter option which is also work with top filter option to filter out job base on category.</p>
                    </div>
                </div>

                <div className='mt-9 mb-8 lg:grid lg:grid-cols-3 gap-x-7'>
                    <div className='max-w-4xl col-span-2'>
                        <img src={pic2} alt="pic1" />
                    </div>
                    <div className='mt-7 lg:mt-0 lg:ml- col-span-1'>
                        <h1 className='font-semibold'>Job Detail</h1>
                        <p className='text-gray-600 text-justify'>In the job detail page, it show detail of the jobs using slider of image, and other information like salary, city, type of job, requirement, gender for the role, deadline, what kind of things going to need and do in the job.</p>
                    </div>
                </div>

                <div className='mt-9 mb-8 lg:grid lg:grid-cols-3 gap-x-7'>
                    <div className='max-w-4xl col-span-2'>
                        <img src={pic5} alt="pic1" />
                    </div>
                    <div className='mt-7 lg:mt-0 lg:ml- col-span-1'>
                        <h1 className='font-semibold'>Contact Us</h1>
                        <p className='text-gray-600 text-justify'>In contact us, it shows contact information and contact form to contact the website maintainer. All the contact information and all the other contact (HTML content) are retrieved from the database to show here. It can changeable from the admin dashboard.</p>
                    </div>
                </div>

                <div className='mt-9 mb-8 lg:grid lg:grid-cols-3 gap-x-7'>
                    <div className='max-w-4xl col-span-2'>
                        <img src={pic6} alt="pic1" />
                    </div>
                    <div className='mt-7 lg:mt-0 lg:ml- col-span-1'>
                        <h1 className='font-semibold'>FAQ</h1>
                        <p className='text-gray-600 text-justify'>It is a page where user ask questions, and find answers for their common problems. When user request, question can be rejected or answered. If question is answered it will be shown in FAQ section. Accepting and rejecting are done in Admin Dashboard.</p>
                    </div>
                </div>

                <div className='mt-9 mb-8 lg:grid lg:grid-cols-3 gap-x-7'>
                    <div className='max-w-4xl col-span-2'>
                        <img src={pic4} alt="pic1" />
                    </div>
                    <div className='mt-7 lg:mt-0 lg:ml- col-span-1'>
                        <h1 className='font-semibold'>User Profile</h1>
                        <p className='text-gray-600 text-justify'>This pages is only for logged candidate to check and manage their information. There are different section - profile, accepted jobs, rejected jobs, comment and saved jobs.</p>
                    </div>
                </div>

                <div className='mt-9 mb-8 lg:grid lg:grid-cols-3 gap-x-7'>
                    <div className='max-w-4xl col-span-2'>
                        <div className="lg:grid grid-cols-2">
                        <img src={pic7} alt="pic1" className='p-4' />
                        <img src={pic9} alt="pic1" className='p-4' /> 
                        </div>
                    </div>
                    <div className='mt-7 lg:mt-0 lg:ml- col-span-1'>
                        <h1 className='font-semibold'>Admin</h1>
                        <p className='text-gray-600 text-justify'>I am using Django Admin to control, adding, editing, updating and deleting data for the project. I am using it for the development purpose only.</p>
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

export default EightProject