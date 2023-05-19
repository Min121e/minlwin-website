import React from 'react'
import Navbar from '../../components/Navbar'
import { Link } from 'react-scroll';

import Footer from '../../components/Footer'
import Backtotop from '../../assets/Backtotop.jsx'

import pic1 from './pic1.jpg'
import pic2 from './pic2.jpg'
import pic3 from './pic3.jpg'
import pic4 from './pic4.jpg'
import pic5 from './pic5.jpg'
import pic6 from './pic6.jpg'
import pic7 from './pic7.jpg'
import pic8 from './pic8.jpg'
import pic9 from './pic9.png'

const Thirdproject = () => {
  return (
    <section>
        <div className='relative z-[2] project-bg-custom h-auto md:h-[300px] '>
            <Navbar />
            <div className='relative z-[2] text-white text-center pl-3 md:pl-6 mt-4 md:mt-9 lg:pl-28'>
                <h2 className='font-semibold text-4xl lg:text-5xl mb-6'>MMCOVID19 Tracker(Myanmar)</h2>
                <p className='text-[16px] font-medium pb-8'>April 2020 - created by Min Lwin Kyaw, Managed By Khin Nu, Min Thant Oo</p>
            </div>
        </div>

        <section className='container mx-auto'>
            <div className='px-3 md:pl-6 mt-16 md:mt-20 lg:px-28 mb-14'>
                <h2 className='text-xl mb-text-2xl font-semibold text-[#1A2D2D] hover:text-green-500 duration-300 ease cursor-pointer'>MMCOVID19 Tracker(Myanmar)</h2>
                <div className='flex gap-3 text-green-500 mt-3'>
                    <Link to='#' className='flex cursor-pointer'>
                        <i className="fa fa-tag text-[15px] pt-[5px] mr-1" aria-hidden="true"></i>
                        <span>Flutter</span>
                    </Link>
                    <Link to='#' className='flex cursor-pointer'>
                        <i className="fa fa-tag text-[15px] pt-[5px] mr-1" aria-hidden="true"></i>
                        <span>PHP</span>
                    </Link>
                    <Link to='#' className='flex cursor-pointer'>
                        <i className="fa fa-tag text-[15px] pt-[5px] mr-1" aria-hidden="true"></i>
                        <span>Dart</span>
                    </Link>
                    <Link to='#' className='flex cursor-pointer'>
                        <i className="fa fa-tag text-[15px] pt-[5px] mr-1" aria-hidden="true"></i>
                        <span>MySQL</span>
                    </Link>
                    <Link to='#' className='flex cursor-pointer'>
                        <i className="fa fa-tag text-[15px] pt-[5px] mr-1" aria-hidden="true"></i>
                        <span>HTML</span>
                    </Link>
                    <Link to='#' className='flex cursor-pointer'>
                        <i className="fa fa-tag text-[15px] pt-[5px] mr-1" aria-hidden="true"></i>
                        <span>CSS</span>
                    </Link>
                </div>


                <hr className='mr-3 lg:mr-[100px] mt-3 mb-12 h-[10px]' />
                <div className='mb-5'>
                    <h1 className='text-[#1A2D2D] text-2xl md:text-4xl'>Project's Info</h1>
                    <ul className='list-disc ml-6 mt-6'>
                        <li>Name: MMCOVID-19 Tracker (Only For Myanmar)</li>
                        <li>Team Members : Min Lwin Kyaw</li>
                        <li>Duration : 2 Weeks</li>
                        <li>Software for UI : Figma</li>
                        <li>Programming Languages & Frameworks : PHP, MySQL, Flutter, Dart</li>
                        <li>Platforms : Web (CMS), Mobile (For Users)</li>
                        <li>Links : <Link to='https://www.figma.com/file/7ASGZuN7lGCiUhV1KUTpSQ/Myanmar-COVID-19-Case-Tracking?node-id=0%3A1' className='text-cyan-500 hover:text-teal-500 duration-300 ease cursor-pointer'>Figma</Link>, <Link to='https://minlwinkyaw.com/mmcovid19/apk/404.html' className='text-cyan-500 hover:text-teal-500 duration-300 ease cursor-pointer'>Download apk</Link>, <Link to='https://minlwinkyaw.com/mmcovid19/dashboard/' className='text-cyan-500 hover:text-teal-500 duration-300 ease cursor-pointer'>Dashboard</Link></li>
                    </ul>
                </div>

                <div className='mb-5'>
                    {/* Web version */}
                    <h1 className='text-[#1A2D2D] text-3xl md:text-4xl mb-4'>Dashboard (Web)</h1>
                    <p className='text-justify text-gray-600'>It is a mobile application to track Myanmaru2019s COVID-19 cases in real-time using flutter for mobile application and php and SQL for back-end. Main features for mobile are real-time case tracking, viewing news, checking case and news, and data visualization. Back-end is for data maintenance data and providing other users to publish and updating cases, creating MMCOVID-19 case API for free.</p>
                    {/* Image and description */}
                    <div className='mt-9 mb-8 lg:grid lg:grid-cols-3 gap-x-7'>
                        <div className='max-w-4xl col-span-2'>
                            <img src={pic9} alt="pic1" />
                        </div>
                        <div className='mt-7 lg:mt-0 lg:ml- col-span-1'>
                            <h1 className='font-semibold'>Home Page - 1</h1>
                            <p className='text-gray-600 text-justify'>In Home Page, there are weekly update, cases pie chart and newly updated cases list.<br />In weekly update, it includes new, recovered and death cases using graph with different colors.<br />In cases pie chart, it shows all of the corona cases number using pie chart for total, new, recovered, serious, other and death cases.</p>
                        </div>
                    </div>

                    {/* Mobile version */}
                    <div>
                        <h1 className='text-[#1A2D2D] text-3xl md:text-4xl mb-4'>Mobile</h1>
                        {/* Image and description */}
                        
                        <div className='lg:grid lg:grid-cols-2 gap-7'>

                            {/* First row for lg screen */}
                            <div className='mt-7 md:mt-7 md:grid md:grid-cols-2 md:gap-3'>
                                <div>
                                    <img src={pic5} alt="pic5" />
                                </div>
                                <div className='mt-7 md:mt-0 lg:ml-5'>
                                    <h1 className='font-semibold'>Dashboard of MMCOVID-19</h1>
                                    <p className='text-gray-600 text-justify'>Dashboard is for all the users and admins to access cases, and news. Admins have more feature then users and they can create, updated cases and confirm or accept normal user add or updated cases.<br />Developer can request API token for their project to access corona cases list, case detail and news.</p>
                                </div>
                            </div>
                            <div className='mt-7 md:mt-7 md:grid md:grid-cols-2 gap-3'>
                                <div>
                                    <img src={pic4} alt="pic4" />
                                </div>
                                <div className='mt-7 md:mt-0 lg:ml-5'>
                                    <h1 className='font-semibold'>Home Page - 2</h1>
                                    <p className='text-gray-600 text-justify'>At the end of the home page, there is a update cases list that shows newly confirmed, death, recovered, serious condition, other updated case information which are confirmed by <a href="https://www.mohs.gov.mm/" className='font-semibold text-black'>Ministry of Health and Sports, Myanmar.</a></p>
                                </div>
                            </div>

                            {/* Second row for lg screen */}
                            <div className='mt-7 md:mt-7 md:grid md:grid-cols-2 md:gap-3'>
                                <div>
                                    <img src={pic2} alt="pic2" />
                                </div>
                                <div className='mt-7 md:mt-0 lg:ml-5'>
                                    <h1 className='font-semibold'>Menu(Drawer)</h1>
                                    <p className='text-gray-600 text-justify'>Menu will list all of the available pages to go.</p>
                                </div>
                            </div>
                            <div className='mt-7 md:mt-7 md:grid md:grid-cols-2 gap-3'>
                                <div>
                                    <img src={pic3} alt="pic3" />
                                </div>
                                <div className='mt-7 md:mt-0 lg:ml-5'>
                                    <h1 className='font-semibold'>Case List Page</h1>
                                    <p className='text-gray-600 text-justify'>This page will list all of the corona cases and when user click on the list it will route to detail page to check more detail of that patient's info.<br />It also includes filter and sort features to filter and sort the list to check specific case category.</p>
                                </div>
                            </div>

                            {/* Third row for lg screen */}
                            <div className='mt-7 md:mt-7 md:grid md:grid-cols-2 md:gap-3'>
                                <div>
                                    <img src={pic1} alt="pic1" />
                                </div>
                                <div className='mt-7 md:mt-0 lg:ml-5'>
                                    <h1 className='font-semibold'>Patient's Info Page</h1>
                                    <p className='text-gray-600 text-justify'>This page will allow user to check patient(case)'s info which is published by <a href="https://www.mohs.gov.mm/" className='font-semibold text-black'>Ministry of Health and Sports, Myanmar.</a></p>
                                </div>
                            </div>
                            <div className='mt-7 md:mt-7 md:grid md:grid-cols-2 gap-3'>
                                <div>
                                    <img src={pic6} alt="pic6" />
                                </div>
                                <div className='mt-7 md:mt-0 lg:ml-5'>
                                    <h1 className='font-semibold'>News List Page</h1>
                                    <p className='text-gray-600 text-justify'>If user selects news menu from home page's drawer, it will redirect to this page and list all of the news that was published by admins of the system.<br />Any admin can publish and created new case or update case. If someone who is not admin can't create news but still create case or update existed case and it will be publish or updated if one of the admin accepts the new or update.</p>
                                </div>
                            </div>

                            {/* Fourth row for lg screen */}
                            <div className='mt-7 md:mt-7 md:grid md:grid-cols-2 md:gap-3'>
                                <div>
                                    <img src={pic8} alt="pic8" />
                                </div>
                                <div className='mt-7 md:mt-0 lg:ml-5'>
                                    <h1 className='font-semibold'>News Detail Page</h1>
                                    <p className='text-gray-600 text-justify'>This page display detail of the news. Includes images and if user clicks of image it will redirect to gallery page to show image list.</p>
                                </div>
                            </div>
                            <div className='mt-7 md:mt-7 md:grid md:grid-cols-2 gap-3'>
                                <div>
                                    <img src={pic7} alt="pic7" />
                                </div>
                                <div className='mt-7 md:mt-0 lg:ml-5'>
                                    <h1 className='font-semibold'>Contact Us Page</h1>
                                    <p className='text-gray-600 text-justify'>User can send or inform different type of message through this page.</p>
                                </div>
                            </div>
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

export default Thirdproject